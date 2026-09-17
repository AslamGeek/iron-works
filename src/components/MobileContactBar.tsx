import { PhoneCall, MessageCircle } from "lucide-react";
import { business, getPhoneLink, getWhatsAppLink } from "../config/business";

export function MobileContactBar() {
  const phoneUrl = getPhoneLink();
  const whatsappUrl = getWhatsAppLink(business.whatsappPrefillText);

  return (
    <div
      id="mobile-sticky-action-bar"
      role="region"
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#121418]/95 backdrop-blur-md border-t border-stone-800/80 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          id="mobile-call-action-btn"
          href={phoneUrl}
          aria-label={`Call ${business.name} at ${business.phone}`}
          className="flex items-center justify-center gap-2 h-12 rounded-lg bg-stone-900 border border-amber-500/40 text-amber-400 font-semibold text-sm active:bg-stone-800 transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-amber-400" />
          <span>Call Now</span>
        </a>

        <a
          id="mobile-whatsapp-action-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${business.name} at ${business.whatsapp}`}
          className="flex items-center justify-center gap-2 h-12 rounded-lg bg-emerald-600 border border-emerald-500/40 text-white font-semibold text-sm shadow-md shadow-emerald-950/50 active:bg-emerald-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
