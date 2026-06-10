import { motion } from "framer-motion";
import {
  Droplets,
  Layers,
  Scissors,
  Link2,
  Shield,
  Wind,
  ArrowUpRight,
} from "lucide-react";
import { TiltCard } from "./TiltCard";

const products = [
  {
    icon: Droplets,
    title: "Industrial Adhesives",
    desc: "High-strength bonding agents tailored for leather, synthetic, and rubber footwear assemblies.",
  },
  {
    icon: Layers,
    title: "EVA Sheets",
    desc: "Premium Ethylene Vinyl Acetate sheets providing superior shock absorption and lightweight flexibility.",
  },
  {
    icon: Scissors,
    title: "Threads",
    desc: "Heavy-duty nylon and polyester threads ensuring maximum seam strength under severe stress.",
  },
  {
    icon: Link2,
    title: "Hook & Loop",
    desc: "Durable fastening systems tested for thousands of cycles without losing grip strength.",
  },
  {
    icon: Shield,
    title: "Industrial Gloves",
    desc: "Protective handwear designed for safety and precision in chemical and manufacturing environments.",
  },
  {
    icon: Wind,
    title: "Sleeves",
    desc: "Protective arm sleeves offering cut and thermal resistance for factory floor workers.",
  },
];

export const Products = () => (
  <section id="products" className="relative py-24 lg:py-32 overflow-hidden">
    <div aria-hidden className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
    <div aria-hidden className="absolute top-20 right-0 h-96 w-96 rounded-full bg-gradient-glow blur-3xl opacity-40" />
    <div aria-hidden className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-gradient-glow blur-3xl opacity-40" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Catalog</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
          Our <span className="text-gradient">Core Products</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Engineered for durability, flexibility, and excellence.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard intensity={10} className="h-full">
                <div className="relative h-full glass-strong rounded-3xl p-7 overflow-hidden shadow-floating transition-shadow duration-500 group-hover:shadow-deep">
                  <div
                    aria-hidden
                    className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                  />

                  <div className="tilt-inner relative flex flex-col h-full">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-40 rounded-2xl" />
                      <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                        <Icon className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                      {p.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Bulk supply
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
