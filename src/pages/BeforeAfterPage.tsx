import { beforeAfterProjects } from "../data/projects";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { business, getWhatsAppLink } from "../config/business";
import { MessageCircle, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";

export function BeforeAfterPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Before & After" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-12 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
            Restorations & Replacements
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">
            Before & After Iron Work Transformations
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Drag the slider on each project below to compare worn, rusted, or structurally failing metal installations
            with our newly fabricated and reinforced iron work across Proddatur.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={getWhatsAppLink("Hi, I have a gate / railing that needs restoration or replacement in Proddatur. Can I share photos?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Photos of Your Damaged Gate</span>
            </a>
          </div>
        </div>

        {/* Interactive Comparison Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {beforeAfterProjects.map((item, index) => (
            <div key={item.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  Case #{index + 1}
                </span>
                <span className="text-sm font-semibold text-stone-300">
                  {item.category} Restoration
                </span>
              </div>

              <BeforeAfterSlider item={item} />
            </div>
          ))}
        </div>

        {/* What Causes Premature Gate & Railing Failure? */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-[#14161b] border border-stone-800">
          <h2 className="text-2xl font-bold text-stone-100 tracking-tight mb-4">
            Why Do Metal Gates & Railings Fail in Proddatur?
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            Proddatur experiences intense summer heat followed by monsoon rainfall. Common defects we encounter and fix:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
              <h3 className="font-bold text-amber-400">1. Undersized Pipe Gauge</h3>
              <p className="text-stone-400 leading-relaxed">
                Thin 18-gauge or 20-gauge sheet metal rusts through in 3-5 years. We only fabricate gates with heavy 14-gauge or 16-gauge structural hollow sections.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
              <h3 className="font-bold text-amber-400">2. Weak Tack Welds</h3>
              <p className="text-stone-400 leading-relaxed">
                Rushed tack welds snap under gate momentum or truck vibration. Our multi-pass arc welding bonds the core steel fibers together.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
              <h3 className="font-bold text-amber-400">3. Trapped Water & Unsealed Caps</h3>
              <p className="text-stone-400 leading-relaxed">
                Uncapped vertical pipes collect rainwater, rusting the gate from the inside out. We cap and weld every exposed pipe terminal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Have a Sagging Gate or Rusted Balcony in Proddatur?"
          subtitle="Don't wait for complete joint failure. Send a picture or short video on WhatsApp for an on-site repair assessment."
        />
      </div>
    </div>
  );
}
