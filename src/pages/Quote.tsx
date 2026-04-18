import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Quote = () => {
  const { t, lang } = useLang();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    document.title = lang === "ar"
      ? "اطلب عرض سعر | جيل التميز الحديثة للمقاولات"
      : "Request a Quote | Modern Excellence Contracting";
  }, [lang]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      type: String(fd.get("type") || ""),
      area: String(fd.get("area") || ""),
      location: String(fd.get("location") || ""),
      timeline: String(fd.get("timeline") || ""),
      details: String(fd.get("details") || ""),
    };

    const subject = lang === "ar"
      ? `طلب عرض سعر جديد - ${data.firstName} ${data.lastName}`
      : `New Quote Request - ${data.firstName} ${data.lastName}`;

    const lines = lang === "ar" ? [
      `الاسم: ${data.firstName} ${data.lastName}`,
      `الجوال: ${data.phone}`,
      `البريد: ${data.email}`,
      `نوع المشروع: ${data.type}`,
      `المساحة: ${data.area}`,
      `الموقع: ${data.location}`,
      `الموعد المتوقع: ${data.timeline}`,
      `عدد المرفقات: ${files.length}`,
      `\nالتعليقات:\n${data.details}`,
      files.length > 0 ? `\n⚠️ يرجى إرفاق الملفات يدوياً (${files.map(f => f.name).join(", ")})` : "",
    ] : [
      `Name: ${data.firstName} ${data.lastName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Project Type: ${data.type}`,
      `Area: ${data.area}`,
      `Location: ${data.location}`,
      `Expected Timeline: ${data.timeline}`,
      `Attachments: ${files.length}`,
      `\nComments:\n${data.details}`,
      files.length > 0 ? `\n⚠️ Please attach files manually (${files.map(f => f.name).join(", ")})` : "",
    ];

    const body = lines.filter(Boolean).join("\n");
    const mailto = `mailto:info@mgxsa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setLoading(false);
      toast.success(t.quote.success);
    }, 600);
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files || []).slice(0, 5);
    setFiles(list);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 border border-gold rotate-12" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="container relative z-10 text-center"
          >
            <div className="text-gold font-medium mb-3 tracking-widest text-sm">
              {lang === "ar" ? "عرض سعر" : "Quote"}
            </div>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              {t.quote.pageTitle}
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              {t.quote.pageDesc}
            </p>
          </motion.div>
        </section>

        <section className="py-16">
          <div className="container max-w-2xl">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={onSubmit}
              className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-elegant space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="firstName" className="text-primary font-bold">
                    {t.quote.firstName} <span className="text-destructive">*</span>
                  </Label>
                  <Input id="firstName" name="firstName" required maxLength={50} className="mt-2 h-11" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-primary font-bold">
                    {t.quote.lastName} <span className="text-destructive">*</span>
                  </Label>
                  <Input id="lastName" name="lastName" required maxLength={50} className="mt-2 h-11" />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-primary font-bold">
                  {t.quote.phone} <span className="text-destructive">*</span>
                </Label>
                <div className="mt-2 flex" dir="ltr">
                  <span className="inline-flex items-center px-3 bg-secondary border border-border border-r-0 rounded-s-md text-sm font-bold text-primary">
                    +966
                  </span>
                  <Input id="phone" name="phone" required type="tel" pattern="[0-9]{9,10}" maxLength={10} placeholder="5X XXX XXXX" className="rounded-s-none h-11" />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-primary font-bold">
                  {t.quote.email} <span className="text-destructive">*</span>
                </Label>
                <Input id="email" name="email" required type="email" maxLength={100} placeholder="name@example.com" className="mt-2 h-11" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="type" className="text-primary font-bold">
                    {t.quote.type} <span className="text-destructive">*</span>
                  </Label>
                  <Select name="type" required>
                    <SelectTrigger id="type" className="mt-2 h-11"><SelectValue placeholder={t.quote.typePlaceholder} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value={t.quote.types.gov}>{t.quote.types.gov}</SelectItem>
                      <SelectItem value={t.quote.types.com}>{t.quote.types.com}</SelectItem>
                      <SelectItem value={t.quote.types.res}>{t.quote.types.res}</SelectItem>
                      <SelectItem value={t.quote.types.finish}>{t.quote.types.finish}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="area" className="text-primary font-bold">
                    {t.quote.area} <span className="text-destructive">*</span>
                  </Label>
                  <Input id="area" name="area" required maxLength={30} placeholder={t.quote.areaPlaceholder} className="mt-2 h-11" />
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-primary font-bold">
                  {t.quote.location} <span className="text-destructive">*</span>
                </Label>
                <Input id="location" name="location" required maxLength={100} placeholder={t.quote.locationPlaceholder} className="mt-2 h-11" />
              </div>

              <div>
                <Label className="text-primary font-bold">{t.quote.attachments}</Label>
                <label htmlFor="files" className="mt-2 flex items-center justify-center gap-2 px-4 py-6 border-2 border-dashed border-border rounded-md cursor-pointer hover:border-gold hover:bg-secondary/50 transition-smooth">
                  <Upload className="w-5 h-5 text-gold" />
                  <span className="text-sm text-muted-foreground">
                    {files.length > 0
                      ? `${files.length} ${lang === "ar" ? "ملف محدد" : "files selected"}`
                      : t.quote.attachmentsHint}
                  </span>
                </label>
                <input id="files" type="file" multiple accept=".pdf,.dwg" onChange={handleFiles} className="hidden" />
              </div>

              <div>
                <Label htmlFor="timeline" className="text-primary font-bold">
                  {t.quote.timeline} <span className="text-destructive">*</span>
                </Label>
                <Select name="timeline" required>
                  <SelectTrigger id="timeline" className="mt-2 h-11"><SelectValue placeholder={t.quote.timelinePlaceholder} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t.quote.timelines.now}>{t.quote.timelines.now}</SelectItem>
                    <SelectItem value={t.quote.timelines["3m"]}>{t.quote.timelines["3m"]}</SelectItem>
                    <SelectItem value={t.quote.timelines["6m"]}>{t.quote.timelines["6m"]}</SelectItem>
                    <SelectItem value={t.quote.timelines["1y"]}>{t.quote.timelines["1y"]}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="details" className="text-primary font-bold">{t.quote.details}</Label>
                <Textarea id="details" name="details" rows={4} maxLength={1000} placeholder={t.quote.detailsPlaceholder} className="mt-2" />
              </div>

              <Button type="submit" size="lg" disabled={loading} className="w-full bg-gold text-gold-foreground hover:bg-gold-dark shadow-gold h-14 text-base hover:scale-[1.02] transition-transform">
                <Send className="me-2 w-5 h-5" />
                {loading ? t.quote.sending : t.quote.submit}
              </Button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Quote;
