# Social Hub Page Plan

## Goal

Create a dedicated `/social` route for an ultra-premium, centered “Link in Bio” page that uses the uploaded AC mark as its visual reference and preserves the existing Ankur Chemidyes branding language.

## User experience

- Add a responsive Social Hub page at `ankurchemidyes.com/social` with a deep midnight sapphire background, layered wave-like lighting, subtle texture, and restrained ambient depth.
- Reuse the project’s existing three-mode theme system and provide a top-right Light / System / Dark switcher.
- Build a centered header with the AC logo, subtle electric-blue glow, “Ankur Chemidyes,” and the exact tagline “FOOTWEAR RAW MATERIALS & INDUSTRIAL ESSENTIALS.”
- Add glassmorphic, full-width action cards for the official website, WhatsApp (`https://wa.me/9847248676`), Instagram, Threads, LinkedIn, YouTube, X, and email. Every external card will use the exact supplied URL, `target="_blank"`, and `rel="noopener noreferrer"`.
- Add polished hover, press, tilt, and lighting interactions with reduced-motion support, plus the requested compact copyright footer.
- Keep the layout vertically stacked and mobile-first while scaling cleanly for desktop.

## Technical implementation

- Add a focused `Social` page/component and register it above the catch-all route in `src/App.tsx`.
- Use the existing `logo.png`, semantic theme tokens, Lucide icons where available, and a small inline Threads mark for consistent rendering without external assets.
- Extend the global design tokens/styles only where needed for the Social Hub’s layered background, glass surfaces, and motion; avoid hardcoded component-level color utilities.
- Add route-specific document metadata in the existing HTML head strategy only if needed for the new route, without changing the existing homepage content or navigation.

## Verification

- Verify all eight destinations and new-tab attributes in the rendered DOM.
- Check the page in light, dark, and system themes at mobile and desktop widths.
- Confirm keyboard focus states, reduced-motion behavior, logo alt text, no clipped content, and a clean production build.