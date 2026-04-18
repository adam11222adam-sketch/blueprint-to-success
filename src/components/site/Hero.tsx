import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-side.jpg";

const Hero = () => {
  const { t, lang, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden bg-primary">
      {/* Background image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        src={heroImg}
        alt={lang === "ar" ? "موقع بناء — رافعة ومبنى قيد الإنشاء" : "Construction site with crane"}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Dark navy overlay — stronger on the right (text side) */}
      <div className="absolute inset-0 bg-primary/75" />
      <div
        className="absolute inset-0"
        style={{
          background:
            dir === "rtl"
              ? "linear-gradient(270deg, hsl(var(--primary) / 0.95) 0%, hsl(var(--primary) / 0.7) 45%, hsl(var(--primary) / 0.35) 100%)"
              : "linear-gradient(90deg, hsl(var(--primary) / 0.95) 0%, hsl(var(--primary) / 0.7) 45%, hsl(var(--primary) / 0.35) 100%)",
        }}
      />

      {/* Geometric gold lines on the text side */}
      <div className="absolute inset-y-0 end-0 w-1/2 pointer-events-none opacity-30 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="absolute inset-0"
        >
          <div className="absolute top-10 end-10 w-72 h-72 border-2 border-gold rotate-12" />
          <div className="absolute top-32 end-24 w-56 h-56 border-2 border-gold/60 -rotate-6" />
          <div className="absolute bottom-20 end-40 w-40 h-40 border border-gold/40 rotate-45" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "linear-gradient(270deg, black, transparent)",
              WebkitMaskImage: "linear-gradient(270deg, black, transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Content — right aligned */}
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl ms-auto text-center lg:text-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 border border-gold/40 text-gold text-xs md:text-sm font-medium rounded-sm tracking-wider"
          >
            {t.hero.badge}
          </motion.div>

          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] mb-6 tracking-wide">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="block mb-3"
            >
              {t.hero.title1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="block mb-3 text-gradient-gold"
            >
              {t.hero.title2}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="block"
            >
              {t.hero.title3}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-base md:text-lg text-white/75 mb-9 max-w-xl mx-auto lg:mx-0 lg:ms-auto leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
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

          {/* Slider dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex gap-2 mt-10 justify-center lg:justify-start"
          >
            <span className="w-8 h-1.5 rounded-full bg-gold" />
            <span className="w-2 h-1.5 rounded-full bg-white/40" />
            <span className="w-2 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
