const stats = [
  { num: "+15", label: "مشروع منجز" },
  { num: "+8", label: "عملاء ثقة" },
  { num: "+5", label: "سنوات خبرة" },
  { num: "100%", label: "مشاريع حكومية وتجارية" },
];

const Stats = () => (
  <section className="py-16 bg-background border-y border-border">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display font-black text-4xl md:text-5xl text-gradient-gold mb-2">{s.num}</div>
          <div className="text-sm md:text-base text-primary font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
