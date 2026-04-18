import gov from "@/assets/project-government.jpg";
import com from "@/assets/project-commercial.jpg";
import res from "@/assets/project-residential.jpg";

const projects = [
  { img: gov, type: "مشروع حكومي", city: "الرياض", title: "مبنى إداري حكومي" },
  { img: com, type: "مشروع تجاري", city: "الرياض", title: "برج تجاري متعدد الاستخدامات" },
  { img: res, type: "مشروع سكني", city: "جدة", title: "فيلا سكنية فاخرة" },
];

const Projects = () => (
  <section id="projects" className="py-24 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-gold font-medium mb-3 tracking-widest text-sm">سجل الإنجاز</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
          مشاريعنا تتحدث عنا
        </h2>
        <div className="w-24 h-1 bg-gradient-gold mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group cursor-pointer overflow-hidden bg-card border border-border clip-corner hover:shadow-elegant transition-smooth"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <span className="absolute top-4 right-4 px-3 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-sm">
                {p.type}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-primary mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.city}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
