import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Eye, ExternalLink, Play, Users, Youtube } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const YOUTUBE_CHANNEL_ID = "REPLACE_WITH_ABHIYUKTH_VLOGS_CHANNEL_ID";
const CHANNEL_NAME = "Abhiyukth Vlogs";
const channelConfigured = YOUTUBE_CHANNEL_ID.startsWith("UC") && YOUTUBE_CHANNEL_ID.length > 20;

type Video = {
  id: string;
  youtube_video_id: string;
  title: string;
  description: string | null;
};

type ChannelStats = {
  subscriberCount: number;
  viewCount: number;
  videoCount: number;
};

export default function Videos() {
  const prefersReducedMotion = useReducedMotion();
  const [videos, setVideos] = useState<Video[]>([]);
  const [stats, setStats] = useState<ChannelStats | null>(null);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [loadingStats, setLoadingStats] = useState(false);
  const [statsError, setStatsError] = useState<string | null>(null);

  useEffect(() => {
    const scriptId = "youtube-platform-script";
    const existingScript = document.getElementById(scriptId);
    const refreshWidget = () => {
      const gapi = (window as Window & { gapi?: { ytsubscribe?: { go?: () => void } } }).gapi;
      gapi?.ytsubscribe?.go?.();
    };

    if (existingScript) {
      refreshWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    script.onload = refreshWidget;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    let active = true;

    const loadVideos = async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("id, youtube_video_id, title, description")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (active) {
        if (!error && data) setVideos(data);
        setLoadingVideos(false);
      }
    };

    void loadVideos();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!channelConfigured) {
      setStatsError("Live statistics are waiting for the channel ID configuration.");
      return;
    }

    let active = true;
    setLoadingStats(true);

    const loadStats = async () => {
      const { data, error } = await supabase.functions.invoke("youtube-stats", {
        body: { channelId: YOUTUBE_CHANNEL_ID },
      });

      if (!active) return;
      if (error || !data) {
        setStatsError("Live statistics are temporarily unavailable.");
      } else {
        setStats(data as ChannelStats);
        setStatsError(null);
      }
      setLoadingStats(false);
    };

    void loadStats();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Navbar />
      <main className="video-page relative isolate overflow-hidden pt-28 pb-20">
        <div className="video-light video-light-one" aria-hidden="true" />
        <div className="video-light video-light-two" aria-hidden="true" />
        <div className="container relative z-10">
          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
            aria-labelledby="videos-title"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Abhiyukth Vlogs</p>
            <h1 id="videos-title" className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Stories in motion.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Watch the latest videos, follow the journey, and stay connected with the channel.
            </p>
          </motion.section>

          <section className="mx-auto mt-12 max-w-5xl" aria-labelledby="channel-stats-title">
            <div className="sr-only" id="channel-stats-title">Channel statistics and subscription</div>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="video-stats-panel glass-strong rounded-3xl p-6 shadow-deep md:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">Live channel pulse</p>
                    <h2 className="mt-1 font-display text-2xl font-semibold">{CHANNEL_NAME}</h2>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <BarChart3 className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FlipMetric
                    icon={<Users className="h-4 w-4" aria-hidden="true" />}
                    label="Subscribers"
                    value={stats?.subscriberCount ?? null}
                    loading={loadingStats}
                  />
                  <FlipMetric
                    icon={<Eye className="h-4 w-4" aria-hidden="true" />}
                    label="Total views"
                    value={stats?.viewCount ?? null}
                    loading={loadingStats}
                  />
                </div>
                <p className="mt-5 text-sm text-muted-foreground" role={statsError ? "status" : undefined}>
                  {statsError ?? (stats ? `${stats.videoCount.toLocaleString()} videos published on the channel.` : "Updating live channel data…")}
                </p>
              </div>

              <div className="video-subscribe-panel glass rounded-3xl p-6 shadow-floating md:p-8">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div>
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-destructive text-destructive-foreground shadow-elevated">
                      <Youtube className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold">Join the channel</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Subscribe directly without leaving this page.</p>
                  </div>
                  <div>
                    <div
                      className="g-ytsubscribe min-h-12"
                      data-channelid={YOUTUBE_CHANNEL_ID}
                      data-layout="full"
                      data-count="default"
                      aria-label={`Subscribe to ${CHANNEL_NAME}`}
                    />
                    {!channelConfigured && (
                      <p className="mt-3 text-xs text-muted-foreground">The official widget will activate once the channel ID is configured.</p>
                    )}
                    {channelConfigured && (
                      <Button asChild variant="outline" className="mt-4 w-full">
                        <a href={`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}?sub_confirmation=1`} target="_blank" rel="noopener noreferrer">
                          Subscribe on YouTube <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-20 max-w-6xl" aria-labelledby="gallery-title">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Video gallery</p>
                <h2 id="gallery-title" className="mt-2 font-display text-3xl font-semibold md:text-4xl">Watch the latest</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground sm:text-right">Every play happens inside YouTube, so views are counted on the channel.</p>
            </div>

            {loadingVideos ? (
              <div className="video-empty-state glass rounded-3xl p-10 text-center text-muted-foreground">Loading the video gallery…</div>
            ) : videos.length === 0 ? (
              <div className="video-empty-state glass rounded-3xl p-10 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary">
                  <Play className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">Your video gallery is ready</h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">Published videos added by the channel admin will appear here.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {videos.map((video, index) => (
                  <motion.article
                    key={video.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    className="video-card glass-strong overflow-hidden rounded-3xl shadow-floating"
                  >
                    <div className="video-embed-wrap">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtube_video_id}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-semibold">{video.title}</h3>
                      {video.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{video.description}</p>}
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FlipMetric({ icon, label, value, loading }: { icon: React.ReactNode; label: string; value: number | null; loading: boolean }) {
  const formatted = value === null ? "—" : value.toLocaleString();
  return (
    <div className="video-metric rounded-2xl border border-border/60 bg-background/40 p-5">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">{icon}{label}</div>
      <motion.div
        key={formatted}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 origin-bottom font-display text-4xl font-bold text-gradient md:text-5xl"
        aria-live="polite"
      >
        {loading ? "…" : formatted}
      </motion.div>
    </div>
  );
}