const steps = [
  { n: "01", title: "دراسة", desc: "تحليل متطلبات المشروع ودراسة الجدوى" },
  { n: "02", title: "تخطيط", desc: "وضع الخطة الزمنية والميزانية والتصاميم" },
  { n: "03", title: "تنفيذ", desc: "تنفيذ احترافي وفق أعلى معايير الجودة" },
  { n: "04", title: "تسليم", desc: "تسليم المشروع جاهزاً وفق المواصفات" },
];

const Journey = () => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-gold font-medium mb-3 tracking-widest text-sm">منهجيتنا</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
          رحلة المشروع معنا
        </h2>
        <div className="w-24 h-1 bg-gradient-gold mx-auto" />
      </div>

      <div className="relative">
        {/* خط متصل */}
        <div className="hidden md:block absolute top-10 right-[12%] left-[12%] h-0.5 bg-gradient-to-l from-gold via-gold/40 to-gold" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="relative z-10 w-20 h-20 mx-auto mb-5 bg-primary text-gold border-4 border-secondary flex items-center justify-center rounded-full font-display font-black text-xl shadow-elegant">
                {s.n}
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Journey;
