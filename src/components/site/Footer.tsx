import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t, lang } = useLang();
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-6">
      <div className="container grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img src={logo} alt="Logo" className="h-28 md:h-32 w-auto object-contain bg-white/95 rounded-md p-2" loading="lazy" />
          </div>
          <p className="text-white/70 leading-relaxed max-w-md">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-gold mb-4">{t.footer.links}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/#home" className="hover:text-gold transition-smooth">{t.nav.home}</Link></li>
            <li><Link to="/#projects" className="hover:text-gold transition-smooth">{t.nav.projects}</Link></li>
            <li><Link to="/#services" className="hover:text-gold transition-smooth">{t.nav.services}</Link></li>
            <li><Link to="/#contact" className="hover:text-gold transition-smooth">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-gold mb-4">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+966532898887" dir="ltr" className="hover:text-gold transition-smooth">+966 53 289 8887</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:info@mgxsa.com" className="hover:text-gold transition-smooth">info@mgxsa.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>{t.footer.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {t.footer.company}. {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;
