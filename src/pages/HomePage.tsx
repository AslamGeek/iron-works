import { Link } from "react-router-dom";
import { services } from "../data/services";
import { projects, beforeAfterProjects } from "../data/projects";
import { business, getWhatsAppLink, getPhoneLink, getMapsLink } from "../config/business";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { LocationCTA } from "../components/LocationCTA";
import { CTASection } from "../components/CTASection";
import {
  Shield,
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Ruler,
  Clock,
  Layers,
  Sparkles
} from "lucide-react";

export function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredBeforeAfter = beforeAfterProjects[0];

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section
        id="home-hero"
        aria-label="Welcome and hero banner"
        className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 bg-gradient-to-b from-[#121316] via-[#0f1013] to-[#0f1013] border-b border-stone-800 overflow-hidden"
      >
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Proddatur, Andhra Pradesh • Local Metal Fabricator</span>
              </div>

              {/* Suggested Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 tracking-tight leading-[1.12]">
                Custom Iron Work <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-stone-100">
                  Built for Strength
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
                <strong className="text-stone-100 font-semibold">{business.name}</strong> provides
                custom compound gates, iron doors, stair and balcony railings, safety window grills,
                perimeter fencing, on-site welding repairs, and custom structural fabrication in Proddatur
                and surrounding areas.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  id="hero-whatsapp-btn"
                  href={getWhatsAppLink(business.whatsappPrefillText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-950/60 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  id="hero-call-btn"
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 font-bold text-base shadow-lg transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  id="hero-directions-btn"
                  href={getMapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 text-sm font-medium transition-all"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Visit Workshop</span>
                </a>
              </div>

              {/* Key Fabricator Indicators */}
              <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <Wrench className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Arc Welding</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Ruler className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Exact Millimeter Fit</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Shield className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Anti-Rust Primer</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Prompt On-Site Visits</span>
                </div>
              </div>
            </div>

            {/* Right Featured Hero Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-stone-700/80 bg-stone-900/60 shadow-2xl p-2 group">
                <img
                  src="/images/projects/gate-modern-compound.svg"
                  alt="Architectural Heavy-Duty Iron Compound Gate fabricated in Proddatur"
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                  loading="eager"
                />

                <div className="p-4 bg-stone-900/90 rounded-b-xl -mt-2 border-t border-stone-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-stone-200 block">
                      Heavy-Duty Compound Gate
                    </span>
                    <span className="text-stone-400 text-[11px]">
                      Fabricated with 14-gauge MS hollow pipes
                    </span>
                  </div>
                  <Link
                    to="/our-work"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>View Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / WORKMANSHIP PILLARS */}
      <section
        id="why-choose-us"
        aria-labelledby="why-choose-us-heading"
        className="py-16 sm:py-24 bg-[#0f1013] border-b border-stone-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
              Reliable Metal Work
            </span>
            <h2
              id="why-choose-us-heading"
              className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight"
            >
              Built for Durability, Weather Resistance & Daily Wear
            </h2>
            <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
              We fabricate iron structures that stay straight, smooth, and secure for years.
              Every weld joint is executed with full structural penetration rather than surface tacking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">
                Structural Arc Welding
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Using certified high-tensile electrodes for maximum load capacity on gate hinges,
                parapet railings, and structural shed joints.
              </p>
            </div>

            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Ruler className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">
                Accurate On-Site Sizing
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                We visit your site in Proddatur to take physical measurements of pillars,
                slope angles, and lintels to ensure clean, flush installation without forcing.
              </p>
            </div>

            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">
                Anti-Corrosion Priming
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                All fabricated assemblies receive high-adhesion red-oxide or zinc-chromate
                protective primer to combat rust before final enamel paint is applied.
              </p>
            </div>

            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">
                Emergency Mobile Repairs
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Broken hinge or off-track rolling gate? We bring portable arc welding equipment
                directly to your location across Proddatur for rapid remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section
        id="home-services"
        aria-labelledby="home-services-heading"
        className="py-16 sm:py-24 bg-[#0c0d10] border-b border-stone-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
                Fabrication Capabilities
              </span>
              <h2
                id="home-services-heading"
                className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight"
              >
                Our Iron Fabrication & Welding Services
              </h2>
              <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
                From perimeter security gates and modern stair railings to window grills
                and emergency welding repairs across Proddatur.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 shrink-0 group"
            >
              <span>Explore all 9 services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-800 text-sm font-semibold transition-all"
            >
              <span>View Full Services Catalog & Technical Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section
        id="home-featured-projects"
        aria-labelledby="featured-projects-heading"
        className="py-16 sm:py-24 bg-[#0f1013] border-b border-stone-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
                Portfolio Preview
              </span>
              <h2
                id="featured-projects-heading"
                className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight"
              >
                Featured Work in Proddatur
              </h2>
              <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
                Take a look at recently completed gates, safety doors, railings, and structural steel stands.
              </p>
            </div>

            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 shrink-0 group"
            >
              <span>View full gallery ({projects.length} projects)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BEFORE & AFTER PREVIEW */}
      <section
        id="home-before-after"
        aria-labelledby="before-after-heading"
        className="py-16 sm:py-24 bg-[#0b0c0e] border-b border-stone-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                Restoration & Transformation
              </span>

              <h2
                id="before-after-heading"
                className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight"
              >
                Interactive Before & After Comparison
              </h2>

              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                See the dramatic structural difference between old, corroded, sagging gates
                and our reinforced custom iron fabrications.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Elimination of dragging wheels and ground scraping</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Replacement of thin, rusted sections with heavy-gauge MS tubing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Long-life anti-rust primer and seamless ground weld seams</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/before-after"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 text-xs font-bold transition-all"
                >
                  <span>View all comparisons</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={getWhatsAppLink("Hi, I have an old gate in Proddatur that needs repair or replacement. Can you inspect?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-400 hover:text-stone-200 underline underline-offset-4"
                >
                  Send photos for repair quote
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterSlider item={featuredBeforeAfter} />
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE 4-STEP WORK PROCESS */}
      <section
        id="home-work-process"
        aria-labelledby="work-process-heading"
        className="py-16 sm:py-24 bg-[#0f1013] border-b border-stone-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
              Clear & Straightforward
            </span>
            <h2
              id="work-process-heading"
              className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight"
            >
              How We Work With You
            </h2>
            <p className="mt-3 text-stone-400 text-sm sm:text-base">
              From your initial WhatsApp message to final on-site installation in Proddatur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 relative">
              <span className="text-3xl font-extrabold font-mono text-amber-500/40 block mb-3">
                01
              </span>
              <h3 className="text-lg font-bold text-stone-100 mb-2">
                Consultation & Site Visit
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Send opening dimensions on WhatsApp or schedule an on-site visit in Proddatur to evaluate opening levels, slope, and pillar strength.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 relative">
              <span className="text-3xl font-extrabold font-mono text-amber-500/40 block mb-3">
                02
              </span>
              <h3 className="text-lg font-bold text-stone-100 mb-2">
                Design & Material Selection
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Select your preferred pattern, pipe gauge (14G / 16G), flat bar thicknesses, and locking hardware with a transparent upfront quote.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 relative">
              <span className="text-3xl font-extrabold font-mono text-amber-500/40 block mb-3">
                03
              </span>
              <h3 className="text-lg font-bold text-stone-100 mb-2">
                Arc Welding & Shop Fabrication
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Precision cutting, miter joints, heavy arc welding, smooth seam grinding, and protective anti-rust red oxide primer coating in our workshop.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#14161b] border border-stone-800 rounded-xl p-6 relative">
              <span className="text-3xl font-extrabold font-mono text-amber-500/40 block mb-3">
                04
              </span>
              <h3 className="text-lg font-bold text-stone-100 mb-2">
                Installation & Final Testing
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Anchor grouting into masonry, plumb alignment, ball-bearing roller verification, drop pin testing, and final touch-up paint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOP & SERVICE AREA SECTION */}
      <LocationCTA />

      {/* FINAL WHATSAPP CALL TO ACTION */}
      <CTASection />
    </div>
  );
}
