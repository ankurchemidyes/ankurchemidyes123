import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Products } from "@/components/Products";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Products />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
