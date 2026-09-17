import React, { useState, useRef, useCallback } from "react";
import { BeforeAfterItem } from "../data/projects";
import { CheckCircle2, AlertCircle, Clock, MapPin } from "lucide-react";

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
  id?: string;
}

export function BeforeAfterSlider({ item, id }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      setSliderPosition(0);
    } else if (e.key === "End") {
      setSliderPosition(100);
    }
  };

  return (
    <div
      id={id || `ba-card-${item.id}`}
      className="bg-[#14161b] border border-stone-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-stone-700 flex flex-col"
    >
      {/* Slider Interactive Stage */}
      <div
        ref={containerRef}
        role="slider"
        aria-label={`Before and After comparison for ${item.title}`}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] select-none touch-none cursor-ew-resize overflow-hidden bg-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        {/* AFTER Image (Background full) */}
        <img
          src={item.afterImage}
          alt={`After restoration: ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          loading="lazy"
        />

        {/* BEFORE Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={item.beforeImage}
            alt={`Before restoration: ${item.title}`}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-amber-950/80 text-amber-300 border border-amber-500/40 backdrop-blur-sm shadow-md">
            Before
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm shadow-md">
            After
          </span>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical line */}
          <div className="w-0.5 h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.8)]" />

          {/* Center Grab Handle Circle */}
          <div className="absolute w-9 h-9 rounded-full bg-stone-900 border-2 border-white shadow-xl flex items-center justify-center text-stone-200">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="8 15 3 12 8 9" />
              <polyline points="16 9 21 12 16 15" />
            </svg>
          </div>
        </div>

        {/* Touch Hint on Hover / Focus */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-80 text-[10px] uppercase font-mono tracking-widest bg-black/60 px-2.5 py-0.5 rounded text-stone-300">
          Drag slider or use arrow keys
        </div>
      </div>

      {/* Information Details Card */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono font-medium text-amber-500 uppercase tracking-wider">
              {item.workType}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>{item.location}</span>
            </span>
          </div>

          <h3 className="text-lg font-bold text-stone-100 tracking-tight">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-stone-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Comparative Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-800 text-xs">
          <div className="bg-stone-900/60 p-3 rounded-lg border border-amber-900/30">
            <div className="flex items-center gap-1.5 font-semibold text-amber-400 mb-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Initial Condition</span>
            </div>
            <p className="text-stone-400 leading-relaxed">{item.beforeNotes}</p>
          </div>

          <div className="bg-stone-900/60 p-3 rounded-lg border border-emerald-900/30">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-400 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Fabricated Solution</span>
            </div>
            <p className="text-stone-400 leading-relaxed">{item.afterNotes}</p>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Turnaround: <strong className="text-stone-300 font-semibold">{item.turnaroundTime}</strong></span>
          </span>
          <span className="text-stone-400 font-mono text-[11px]">
            Tested & inspected on-site
          </span>
        </div>
      </div>
    </div>
  );
}
