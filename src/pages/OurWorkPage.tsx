import { GalleryGrid } from "../components/GalleryGrid";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { projects } from "../data/projects";
import { business, getWhatsAppLink } from "../config/business";
import { MessageCircle, Shield, Camera } from "lucide-react";

export function OurWorkPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Our Work" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-2">
            Completed Metal Work
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">
            Iron Fabrication & Welding Portfolio
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Browse our completed installations in Proddatur, including residential compound gates,
            modern stair railings, balcony safety enclosures, window grills, and commercial structural steel fabrications.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={getWhatsAppLink("Hi, I am looking at your portfolio and want to ask about custom metal work in Proddatur.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About Any Design on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Portfolio Gallery Grid with Category Filters */}
        <GalleryGrid />

        {/* Note on Real Photography Replacement */}
        <div className="mt-16 p-6 rounded-xl bg-stone-900/40 border border-stone-800 text-xs text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-amber-500 shrink-0" />
            <span>
              Real workshop photography can be dropped into <code className="text-amber-300 font-mono bg-stone-900 px-1.5 py-0.5 rounded border border-stone-700">/public/images/projects/</code> to automatically replace placeholders.
            </span>
          </div>
          <a
            href={getWhatsAppLink("Hi, could you share photos of recent iron gates you made in Proddatur?")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline shrink-0"
          >
            Request recent site photos via WhatsApp →
          </a>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Have a Custom Design from a Photo or Architectural Drawing?"
          subtitle="Send us the picture on WhatsApp. We will evaluate raw steel requirements, weight estimates, and welding feasibility."
        />
      </div>
    </div>
  );
}
