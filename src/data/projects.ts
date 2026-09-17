export interface ProjectItem {
  id: string;
  title: string;
  category: "Gates" | "Doors" | "Railings" | "Fences" | "Grills" | "Repairs" | "Custom Work";
  categorySlug: string;
  description: string;
  location: string;
  specifications: string[];
  dimensions?: string;
  image: string;
  featured?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  workType: string;
  description: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  beforeNotes: string;
  afterNotes: string;
  turnaroundTime: string;
}

export const projectCategories = [
  "All",
  "Gates",
  "Doors",
  "Railings",
  "Fences",
  "Grills",
  "Repairs",
  "Custom Work"
] as const;

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Heavy-Duty Modern Compound Gate",
    category: "Gates",
    categorySlug: "gates",
    description: "Architectural sliding gate with vertical louvers and integrated pedestrian access door. Built with heavy gauge MS hollow pipes.",
    location: "Sanjeeva Nagar, Proddatur",
    specifications: [
      "14-gauge 50x50mm MS square framing",
      "Concealed heavy ball-bearing bottom roller track",
      "Epoxy rust-proof primer with matte charcoal finish"
    ],
    dimensions: "16 ft width x 6.5 ft height",
    image: "/images/projects/gate-modern-compound.svg",
    featured: true
  },
  {
    id: "proj-2",
    title: "Double-Leaf Residential Entrance Gate",
    category: "Gates",
    categorySlug: "gates",
    description: "Classic double-swing driveway gate featuring geometric iron spindles, reinforced hinge pivots, and ground lock bar.",
    location: "Bollavaram, Proddatur",
    specifications: [
      "Heavy pivot pin hinges with brass washers",
      "Solid 12mm MS square vertical rods",
      "Weatherproof gloss enamel coating"
    ],
    dimensions: "12 ft width x 6 ft height",
    image: "/images/projects/gate-double-swing.svg",
    featured: true
  },
  {
    id: "proj-3",
    title: "Security Grill Safety Entrance Door",
    category: "Doors",
    categorySlug: "doors",
    description: "External safety barrier door mounted in front of main wooden entrance. Features high-tensile solid square rods and multi-lock plate.",
    location: "Gandhi Road, Proddatur",
    specifications: [
      "Solid 12mm square bar grid with central decorative motif",
      "Full perimeter angle frame with concrete anchor lugs",
      "Concealed padlock housing box preventing hacksaw access"
    ],
    dimensions: "3.5 ft width x 7 ft height",
    image: "/images/projects/door-security-safety.svg",
    featured: true
  },
  {
    id: "proj-4",
    title: "Duplex Internal Staircase Baluster Railing",
    category: "Railings",
    categorySlug: "railings",
    description: "Clean minimalist stair railing with ergonomic round handrail pipe and precision-welded vertical uprights.",
    location: "Rameshwaram, Proddatur",
    specifications: [
      "40mm circular top handrail with capped terminals",
      "Anchored to granite steps using heavy core-drilled studs",
      "Satin black polyurethane protective finish"
    ],
    dimensions: "28 running feet",
    image: "/images/projects/railing-staircase-modern.svg",
    featured: true
  },
  {
    id: "proj-5",
    title: "First-Floor Terrace Parapet Safety Railing",
    category: "Railings",
    categorySlug: "railings",
    description: "High-strength terrace boundary railing designed to meet child-safe standards and resist seasonal monsoon winds.",
    location: "Modameedapalli, Proddatur",
    specifications: [
      "Gusseted base mounting plates bolted into concrete parapet",
      "Horizontal 4-tier safety rail profile",
      "Dual coat zinc chromate anti-corrosion barrier"
    ],
    dimensions: "44 running feet x 3.5 ft height",
    image: "/images/projects/railing-balcony-safety.svg",
    featured: false
  },
  {
    id: "proj-6",
    title: "Box-Type Safety Window Grills",
    category: "Grills",
    categorySlug: "grills",
    description: "Sturdy box-projection window security grill providing space for exterior window opening and plant pots.",
    location: "Kalyan Nagar, Proddatur",
    specifications: [
      "Solid 10mm cold-drawn square bars",
      "Embedded rebar grouting inside brick masonry wall",
      "Smooth ground seams with seamless corner joins"
    ],
    dimensions: "4 ft x 4 ft (Set of 6 units)",
    image: "/images/projects/grill-box-window.svg",
    featured: true
  },
  {
    id: "proj-7",
    title: "Commercial Yard Boundary Spike Fence",
    category: "Fences",
    categorySlug: "fences",
    description: "High perimeter security fence topped with anti-climb spear points for a logistics yard on the outskirts of Proddatur.",
    location: "Kadapa Road, Proddatur Bypass",
    specifications: [
      "Heavy 50x50x5mm MS angle posts at 8 ft spacing",
      "Laser-welded cast spearhead tops",
      "Heavy-duty concrete pier foundation anchor"
    ],
    dimensions: "120 running feet x 7 ft height",
    image: "/images/projects/fence-boundary-spear.svg",
    featured: false
  },
  {
    id: "proj-8",
    title: "Emergency Main Gate Hinge & Track Arc Welding Repair",
    category: "Repairs",
    categorySlug: "repairs",
    description: "On-site restoration of a severely sagging 18-foot commercial gate with seized hinges and cracked ground rail.",
    location: "Industrial Estate, Proddatur",
    specifications: [
      "Machined heavy barrel hinges welded with E6013 electrodes",
      "Re-leveled bottom track with new cast iron ball bearing rollers",
      "Post-repair structural reinforcement bracing"
    ],
    dimensions: "18 ft commercial gate repair",
    image: "/images/projects/repair-welding-gate.svg",
    featured: true
  },
  {
    id: "proj-9",
    title: "Terrace Overhead Water Tank Structural Steel Stand",
    category: "Custom Work",
    categorySlug: "custom work",
    description: "Heavy structural steel elevation tower designed to support twin 1,000-liter water storage tanks with safe maintenance platform.",
    location: "Yerraguntla Road, Proddatur",
    specifications: [
      "75x40mm MS C-Channel legs with diagonal cross-bracing",
      "Chequered safety base plate with drainage holes",
      "Load capacity rated beyond 2.5 metric tonnes"
    ],
    dimensions: "8 ft x 5 ft base x 6 ft elevation",
    image: "/images/projects/custom-tank-stand.svg",
    featured: true
  }
];

export const beforeAfterProjects: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Corroded Compound Gate Replacement",
    category: "Gates",
    workType: "Complete Gate Reconstruction & Modernization",
    description: "Replaced a 15-year-old badly rusted, dragging iron gate with an architectural high-strength sliding compound gate.",
    location: "Sanjeeva Nagar, Proddatur",
    beforeImage: "/images/projects/ba-gate-before.svg",
    afterImage: "/images/projects/ba-gate-after.svg",
    beforeNotes: "Severe bottom corrosion, rusted hinges causing ground scraping, warped frame unable to latch securely.",
    afterNotes: "Reinforced MS tubular frame, precision ball-bearing guide rail, integrated privacy slats, anti-rust primer coat.",
    turnaroundTime: "4 Days (Fabrication & Installation)"
  },
  {
    id: "ba-2",
    title: "Balcony Railing Upgrade & Child Safety Enclosure",
    category: "Railings",
    workType: "Custom Balcony Safety Railing Fabrication",
    description: "Upgraded weak, loose low-height parapet rods to a modern, robust, architectural safety railing with safe 3.5-inch picket gaps.",
    location: "Bollavaram, Proddatur",
    beforeImage: "/images/projects/ba-railing-before.svg",
    afterImage: "/images/projects/ba-railing-after.svg",
    beforeNotes: "Wobbly mounting brackets, excessive gap hazard for children, visible rust bleed onto exterior plaster.",
    afterNotes: "Anchor-bolted solid base plates, heavy ERW circular handrail, uniform vertical pickets, durable satin black finish.",
    turnaroundTime: "2 Days"
  },
  {
    id: "ba-3",
    title: "On-Site Commercial Gate Hinge & Structural Arc Welding Repair",
    category: "Repairs",
    workType: "Emergency On-Site Welding & Structural Realignment",
    description: "Repaired fractured hinge bracket on heavy commercial warehouse gate without needing to dismantle the entire gate off-site.",
    location: "Proddatur Bypass Road",
    beforeImage: "/images/projects/ba-repair-before.svg",
    afterImage: "/images/projects/ba-repair-after.svg",
    beforeNotes: "Sheared top hinge pivot from truck impact, gate jammed open blocking access, twisted vertical post.",
    afterNotes: "High-amperage deep penetration arc weld, heavy gusset reinforcement plate, new machined greaseable hinge pin.",
    turnaroundTime: "Same-Day Emergency Service (4 Hours)"
  }
];
