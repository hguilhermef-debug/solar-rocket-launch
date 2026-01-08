import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511951296429?text=Ol%C3%A1!%20Venho%20do%20site%20e%20gostaria%20de%20solicitar%20um%20Or%C3%A7amento%20Agora!%20";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow md:hidden"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default FloatingWhatsApp;
