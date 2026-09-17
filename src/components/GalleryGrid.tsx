import { useState, useMemo } from "react";
import { projects, projectCategories, ProjectItem } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { X, MapPin, Ruler, CheckCircle2 } from "lucide-react";

interface GalleryGridProps {
  initialCategory?: string;
  limit?: number;
  showFilters?: boolean;
}

export function GalleryGrid({
  initialCategory = "All",
  limit,
  showFilters = true,
}: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    let list = projects;
    if (selectedCategory !== "All") {
      list = list.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (limit) {
      list = list.slice(0, limit);
    }
    return list;
  }, [selectedCategory, limit]);

  return (
    <div>
      {/* Category Filter Chips */}
      {showFilters && (
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none no-scrollbar mb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {projectCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-950/40"
                    : "bg-stone-900/80 text-stone-400 hover:text-stone-200 hover:bg-stone-800 border border-stone-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-stone-900/30 rounded-xl border border-stone-800">
          <p className="text-stone-400 text-sm">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
        >
          <div
            className="fixed inset-0"
            onClick={() => setActiveModalProject(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-2xl bg-[#14161b] border border-stone-800 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
            {/* Modal Header Image */}
            <div className="relative aspect-[16/10] bg-stone-950">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-stone-300 hover:text-white border border-stone-700 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-500 text-stone-950">
                  {activeModalProject.category}
                </span>
                {activeModalProject.dimensions && (
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-black/80 text-stone-300 border border-stone-700 flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-amber-400" />
                    <span>{activeModalProject.dimensions}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Modal Details Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Fabricated & Installed in {activeModalProject.location}</span>
              </div>

              <h2
                id="modal-project-title"
                className="text-xl sm:text-2xl font-bold text-stone-100"
              >
                {activeModalProject.title}
              </h2>

              <p className="text-sm text-stone-300 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="pt-3 border-t border-stone-800">
                <h3 className="text-xs uppercase font-mono text-stone-400 mb-2">
                  Structural Specifications
                </h3>
                <ul className="space-y-2 text-sm text-stone-300">
                  {activeModalProject.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons inside Modal */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
                <CallButton size="md" variant="secondary" />
                <WhatsAppButton
                  size="md"
                  label="Enquire for Similar Work"
                  message={`Hi, I am interested in ${activeModalProject.title} located in Proddatur. Can I get a quote?`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
