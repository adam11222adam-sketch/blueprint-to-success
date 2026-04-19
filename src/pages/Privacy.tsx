import { useEffect } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { useLang } from "@/i18n/LanguageContext";

const Privacy = () => {
  const { lang } = useLang();

  useEffect(() => {
    document.title = lang === "ar"
      ? "بيان الخصوصية | جيل التميز الحديثة"
      : "Privacy Statement | Modern Excellence Generation";
  }, [lang]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container max-w-3xl">
          <article className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-elegant space-y-6 leading-relaxed text-foreground">
            <header>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary mb-2">
                شركة جيل التميز الحديثة
              </h1>
              <div className="w-20 h-0.5 bg-gold" />
            </header>

            <section>
              <h2 className="font-display font-bold text-xl text-primary mb-3">أولاً: بيان الخصوصية</h2>
              <p className="text-muted-foreground mb-3">
                تحرص شركة جيل التميز الحديثة على حماية خصوصية جميع زوار موقعها الإلكتروني وعملائها وشركائها، وتلتزم بالحفاظ على سرية المعلومات الشخصية وفقًا للأنظمة واللوائح المعمول بها في المملكة العربية السعودية.
              </p>
              <p className="text-muted-foreground mb-3">
                عند استخدامك لموقعنا أو خدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقًا لما يلي:
              </p>
              <ul className="list-disc ps-6 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-primary">جمع المعلومات:</strong> قد نقوم بجمع معلومات شخصية مثل الاسم، رقم الهاتف، البريد الإلكتروني، وأي بيانات أخرى يتم تزويدنا بها من خلال النماذج أو وسائل التواصل.
                </li>
                <li>
                  <strong className="text-primary">استخدام المعلومات:</strong> تُستخدم المعلومات للأغراض التالية:
                  <ul className="list-disc ps-6 mt-2 space-y-1">
                    <li>تقديم الخدمات والاستشارات</li>
                    <li>تحسين جودة الخدمة وتجربة المستخدم</li>
                    <li>التواصل مع العملاء بخصوص المشاريع أو العروض</li>
                    <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-primary">حماية المعلومات:</strong> نلتزم باتخاذ كافة الإجراءات التقنية والتنظيمية المناسبة لحماية بيانات المستخدمين من الوصول غير المصرح به أو الاستخدام أو الإفصاح.
                </li>
                <li>
                  <strong className="text-primary">مشاركة المعلومات:</strong> لا يتم بيع أو تأجير أو مشاركة البيانات الشخصية مع أي طرف ثالث إلا في الحالات التالية:
                  <ul className="list-disc ps-6 mt-2 space-y-1">
                    <li>إذا كان ذلك مطلوبًا بموجب الأنظمة والقوانين</li>
                    <li>عند الحاجة لتنفيذ الخدمات مثل الجهات الاستشارية أو المتعاقدين مع الالتزام بالسرية</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-primary">ملفات تعريف الارتباط (Cookies):</strong> قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل الاستخدام.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-primary mb-3">ثانياً: إخلاء المسؤولية القانونية</h2>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground">
                <li>جميع المعلومات والمحتويات المنشورة على موقع شركة جيل التميز الحديثة هي لأغراض تعريفية وتسويقية فقط، ولا تشكل عرضًا ملزمًا قانونيًا إلا بموجب عقود رسمية موقعة بين الأطراف.</li>
                <li>لا تتحمل الشركة أي مسؤولية عن أي خسائر أو أضرار مباشرة أو غير مباشرة قد تنتج عن استخدام الموقع أو الاعتماد على المعلومات الواردة فيه.</li>
                <li>لا تضمن الشركة خلو الموقع من الأخطاء التقنية أو الانقطاعات، وتسعى بشكل مستمر لتحسين الأداء دون التزام بضمان التشغيل المستمر.</li>
                <li>أي روابط خارجية يتم توفيرها عبر الموقع هي لأغراض تسهيل الوصول، ولا تتحمل الشركة مسؤولية محتوى تلك المواقع أو سياسات الخصوصية الخاصة بها.</li>
                <li>استخدامك للموقع يعني موافقتك الكاملة على هذا البيان، ويحق للشركة تعديل هذه السياسة في أي وقت دون إشعار مسبق، ويتم نشر التحديثات عبر الموقع.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-primary mb-3">ثالثاً: التواصل</h2>
              <p className="text-muted-foreground mb-3">
                في حال وجود أي استفسارات بخصوص سياسة الخصوصية أو إخلاء المسؤولية، يمكن التواصل عبر:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-primary">البريد الإلكتروني:</strong> <a href="mailto:info@mgxsa.com" className="text-gold hover:underline">info@mgxsa.com</a></li>
                <li><strong className="text-primary">رقم الهاتف:</strong> <a href="tel:+966532898887" dir="ltr" className="text-gold hover:underline">+966532898887</a></li>
                <li><strong className="text-primary">العنوان:</strong> المملكة العربية السعودية – الرياض – حي قرطبة – المركز الرئيسي</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
