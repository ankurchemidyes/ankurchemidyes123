import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate min-h-[100dvh] overflow-hidden pt-32 pb-20 noise"
    >
      {/* Layer 1 — gradient orbs */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-glow blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full bg-gradient-glow blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-gradient-glow blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </motion.div>

      {/* Layer 2 — grid */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

      {/* Layer 3 — particles */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <ParticleField density={75} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center perspective">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Trusted since 2003
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ transformStyle: "preserve-3d" }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="block">Ankur</span>
            <span className="block text-gradient bg-[length:200%_auto] animate-gradient-shift">
              Chemidyes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg md:text-xl font-medium text-primary"
          >
            Premier Suppliers of Footwear Raw Materials
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Elevate your manufacturing with industry-leading raw materials. From high-grade industrial
            adhesives to premium EVA sheets, we provide the foundational elements for world-class footwear.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-deep transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-floating"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>

        {/* Floating decorative cards */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 animate-float-slow"
        >
          <div className="glass rounded-2xl p-4 w-44 shadow-floating rotate-[-8deg]">
            <div className="text-xs text-muted-foreground">EVA Sheets</div>
            <div className="mt-1 font-display text-2xl font-semibold">Premium</div>
            <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-primary" />
            </div>
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="glass rounded-2xl p-4 w-44 shadow-floating rotate-[8deg]">
            <div className="text-xs text-muted-foreground">Adhesives</div>
            <div className="mt-1 font-display text-2xl font-semibold">Industrial</div>
            <div className="mt-2 flex gap-1">
              <span className="h-1.5 flex-1 rounded-full bg-gradient-primary" />
              <span className="h-1.5 flex-1 rounded-full bg-gradient-primary" />
              <span className="h-1.5 flex-1 rounded-full bg-secondary" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
