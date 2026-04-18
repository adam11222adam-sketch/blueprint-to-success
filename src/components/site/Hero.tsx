import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src={hero}
      alt="مشروع إنشائي ضخم لشركة جيل التميز الحديثة للمقاولات"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-navy opacity-90" />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

    {/* خطوط هندسية */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-20 right-10 w-64 h-64 border-2 border-gold rotate-12" />
      <div className="absolute bottom-10 left-20 w-40 h-40 border-2 border-gold -rotate-6" />
    </div>

    <div className="container relative z-10 py-24">
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-block mb-6 px-4 py-2 border border-gold/40 text-gold text-sm font-medium rounded-sm">
          شريك المشاريع الحكومية والتجارية
        </div>
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          نبني مشاريع الغد…
          <br />
          <span className="text-gradient-gold">بجودة تثق بها</span> الجهات الحكومية
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
          شركة جيل التميز الحديثة للمقاولات — شريكك الموثوق في تنفيذ المشاريع الحكومية والتجارية بأعلى معايير الجودة والالتزام بالمواعيد.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-light shadow-gold text-base h-14 px-8">
            <Link to="/quote">
              اطلب عرض سعر
              <ArrowLeft className="mr-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-white/5 hover:bg-white hover:text-primary text-base h-14 px-8">
            <a href="#contact">
              <Phone className="ml-2" />
              تواصل معنا
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
