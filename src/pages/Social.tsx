import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Play,
  Twitter,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const socialLinks = [
  { label: "Official Website", detail: "ankurchemidyes.com", href: "https://www.ankurchemidyes.com", Icon: Globe2 },
  { label: "Chat on WhatsApp", detail: "98472 48676", href: "https://wa.me/9847248676", Icon: MessageCircle },
  { label: "Instagram", detail: "@ankur_chemidyes", href: "https://www.instagram.com/ankur_chemidyes/", Icon: Instagram },
  { label: "Threads", detail: "@ankur.chemidyes", href: "https://www.threads.com/@ankur.chemidyes", Icon: ThreadsIcon },
  { label: "LinkedIn", detail: "Ankur Chemidyes", href: "https://www.linkedin.com/in/ankurchemidyes/", Icon: Linkedin },
  { label: "YouTube", detail: "Ankur Chemidyes Official", href: "https://www.youtube.com/@ankurchemidyesofficial", Icon: Play },
  { label: "X / Twitter", detail: "@AnkurChemidyes", href: "https://x.com/AnkurChemidyes", Icon: Twitter },
  { label: "Email Us", detail: "ankurchemidyes123@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ankurchemidyes123@gmail.com", Icon: Mail },
] as const;

export default function Social() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="social-page relative isolate min-h-dvh overflow-hidden px-5 py-5 text-foreground sm:px-8 sm:py-8">
      <div aria-hidden="true" className="social-atmosphere" />
      <div aria-hidden="true" className="social-grid" />
      <div aria-hidden="true" className="social-wave social-wave-one" />
      <div aria-hidden="true" className="social-wave social-wave-two" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-2.5rem)] w-full max-w-xl flex-col sm:min-h-[calc(100dvh-4rem)]">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        <section className="flex flex-1 flex-col items-center pt-8 text-center sm:pt-10" aria-labelledby="social-title">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.88, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="social-logo-shell"
          >
            <div className="social-logo-ring" aria-hidden="true" />
            <img src={logo} alt="Ankur Chemidyes Logo" className="social-logo" width={124} height={124} />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <p className="social-kicker">Est. 2003 · Kerala, India</p>
            <h1 id="social-title" className="social-title">
              Ankur <span>Chemidyes</span>
            </h1>
            <p className="social-tagline">FOOTWEAR RAW MATERIALS &amp; INDUSTRIAL ESSENTIALS</p>
          </motion.div>

          <nav aria-label="Ankur Chemidyes social links" className="mt-8 w-full space-y-3 sm:mt-10">
            {socialLinks.map(({ label, detail, href, Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.18 + index * 0.05, duration: 0.5 }}
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.012 }}
                whileTap={{ scale: 0.985 }}
                className="social-link group"
              >
                <span className="social-link-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="social-link-label">{label}</span>
                  <span className="social-link-detail">{detail}</span>
                </span>
                <ArrowUpRight className="social-link-arrow" aria-hidden="true" />
                <span aria-hidden="true" className="social-link-shine" />
              </motion.a>
            ))}
          </nav>
        </section>

        <footer className="pb-2 pt-8 text-center sm:pt-10">
          <div className="social-footer-rule" aria-hidden="true" />
          <p className="social-footer-copy">© Ankur Chemidyes. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M18.7 11.2c-.2-3.5-2.1-5.6-5.3-5.6-2.2 0-4 .9-5 2.5" />
      <path d="M15.7 12.7c-.6-.3-1.3-.5-2.2-.5-2.1 0-3.7.8-3.7 2.3 0 1.1 1 1.8 2.3 1.8 2.2 0 3.5-1.5 3.9-3.6 2.1.5 3.3 1.7 3.3 3.5 0 3.1-3.3 5.2-7.2 5.2-4.9 0-8.1-3.2-8.1-8.4 0-6.4 4.2-10.5 9.9-10.5 3.8 0 5.7 1.7 7 3.9" />
    </svg>
  );
}