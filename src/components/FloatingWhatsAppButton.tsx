import { MessageCircle } from "lucide-react";
import { business, getWhatsAppLink } from "../config/business";

export function FloatingWhatsAppButton() {
  const url = getWhatsAppLink(business.whatsappPrefillText);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 group"
    >
      <a
        id="floating-whatsapp-btn"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with us on WhatsApp"
        className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="font-semibold text-sm tracking-wide hidden xs:inline-block">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
