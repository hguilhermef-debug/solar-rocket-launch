import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511951296429?text=Ol%C3%A1!%20Venho%20do%20site%20e%20gostaria%20de%20solicitar%20um%20Or%C3%A7amento%20Agora!%20";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "large" | "small";
}

const WhatsAppButton = ({ className = "", size = "default" }: WhatsAppButtonProps) => {
  const sizeClasses = {
    small: "px-5 py-3 text-sm gap-2",
    default: "px-6 py-4 text-base gap-2",
    large: "px-8 py-5 text-lg gap-3",
  };

  const iconSizes = {
    small: 18,
    default: 22,
    large: 26,
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp text-primary-foreground font-bold ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle size={iconSizes[size]} fill="currentColor" />
      SOLICITAR ORÇAMENTO AGORA
    </a>
  );
};

export default WhatsAppButton;
