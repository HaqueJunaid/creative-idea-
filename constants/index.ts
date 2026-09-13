export interface NavbarProps {
    label: string;
    link: string;
}

export const navLinks: NavbarProps[] = [
    {
        label: "WORK",
        link: "/#work",
    },
    {
        label: "SERVICES",
        link: "/#services",
    },
    {
        label: "PROCESS",
        link: "/#process",
    },
    {
        label: "ABOUT",
        link: "/#about",
    },
    {
        label: "CONTACT",
        link: "#contact",
    },
]


export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    filterCategory: "BRANDING" | "DIGITAL" | "CAMPAIGN" | "3D & HARDWARE";
    image: string;
    aspectClass: string;
    year: string;
    client: string;
    description: string;
    deliverables: string[];
    metrics: string;
    accentColor?: string;
}

export const allProjects: Project[] = [
    {
        id: "01",
        title: "Nova",
        subtitle: "Fashion Campaign & Art Direction",
        category: "SOCIAL ADVERTISING / ART DIRECTION",
        filterCategory: "CAMPAIGN",
        image: "/mockups/project-nova.svg",
        aspectClass: "aspect-[3/4]",
        year: "2025",
        client: "Nova Apparel Paris",
        description: "A high-velocity global editorial launch campaign designed to disrupt scroll fatigue and establish cultural resonance across North America and Europe.",
        deliverables: ["Editorial Photography", "3D Motion Hooks", "Paid Social Ads", "Landing Experience"],
        metrics: "+240% ROAS Improvement",
        accentColor: "#AC002D",
    },
    {
        id: "02",
        title: "Arc Studio",
        subtitle: "Digital Identity & Spatial Portfolio",
        category: "BRANDING / WEB DESIGN",
        filterCategory: "BRANDING",
        image: "/mockups/project-arc.svg",
        aspectClass: "aspect-[4/3]",
        year: "2025",
        client: "Arc Architectural Atelier",
        description: "A monolithic, brutalist digital identity and portfolio system for a leading Scandinavian architecture firm, balancing spatial rhythm and typography.",
        deliverables: ["Brand Identity", "Design System", "Next.js Web Experience", "Editorial Catalog"],
        metrics: "Awwwards Site of the Day",
        accentColor: "#0F0F0F",
    },
    {
        id: "03",
        title: "Vanta",
        subtitle: "Luxury E-commerce & Spatial Storefront",
        category: "WEB DEVELOPMENT / UI DESIGN",
        filterCategory: "DIGITAL",
        image: "/mockups/project-vanta.svg",
        aspectClass: "aspect-[4/5]",
        year: "2025",
        client: "Vanta Technical Wear",
        description: "An ultra-performant headless e-commerce experience crafted with fluid 3D interactions, micro-animations, and seamless checkout optimization.",
        deliverables: ["Headless Shopify", "GLSL Shaders", "UX Architecture", "Conversion Funnel"],
        metrics: "+182% Mobile Conversion",
        accentColor: "#3366FF",
    },
    {
        id: "04",
        title: "Monument",
        subtitle: "Acoustics & Sonic Campaign",
        category: "CREATIVE DIRECTION / PAID ADS",
        filterCategory: "CAMPAIGN",
        image: "/mockups/project-monument.svg",
        aspectClass: "aspect-[16/10]",
        year: "2024",
        client: "Monument Audio Lab",
        description: "A sensory product launch for next-generation studio monitors, pairing visceral audiovisual hooks with precision audience targeting.",
        deliverables: ["Creative Direction", "Sound Identity", "Meta/TikTok Ad Stacks", "Packaging Guide"],
        metrics: "4.8M Impressions / Launch Week",
        accentColor: "#FFE739",
    },
    {
        id: "05",
        title: "Aethel",
        subtitle: "Swiss Horology & Kinetic Flagship",
        category: "3D INTERACTIVE / WEB DEVELOPMENT",
        filterCategory: "DIGITAL",
        image: "/mockups/project-aethel.svg",
        aspectClass: "aspect-[4/3]",
        year: "2025",
        client: "Aethel Watches Geneva",
        description: "An interactive digital showroom featuring real-time WebGL component inspection, tourbillon mechanics visualization, and custom atelier configurator.",
        deliverables: ["Interactive 3D Configurator", "WebGL Rendering", "Brand Storytelling", "VIP Client Portal"],
        metrics: "$3.4M Pre-Orders Generated",
        accentColor: "#AC002D",
    },
    {
        id: "06",
        title: "Komorebi",
        subtitle: "Organic Living & Editorial Packaging",
        category: "BRAND IDENTITY / PACKAGING",
        filterCategory: "BRANDING",
        image: "/mockups/project-komorebi.svg",
        aspectClass: "aspect-[3/4]",
        year: "2025",
        client: "Komorebi Botanical Goods",
        description: "A tactile, earth-toned visual identity and sustainable unboxing architecture for an artisanal botanical and ceramics studio based in Kyoto.",
        deliverables: ["Visual Identity", "Sustainable Packaging", "Custom Typography", "Lookbook Curation"],
        metrics: "Stock Sold Out in 48 Hours",
        accentColor: "#6B705C",
    },
    {
        id: "07",
        title: "Hyperion AI",
        subtitle: "Autonomous Intelligence Infrastructure",
        category: "PRODUCT DESIGN / DESIGN SYSTEM",
        filterCategory: "DIGITAL",
        image: "/mockups/project-hyperion.svg",
        aspectClass: "aspect-[16/10]",
        year: "2026",
        client: "Hyperion Neural Labs",
        description: "Design system and dashboard interface for an enterprise agentic cognitive compute platform, translating complex node graphs into fluid UI states.",
        deliverables: ["Enterprise UI/UX", "Design Tokens System", "Interactive Graph Canvas", "Component Library"],
        metrics: "Acquired Series A ($18M)",
        accentColor: "#00F0FF",
    },
    {
        id: "08",
        title: "Soma Robotics",
        subtitle: "Kinetic Kinematics & Industrial Future",
        category: "CREATIVE DIRECTION / 3D MOTION",
        filterCategory: "3D & HARDWARE",
        image: "/mockups/project-soma.svg",
        aspectClass: "aspect-[4/5]",
        year: "2025",
        client: "Soma Kinematics",
        description: "A cinematic reveal film and digital experience showcasing next-generation industrial actuators and bio-mimetic robotic joints.",
        deliverables: ["3D CGI Animation", "Industrial Design Film", "Interactive Microsite", "Keynote Visuals"],
        metrics: "12M+ Social Impressions",
        accentColor: "#FF5722",
    },
    {
        id: "09",
        title: "L'Étoile",
        subtitle: "Haute Couture Runway & Digital Atelier",
        category: "ART DIRECTION / EDITORIAL CAMPAIGN",
        filterCategory: "CAMPAIGN",
        image: "/mockups/project-letoile.svg",
        aspectClass: "aspect-[3/4]",
        year: "2025",
        client: "Maison L'Étoile",
        description: "A multi-sensory Paris Fashion Week digital experience, enabling private clientele to experience garment drape, textile physics, and runway audio in real time.",
        deliverables: ["Art Direction", "Immersive Lookbook", "Private Salon Portal", "Video Direction"],
        metrics: "+310% VIP Client Inquiries",
        accentColor: "#AC002D",
    },
    {
        id: "10",
        title: "Solstice Sound",
        subtitle: "Spatial Acoustics & Generative Audio",
        category: "INTERACTIVE WEB / SOUND IDENTITY",
        filterCategory: "3D & HARDWARE",
        image: "/mockups/project-solstice.svg",
        aspectClass: "aspect-[16/10]",
        year: "2026",
        client: "Solstice Acoustic Engineering",
        description: "A browser-based generative soundscape architecture and product presentation for architectural acoustic dampening installations.",
        deliverables: ["Generative Web Audio", "Spatial Sound System", "Interactive Case Studies", "Design System"],
        metrics: "FWA of the Month Winner",
        accentColor: "#E0A96D",
    },
];

export const projectsCol1: Project[] = [
    allProjects[0],
    allProjects[2],
];

export const projectsCol2: Project[] = [
    allProjects[1],
    allProjects[3],
];

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const services: ServiceItem[] = [
    {
        id: "01",
        title: "Social Media Advertising",
        description: "Data-driven campaigns designed to interrupt the scroll and demand attention.",
        image: "/mockups/service-social.svg"
    },
    {
        id: "02",
        title: "Creative Design",
        description: "Bold visual identities and editorial art direction that separates you from the noise.",
        image: "/mockups/service-creative.svg"
    },
    {
        id: "03",
        title: "Web Design & Development",
        description: "High-performance digital experiences built with architectural precision.",
        image: "/mockups/service-web.svg"
    },
    {
        id: "04",
        title: "Event Branding & Wedding Graphics",
        description: "Customizing every touchpoint of your special occasion — from invites to on-site experiences.",
        image: "/mockups/service-strategy.svg"
    }
];

export interface Founder {
    name: string;
    role: string;
    shortBio: string;
    bio: string;
    stats: [string, string][];
    images: string[];
}

export const founders: Founder[] = [
    {
        name: "Adarsh Sharma",
        role: "Founder",
        shortBio: "Turns ideas into thoughtful digital & physical products built to solve brands problems.",
        bio: "Adarsh combines technical expertise with a founder’s mindset to turn ideas into scalable digital & physical design products, building solutions that are purposeful, practical, and made to create lasting impact.",
        stats: [["4+", "Years"], ["25", "Brands"], ["30+", "Projects"]],
        images: [
            "/mockups/founder-junaid-1.svg",
            "/mockups/founder-junaid-2.svg",
            "/mockups/founder-junaid-3.svg",
        ],
    }
];

export interface FounderModalProps {
    founder: Founder;
    founderIndex: number;
    total: number;
    originRect: DOMRect;
    onClose: () => void;
}

export interface ProcessStep {
    id: string;
    tag: string;
    title: string;
    description: string;
    outputs: string[];
}

export const processSteps: ProcessStep[] = [
    {
        id: "01",
        tag: "AUDIT & DISCOVERY",
        title: "Deep-Dive Market Audit",
        description: "We audit your existing analytics data, run extensive research on your primary competitors, and inspect your assets. We define exact baselines and locate immediate opportunities.",
        outputs: ["Asset & Traffic Audit", "Competitor Matrix Report", "Baseline ROI Forecast"]
    },
    {
        id: "02",
        tag: "STRATEGY & ARCHITECTURE",
        title: "The Growth Blueprint",
        description: "We translate insights into strategy. We map out your target buyer personas, structure the visual/copy angle, and create a comprehensive 90-day execution blueprint.",
        outputs: ["Target Persona Framework", "90-Day Campaign Blueprint", "Creative Direction Guidelines"]
    },
    {
        id: "03",
        tag: "PRODUCTION & CREATIVE",
        title: "High-Velocity Asset Creation",
        description: "Our creative team produces conversion-focused static layouts, ad copy hooks, landing pages, and vertical videos designed to bypass scroll fatigue and demand attention.",
        outputs: ["Performance Ad Copy", "High-Converting Landers", "Video Hook Variations"]
    },
    {
        id: "04",
        tag: "EXPERIMENTATION & SCALE",
        title: "Launch, Analyze & Scale",
        description: "We launch the campaigns and run daily micro-experiments. By monitoring real-time data, we adjust budgets, optimize user journeys, and aggressively scale winning variations.",
        outputs: ["Multi-Variant Ad Experiments", "Weekly Insights & Reports", "Budget Scaling Execution"]
    }
];

export interface Brand {
    id: string;
    name: string;
    category: string;
    logo: string;
    highlight?: string;
}

export const brands: Brand[] = [
    {
        id: "01",
        name: "VERTEX LABS",
        category: "Cloud Systems",
        logo: "/brands/vertex.svg",
        highlight: "Series B Scale",
    },
    {
        id: "02",
        name: "AURA SOUND",
        category: "Spatial Acoustics",
        logo: "/brands/aura.svg",
        highlight: "Global Launch",
    },
    {
        id: "03",
        name: "KROMA",
        category: "Creative Technology",
        logo: "/brands/kroma.svg",
        highlight: "Brand System",
    },
    {
        id: "04",
        name: "NEXUS ROBOTICS",
        category: "Autonomous Systems",
        logo: "/brands/nexus.svg",
        highlight: "Interactive Platform",
    },
    {
        id: "05",
        name: "VALENCE BIO",
        category: "Biotech Innovation",
        logo: "/brands/valence.svg",
        highlight: "Web Experience",
    },
    {
        id: "06",
        name: "LUMEN ARCH",
        category: "Architectural Studio",
        logo: "/brands/lumen.svg",
        highlight: "Digital Identity",
    },
    {
        id: "07",
        name: "HYPERION",
        category: "Aerospace Dynamics",
        logo: "/brands/hyperion.svg",
        highlight: "3D Motion Campaign",
    },
    {
        id: "08",
        name: "SYNAPSE AI",
        category: "Cognitive Intelligence",
        logo: "/brands/synapse.svg",
        highlight: "Growth Architecture",
    },
    {
        id: "09",
        name: "VELA STUDIO",
        category: "Luxury Mobility",
        logo: "/brands/vela.svg",
        highlight: "Visual Direction",
    },
    {
        id: "10",
        name: "ORBITAL",
        category: "Satellite Networks",
        logo: "/brands/orbital.svg",
        highlight: "Full Rebrand",
    },
    {
        id: "11",
        name: "MONOLITH",
        category: "Design Atelier",
        logo: "/brands/monolith.svg",
        highlight: "Flagship Digital",
    },
    {
        id: "12",
        name: "SOLARIS",
        category: "Clean Energy Tech",
        logo: "/brands/solaris.svg",
        highlight: "Conversion Funnel",
    },
];