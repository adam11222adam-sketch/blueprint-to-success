import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-6">
    <div className="container grid md:grid-cols-4 gap-10 mb-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="جيل التميز الحديثة" className="h-12 w-12 object-contain" width={48} height={48} loading="lazy" />
          <div>
            <div className="font-display font-bold text-lg">جيل التميز الحديثة</div>
            <div className="text-xs text-white/60">للمقاولات</div>
          </div>
        </div>
        <p className="text-white/70 leading-relaxed max-w-md">
          شريك موثوق في تنفيذ المشاريع الحكومية والتجارية والسكنية بأعلى معايير الجودة والاحترافية.
        </p>
      </div>

      <div>
        <h4 className="font-display font-bold text-gold mb-4">روابط سريعة</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li><a href="#home" className="hover:text-gold transition-smooth">الرئيسية</a></li>
          <li><a href="#projects" className="hover:text-gold transition-smooth">المشاريع</a></li>
          <li><a href="#services" className="hover:text-gold transition-smooth">الخدمات</a></li>
          <li><a href="#contact" className="hover:text-gold transition-smooth">تواصل معنا</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-gold mb-4">تواصل معنا</h4>
        <ul className="space-y-3 text-sm text-white/70">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> 0500000000</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> info@jeel-altamayoz.sa</li>
          <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5" /> الرياض، المملكة العربية السعودية</li>
        </ul>
      </div>
    </div>

    <div className="container border-t border-white/10 pt-6 text-center text-sm text-white/50">
      © {new Date().getFullYear()} شركة جيل التميز الحديثة للمقاولات. جميع الحقوق محفوظة.
    </div>
  </footer>
);

export default Footer;
