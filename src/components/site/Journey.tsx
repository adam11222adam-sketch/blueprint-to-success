import { motion } from "framer-motion";
import { Search, Ruler, HardHat, Key } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const stepIcons = [Search, Ruler, HardHat, Key];

const Journey = () => {
  const { t } = useLang();
  const steps = t.journey.steps;

  // 4 positions around a circle: top, right, bottom, left
  const positions = [
    { top: "0%", left: "50%", x: "-50%", y: "0%" },        // 1 - top
    { top: "50%", left: "100%", x: "-100%", y: "-50%" },   // 2 - right
    { top: "100%", left: "50%", x: "-50%", y: "-100%" },   // 3 - bottom
    { top: "50%", left: "0%", x: "0%", y: "-50%" },        // 4 - left
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-gold font-medium mb-3 tracking-widest text-sm">{t.journey.kicker}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-3">
            {t.journey.title}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-muted-foreground">{t.journey.sub}</p>
        </motion.div>

        {/* Circular layout */}
        <div className="relative mx-auto w-full max-w-[560px] aspect-square">
          {/* Background subtle circle */}
          <div className="absolute inset-[8%] rounded-full bg-background/60 shadow-elegant" />

          {/* Curved arrows SVG (clockwise: 1 -> 2 -> 3 -> 4 -> 1) */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 6 3, 0 6" fill="hsl(var(--gold))" />
              </marker>
            </defs>
            {/* 4 arcs connecting the 4 nodes around a circle r=42 centered at 50,50 */}
            {/* top(50,8) -> right(92,50) */}
            <path d="M 56,9 A 42,42 0 0 1 91,44" stroke="hsl(var(--gold))" strokeWidth="0.8" strokeDasharray="2 2" markerEnd="url(#arrowhead)" />
            {/* right(92,50) -> bottom(50,92) */}
            <path d="M 91,56 A 42,42 0 0 1 56,91" stroke="hsl(var(--gold))" strokeWidth="0.8" strokeDasharray="2 2" markerEnd="url(#arrowhead)" />
            {/* bottom(50,92) -> left(8,50) */}
            <path d="M 44,91 A 42,42 0 0 1 9,56" stroke="hsl(var(--gold))" strokeWidth="0.8" strokeDasharray="2 2" markerEnd="url(#arrowhead)" />
            {/* left(8,50) -> top(50,8) */}
            <path d="M 9,44 A 42,42 0 0 1 44,9" stroke="hsl(var(--gold))" strokeWidth="0.8" strokeDasharray="2 2" markerEnd="url(#arrowhead)" />
          </svg>

          {/* Step nodes */}
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            const pos = positions[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: `translate(${pos.x}, ${pos.y})`,
                }}
              >
                <div className="flex flex-col items-center text-center w-[180px] sm:w-[200px]">
                  <div className="relative mb-3">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-background border-2 border-gold rounded-full flex items-center justify-center shadow-elegant">
                      <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-1 -end-1 w-7 h-7 sm:w-8 sm:h-8 bg-gold text-primary rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-md">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-primary mb-1">{s.title}</h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed px-2">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
