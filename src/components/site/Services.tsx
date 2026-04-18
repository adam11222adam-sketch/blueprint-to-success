import { motion } from "framer-motion";
import { Building2, Landmark, PaintRoller } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Building2, Landmark, PaintRoller];

const Services = () => {
  const { t } = useLang();
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-gold font-medium mb-3 tracking-widest text-sm">{t.services.kicker}</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative p-10 bg-card border border-border rounded-sm hover:border-gold transition-smooth hover:shadow-elegant clip-corner"
              >
                <div className="w-16 h-16 mb-6 bg-primary text-gold flex items-center justify-center rounded-sm group-hover:bg-gold group-hover:text-primary transition-smooth">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
