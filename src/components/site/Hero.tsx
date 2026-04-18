import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import heroSide from "@/assets/hero-side.jpg";

const Hero = () => {
  const { t, lang, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative bg-gradient-navy overflow-hidden">
      {/* Gold grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Diagonal gold accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-0 right-0 w-[60%] h-full"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, hsl(var(--gold) / 0.3) 50%, transparent 60%)",
          }}
        />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 items-center min-h-[80vh] py-16">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img
              src={heroSide}
              alt={lang === "ar" ? "مشروع إنشائي" : "Construction project"}
              className="w-full h-[400px] lg:h-[520px] object-cover"
              width={1280}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/60" />
          </div>
          {/* Gold corner accent */}
          <div className="absolute -top-3 -start-3 w-20 h-20 border-t-4 border-s-4 border-gold" />
          <div className="absolute -bottom-3 -end-3 w-20 h-20 border-b-4 border-e-4 border-gold" />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 text-center lg:text-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 border border-gold/40 text-gold text-xs md:text-sm font-medium rounded-sm tracking-wider"
          >
            {t.hero.badge}
          </motion.div>

          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="block mb-2"
            >
              {t.hero.title1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="block mb-2 text-gradient-gold"
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
            className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
