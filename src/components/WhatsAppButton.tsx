import WhatsAppIcon from "./icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/5511951296429?text=Ol%C3%A1!%20Venho%20do%20site%20e%20gostaria%20de%20solicitar%20um%20Or%C3%A7amento%20Agora!%20";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "large" | "small";
  showOnlineStatus?: boolean;
}

const WhatsAppButton = ({ className = "", size = "default", showOnlineStatus = true }: WhatsAppButtonProps) => {
  const sizeClasses = {
    small: "px-4 py-3 text-xs sm:text-sm gap-2",
    default: "px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base gap-2",
    large: "px-5 sm:px-8 py-4 sm:py-5 text-base sm:text-lg gap-2 sm:gap-3",
  };

  const iconSizes = {
    small: 16,
    default: 20,
    large: 24,
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-whatsapp text-primary-foreground font-bold whitespace-nowrap ${sizeClasses[size]} ${className}`}
      >
        <WhatsAppIcon size={iconSizes[size]} />
        <span className="whitespace-nowrap">SOLICITAR ORÇAMENTO AGORA</span>
      </a>
      {showOnlineStatus && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>Orçamento em até 2 minutos</span>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
