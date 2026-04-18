import { motion } from "framer-motion";
import { Clock, Award, ShieldCheck, Users } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Clock, Award, ShieldCheck, Users];

const WhyUs = () => {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-gold font-medium mb-3 tracking-widest text-sm">{t.why.kicker}</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
            {t.why.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-card border border-border rounded-sm hover:border-gold transition-smooth"
              >
                <div className="w-14 h-14 mb-5 bg-gold/10 text-gold flex items-center justify-center rounded-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
