import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const overlayDirection = dir === "rtl" ? "to left" : "to right";

  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden border-b-4 border-gold"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${overlayDirection}, hsl(var(--primary) / 0.92) 40%, hsl(var(--primary) / 0.4))`,
        }}
      />

      {/* Diagonal gold line pattern */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 45%, hsl(var(--gold) / 0.1) 45%, hsl(var(--gold) / 0.1) 46%, transparent 46%), linear-gradient(45deg, transparent 45%, hsl(var(--gold) / 0.1) 45%, hsl(var(--gold) / 0.1) 46%, transparent 46%)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 border border-gold/40 text-gold text-xs md:text-sm font-medium rounded-sm tracking-wider"
          >
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2] mb-3"
          >
            {t.hero.title1}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="font-display font-black text-2xl md:text-4xl lg:text-5xl text-gold leading-[1.2] mb-6"
          >
            {t.hero.title2} {t.hero.title3}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base md:text-lg text-white/85 mb-8 leading-relaxed max-w-xl"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold-light shadow-gold h-13 px-7 hover:scale-105 transition-transform"
            >
              <Link to="/quote">
                {t.hero.cta1}
                <Arrow className="ms-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white hover:text-primary h-13 px-7 hover:scale-105 transition-transform"
            >
              <a href="#contact">
                <Phone className="me-2 w-4 h-4" />
                {t.hero.cta2}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
