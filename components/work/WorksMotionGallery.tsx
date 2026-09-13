"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { allProjects, type Project } from "@/constants/index";
import ScrollReveal from "@/components/common/ScrollReveal";
import { ArrowUpRight, X, Sparkles, Layers, SlidersHorizontal } from "lucide-react";

type FilterTab = "ALL" | "BRANDING" | "DIGITAL" | "CAMPAIGN" | "3D & HARDWARE";
type ViewMode = "showcase" | "archive";

export default function WorksMotionGallery() {
    const [selectedCategory, setSelectedCategory] = useState<FilterTab>("ALL");
    const [viewMode, setViewMode] = useState<ViewMode>("showcase");
    const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
    const [hoveredArchiveProject, setHoveredArchiveProject] = useState<Project | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (selectedCategory === "ALL") return allProjects;
        return allProjects.filter((p) => p.filterCategory === selectedCategory);
    }, [selectedCategory]);

    // Split for staggered dual-column motion runway
    const col1Projects = useMemo(() => {
        return filteredProjects.filter((_, i) => i % 2 === 0);
    }, [filteredProjects]);

    const col2Projects = useMemo(() => {
        return filteredProjects.filter((_, i) => i % 2 !== 0);
    }, [filteredProjects]);

    // Global scroll progress for the works gallery
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax transforms for asymmetric dual runway
    const col1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const col2Y = useTransform(scrollYProgress, [0, 1], [60, 220]);
    const springCol1Y = useSpring(col1Y, { stiffness: 80, damping: 25, mass: 0.5 });
    const springCol2Y = useSpring(col2Y, { stiffness: 80, damping: 25, mass: 0.5 });

    const handlePointerMove = (e: React.PointerEvent) => {
        mouseX.set(e.clientX + 24);
        mouseY.set(e.clientY - 120);
    };

    const categories: FilterTab[] = ["ALL", "BRANDING", "DIGITAL", "CAMPAIGN", "3D & HARDWARE"];

    return (
        <div ref={containerRef} className="relative w-full text-brand-primary" onPointerMove={handlePointerMove}>
            {/* ── Filter & Mode Switcher Controls ── */}
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-brand-primary/10">
                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((cat) => {
                        const isSelected = selectedCategory === cat;
                        const count = cat === "ALL" 
                            ? allProjects.length 
                            : allProjects.filter((p) => p.filterCategory === cat).length;

                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                data-magnetic
                                className={`relative px-4 py-2 rounded-full font-label text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                                    isSelected
                                        ? "text-brand-secondary bg-brand-primary shadow-sm"
                                        : "text-brand-primary/70 hover:text-brand-primary bg-brand-primary/5 hover:bg-brand-primary/10"
                                }`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {cat}
                                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                                        isSelected ? "bg-brand-tertiary text-white" : "bg-brand-primary/10 text-brand-neutral"
                                    }`}>
                                        {count}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 bg-brand-primary/5 p-1 rounded-full border border-brand-primary/10 self-start md:self-auto">
                    <button
                        onClick={() => setViewMode("showcase")}
                        data-magnetic
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-label text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                            viewMode === "showcase"
                                ? "bg-brand-primary text-brand-secondary shadow"
                                : "text-brand-neutral hover:text-brand-primary"
                        }`}
                    >
                        <Layers className="size-3.5" />
                        Motion Runway
                    </button>
                    <button
                        onClick={() => setViewMode("archive")}
                        data-magnetic
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-label text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                            viewMode === "archive"
                                ? "bg-brand-primary text-brand-secondary shadow"
                                : "text-brand-neutral hover:text-brand-primary"
                        }`}
                    >
                        <SlidersHorizontal className="size-3.5" />
                        Index List
                    </button>
                </div>
            </div>

            {/* ── View 1: Motion Runway (Scroll-Driven Parallax) ── */}
            {viewMode === "showcase" && (
                <div className="relative pt-16 md:pt-24 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-28 w-full items-start">
                        {/* Column 1 */}
                        <motion.div
                            style={{ y: isMobile ? 0 : springCol1Y }}
                            className="flex flex-col gap-24 md:gap-36"
                        >
                            {col1Projects.map((project) => (
                                <WorksMotionCard
                                    key={project.id}
                                    project={project}
                                    isMobile={isMobile}
                                    onOpen={() => setActiveProjectModal(project)}
                                />
                            ))}
                        </motion.div>

                        {/* Column 2 (Offset with Staggered Parallax Speed) */}
                        <motion.div
                            style={{ y: isMobile ? 0 : springCol2Y }}
                            className="flex flex-col gap-24 md:gap-36 md:pt-28"
                        >
                            {col2Projects.map((project) => (
                                <WorksMotionCard
                                    key={project.id}
                                    project={project}
                                    isMobile={isMobile}
                                    onOpen={() => setActiveProjectModal(project)}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* ── View 2: Technical Index List ── */}
            {viewMode === "archive" && (
                <div className="pt-10 pb-32">
                    <div className="w-full border-b border-brand-primary/10 grid grid-cols-12 py-3 font-mono text-[10px] uppercase tracking-widest text-brand-neutral font-bold">
                        <div className="col-span-1">No.</div>
                        <div className="col-span-4 md:col-span-4">Project / Client</div>
                        <div className="col-span-4 md:col-span-3">Discipline</div>
                        <div className="hidden md:block col-span-2">Key Metric</div>
                        <div className="col-span-3 md:col-span-2 text-right">Year / Case</div>
                    </div>

                    <div className="divide-y divide-brand-primary/10">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.5 }}
                                onMouseEnter={() => setHoveredArchiveProject(project)}
                                onMouseLeave={() => setHoveredArchiveProject(null)}
                                onClick={() => setActiveProjectModal(project)}
                                data-cursor-text="VIEW"
                                className="group grid grid-cols-12 py-7 items-center cursor-pointer transition-colors duration-300 hover:bg-brand-primary/5 px-2 md:px-4 -mx-2 md:-mx-4"
                            >
                                <div className="col-span-1 font-mono text-xs md:text-sm font-bold text-brand-neutral group-hover:text-brand-tertiary transition-colors">
                                    {project.id}
                                </div>
                                <div className="col-span-4 md:col-span-4 flex flex-col">
                                    <h3 className="font-heading font-black text-lg md:text-2xl tracking-tight text-brand-primary group-hover:translate-x-1.5 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="font-sans text-xs text-brand-neutral">
                                        {project.client}
                                    </span>
                                </div>
                                <div className="col-span-4 md:col-span-3 font-label text-[10px] md:text-xs font-bold text-brand-neutral uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <div className="hidden md:block col-span-2 font-mono text-xs text-brand-primary font-bold">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-primary/5 border border-brand-primary/10 text-[10px]">
                                        <Sparkles className="size-3 text-brand-tertiary" />
                                        {project.metrics}
                                    </span>
                                </div>
                                <div className="col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                                    <span className="font-mono text-xs text-brand-neutral">{project.year}</span>
                                    <div className="w-8 h-8 rounded-full border border-brand-primary/15 flex items-center justify-center group-hover:bg-brand-tertiary group-hover:border-brand-tertiary group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="size-4 rotate-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Hover Artwork Tooltip for Archive View */}
                    <AnimatePresence>
                        {hoveredArchiveProject && !isMobile && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                style={{
                                    x: mouseX,
                                    y: mouseY,
                                    willChange: "transform",
                                }}
                                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                className="fixed top-0 left-0 pointer-events-none z-50 w-72 h-44 rounded-lg overflow-hidden border border-brand-primary/20 shadow-2xl bg-brand-primary hidden lg:block"
                            >
                                <img
                                    src={hoveredArchiveProject.image}
                                    alt={hoveredArchiveProject.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                    <span className="font-mono text-[10px] text-white tracking-widest uppercase font-bold">
                                        {hoveredArchiveProject.title} {" // "} {hoveredArchiveProject.metrics}
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* ── Project Interactive Modal / Case Drawer ── */}
            <AnimatePresence>
                {activeProjectModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 md:p-10 overflow-y-auto"
                        onClick={() => setActiveProjectModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl bg-brand-secondary border border-brand-primary/15 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
                        >
                            {/* Modal Header Bar */}
                            <div className="w-full bg-brand-primary text-brand-secondary px-6 py-4 flex items-center justify-between border-b border-brand-primary/10">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs text-brand-tertiary font-bold tracking-widest">
                                        {activeProjectModal.id} {" // "} ARCHIVE
                                    </span>
                                    <span className="text-white/20">|</span>
                                    <span className="font-label text-xs tracking-widest uppercase text-white/70">
                                        {activeProjectModal.client}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setActiveProjectModal(null)}
                                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-brand-tertiary transition-all cursor-pointer"
                                >
                                    <X className="size-4" />
                                </button>
                            </div>

                            {/* Modal Scrollable Body */}
                            <div className="p-6 md:p-10 overflow-y-auto flex flex-col gap-8">
                                {/* Visual Preview */}
                                <div className="w-full aspect-[16/9] overflow-hidden bg-brand-primary relative">
                                    <img
                                        src={activeProjectModal.image}
                                        alt={activeProjectModal.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-brand-primary/80 px-3.5 py-1.5 rounded text-white font-mono text-[10px] font-bold tracking-wider">
                                        {activeProjectModal.metrics}
                                    </div>
                                </div>

                                {/* Project Title & Category */}
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-brand-primary/10 pb-6 gap-4">
                                    <div>
                                        <h2 className="font-heading font-black text-4xl md:text-5xl text-brand-primary tracking-tight">
                                            {activeProjectModal.title}
                                        </h2>
                                        <p className="font-sans text-brand-neutral text-base mt-1">
                                            {activeProjectModal.subtitle}
                                        </p>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <span className="font-mono text-xs font-bold text-brand-tertiary block">
                                            RELEASE // {activeProjectModal.year}
                                        </span>
                                        <span className="font-label text-xs tracking-wider uppercase text-brand-neutral">
                                            {activeProjectModal.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Description & Deliverables */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                    <div className="md:col-span-7 flex flex-col gap-4">
                                        <h4 className="font-label text-xs font-bold uppercase tracking-widest text-brand-neutral">
                                            Overview &amp; Creative Intent
                                        </h4>
                                        <p className="font-sans text-brand-primary text-sm md:text-base leading-relaxed">
                                            {activeProjectModal.description}
                                        </p>
                                    </div>

                                    <div className="md:col-span-5 flex flex-col gap-3 bg-brand-primary/5 p-6 rounded border border-brand-primary/10">
                                        <h4 className="font-label text-xs font-bold uppercase tracking-widest text-brand-neutral mb-1">
                                            Scope &amp; Deliverables
                                        </h4>
                                        <ul className="flex flex-col gap-2">
                                            {activeProjectModal.deliverables.map((item, idx) => (
                                                <li key={idx} className="font-mono text-xs text-brand-primary flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-tertiary" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Individual Motion Card Component ──
interface WorksMotionCardProps {
    project: Project;
    isMobile: boolean;
    onOpen: () => void;
}

function WorksMotionCard({ project, isMobile, onOpen }: WorksMotionCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const springImgY = useSpring(imgY, { stiffness: 90, damping: 28, mass: 0.4 });

    return (
        <ScrollReveal duration={0.8} y={35}>
            <div
                ref={cardRef}
                onClick={onOpen}
                className="group flex flex-col gap-6 cursor-pointer"
                data-cursor-text="VIEW"
            >
                {/* Visual Image Container without borders */}
                <div className={`w-full ${project.aspectClass} overflow-hidden bg-zinc-900 relative shadow-sm`}>
                    {/* Technical HUD Top Bar */}
                    <div className="w-full h-8 flex items-center justify-between px-4 bg-brand-secondary/85 z-10 absolute top-0 left-0">
                        <span className="font-mono text-[9px] text-brand-neutral font-bold tracking-widest">
                            {`${project.title.toUpperCase()} // ${project.year}`}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-[8px] text-brand-tertiary font-bold tracking-wider uppercase">
                                {project.filterCategory}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-tertiary" />
                        </div>
                    </div>

                    {/* Metric Tag Badge */}
                    <div className="absolute bottom-3 left-3 z-10 bg-brand-primary/90 px-3 py-1 rounded">
                        <span className="font-mono text-[9px] text-white tracking-wider uppercase font-bold flex items-center gap-1.5">
                            <Sparkles className="size-2.5 text-brand-tertiary" />
                            {project.metrics}
                        </span>
                    </div>

                    {/* Image with spring scroll translate & hover zoom */}
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        style={isMobile ? {} : { y: springImgY, willChange: "transform" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                        }}
                        className={isMobile ? "w-full h-full object-cover pt-8" : "absolute top-[-10%] left-0 w-full h-[120%] object-cover pt-8"}
                    />
                </div>

                {/* Card Meta Content */}
                <div className="flex flex-col gap-2 pt-2">
                    <div className="flex justify-between items-baseline gap-4">
                        <h3 className="font-heading font-black text-3xl md:text-4xl text-brand-primary tracking-tight group-hover:text-brand-tertiary transition-colors duration-300">
                            {project.title}
                        </h3>
                        <span className="font-label text-[10px] md:text-xs font-bold text-brand-neutral tracking-wider text-right uppercase">
                            {project.category}
                        </span>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-brand-neutral leading-relaxed">
                        {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.deliverables.slice(0, 3).map((item, i) => (
                            <span
                                key={i}
                                className="font-mono text-[9px] text-brand-neutral bg-brand-primary/5 px-2 py-0.5 rounded"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}
