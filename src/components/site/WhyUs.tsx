import { Clock, Award, ShieldCheck, Users } from "lucide-react";

const points = [
  { icon: Clock, title: "التزام صارم بالمواعيد", desc: "نحترم الجدول الزمني ونسلم في الموعد المتفق عليه." },
  { icon: Award, title: "جودة تنفيذ عالية", desc: "معايير جودة عالمية في كل تفاصيل التنفيذ." },
  { icon: ShieldCheck, title: "خبرة في المشاريع الحكومية", desc: "سجل حافل بالمشاريع الحكومية الناجحة." },
  { icon: Users, title: "فريق هندسي متخصص", desc: "كوادر هندسية مؤهلة بأعلى الكفاءات." },
];

const WhyUs = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-gold font-medium mb-3 tracking-widest text-sm">لماذا نحن</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
          ما يميّز جيل التميز الحديثة
        </h2>
        <div className="w-24 h-1 bg-gradient-gold mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p) => (
          <div key={p.title} className="p-8 bg-card border border-border rounded-sm hover:border-gold transition-smooth">
            <div className="w-14 h-14 mb-5 bg-gold/10 text-gold flex items-center justify-center rounded-sm">
              <p.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-lg text-primary mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
