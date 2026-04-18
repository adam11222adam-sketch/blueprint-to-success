import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";

const Stats = () => {
  const { t } = useLang();
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {t.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display font-black text-4xl md:text-5xl text-gradient-gold mb-2">{s.num}</div>
            <div className="text-sm md:text-base text-primary font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
