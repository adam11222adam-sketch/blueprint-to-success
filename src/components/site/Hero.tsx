import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import hero from "@/assets/hero-construction.jpg";

const Hero = () => {
  const { t, lang, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src={hero}
        alt={lang === "ar" ? "مشروع إنشائي ضخم" : "Major construction project"}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-navy opacity-90" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-20 right-10 w-64 h-64 border-2 border-gold"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -6 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-10 left-20 w-40 h-40 border-2 border-gold"
        />
      </div>

      <div className="container relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 border border-gold/40 text-gold text-sm font-medium rounded-sm tracking-wide"
          >
            {t.hero.badge}
          </motion.div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-8 tracking-wide">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="block mb-3"
            >
              {t.hero.title1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="block mb-3"
            >
              <span className="text-gradient-gold">{t.hero.title2}</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="block"
            >
              {t.hero.title3}
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-light shadow-gold text-base h-14 px-8 hover:scale-105 transition-transform">
              <Link to="/quote">
                {t.hero.cta1}
                <Arrow className="ms-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-white/5 hover:bg-white hover:text-primary text-base h-14 px-8 hover:scale-105 transition-transform">
              <a href="#contact">
                <Phone className="me-2" />
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
