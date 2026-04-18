import { Building2, Landmark, PaintRoller } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "المقاولات العامة",
    desc: "تنفيذ كافة أعمال المقاولات العامة من الأساسات حتى التسليم بأعلى جودة ومعايير السلامة.",
  },
  {
    icon: Landmark,
    title: "المشاريع الحكومية",
    desc: "خبرة واسعة في تنفيذ المشاريع الحكومية وفق المواصفات والمعايير المعتمدة.",
  },
  {
    icon: PaintRoller,
    title: "التشطيب وإدارة المشاريع",
    desc: "تشطيبات راقية وإدارة احترافية للمشاريع تضمن الجودة والالتزام بالجدول الزمني.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-gold font-medium mb-3 tracking-widest text-sm">خدماتنا</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
          خدمات متكاملة بمعايير عالمية
        </h2>
        <div className="w-24 h-1 bg-gradient-gold mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative p-10 bg-card border border-border rounded-sm hover:border-gold transition-smooth hover:shadow-elegant clip-corner"
          >
            <div className="w-16 h-16 mb-6 bg-primary text-gold flex items-center justify-center rounded-sm group-hover:bg-gold group-hover:text-primary transition-smooth">
              <s.icon className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-primary mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
