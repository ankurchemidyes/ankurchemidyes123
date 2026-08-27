import logo from "@/assets/logo.png";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ankur_chemidyes/",
    Icon: Instagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@ankur.chemidyes",
    Icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-full w-full"
      >
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.331-8.184-3.741C2.35 17.89 1.5 14.562 1.472 10.184v-.014c.03-4.392.88-7.728 2.527-10.064C5.85 2.348 8.604 1.024 12.186 1h.007c2.786.02 5.137.886 6.986 2.572 1.671 1.524 2.592 3.794 2.735 6.761.034.067.034.334.034.486.067 1.728-.067 3.235-.4 4.528-.067.2-.067.334-.067.467-.4 1.534-.934 2.668-1.601 3.535-1.4 1.8-3.4 2.734-5.734 2.734h-.047c-1.601-.067-3.068-.467-4.335-1.2-.4.2-.8.334-1.267.4-.467.067-.934.067-1.4.067-.467 0-.934-.067-1.4-.134-.4-.067-.8-.2-1.134-.4-.334-.2-.6-.467-.8-.8-.2-.334-.334-.667-.334-1.067 0-.4.134-.734.4-1.067.267-.267.534-.467.934-.534.4-.067.8-.134 1.2-.134.467 0 .934.067 1.4.134.467.067.934.2 1.334.4.4-.2.8-.334 1.267-.4.467-.067.934-.134 1.4-.134.467 0 .934.067 1.4.134.4.067.8.2 1.134.4.334.2.6.467.8.8.2.334.334.667.334 1.067 0 .4-.134.734-.4 1.067-.267.267-.534.467-.934.534-.4.067-.8.134-1.2.134-.467 0-.934-.067-1.4-.134-.467-.067-.934-.2-1.334-.4-.4.2-.8.334-1.267.4-.467.067-.934.134-1.4.134-.467 0-.934-.067-1.4-.134-.4-.067-.8-.2-1.134-.4-.334-.2-.6-.467-.8-.8-.2-.334-.334-.667-.334-1.067 0-.4.134-.734.4-1.067.267-.267.534-.467.934-.534.4-.067.8-.134 1.2-.134.467 0 .934.067 1.4.134.467.067.934.2 1.334.4.4-.2.8-.334 1.267-.4.467-.067.934-.134 1.4-.134.467 0 .934.067 1.4.134.4.067.8.2 1.134.4.334.2.6.467.8.8.2.334.334.667.334 1.067 0 .4-.134.734-.4 1.067-.267.267-.534.467-.934.534-.4.067-.8.134-1.2.134-.467 0-.934-.067-1.4-.134-.467-.067-.934-.2-1.334-.4-.4.2-.8.334-1.267.4-.467.067-.934.134-1.4.134-.467 0-.934-.067-1.4-.134-.4-.067-.8-.2-1.134-.4-.334-.2-.6-.467-.8-.8-.2-.334-.334-.667-.334-1.067 0-.4.134-.734.4-1.067.267-.267.534-.467.934-.534.4-.067.8-.134 1.2-.134.467 0 .934.067 1.4.134.467.067.934.2 1.334.4z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/AnkurChemidyes",
    Icon: Twitter,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ankurchemidyesofficial",
    Icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankurchemidyes/",
    Icon: Linkedin,
  },
];

export const Footer = () => (
  <footer className="relative border-t border-border/60 py-12 mt-12">
    <div className="container">
      <div className="flex flex-col items-center gap-10">
        {/* Brand + tagline */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Ankur Chemidyes" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-lg shadow-elevated" />
          <div className="text-center md:text-left">
            <div className="font-display font-semibold">Ankur Chemidyes</div>
            <div className="text-xs text-muted-foreground">Premier Suppliers of Footwear Raw Materials</div>
          </div>
        </div>

        {/* Social section */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Follow Us</span>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-surface-1/60 text-muted-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-elevated"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 bg-gradient-glow group-hover:opacity-30" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="text-xs text-muted-foreground text-center">© {new Date().getFullYear()} Ankur Chemidyes. All rights reserved.</div>
      </div>
    </div>
  </footer>
);
