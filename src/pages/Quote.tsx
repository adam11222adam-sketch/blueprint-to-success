import { useEffect, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Quote = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "اطلب عرض سعر | جيل التميز الحديثة للمقاولات";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم استلام طلبك بنجاح، سنتواصل معك خلال 24 ساعة.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 border border-gold rotate-12" />
          </div>
          <div className="container relative z-10 text-center">
            <div className="text-gold font-medium mb-3 tracking-widest text-sm">عرض سعر</div>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              اطلب عرض سعر لمشروعك
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              املأ النموذج وسيتواصل معك فريقنا الهندسي خلال 24 ساعة.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-2xl">
            <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-elegant space-y-6 clip-corner">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">الاسم الكامل *</Label>
                  <Input id="name" required className="mt-2" placeholder="اسمك الكريم" />
                </div>
                <div>
                  <Label htmlFor="phone">رقم الجوال *</Label>
                  <Input id="phone" required type="tel" className="mt-2" placeholder="05xxxxxxxx" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" className="mt-2" placeholder="email@example.com" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="type">نوع المشروع *</Label>
                  <Select required>
                    <SelectTrigger id="type" className="mt-2"><SelectValue placeholder="اختر النوع" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gov">مشروع حكومي</SelectItem>
                      <SelectItem value="com">مشروع تجاري</SelectItem>
                      <SelectItem value="res">مشروع سكني</SelectItem>
                      <SelectItem value="finish">تشطيبات</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city">المدينة *</Label>
                  <Input id="city" required className="mt-2" placeholder="مثال: الرياض" />
                </div>
              </div>
              <div>
                <Label htmlFor="details">تفاصيل المشروع</Label>
                <Textarea id="details" rows={5} className="mt-2" placeholder="اشرح لنا تفاصيل مشروعك ومتطلباتك..." />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full bg-gold text-gold-foreground hover:bg-gold-dark shadow-gold h-14 text-base">
                {loading ? "جاري الإرسال..." : "إرسال طلب عرض السعر"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Quote;
