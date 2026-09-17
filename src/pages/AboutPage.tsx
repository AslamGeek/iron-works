import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { business, getWhatsAppLink, getPhoneLink } from "../config/business";
import {
  Wrench,
  Ruler,
  Shield,
  Layers,
  CheckCircle2,
  Building2,
  Home,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

export function AboutPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-12 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
            Local Workmanship & Principles
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">
            About {business.name}
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            We are an independent iron fabrication workshop operating in Proddatur, Andhra Pradesh.
            We specialize in hands-on metal fabrication, custom gates, railings, safety grills, and arc welding repairs
            for residential homeowners and commercial establishments.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#14161b] border border-stone-800 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-100">
              Arc Welding & Hands-On Workmanship
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">
              Metal fabrication is only as strong as its weld joints. Rather than fast surface spot-welds that crack over time,
              we utilize electric arc welding with appropriate electrode selection (e.g. E6013 for structural mild steel)
              to achieve deep metal penetration and joint permanence.
            </p>
            <ul className="space-y-2 text-xs text-stone-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Multi-pass fillet and butt welding for load-bearing brackets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Slag clearing and angle-grinder dressing for flush architectural edges</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Square corner joints checked with precision magnetic 90-degree squares</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#14161b] border border-stone-800 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Ruler className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-100">
              Accurate Physical Measurements & Fit
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">
              No two building openings in Proddatur are perfectly plumb or level. Brickwork settles,
              plaster varies, and driveway slopes create clearance challenges. We conduct thorough
              on-site measurements to ensure every gate, grill, and railing fits naturally without forcing.
            </p>
            <ul className="space-y-2 text-xs text-stone-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Ground clearance measured against driveway slope to eliminate scraping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Concrete pillar plumbness verification before hinge positioning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Allowance for expansion and thermal movement under extreme summer temperatures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Residential & Commercial Scope */}
        <div className="bg-[#111317] border border-stone-800 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight">
              Residential & Commercial Work Across Proddatur
            </h2>
            <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
              We cater to individual homeowners building private residences as well as commercial shop owners,
              contractors, and warehouse operators who require reliable ironwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-stone-900/60 border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <Home className="w-5 h-5" />
                <span>Residential Iron Fabrication</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Compound gates, front entrance double doors, stair handrails, balcony safety railings,
                window safety box grills, AC unit cage enclosures, and terrace shade frames.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-900/60 border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <Building2 className="w-5 h-5" />
                <span>Commercial & Industrial Work</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Heavy sliding warehouse gates, plot boundary spike fencing, overhead water tank steel towers,
                shop security shutters and back doors, mezzanine railings, and machinery access platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Repair & Restoration Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
              On-Site Repair Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight">
              Repair Capabilities & Mobile Welding
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">
              Replacing an entire gate is not always necessary. When a hinge pin snaps, a bottom pipe corrodes,
              or a ground roller track gets deformed, we diagnose the exact point of structural failure and
              execute surgical repairs on-site in Proddatur.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-300 pt-2">
              <div className="p-3 rounded-lg bg-[#14161b] border border-stone-800">
                <strong className="text-stone-100 block mb-1">Bottom Pipe Renewal:</strong>
                Cutting away water-damaged bottom tubing and welding new thick-gauge inserts.
              </div>
              <div className="p-3 rounded-lg bg-[#14161b] border border-stone-800">
                <strong className="text-stone-100 block mb-1">Hinge Realignment:</strong>
                Installing heavy-duty barrel hinges with reinforcing triangular gusset plates.
              </div>
              <div className="p-3 rounded-lg bg-[#14161b] border border-stone-800">
                <strong className="text-stone-100 block mb-1">Roller Replacement:</strong>
                Fitting sealed ball-bearing cast iron rollers for effortless single-hand sliding.
              </div>
              <div className="p-3 rounded-lg bg-[#14161b] border border-stone-800">
                <strong className="text-stone-100 block mb-1">Anti-Sag Bracing:</strong>
                Adding internal diagonal tension stays to eliminate gate droop.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#14161b] border border-stone-800 rounded-2xl p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 mx-auto flex items-center justify-center text-amber-400">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-100">
              Direct Workshop Engagement
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              You deal directly with the hands-on fabricators responsible for cutting, welding, and installing your ironwork.
              No middlemen, no subcontracting confusion.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink("Hi, I want to discuss a fabrication project with your team in Proddatur.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={getPhoneLink()}
                className="w-full py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Discuss Your Next Iron Fabrication Project"
          subtitle="Tell us what you are building in Proddatur. We are happy to review your measurements and material choices."
        />
      </div>
    </div>
  );
}
