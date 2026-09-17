import { MessageCircle } from "lucide-react";
import { business, getWhatsAppLink } from "../config/business";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  showLabel?: boolean;
  label?: string;
  id?: string;
}

export function WhatsAppButton({
  message,
  className = "",
  size = "md",
  variant = "solid",
  showLabel = true,
  label = "WhatsApp Us",
  id,
}: WhatsAppButtonProps) {
  const url = getWhatsAppLink(message || business.whatsappPrefillText);

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base gap-2.5 min-h-[50px]",
  };

  const variantClasses = {
    solid:
      "bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-950/40 border border-emerald-500/40 active:scale-[0.98]",
    outline:
      "bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-600/50 font-medium active:scale-[0.98]",
    ghost:
      "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 font-medium active:scale-[0.98]",
  };

  return (
    <a
      id={id || "whatsapp-cta-link"}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} via WhatsApp (${business.whatsapp})`}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0f1013] whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className={`${size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} shrink-0 fill-emerald-100/20`} />
      {showLabel && <span>{label}</span>}
    </a>
  );
}
