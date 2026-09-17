import React from "react";
import { ServiceItem } from "../data/services";
import { WhatsAppButton } from "./WhatsAppButton";
import { Check, ShieldCheck, Layers } from "lucide-react";

interface ServiceCardProps {
  key?: React.Key;
  service: ServiceItem;
  id?: string;
}

export function ServiceCard({ service, id }: ServiceCardProps) {
  const customWhatsAppMessage = `Hi, I am interested in getting a quote for ${service.title} in Proddatur. Could you please share details?`;

  return (
    <article
      id={id || `service-${service.id}`}
      className="bg-[#14161b] border border-stone-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:shadow-black/60 group"
    >
      <div>
        {/* Category Pill & ID */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
            {service.category}
          </span>
          <span className="text-[11px] font-mono text-stone-400">
            Arc Welded • Heavy MS
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors tracking-tight">
          {service.title}
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm text-stone-300 font-medium leading-normal">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-stone-400 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="mt-5 pt-4 border-t border-stone-800/80">
          <h4 className="text-xs uppercase font-mono tracking-wider text-stone-300 mb-2.5 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Fabrication Features</span>
          </h4>
          <ul className="space-y-2 text-xs text-stone-300">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Materials */}
        <div className="mt-4 pt-3 border-t border-stone-800/50">
          <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-2">
            <Layers className="w-3.5 h-3.5 text-stone-500" />
            <span className="font-mono uppercase text-[11px]">Material Grade:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {service.materials.map((mat, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-stone-900 text-stone-300 px-2 py-0.5 rounded border border-stone-800"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-6 pt-5 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="text-[11px] text-stone-400">
          <span className="block font-medium text-stone-300">Best for:</span>
          <span className="line-clamp-1">{service.bestFor}</span>
        </div>

        <WhatsAppButton
          size="sm"
          label="Quote on WhatsApp"
          message={customWhatsAppMessage}
          className="w-full sm:w-auto"
        />
      </div>
    </article>
  );
}
