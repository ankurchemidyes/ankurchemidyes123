import { motion } from "framer-motion";

const brands = [
  { name: "VKC PRIDE", url: "https://www.titasindia.com/collections/vkc-pride" },
  { name: "WALKAROO", url: "https://www.walkaroo.in/" },
  { name: "PARAGON", url: "https://www.paragonfootwear.com/" },
  { name: "ODYSSIA", url: "https://www.odyssia.com/" },
];

const suppliers = [
  { name: "THREADS INDIA", url: "https://threadsindia.com/" },
  { name: "PIDILITE", url: "https://www.pidilite.com/" },
];

const Marquee = ({ items }: { items: { name: string; url: string }[] }) => (
  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
    {items.map((b, i) => (
      <motion.a
        key={b.name}
        href={b.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ y: -6, scale: 1.04 }}
        className="group relative perspective"
      >
        <div className="glass relative overflow-hidden rounded-2xl px-6 py-8 text-center shadow-elevated transition-all duration-300 group-hover:shadow-deep">
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
          <div className="font-display text-base sm:text-lg font-bold tracking-wider text-foreground/90">
            {b.name}
          </div>
        </div>
      </motion.a>
    ))}
  </div>
);

export const Brands = () => (
  <section className="relative py-20 lg:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by Renowned Brands
        </p>
      </motion.div>
      <Marquee items={brands} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Our Suppliers
        </p>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto">
        {suppliers.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group glass relative overflow-hidden rounded-2xl px-6 py-8 text-center shadow-elevated transition-all hover:shadow-deep"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="font-display text-lg font-bold tracking-wider">{s.name}</div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
