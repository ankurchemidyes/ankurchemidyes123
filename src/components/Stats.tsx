import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ to, suffix = "+" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

const stats = [
  { value: 23, suffix: "+", label: "Years of Industry Excellence", sub: "Starting from 2003 to 2026." },
  { value: 1500000, suffix: "+", label: "Meters of Material Supplied", sub: "Delivered across global B2B partners." },
  { value: 250, suffix: "+", label: "Happy B2B Clients", sub: "Brands building on our materials." },
];

export const Stats = () => (
  <section className="relative py-24">
    <div className="container">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="perspective"
          >
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-floating h-full">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-2xl" />
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-6 font-display text-lg font-semibold">{s.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
