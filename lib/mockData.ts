export const company = {
  name: "Xenium Xcel Consult",
  tagline: "Recruitment Excellence",
  email: "info@xeniumxcel.com",
  /** Display-friendly phone numbers (placeholder Ghana format — replace with actual lines) */
  phones: ["+233 20 000 0000", "+233 24 000 0000"],
  /** tel: link normalized digits */
  phoneLinks: ["233200000000", "233240000000"],
  whatsapp: "233200000000",
  /** Country / city only — physical office address is intentionally omitted until confirmed */
  address: "Accra, Ghana",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Accra+Ghana",
  destinationCountries: ["Australia", "Middle East", "Europe", "Asia"],
  positioning:
    "Xenium Xcel Consult is a Ghana-based recruitment and travel agency that connects qualified candidates with overseas employers — independent, registered, and regulated for over five years.",
  topBarLine:
    "Independent recruitment & travel agency · Ghana · Registered & regulated · Digital updates & 24/7 support",
  trustBadges: [
    "Registered & regulated for 5+ years",
    "Independent recruitment & travel agency",
    "Ghana-based, globally connected",
    "Digital customer care",
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Visa Processing", href: "/services/visa-processing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Concerns", href: "/concerns" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerExtraLinks = [
  { label: "Visa processing", href: "/services/visa-processing" },
  { label: "Request manpower", href: "/request" },
  { label: "Apply available job", href: "/apply-available-job" },
];

export const commitmentTrio = [
  {
    title: "Commitment",
    description:
      "Our unwavering dedication lies in matching you with the right people, precisely positioned to fulfil your requirements.",
  },
  {
    title: "Capability",
    description:
      "With robust expertise and determination, we have the capability to meet your demands and exceed your highest expectations.",
  },
  {
    title: "Strength",
    description:
      "A vetted talent pool — our pride and our promise, fully committed to helping employers achieve their goals.",
  },
];

export const missionVisionPassion = [
  {
    title: "Our Mission",
    description:
      "To build long-term relationships with valued clients by fulfilling requirements and assuring our best commitment. We believe business is a never-ending story that we prove through exceptional service.",
  },
  {
    title: "Our Vision",
    description:
      "To be a significant part of overseas opportunity creation — connecting qualified talent to employers and ensuring a secure life for all stakeholders.",
  },
  {
    title: "Our Passion",
    description:
      "Our core values are achieved by choosing the best candidates for employers with the right commitment. We are sincere and dedicated in selection — the key to our success.",
  },
];

export type QualityServicePillar = {
  title: string;
  description: string;
};

export const qualityServices: QualityServicePillar[] = [
  {
    title: "Reliable",
    description:
      "Xenium Xcel Consult is a trusted, independent recruitment and travel agency. Reliability is how we build lasting relationships with employers and candidates.",
  },
  {
    title: "Experienced",
    description:
      "Practical experience that strengthens your hiring outcomes and reduces uncertainty in overseas deployment.",
  },
  {
    title: "Professional",
    description:
      "A young, fast-moving professional team ensuring effectiveness and efficiency for every employer requirement.",
  },
  {
    title: "Digital work capability",
    description:
      "We invest in up-to-date technology so employers save time, information stays secure, and updates are visible with one click from anywhere.",
  },
  {
    title: "Strong supportive concerns",
    description:
      "Travel and ticketing, training preparation, and 24/7 digital customer care — everything you need under one accountable team.",
  },
  {
    title: "Comprehensive coverage",
    description:
      "Innovative service design keeps you protected from every eventuality across documentation, deployment, and continuity.",
  },
];

export const expertiseAreas = [
  "Oil & Gas",
  "Manufacturing",
  "Service industries",
  "Construction",
  "Hospitality",
  "Engineering",
];

export const expertiseCards = [
  {
    title: "Oil & Gas",
    description:
      "Onshore and offshore roles aligned with international employer standards — engineering, drilling, welding, mechanical, and safety.",
  },
  {
    title: "Manufacturing",
    description:
      "Electronics, cosmetics, hand gloves, and wider manufacturing demand — skilled and semi-skilled placements aligned to line requirements.",
  },
  {
    title: "Service industries",
    description:
      "Super shops, malls, hotels, cleaning companies, and more — hospitality and service workforce tailored to your brand standards.",
  },
  {
    title: "Construction",
    description:
      "Skilled and unskilled manpower for construction programmes across multiple destination countries.",
  },
  {
    title: "Hospitality",
    description:
      "Restaurant, kitchen, housekeeping, and front-of-house staff prepared with safety, discipline, and service standards.",
  },
  {
    title: "Engineering",
    description:
      "Qualitative engineering workers across disciplines where technical competence and certification alignment are critical.",
  },
];

/** Trade and role families we routinely supply */
export const manpowerRoleTags = [
  "Mason",
  "Shuttering carpenter",
  "Steel fixture",
  "Painter",
  "Electrician",
  "Plumber",
  "Driver",
  "Cleaner",
  "General labour",
  "Construction worker",
  "Factory worker",
  "Restaurant worker",
  "Deliveryman",
  "Engineers",
  "Welders",
  "Drillers",
  "Safety officers",
];

export const pipelineSteps = [
  "Demand letter",
  "Shortlist & interview",
  "Medical & biometrics",
  "Documentation & contracts",
  "Visa & permit",
  "Orientation & training",
  "Ticketing",
  "Mobilisation",
  "Arrival handover",
  "Aftercare",
];

export const processSteps = [
  {
    title: "Demand letter",
    description: "Employer requirements, quantities, compensation, and contract terms captured in a compliant demand package.",
  },
  {
    title: "Shortlist & interview",
    description: "Role-fit screening, trade tests where required, and employer interview rounds with transparent shortlists.",
  },
  {
    title: "Medical & biometrics",
    description: "Country-specific medicals, biometrics, and health clearance aligned to embassy windows.",
  },
  {
    title: "Documentation & contracts",
    description: "Employment contracts, insurance, and file completeness before submission to embassies and authorities.",
  },
  {
    title: "Visa & permit",
    description: "Embassy appointments, visa stamping, and any permit steps required for the destination jurisdiction.",
  },
  {
    title: "Orientation & training",
    description: "Centre-based orientation on safety, discipline, and employer SOPs so workers arrive ready for supervision.",
  },
  {
    title: "Ticketing",
    description: "Travel desk coordination for routes, baggage policy, and rebooking discipline during peak seasons.",
  },
  {
    title: "Mobilisation",
    description: "Batch departures with checklists, airport briefings, and receiving-party contact packs for employers.",
  },
  {
    title: "Arrival handover",
    description: "Post-arrival confirmation, accommodation or transport links where agreed, and first-week check-ins.",
  },
  {
    title: "Aftercare",
    description: "Digital customer care for renewals, replacements, and follow-on hiring waves with the same file standards.",
  },
];

export const galleryCategories = [
  "Restaurant workers",
  "Delivery teams",
  "Cleaners",
  "Construction",
  "Hospitality",
  "Engineering",
];

/** Rich tiles for /gallery — representative deployment sectors */
export const galleryPortfolio = [
  {
    title: "Restaurant workers",
    description: "Hospitality teams for kitchens, service floors, and back-of-house operations abroad.",
    image: "/images/gallery_restaurant_workers_1776281546855.png",
  },
  {
    title: "Delivery teams",
    description: "Logistics and last-mile delivery personnel aligned to employer safety and route standards.",
    image: "/images/gallery_delivery_teams_1776281561147.png",
  },
  {
    title: "Cleaners",
    description: "Commercial and industrial cleaning crews for malls, hotels, and facility contracts.",
    image: "/images/gallery_cleaners_1776281578309.png",
  },
  {
    title: "Construction workers",
    description: "Skilled and general labour for shuttering, masonry, finishing, and site support.",
    image: "/images/gallery_construction_workers_1776281601457.png",
  },
  {
    title: "Hospitality teams",
    description: "Front-of-house and back-of-house staff prepared for hotel and restaurant standards abroad.",
    image: "/images/gallery_agriculture_workers_1776281618937.png",
  },
  {
    title: "Engineers",
    description: "Technical and supervisory engineering support where certification and experience matter.",
    image: "/images/gallery_engineers_1776281636108.png",
  },
] as const;

export type Concern = {
  slug: string;
  name: string;
  description: string;
  overview: string;
  highlights: string[];
  outcomes: string[];
  idealFor: string;
};

export const concerns: Concern[] = [
  {
    slug: "travel-ticketing",
    name: "Travel & air ticketing",
    description: "Employer-ready movement for workers with documentation aligned to embassy, medical, and airline requirements.",
    overview:
      "Our travel desk coordinates ticketing, rebooking, and travel documentation so deployment timelines stay predictable. We work with employers to lock routes, baggage allowances, and arrival handovers that match your receiving team’s expectations.",
    highlights: [
      "Route and fare options reviewed against employer policy and worker welfare",
      "Coordination with medical and orientation schedules before departure",
      "24/7 escalation channel for last-minute gate changes or visa-window issues",
    ],
    outcomes: [
      "Fewer no-shows and date slips at the airport",
      "Single accountable desk instead of scattered brokers",
      "Clear paper trail for audit and employer reporting",
    ],
    idealFor:
      "Employers who need predictable mobilisation batches and transparent travel handling for medium-to-large hiring waves.",
  },
  {
    slug: "training-center",
    name: "Training preparation",
    description: "Orientation, safety, and role-specific preparation so workers arrive ready for your site standards.",
    overview:
      "Training modules cover workplace discipline, basic safety, language essentials where required, and employer-specific briefings. Content can be adapted to oil & gas, manufacturing, construction, hospitality, or household service roles.",
    highlights: [
      "Employer-provided SOPs folded into practical drills where permitted",
      "Assessment checkpoints before final clearance to travel",
      "Digital attendance and progress logs for employer visibility",
    ],
    outcomes: [
      "Shorter on-site induction because fundamentals are already aligned",
      "Lower incident rates in the first ninety days",
      "Better worker confidence and retention through clarity of expectations",
    ],
    idealFor:
      "Employers who want consistent baseline behaviour and safety culture before workers board the flight.",
  },
  {
    slug: "digital-customer-care",
    name: "24/7 digital customer care",
    description: "Always-on support for employers and workers across status, documentation, and deployment queries.",
    overview:
      "Our digital care team operates ticketing, WhatsApp, and voice channels so nothing stalls waiting for “the next business day.” Status updates sync to employer dashboards where enabled.",
    highlights: [
      "Structured case IDs for every employer inquiry",
      "SLA-based escalation to operations and compliance leads",
      "Secure handling of passport, medical, and contract artifacts",
    ],
    outcomes: [
      "Faster resolution of documentation gaps",
      "Employers see the same status workers see — reduced mistrust",
      "Audit-friendly logs for high-volume programmes",
    ],
    idealFor:
      "High-volume recruiters and employers who need continuous visibility during mobilisation peaks.",
  },
  {
    slug: "legal-compliance",
    name: "Legal & compliance backbone",
    description: "Registered, regulated, and disciplined documentation for every applicant file we process.",
    overview:
      "Xenium Xcel Consult operates as an independent, registered, and regulated agency in Ghana. Contracts, demand letters, and worker protections are prepared to withstand scrutiny in both Ghana and the destination jurisdictions we serve.",
    highlights: [
      "File completeness checks before embassy submissions",
      "Employer contract review against standard protections",
      "Transparent fee and disclosure terms agreed before relocation",
    ],
    outcomes: [
      "Lower regulatory risk for employers sponsoring overseas batches",
      "Cleaner embassy interviews and faster clearances",
      "Ethical recruitment reputation you can defend publicly",
    ],
    idealFor:
      "Employers and principals who cannot afford grey-area paperwork or informal sub-agents in the chain.",
  },
];

export const stats = [
  { label: "Years of operation", value: "5+" },
  { label: "Happy employer partners", value: "500+" },
  { label: "Core team members", value: "20" },
  { label: "Customer rating (out of 5)", value: "4.8" },
];

export const partners = [
  "Al Banar Arabian Group",
  "Al-Dirah Catering and Supplies",
  "European Guarding Security",
  "Leading GCC contractors",
  "Hospitality groups",
  "Industrial employers",
];

export const testimonials = [
  {
    quote:
      "Our experience with Xenium Xcel Consult was truly exceptional. Their consultants provided highly skilled professionals in the positions we needed.",
    name: "Yesir Qadri",
    title: "CEO, Al Banar Arabian Group",
  },
  {
    quote:
      "A noteworthy recruiting agency — utmost transparency in the recruitment procedure and an assured competitive advantage.",
    name: "Ahmad Al-Qureshi",
    title: "Executive Director, Al-Dirah Catering and Supplies",
  },
  {
    quote:
      "Xenium Xcel Consult is excellent at long-run relationships with us — we hope they maintain the same with every client.",
    name: "Alex Mccoy",
    title: "CEO, European Guarding Security",
  },
];

export const faqs = [
  {
    question: "Where is Xenium Xcel Consult based?",
    answer:
      "We are an independent recruitment and travel agency based in Ghana, serving overseas employers across multiple sectors and destination countries.",
  },
  {
    question: "Are you a licensed or registered agency?",
    answer:
      "Yes. Xenium Xcel Consult is an independent, registered, and regulated company that has been operating for over five years.",
  },
  {
    question: "Which sectors do you recruit for?",
    answer:
      "We support oil & gas, manufacturing, service industries, construction, hospitality, and engineering — both skilled and unskilled placements.",
  },
  {
    question: "How does the application process work?",
    answer:
      "Candidates apply through our Apply Available Job page. We review documents, shortlist for employer interviews, and coordinate medicals, training, visa, and ticketing through to deployment.",
  },
  {
    question: "Do you handle visa processing?",
    answer:
      "Yes. Visa processing is one of our dedicated services — see our Visa Processing page for the full requirement list and step-by-step guidance.",
  },
  {
    question: "How quickly can recruitment start?",
    answer:
      "Recruitment starts after requirement confirmation and document readiness. Contact us to align a practical hiring timeline.",
  },
  {
    question: "Can employers monitor progress digitally?",
    answer:
      "Yes. Our digital work capability is designed to provide one-click updates across key recruitment milestones.",
  },
  {
    question: "Do you support interview coordination?",
    answer:
      "Yes. We support interview coordination and candidate selection alignment based on employer requirements.",
  },
  {
    question: "What information do you need to proceed?",
    answer:
      "Employer profile, job descriptions, compensation and benefits, contract duration, interview mode, and any country-specific medical or skill tests required.",
  },
];
