import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CTA = () => (
  <section className="py-24 bg-gradient-navy relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 right-10 w-96 h-96 border border-gold rotate-12" />
      <div className="absolute bottom-10 left-10 w-64 h-64 border border-gold -rotate-12" />
    </div>
    <div className="container relative z-10 text-center max-w-3xl">
      <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6">
        ابدأ مشروعك معنا اليوم
      </h2>
      <p className="text-lg text-white/80 mb-10">
        تنفيذ احترافي بمعايير تثق بها الجهات الحكومية والشركات الكبرى.
      </p>
      <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-light shadow-gold text-base h-14 px-10">
        <Link to="/quote">
          اطلب عرض سعر
          <ArrowLeft className="mr-2" />
        </Link>
      </Button>
    </div>
  </section>
);

export default CTA;
