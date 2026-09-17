import { PhoneCall } from "lucide-react";
import { business, getPhoneLink } from "../config/business";

interface CallButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "secondary";
  showLabel?: boolean;
  label?: string;
  id?: string;
}

export function CallButton({
  className = "",
  size = "md",
  variant = "solid",
  showLabel = true,
  label = "Call Now",
  id,
}: CallButtonProps) {
  const url = getPhoneLink();

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base gap-2.5 min-h-[50px]",
  };

  const variantClasses = {
    solid:
      "bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold shadow-md shadow-amber-950/40 border border-amber-500/40 active:scale-[0.98]",
    outline:
      "bg-stone-900/80 hover:bg-stone-800 text-amber-400 border border-amber-500/40 font-medium active:scale-[0.98]",
    secondary:
      "bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 font-medium active:scale-[0.98]",
  };

  return (
    <a
      id={id || "call-cta-link"}
      href={url}
      aria-label={`${label} (${business.phone})`}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#0f1013] whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <PhoneCall className={`${size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} shrink-0`} />
      {showLabel && <span>{label}</span>}
    </a>
  );
}
