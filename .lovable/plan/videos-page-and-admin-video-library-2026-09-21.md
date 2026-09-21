# Videos Page and Admin Video Library

## User-facing result

- Rename the existing header CTA from “My Vlogs” to “Videos” and point it to `/videos`.
- Add a `/videos` page that uses the current Ankur Chemidyes navigation, footer, typography, glass surfaces, gradients, and light/dark/system theme behavior.
- Show an animated channel statistics area for **Abhiyukth Vlogs**, a Google YouTube subscribe widget, and a responsive gallery of embedded YouTube videos.
- Keep the public page free of admin controls. A separate unlinked admin entry point will provide sign-in and, only after server-side authorization, the “Add Video” form.
- Preserve a polished empty/loading/error state rather than inventing channel statistics or video content.

## Implementation steps

1. Enable Lovable Cloud and email/password authentication, then add the authentication client and a server-validated admin role model using a separate `user_roles` table. Do not store roles in profiles or browser storage.
2. Add a database table for video records with explicit Data API grants, RLS, and policies for public reads and admin-only writes. Store normalized YouTube video IDs and display metadata needed by the gallery.
3. Add a server-side YouTube stats function that validates the request, reads the YouTube API key from a secure secret, and returns subscriber/view totals for the configured channel. Never expose the API key in browser code.
4. Build the `/videos` page with Framer Motion 3D number transitions, official `g-ytsubscribe` script loading, responsive stats/subscribe layout, and standard YouTube iframe embeds using database video IDs.
5. Build the protected admin sign-in and video-management flow. Validate YouTube URLs, require an authenticated admin role on every write, and refresh the public gallery after a successful add.
6. Apply the navigation update, route wiring, semantic theme tokens, accessibility labels/focus states, reduced-motion behavior, and responsive spacing without changing existing home-page content.
7. Verify the public/admin access split, widget script behavior, loading/error/empty states, theme modes, mobile/desktop layouts, embedded playback URLs, and production build output.

## Configuration required after approval

- The exact YouTube Channel ID is still needed for the official subscribe widget; the page will keep a clearly marked configuration placeholder until supplied.
- A YouTube Data API key must be added securely for live statistics; the page will show an honest unavailable state until configured.
- An admin account must be assigned the `admin` role after authentication is enabled. No account will be granted access automatically.
- No profile fields will be created because profile storage was not selected.

## Technical details

- Route: `/videos`; existing home navigation remains intact apart from the CTA label/destination.
- Public data flow: browser requests published video rows and invokes the stats function; server validates auth for writes and owns the API secret.
- Admin data flow: sign in through the unlinked admin entry point, verify the server-side role, submit a validated YouTube URL, and insert through protected typed client calls.
- The official widget will use `data-layout="full"` and the configured channel ID, with a direct subscribe URL retained as an accessible fallback.