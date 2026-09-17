import { business, getWhatsAppLink, getPhoneLink, getMapsLink } from "../config/business";
import { MessageCircle, Phone, MapPin, Shield } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  serviceName?: string;
}

export function CTASection({
  title = "Need Custom Iron Work or Arc Welding in Proddatur?",
  subtitle = "Send us your gate opening dimensions, photos of your existing gate, or design sketches on WhatsApp for an immediate estimate.",
  serviceName,
}: CTASectionProps) {
  const whatsappMsg = serviceName
    ? `Hi, I am looking for ${serviceName} in Proddatur. Can you give me an estimate?`
    : business.whatsappPrefillText;

  return (
    <section
      aria-label="Direct enquiry call to action"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#0f1013] to-[#14161c] border-t border-stone-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono font-medium mb-5">
          <Shield className="w-3.5 h-3.5" />
          <span>WhatsApp-First Direct Estimates</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="cta-whatsapp-primary"
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            id="cta-call-primary"
            href={getPhoneLink()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 font-bold text-base shadow-lg transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Call {business.phone}</span>
          </a>

          <a
            id="cta-directions-primary"
            href={getMapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 text-sm font-medium transition-all"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Visit Workshop</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-400">
          <div>
            <span className="font-semibold text-stone-200 block">Heavy Gauge Steel</span>
            <span>Standard MS pipes & solid bars</span>
          </div>
          <div>
            <span className="font-semibold text-stone-200 block">Arc Welding Mastery</span>
            <span>Deep penetration joints</span>
          </div>
          <div>
            <span className="font-semibold text-stone-200 block">Accurate Fit</span>
            <span>Precision on-site measurement</span>
          </div>
          <div>
            <span className="font-semibold text-stone-200 block">Proddatur Local</span>
            <span>Prompt emergency repairs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
