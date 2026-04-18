import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, toggle, lang } = useLang();

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Modern Generation of Excellence Company" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground hover:text-gold transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 h-9 text-sm font-bold text-primary border border-border hover:border-gold hover:text-gold rounded-md transition-smooth"
            aria-label="Switch language"
          >
            <Globe className="w-4 h-4" />
            {lang === "ar" ? "EN" : "AR"}
          </button>
          <Button asChild className="hidden sm:inline-flex bg-gold text-gold-foreground hover:bg-gold-dark shadow-gold">
            <Link to="/quote">{t.nav.quote}</Link>
          </Button>
          <button
            className="lg:hidden text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium py-2 text-foreground hover:text-gold">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { toggle(); setOpen(false); }}
              className="flex items-center gap-2 py-2 text-base font-medium text-primary"
            >
              <Globe className="w-4 h-4" />
              {lang === "ar" ? "English" : "العربية"}
            </button>
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold-dark">
              <Link to="/quote">{t.nav.quote}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
