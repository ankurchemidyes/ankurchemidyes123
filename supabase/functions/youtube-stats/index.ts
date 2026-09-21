import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod";

const requestSchema = z.object({
  channelId: z.string().regex(/^UC[A-Za-z0-9_-]{20,}$/),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const parsed = requestSchema.safeParse(await req.json());
    if (!parsed.success) {
      return json({ error: "A valid YouTube channel ID is required." }, 400);
    }

    const apiKey = Deno.env.get("YOUTUBE_DATA_API_KEY");
    if (!apiKey) return json({ error: "YouTube statistics are not configured." }, 503);

    const endpoint = new URL("https://www.googleapis.com/youtube/v3/channels");
    endpoint.searchParams.set("part", "statistics");
    endpoint.searchParams.set("id", parsed.data.channelId);
    endpoint.searchParams.set("key", apiKey);

    const response = await fetch(endpoint);
    if (!response.ok) {
      const details = await response.text();
      console.error(`YouTube request failed [${response.status}]: ${details}`);
      return json({ error: "YouTube statistics could not be loaded.", status: response.status }, response.status);
    }

    const payload = await response.json();
    const statistics = payload.items?.[0]?.statistics;
    if (!statistics) return json({ error: "The configured YouTube channel was not found." }, 404);

    return json({
      subscriberCount: Number(statistics.subscriberCount ?? 0),
      viewCount: Number(statistics.viewCount ?? 0),
      videoCount: Number(statistics.videoCount ?? 0),
    });
  } catch (error) {
    console.error("YouTube statistics error:", error);
    return json({ error: "Unable to load YouTube statistics." }, 500);
  }
});

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}