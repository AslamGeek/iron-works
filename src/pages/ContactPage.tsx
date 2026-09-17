import { Breadcrumbs } from "../components/Breadcrumbs";
import { business, getWhatsAppLink, getPhoneLink, getMapsLink } from "../config/business";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  Navigation,
  CheckCircle2,
  Share2,
  Camera,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export function ContactPage() {
  const mapsUrl = getMapsLink();

  const quoteSteps = [
    {
      step: "01",
      title: "Send Photos or Opening Dimensions on WhatsApp",
      desc: "Measure the rough width and height between pillars, or snap a photo of your existing gate or drawing. Send it to our WhatsApp number.",
    },
    {
      step: "02",
      title: "Receive Material Estimation & Design Options",
      desc: "We recommend suitable MS pipe gauges (14G / 16G), calculate approximate steel weight, and share design catalogues with honest quotes.",
    },
    {
      step: "03",
      title: "Schedule Free On-Site Measurement Visit",
      desc: "For finalized projects in Proddatur, we visit your site to record precision millimeter levels, check plumbness, and confirm anchor points.",
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact & Workshop" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-12 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
            Direct Local Contact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">
            Contact & Visit Our Workshop
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Reach out directly to <strong className="text-stone-200">{business.name}</strong> in Proddatur.
            We use a WhatsApp-first approach so you can send measurements, design photos, or voice notes
            and receive quick estimates without filling out tedious multi-step forms.
          </p>
        </div>

        {/* 3 Steps To Get A Quote */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-[#14161b] to-[#1a1c24] border border-stone-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold block mb-1">
              How To Request A Fast Quote
            </span>
            <h2 className="text-2xl font-bold text-stone-100">
              3 Simple Steps to Start Your Metal Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quoteSteps.map((s, idx) => (
              <div key={idx} className="bg-stone-900/80 p-6 rounded-xl border border-stone-800 space-y-2">
                <span className="text-2xl font-mono font-extrabold text-amber-500">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-stone-100">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Feel free to send photos of broken hinges, rusted rails, or Pinterest designs!</span>
            </div>

            <a
              href={getWhatsAppLink("Hi, I want to request a quote for iron work in Proddatur.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Conversation</span>
            </a>
          </div>
        </div>

        {/* Contact Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="bg-[#14161b] border border-emerald-500/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Enquiries</span>
                </div>
                <span className="text-[10px] uppercase font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700">
                  Fastest Response
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Send photos, voice notes, gate dimensions, or drawings anytime.
              </p>
              <div className="text-lg font-mono font-bold text-stone-100">
                {business.whatsapp}
              </div>
              <a
                id="contact-whatsapp-primary-btn"
                href={getWhatsAppLink(business.whatsappPrefillText)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="bg-[#14161b] border border-amber-500/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                  <Phone className="w-5 h-5" />
                  <span>Telephone Calls</span>
                </div>
                <span className="text-[10px] uppercase font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-700">
                  Voice Call
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Speak directly with the fabricator regarding urgent repairs or large projects.
              </p>
              <div className="text-lg font-mono font-bold text-stone-100">
                {business.phone}
              </div>
              <a
                id="contact-phone-primary-btn"
                href={getPhoneLink()}
                className="block w-full text-center py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 text-xs font-semibold transition-colors"
              >
                Call Workshop Phone
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-stone-200 font-bold text-base">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>Operating Timings</span>
              </div>
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Monday - Saturday:</span>
                  <span className="font-semibold text-stone-200">{business.hours}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Sunday:</span>
                  <span className="text-amber-400">By Prior Appointment / Emergency</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-400">Site Measurement Visits:</span>
                  <span className="text-stone-300">7:00 AM – 7:30 PM</span>
                </div>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-stone-300 font-semibold text-sm">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Business Email</span>
              </div>
              <p className="text-xs text-stone-400 font-mono">
                {business.email}
              </p>
            </div>
          </div>

          {/* Workshop Location & Map Interface (7 cols) */}
          <div className="lg:col-span-7 bg-[#14161b] border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Physical Workshop</span>
                </div>
                <span className="text-xs text-stone-400">Proddatur, AP</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight">
                  Workshop Location & Directions
                </h2>
                <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                  Visitors and contractors are welcome to inspect raw material gauges,
                  hinge samples, and ongoing fabrication jobs at our unit.
                </p>
              </div>

              {/* Address detail */}
              <div className="p-5 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                <div className="text-xs uppercase font-mono text-stone-400">
                  Workshop Address:
                </div>
                <p className="text-sm font-semibold text-stone-100">
                  {business.name}
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {business.address}, {business.city}, {business.state} - {business.pincode}
                </p>
                <p className="text-xs text-stone-400">
                  Landmark: <span className="text-stone-200">{business.landmark}</span>
                </p>
              </div>

              {/* Visual Map Representation */}
              <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-950 aspect-[16/9] flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 opacity-25">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="contactGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#64748b" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contactGrid)" />
                    <path d="M 0,90 Q 150,140 300,80 T 600,100" fill="none" stroke="#f59e0b" strokeWidth="3" />
                  </svg>
                </div>

                <div className="relative z-10 space-y-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500 mx-auto flex items-center justify-center text-amber-400 shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-stone-100">
                    {business.name} Workshop Pin
                  </p>
                  <p className="text-xs text-stone-400">
                    Click the button below to open Google Maps for GPS turn-by-turn navigation.
                  </p>
                  <a
                    id="open-google-maps-btn"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors shadow-md"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-4 border-t border-stone-800">
                <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
                  Local Service Coverage Area:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {business.serviceAreas.map((area, i) => (
                    <span
                      key={i}
                      className="text-xs bg-stone-900 text-stone-300 px-2.5 py-1 rounded border border-stone-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>On-site visits available throughout Proddatur</span>
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
