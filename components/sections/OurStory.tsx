"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { 
    Sparkles, 
    Compass, 
    Layers, 
    MapPin, 
    TrendingUp, 
    CheckCircle2, 
    ArrowRight,
    ArrowLeft
} from "lucide-react";
import { storyChapters, ecosystemPillars } from "@/constants";

const iconMap = {
    Sparkles,
    Layers,
    Compass,
    MapPin,
    TrendingUp
};

export default function OurStory() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const currentChapter = storyChapters[activeTab];
    const IconComponent = iconMap[currentChapter.iconName];

    return (
        <section
            id="story"
            className="relative w-full py-24 md:py-36 px-6 lg:px-16 bg-transparent text-brand-primary overflow-hidden"
        >
            <div className="w-full mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
                {/* ── Section Header ── */}
                <ScrollReveal duration={0.8}>
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-brand-primary/10">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2.5 text-brand-tertiary text-[11px] font-bold tracking-[.18em] uppercase font-label">
                                <span className="w-7.5 h-px bg-brand-tertiary" />
                                Our Story • Est. 2019 • Jamshedpur
                            </div>

                            <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary leading-[1.05]">
                                Built on vision.<br />
                                Driven by{" "}
                                <em className="font-serif font-normal text-brand-tertiary italic">
                                    better ideas.
                                </em>
                            </h2>
                        </div>

                        <div className="max-w-md flex flex-col gap-3">
                            <p className="font-sans text-brand-neutral text-sm md:text-base leading-relaxed">
                                Creative Idea is a full-service creative agency in Jamshedpur, Jharkhand, helping businesses build strong brands through design, digital marketing and creative solutions.
                            </p>
                            <span className="font-mono text-[11px] text-brand-neutral/80 tracking-wider uppercase font-semibold">
                                Complete In-House Creative Agency
                            </span>
                        </div>
                    </header>
                </ScrollReveal>

                {/* ── Interactive Chapter Switcher (Card Selector Grid) ── */}
                <ScrollReveal duration={0.8} y={15}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                        {storyChapters.map((chapter, idx) => {
                            const isActive = activeTab === idx;
                            const ChapterIcon = iconMap[chapter.iconName];
                            return (
                                <button
                                    key={chapter.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`relative text-left p-4 sm:p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-4 group ${
                                        isActive
                                            ? "bg-white border-brand-primary/20 shadow-[0_12px_30px_rgba(0,0,0,0.06)] -translate-y-1"
                                            : "bg-white/40 border-brand-primary/8 hover:bg-white/80 hover:border-brand-primary/15"
                                    }`}
                                >
                                    {/* Active Highlight Top Indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeStoryHighlight"
                                            className="absolute -top-px left-0 right-0 h-1 bg-brand-tertiary"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}

                                    <div className="flex items-center justify-between w-full">
                                        <span
                                            className={`font-mono text-xs font-bold transition-colors ${
                                                isActive
                                                    ? "text-brand-tertiary"
                                                    : "text-brand-neutral group-hover:text-brand-primary"
                                            }`}
                                        >
                                            {chapter.number}
                                        </span>
                                        <div
                                            className={`w-7 h-7 flex items-center justify-center transition-colors ${
                                                isActive
                                                    ? "bg-brand-tertiary/10 text-brand-tertiary"
                                                    : "bg-brand-primary/5 text-brand-neutral group-hover:text-brand-primary"
                                            }`}
                                        >
                                            <ChapterIcon className="w-3.5 h-3.5" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-brand-neutral">
                                            {chapter.year}
                                        </span>
                                        <span
                                            className={`font-label font-bold text-xs sm:text-sm tracking-tight transition-colors ${
                                                isActive ? "text-brand-primary" : "text-brand-primary/70 group-hover:text-brand-primary"
                                            }`}
                                        >
                                            {chapter.tag}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* ── Story Narrative Display (Light Theme Card System) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Active Chapter Card */}
                    <div className="lg:col-span-7 flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentChapter.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex-1 bg-white border border-brand-primary/10 p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-[0_14px_45px_rgba(0,0,0,0.04)]"
                            >
                                {/* Decorative Watermark Number */}
                                <span className="absolute -bottom-6 -right-4 font-heading font-black text-9xl text-brand-primary/3 select-none pointer-events-none">
                                    {currentChapter.number}
                                </span>

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-brand-tertiary/10 text-brand-tertiary flex items-center justify-center border border-brand-tertiary/20">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-mono text-[10px] tracking-widest text-brand-neutral uppercase">
                                                    CHAPTER {currentChapter.number}
                                                </span>
                                                <span className="font-label font-bold text-sm text-brand-primary">
                                                    {currentChapter.year}
                                                </span>
                                            </div>
                                        </div>

                                        <span className="font-mono text-xs text-brand-neutral border border-brand-primary/10 px-3 py-1 bg-brand-primary/2">
                                            {currentChapter.number} / 05
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-heading font-black text-2xl sm:text-4xl text-brand-primary tracking-tight">
                                            {currentChapter.title}
                                        </h3>
                                        <p className="font-serif italic text-lg sm:text-xl text-brand-tertiary font-normal">
                                            &ldquo;{currentChapter.headline}&rdquo;
                                        </p>
                                    </div>

                                    <p className="font-sans text-base sm:text-lg text-brand-primary/80 leading-relaxed font-normal">
                                        {currentChapter.content}
                                    </p>
                                </div>

                                {/* Key Highlights */}
                                <div className="mt-8 pt-8 border-t border-brand-primary/10 flex flex-col gap-3 relative z-10">
                                    <span className="font-mono text-[10px] text-brand-neutral tracking-widest uppercase font-bold">
                                        KEY TAKEAWAYS &amp; FOCUS
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {currentChapter.highlights.map((h, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-primary/80 bg-brand-primary/2 border border-brand-primary/8 p-3.5"
                                            >
                                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-brand-tertiary" />
                                                <span className="leading-snug">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Prev / Next Action Controls */}
                                <div className="mt-8 flex items-center justify-between pt-6 border-t border-brand-primary/10">
                                    <button
                                        onClick={() =>
                                            setActiveTab((prev) =>
                                                prev === 0 ? storyChapters.length - 1 : prev - 1
                                            )
                                        }
                                        className="group inline-flex items-center gap-2 text-xs font-label font-bold tracking-widest uppercase text-brand-neutral hover:text-brand-primary transition-colors cursor-pointer"
                                    >
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        <span>Previous</span>
                                    </button>

                                    <button
                                        onClick={() =>
                                            setActiveTab((prev) =>
                                                prev === storyChapters.length - 1 ? 0 : prev + 1
                                            )
                                        }
                                        className="group inline-flex items-center gap-2 text-xs font-label font-bold tracking-widest uppercase text-brand-primary hover:text-brand-tertiary transition-colors cursor-pointer"
                                    >
                                        <span>Next Chapter</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Under One Roof Ecosystem & Stats */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        {/* Capabilities Panel */}
                        <div className="bg-white border border-brand-primary/10 p-8 flex flex-col gap-6 shadow-[0_14px_45px_rgba(0,0,0,0.04)]">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] text-brand-tertiary font-bold tracking-[0.2em] uppercase">
                                    THE AGENCY ECOSYSTEM
                                </span>
                                <span className="font-mono text-[10px] text-brand-primary font-bold bg-brand-primary/5 border border-brand-primary/10 px-2.5 py-1 uppercase">
                                    Under One Roof
                                </span>
                            </div>

                            <h4 className="font-heading font-black text-2xl text-brand-primary tracking-tight">
                                Complete branding, digital marketing &amp; physical production.
                            </h4>

                            <div className="flex flex-col gap-2.5">
                                {ecosystemPillars.map((pillar) => (
                                    <div
                                        key={pillar.title}
                                        className="group flex items-center justify-between p-3.5 bg-brand-primary/2 hover:bg-brand-primary/5 border border-brand-primary/8 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-xs text-brand-neutral font-bold">
                                                {pillar.num}
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="font-label font-bold text-sm text-brand-primary group-hover:text-brand-tertiary transition-colors uppercase tracking-wider">
                                                    {pillar.title}
                                                </span>
                                                <span className="font-sans text-xs text-brand-neutral">
                                                    {pillar.desc}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-1.5 h-1.5 bg-brand-tertiary opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Agency Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border border-brand-primary/10 p-6 flex flex-col justify-between gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                                <span className="font-mono text-[10px] text-brand-neutral tracking-widest uppercase font-semibold">
                                    ORIGIN YEAR
                                </span>
                                <span className="font-heading font-black text-3xl sm:text-4xl text-brand-primary">
                                    2019
                                </span>
                                <span className="font-sans text-xs text-brand-neutral">
                                    Founded in Jamshedpur
                                </span>
                            </div>

                            <div className="bg-white border border-brand-primary/10 p-6 flex flex-col justify-between gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                                <span className="font-mono text-[10px] text-brand-neutral tracking-widest uppercase font-semibold">
                                    SUITE
                                </span>
                                <span className="font-heading font-black text-3xl sm:text-4xl text-brand-tertiary">
                                    12+
                                </span>
                                <span className="font-sans text-xs text-brand-neutral">
                                    Full-Service Capabilities
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Narrative Bottom Banner ── */}
                <ScrollReveal duration={0.8} y={20}>
                    <div className="w-full bg-white border border-brand-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_14px_45px_rgba(0,0,0,0.04)]">
                        <div className="flex flex-col gap-3 max-w-2xl text-center md:text-left">
                            <span className="font-mono text-[10px] text-brand-tertiary tracking-[0.25em] font-bold uppercase">
                                THE MANIFESTO
                            </span>
                            <h3 className="font-heading font-black text-2xl md:text-3xl text-brand-primary tracking-tight">
                                Staying focused on one thing: <span className="text-brand-tertiary font-serif italic font-normal">building brands through better ideas.</span>
                            </h3>
                            <p className="font-sans text-sm md:text-base text-brand-neutral leading-relaxed">
                                From creating a brand identity to building its digital presence, we help businesses communicate their ideas effectively and create lasting brand experiences across Jharkhand and beyond.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                            <a
                                href="#contact"
                                className="font-label font-bold text-xs tracking-[0.18em] uppercase bg-brand-primary text-brand-secondary px-8 py-4.5 hover:bg-brand-tertiary hover:text-white transition-all duration-300 shadow-lg cursor-pointer text-center"
                            >
                                Start Your Project
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
