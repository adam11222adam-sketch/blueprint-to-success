import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/966500000000"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="تواصل عبر واتساب"
    className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[hsl(142_70%_45%)] text-white rounded-full flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
