import { services } from "../data/services";
import { ServiceCard } from "../components/ServiceCard";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { Wrench, Shield, CheckCircle, MessageCircle, Phone } from "lucide-react";
import { business, getWhatsAppLink, getPhoneLink } from "../config/business";

export function ServicesPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-12 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
            Proddatur Fabrication Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">
            Custom Iron Work & Arc Welding Services
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Every gate, door, railing, and window grill is individually measured, fabricated,
            and welded to fit your exact building specifications in Proddatur and nearby YSR Kadapa regions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={getWhatsAppLink("Hi, I want to discuss a custom iron fabrication project in Proddatur.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Quote</span>
            </a>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 hover:bg-stone-800 text-xs font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Fabricator ({business.phone})</span>
            </a>
          </div>
        </div>

        {/* Quick Service Anchor Navigation */}
        <div className="mb-12 p-4 rounded-xl bg-[#14161b] border border-stone-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-400 mr-2">
            Jump to Service:
          </span>
          {services.map((srv) => (
            <a
              key={srv.id}
              href={`#service-${srv.id}`}
              className="text-xs px-3 py-1.5 rounded-md bg-stone-900 text-stone-300 hover:text-amber-400 hover:bg-stone-800 border border-stone-800/80 transition-colors"
            >
              {srv.title}
            </a>
          ))}
        </div>

        {/* Grid of All Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Material & Standards Guarantee */}
        <div className="mt-16 p-8 rounded-2xl bg-[#14161b] border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <Shield className="w-5 h-5" />
                <span>Heavy Mild Steel (MS)</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                We use genuine grade mild steel square hollow sections, rectangular pipes, and solid flat bars from recognized mills. Never thin paper-gauge sections.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <Wrench className="w-5 h-5" />
                <span>Arc Welding Standards</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                All structural joints undergo multi-pass electric arc welding with slag removal and flush grinding for seamless architectural transitions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <CheckCircle className="w-5 h-5" />
                <span>Weatherproof Coating</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Two-coat anti-rust primer barrier prevents internal oxidation, humidity damage, and seasonal corrosion. Ready for topcoat enamel or polyurethane finish.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Looking for a Custom Iron Gate or Balcony Railing in Proddatur?"
          subtitle="Tell us your requirements, approximate height and width, or send a reference image on WhatsApp."
        />
      </div>
    </div>
  );
}
