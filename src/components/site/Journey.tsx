import { motion } from "framer-motion";
import { Search, Ruler, HardHat, Key } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const stepIcons = [Search, Ruler, HardHat, Key];

const Journey = () => {
  const { t, dir } = useLang();
  // الترتيب البصري: في الصورة 1 يمين -> 4 يسار (للعربي). نعكس عند الإنجليزية
  const ordered = dir === "rtl" ? [...t.journey.steps].reverse() : t.journey.steps;
  const numbers = dir === "rtl" ? [4, 3, 2, 1] : [1, 2, 3, 4];
  const iconsOrdered = dir === "rtl" ? [...stepIcons].reverse() : stepIcons;

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="text-gold font-medium mb-3 tracking-widest text-sm">{t.journey.kicker}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-3">
            {t.journey.title}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-muted-foreground">{t.journey.sub}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4">
          {/* خط متصل أفقي بنقاط */}
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] border-t-2 border-dashed border-gold/60" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 relative">
            {ordered.map((s, i) => {
              const Icon = iconsOrdered[i];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center relative"
                >
                  <div className="relative mx-auto w-24 h-24 mb-5">
                    {/* الدائرة البيضاء مع البوردر الذهبي */}
                    <div className="w-24 h-24 bg-background border-2 border-gold rounded-full flex items-center justify-center shadow-elegant">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={2} />
                    </div>
                    {/* الرقم البرتقالي */}
                    <div className="absolute -top-1 -end-1 w-8 h-8 bg-gold text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {numbers[i]}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
