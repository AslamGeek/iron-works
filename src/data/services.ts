export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  materials: string[];
  bestFor: string;
  slug: string;
}

export const services: ServiceItem[] = [
  {
    id: "compound-gates",
    title: "Compound Gates",
    category: "Gates",
    tagline: "Heavy-duty perimeter entrance gates engineered for long-lasting security and architectural presence.",
    description:
      "Engineered for residential bungalows, commercial compounds, and industrial yards across Proddatur. Fabricated with heavy gauge square and rectangular hollow sections (MS pipes) and reinforced plate framing to resist sagging, wind load, and continuous daily operation.",
    features: [
      "Heavy-duty ball-bearing bottom wheels or top-hung cantilever tracks",
      "Reinforced heavy pivot hinges for smooth manual or motorized swing",
      "Integrated drop pins, heavy slide bolts, and provisions for padlock/smart locks",
      "Anti-rust red oxide primer coat followed by weather-shield enamel finish"
    ],
    materials: ["Mild Steel (MS) Square Pipes", "MS Channels", "Perforated Sheets", "Solid Iron Spindles"],
    bestFor: "Residential villas, compound walls, commercial complexes, and gated properties.",
    slug: "compound-gates"
  },
  {
    id: "iron-gates",
    title: "Iron Gates",
    category: "Gates",
    tagline: "Custom double-swing, sliding, and wicket gates tailored to your boundary opening.",
    description:
      "Whether you need an elegant main entrance swing gate or a space-saving sliding gate for narrow driveways, we construct each unit to precise millimeter measurements. Built with solid welding joints that withstand weather and intense seasonal heat.",
    features: [
      "Custom decorative CNC inserts or classic geometric patterns",
      "Seamless arc welded corner miters ground flush for a clean architectural aesthetic",
      "Individual pedestrian wicket gate options built directly into main leaf",
      "Smooth guide rollers and stopper brackets preventing derailment"
    ],
    materials: ["Heavy MS Hollow Sections", "Solid Flat Bars", "Sheet Metal Cladding", "Decorative Cast Accents"],
    bestFor: "Home driveways, private entrances, farmhouses, and storefronts.",
    slug: "iron-gates"
  },
  {
    id: "iron-doors",
    title: "Iron Doors",
    category: "Doors",
    tagline: "High-security metal doors and safety entryway frames for homes and commercial shops.",
    description:
      "Built for maximum deterrence against forced entry without compromising on curb appeal. We fabricate main security doors, steel safety door grills that fit outside wooden doors, and heavy back-exit doors for retail units in Proddatur.",
    features: [
      "Heavy gauge angle iron or tubular frame with welded anchor rebars for brick mortar fixing",
      "Multi-point locking box enclosures preventing tamper or pry attacks",
      "Stainless steel mesh or expanded metal backing for ventilation with insect protection",
      "Smooth hinge movement with greaseable pin joints"
    ],
    materials: ["MS Angle Iron (L-Angle)", "MS Hollow Pipes", "Expanded Metal Mesh", "Heavy Sheet Panels"],
    bestFor: "Main entrance safety doors, terrace doors, warehouse entrances, and shop backdoors.",
    slug: "iron-doors"
  },
  {
    id: "stair-balcony-railings",
    title: "Stair & Balcony Railings",
    category: "Railings",
    tagline: "Sturdy, code-compliant safety railings for internal staircases, external steps, and balconies.",
    description:
      "Accurately measured along the rise and run of your staircase or the exact curve of your balcony slab. We fabricate handrails that provide a secure grip, zero wobble, and clean modern aesthetic lines that elevate your property.",
    features: [
      "Core-drilled base plates anchored with high-strength chemical or expansion fasteners",
      "Consistent baluster spacing adhering to child-safe gap requirements (under 4 inches)",
      "Continuous handrail sections with smooth transition bends and capped ends",
      "Choice of minimalist horizontal pipe rails, vertical pickets, or modern flat-bar designs"
    ],
    materials: ["MS Square Tubing", "Round ERW Handrail Pipes", "Forged Iron Spindles", "Flat Bar Uprights"],
    bestFor: "Duplex homes, apartment balconies, terrace parapets, and exterior access staircases.",
    slug: "stair-balcony-railings"
  },
  {
    id: "railings",
    title: "Perimeter & Terrace Railings",
    category: "Railings",
    tagline: "Boundary and rooftop safety railings built to endure outdoor exposure.",
    description:
      "Durable railings engineered for terrace boundaries, parapet wall extensions, and garden boundaries. Arc welded firmly to existing concrete slabs or masonry to provide steadfast fall protection and visual boundary definition.",
    features: [
      "Rigid corner post anchoring with gusset plates for lateral stability",
      "Weather-sealed hollow section caps to prevent rainwater ingress and internal rusting",
      "Modular design allowing seamless installation along long terrace perimeters",
      "High-contrast dark charcoal or satin black protective coat"
    ],
    materials: ["MS Heavy Duty Pipes", "Solid Round Rods", "Cold-Rolled Steel Bars"],
    bestFor: "Rooftop terraces, open verandas, boundary wall tops, and commercial platforms.",
    slug: "railings"
  },
  {
    id: "window-grills",
    title: "Window Grills",
    category: "Grills",
    tagline: "Protective and ventilation-friendly window security grills with contemporary designs.",
    description:
      "Custom security grills for wooden window frames, aluminum sliding windows, and UPVC systems. We fabricate flush-mounted, box-projection, and ornamental designs that offer total security while preserving natural light and air circulation.",
    features: [
      "Box-projection (AC and plant ledge) grills providing extra exterior space",
      "Full perimeter frame with multiple wall anchor tangs cemented into reveal",
      "High-strength solid square bar or flat bar construction resistant to cutting tools",
      "Smooth weld points primed and painted for easy dusting and cleaning"
    ],
    materials: ["10mm / 12mm Solid MS Square Bars", "MS Flat Bars", "Angle Frame Enclosures"],
    bestFor: "Residential windows, bathroom ventilators, AC compressor safety cages, and skylights.",
    slug: "window-grills"
  },
  {
    id: "fencing",
    title: "Iron Fencing & Boundary Spikes",
    category: "Fences",
    tagline: "Anti-climb security fencing and compound wall topper spikes for secure perimeters.",
    description:
      "Secure open plots, school grounds, commercial yards, and residential compound walls in Proddatur. We build rigid panel fencing, vertical spear-point fences, and razor-sharp wall top spike strips that deter intruders.",
    features: [
      "Anti-climb spear points and jagged wall topper strips welded directly to structural bar",
      "Intermediate heavy-duty support posts set in concrete footings",
      "Modular bay assembly for fast on-site erection over long perimeter runs",
      "Long-term rust defense with industrial zinc-phosphate or epoxy undercoat"
    ],
    materials: ["MS Angle Iron", "Pressed Steel Spikes", "Barbed/Chain-link Support Arms", "Welded Wire Mesh"],
    bestFor: "Vacant residential plots, farm boundary walls, warehouses, and institutional grounds.",
    slug: "fencing"
  },
  {
    id: "repair-welding-work",
    title: "Repair & Welding Work",
    category: "Repairs",
    tagline: "Prompt on-site arc welding repairs, hinge replacements, rust remediation, and re-alignment.",
    description:
      "Don't let a sagging gate, broken hinge, or rusted railing compromise your safety. We provide on-site mobile arc welding service across Proddatur. We reinforce damaged joints, replace corroded bottom pipe sections, re-weld broken latches, and restore smooth gate travel.",
    features: [
      "On-site portable arc welding generator / inverter machine setup",
      "Bottom pipe corrosion replacement using new heavy-gauge sleeve inserts",
      "Hinge pin rebuilds, grease nipple additions, and plumb re-alignment",
      "Structural reinforcement gussets for sagging gate posts"
    ],
    materials: ["E6013 High-Tensile Welding Electrodes", "Replacement MS Sections", "Heavy Drop Hinges"],
    bestFor: "Emergency hinge breaks, stuck rolling gates, rusted stair treads, and storm damage repairs.",
    slug: "repair-welding-work"
  },
  {
    id: "custom-fabrication",
    title: "Custom Iron Fabrication",
    category: "Custom Work",
    tagline: "Made-to-order metal frames, structural sheds, water tank stands, and architectural elements.",
    description:
      "Bring us your drawings, sketch on paper, or photo reference. We cut, bend, weld, and assemble custom metal fabrications tailored to your exact specifications. From heavy overhead water tank stands to rooftop shade sheds and industrial workbenches.",
    features: [
      "Fabrication to client drawings with accurate on-site verification",
      "Structural steel truss and purlin assembly for terrace car parking sheds",
      "Heavy load-bearing capacity calculation for water tank platforms",
      "Clean finishing with neat grinding, filler work, and protective coatings"
    ],
    materials: ["Universal MS Beams", "Heavy Channels & I-Sections", "Tubular Trusses", "Chequered Plates"],
    bestFor: "Overhead water tank towers, parking sheds, display frames, and specialized equipment stands.",
    slug: "custom-fabrication"
  }
];
