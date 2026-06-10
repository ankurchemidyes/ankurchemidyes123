import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="relative border-t border-border/60 py-12 mt-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Ankur Chemidyes" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-lg shadow-elevated" />
          <div>
            <div className="font-display font-semibold">Ankur Chemidyes</div>
            <div className="text-xs text-muted-foreground">Premier Suppliers of Footwear Raw Materials</div>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ankur Chemidyes. All rights reserved.</div>
      </div>
    </div>
  </footer>
);
