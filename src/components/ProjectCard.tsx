import React from "react";
import { ProjectItem } from "../data/projects";
import { WhatsAppButton } from "./WhatsAppButton";
import { MapPin, Ruler, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  key?: React.Key;
  project: ProjectItem;
  id?: string;
  onOpenModal?: (project: ProjectItem) => void;
}

export function ProjectCard({ project, id, onOpenModal }: ProjectCardProps) {
  const customWhatsAppMsg = `Hi, I saw your project "${project.title}" on your website. I want similar iron work in Proddatur. Can you provide an estimate?`;

  return (
    <div
      id={id || `project-card-${project.id}`}
      className="bg-[#14161b] border border-stone-800 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-stone-700 hover:shadow-xl group"
    >
      <div>
        {/* Project Image Container */}
        <div
          onClick={() => onOpenModal?.(project)}
          className="relative aspect-[16/10] bg-stone-950 overflow-hidden cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-stone-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-sm shadow-md">
              {project.category}
            </span>
          </div>

          {project.dimensions && (
            <div className="absolute bottom-3 right-3">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/80 text-stone-300 border border-stone-700 backdrop-blur-sm flex items-center gap-1">
                <Ruler className="w-3 h-3 text-amber-400" />
                <span>{project.dimensions}</span>
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-1.5 text-xs text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>{project.location}</span>
          </div>

          <h3
            onClick={() => onOpenModal?.(project)}
            className="text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors tracking-tight cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
            {project.description}
          </p>

          {/* Specifications list */}
          <div className="pt-2">
            <ul className="space-y-1.5 text-xs text-stone-300">
              {project.specifications.slice(0, 3).map((spec, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 sm:p-6 sm:pt-0 mt-auto flex items-center justify-between gap-3 border-t border-stone-800/80 pt-4">
        <button
          type="button"
          onClick={() => onOpenModal?.(project)}
          className="text-xs text-stone-400 hover:text-stone-200 font-medium underline underline-offset-4 focus:outline-none"
        >
          View Specs
        </button>

        <WhatsAppButton
          size="sm"
          label="Enquire on WhatsApp"
          message={customWhatsAppMsg}
        />
      </div>
    </div>
  );
}
