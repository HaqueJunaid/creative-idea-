"use client";

import { useRef, useCallback } from "react";
import { animate } from "motion/react";
import type { Founder } from "@/constants";
import { ArrowUpIcon } from "lucide-react";

interface FounderCardProps {
    founder: Founder;
    index: number;
    total: number;
    onOpen: (index: number, rect: DOMRect) => void;
    hidden: boolean;
}

export default function FounderCard({ founder, index, total, onOpen, hidden }: FounderCardProps) {
    const cardRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = useCallback(() => {
        if (!cardRef.current || !imgRef.current || !arrowRef.current) return;
        animate(cardRef.current, { y: -8 }, { type: "spring", stiffness: 300, damping: 20 });
        animate(imgRef.current, { scale: 1.08 }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
        animate(arrowRef.current, { rotate: 45, scale: 1.1 }, { type: "spring", stiffness: 400, damping: 20 });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!cardRef.current || !imgRef.current || !arrowRef.current) return;
        animate(cardRef.current, { y: 0 }, { type: "spring", stiffness: 300, damping: 20 });
        animate(imgRef.current, { scale: 1.04, x: 0, y: 0 }, { duration: 0.7 });
        animate(arrowRef.current, { rotate: 0, scale: 1 }, { type: "spring", stiffness: 400, damping: 20 });
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!cardRef.current || !imgRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        animate(imgRef.current, { x: x * 10, y: y * 10 }, { duration: 0.35 });
    }, []);

    const handleClick = useCallback(() => {
        if (!cardRef.current) return;
        onOpen(index, cardRef.current.getBoundingClientRect());
    }, [index, onOpen]);

    if (total === 1) {
        return (
            <article
                ref={cardRef}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                style={{ visibility: hidden ? "hidden" : "visible" }}
                className="group relative overflow-hidden cursor-pointer isolate will-change-transform
                           w-full bg-[#111111] border border-white/10
                           grid grid-cols-1 md:grid-cols-12 min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[840px] shadow-2xl"
            >
                {/* Left: Portrait image with interactive hover */}
                <div className="md:col-span-5 relative overflow-hidden min-h-[440px] md:min-h-full bg-[#161616]">
                    <img
                        ref={imgRef}
                        src={founder.images[0]}
                        alt={founder.name}
                        style={{ transform: "scale(1.04)" }}
                        className="absolute inset-0 w-full h-full object-cover grayscale will-change-transform"
                    />
                    <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/40 pointer-events-none" />

                    {/* Tag on top left */}
                    <span className="absolute top-8 left-8 z-3 text-white/70 text-xs tracking-[.25em] font-label uppercase">
                        FOUNDER
                    </span>

                    {/* Mobile hint */}
                    <div className="absolute bottom-8 left-8 z-3 md:hidden text-xs tracking-[.15em] font-label text-brand-tertiary uppercase font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-tertiary animate-pulse" />
                        TAP TO VIEW PROFILE
                    </div>
                </div>

                {/* Right: Overview & Credentials panel */}
                <div className="md:col-span-7 relative p-10 sm:p-14 lg:p-18 xl:p-24 flex flex-col justify-between z-2 bg-[#121212]/95 border-t md:border-t-0 md:border-l border-white/10">
                    <div>
                        {/* Top header row */}
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-brand-yellow text-xs lg:text-sm font-bold tracking-[.25em] uppercase font-label">
                                {founder.role}
                            </span>

                            <span
                                ref={arrowRef}
                                className="grid w-13 h-13 place-items-center border border-brand-yellow rounded-full text-brand-yellow
                                           group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-primary
                                           transition-all duration-300"
                            >
                                <ArrowUpIcon className="size-5 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </span>
                        </div>

                        {/* Founder name */}
                        <h2 className="font-serif font-normal leading-[0.92] tracking-tight text-white mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                            {founder.name}
                        </h2>

                        {/* Bio */}
                        <p className="mt-8 text-brand-neutral text-base sm:text-lg lg:text-xl leading-relaxed font-sans max-w-2xl">
                            {founder.bio}
                        </p>
                    </div>

                    {/* Stats & Footer Action */}
                    <div>
                        <div className="grid grid-cols-3 gap-8 pt-10 mt-10 border-t border-white/10">
                            {founder.stats.map(([num, label]) => (
                                <div key={label}>
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
                                        {num}
                                    </div>
                                    <div className="text-xs font-label font-bold text-brand-secondary/50 tracking-widest uppercase mt-2">
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5 text-xs font-label tracking-[.2em] text-white/50 uppercase">
                            <span className="flex items-center gap-2 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                                CLICK TO EXPLORE FULL PROFILE & GALLERY
                            </span>
                            <span className="hidden sm:inline">2026 // STUDIO</span>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article
            ref={cardRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{ visibility: hidden ? "hidden" : "visible" }}
            className="relative overflow-hidden cursor-pointer isolate will-change-transform
                        h-[min(62vw,680px)] min-h-125
                        max-sm:min-h-120 max-sm:h-140"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-black/5 to-black/80 pointer-events-none" />

            {/* Photo */}
            <img
                ref={imgRef}
                src={founder.images[0]}
                alt={founder.name}
                style={{ transform: "scale(1.04)" }}
                className="absolute inset-0 w-full h-full object-cover grayscale will-change-transform"
            />

            {/* Number */}
            <span className="absolute top-5.5 left-5.5 z-3 text-white/65 text-[10px] tracking-[.15em] font-label">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            {/* Arrow button */}
            <span
                ref={arrowRef}
                className="absolute top-5 right-5 z-4 grid w-10.5 h-10.5 place-items-center
                           border border-white/25 rounded-full text-white text-base
                           transition-colors duration-300"
            >
                <ArrowUpIcon className="size-4 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>

            {/* Content */}
            <div className="absolute left-6.25 right-6.25 bottom-6.25 z-3">
                <div className="mb-2 text-brand-tertiary text-[10px] tracking-[.14em] uppercase font-label font-bold">
                    {founder.role}
                </div>
                <h2
                    className="font-serif font-normal leading-[.9] tracking-tighter"
                    style={{ fontSize: "clamp(38px,4vw,65px)" }}
                >
                    {founder.name}
                </h2>
                <p className="mt-3 text-white/65 text-xs leading-relaxed max-w-70 font-sans">
                    {founder.shortBio}
                </p>
            </div>
        </article>
    );
}
