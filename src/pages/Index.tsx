import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import WhyUs from "@/components/site/WhyUs";
import Journey from "@/components/site/Journey";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "جيل التميز الحديثة للمقاولات | مشاريع حكومية وتجارية";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "شركة جيل التميز الحديثة للمقاولات — تنفيذ المشاريع الحكومية والتجارية والسكنية بأعلى معايير الجودة في المملكة العربية السعودية.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <WhyUs />
        <Journey />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
