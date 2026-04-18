import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "المشاريع", href: "#projects" },
  { label: "الخدمات", href: "#services" },
  { label: "تواصل معنا", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="شعار جيل التميز الحديثة" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-primary text-base">جيل التميز الحديثة</div>
            <div className="text-[11px] text-muted-foreground">للمقاولات</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground hover:text-gold transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex bg-gold text-gold-foreground hover:bg-gold-dark shadow-gold">
            <Link to="/quote">اطلب عرض سعر</Link>
          </Button>
          <button
            className="lg:hidden text-primary"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium py-2 text-foreground hover:text-gold">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold-dark">
              <Link to="/quote">اطلب عرض سعر</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
