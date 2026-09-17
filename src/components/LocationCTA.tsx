import { MapPin, Navigation, Clock, Check, Phone, MessageCircle } from "lucide-react";
import { business, getMapsLink, getPhoneLink, getWhatsAppLink } from "../config/business";

export function LocationCTA() {
  const mapsUrl = getMapsLink();

  return (
    <section
      id="workshop-location-section"
      aria-labelledby="workshop-location-heading"
      className="py-16 sm:py-24 bg-[#0f1013] border-t border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14161b] border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Location & Contact Info (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Proddatur Workshop & Service Area</span>
                </div>

                <h2
                  id="workshop-location-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 tracking-tight"
                >
                  Visit Our Workshop in Proddatur
                </h2>

                <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
                  Bring your gate designs, custom dimensions, or metal repair requirements
                  directly to our fabrication unit. We inspect drawings, review raw material thickness
                  options, and provide prompt, honest WhatsApp quotations.
                </p>

                {/* Address & Timings Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-stone-900/80 p-5 rounded-xl border border-stone-800">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Workshop Address</span>
                    </div>
                    <p className="text-stone-300 text-sm font-medium">
                      {business.name}
                    </p>
                    <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                      {business.address}, {business.city}, {business.state} - {business.pincode}
                    </p>
                    <p className="text-stone-500 text-[11px] mt-1">
                      Landmark: {business.landmark}
                    </p>
                  </div>

                  <div className="bg-stone-900/80 p-5 rounded-xl border border-stone-800">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      <span>Operating Hours</span>
                    </div>
                    <p className="text-stone-300 text-sm font-medium">
                      {business.hours}
                    </p>
                    <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                      {business.workingDays}
                    </p>
                    <p className="text-stone-500 text-[11px] mt-1">
                      On-site measurement visits arranged on schedule
                    </p>
                  </div>
                </div>

                {/* Service Localities */}
                <div className="mt-6 pt-6 border-t border-stone-800">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-stone-400 mb-3">
                    Active On-Site Service & Delivery Localities
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {business.serviceAreas.slice(0, 6).map((area, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-stone-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center gap-3">
                <a
                  id="get-directions-btn"
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={getWhatsAppLink("Hi, I want to visit your workshop in Proddatur. What is the best time?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Location</span>
                </a>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-medium transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {business.phone}</span>
                </a>
              </div>
            </div>

            {/* Stylized Google Maps / Workshop Graphic View (5 cols) */}
            <div className="lg:col-span-5 bg-stone-950 border-t lg:border-t-0 lg:border-l border-stone-800 relative min-h-[340px] flex flex-col items-center justify-center p-6 text-center">
              {/* Map background representation */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#475569" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  {/* Roads representation */}
                  <path d="M 0,120 Q 200,100 400,150 T 800,130" fill="none" stroke="#f59e0b" strokeWidth="3" opacity="0.6" />
                  <path d="M 200,0 L 220,500" fill="none" stroke="#64748b" strokeWidth="4" opacity="0.5" />
                  <path d="M 0,320 L 800,300" fill="none" stroke="#64748b" strokeWidth="3" opacity="0.5" />
                </svg>
              </div>

              {/* Central Workshop Pin Card */}
              <div className="relative z-10 max-w-xs bg-[#171920]/95 border border-amber-500/40 rounded-xl p-6 shadow-2xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-400 mx-auto flex items-center justify-center text-amber-400 mb-3 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>

                <h4 className="text-base font-bold text-stone-100">
                  {business.name}
                </h4>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  Proddatur, Andhra Pradesh
                </p>

                <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
                  Pin Location: {business.coordinates.lat}° N, {business.coordinates.lng}° E
                </p>

                <div className="mt-4 pt-3 border-t border-stone-800">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 px-3 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="relative z-10 mt-6 text-xs text-stone-400 max-w-xs">
                Free site visits and dimension measurement across Proddatur municipal limits.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
