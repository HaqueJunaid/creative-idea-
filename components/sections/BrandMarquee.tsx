"use client";

import { brands, Brand } from "@/constants";
import ScrollReveal from "@/components/common/ScrollReveal";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface BrandCardProps {
    brand: Brand;
}

function BrandCard({ brand }: BrandCardProps) {
    return (
        <div
            data-cursor-text="CLIENT"
            className="group relative flex items-center justify-between gap-6 px-8 py-5 rounded-none border border-brand-primary/10 bg-brand-secondary/60 hover:bg-brand-primary/[0.04] hover:border-brand-tertiary/40 transition-all duration-300 min-w-[260px] md:min-w-[300px] select-none cursor-pointer"
        >
            {/* Top accent tick on hover */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-tertiary group-hover:w-full transition-all duration-500 ease-out" />

            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="h-7 md:h-8 flex items-center">
                    <img
                        src={brand.logo}
                        alt={brand.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-auto max-w-[140px] md:max-w-[160px] object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 text-brand-primary"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-brand-neutral/80 group-hover:text-brand-primary transition-colors duration-200">
                        {brand.category}
                    </span>
                </div>
            </div>

            {brand.highlight && (
                <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                    <span className="font-label text-[9px] font-bold tracking-widest text-brand-tertiary bg-brand-tertiary/8 px-2 py-0.5 uppercase border border-brand-tertiary/20">
                        {brand.highlight}
                    </span>
                    <ArrowUpRight className="size-3 text-brand-neutral/50 group-hover:text-brand-tertiary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
            )}
        </div>
    );
}

export default function BrandMarquee() {
    const row1 = brands.slice(0, 6);
    const row2 = brands.slice(6, 12);

    // Duplicate arrays for seamless infinite looping
    const marqueeRow1 = [...row1, ...row1, ...row1];
    const marqueeRow2 = [...row2, ...row2, ...row2];

    return (
        <section
            id="clients"
            className="relative w-full py-16 md:py-24 bg-transparent text-brand-primary overflow-hidden border-y border-brand-primary/10"
        >
            <div className="px-6 lg:px-16 w-full mx-auto mb-10 md:mb-14">
                <ScrollReveal duration={0.8}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2.5 text-brand-tertiary text-[11px] font-bold tracking-[.2em] uppercase font-label">
                                <span className="w-7 h-px bg-brand-tertiary" />
                                <span>CLIENT NETWORK & COLLABORATORS</span>
                            </div>
                            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl tracking-tight text-brand-primary leading-tight">
                                Trusted by <span className="font-serif italic font-normal text-brand-tertiary">Category Leaders.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-1 md:text-right max-w-sm">
                            <div className="flex items-center md:justify-end gap-2 font-mono text-xs font-bold text-brand-primary tracking-widest uppercase">
                                <Sparkles className="size-3.5 text-brand-tertiary" />
                                <span>100% BESPOKE ARCHITECTURE</span>
                            </div>
                            <p className="font-sans text-xs md:text-sm text-brand-neutral">
                                From VC-backed scale-ups to global institutions, we engineer unfair digital advantages.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ── Continuous Infinite Marquee Tracks ── */}
            <div className="relative w-full flex flex-col gap-4 md:gap-5 mask-fade-x marquee-container overflow-hidden">
                {/* Track 1 (Leftwards scroll) */}
                <div className="flex gap-4 md:gap-5 animate-marquee">
                    {marqueeRow1.map((brand, index) => (
                        <BrandCard key={`row1-${brand.id}-${index}`} brand={brand} />
                    ))}
                </div>

                {/* Track 2 (Rightwards / Reverse scroll) */}
                <div className="flex gap-4 md:gap-5 animate-marquee-reverse">
                    {marqueeRow2.map((brand, index) => (
                        <BrandCard key={`row2-${brand.id}-${index}`} brand={brand} />
                    ))}
                </div>
            </div>

            {/* ── Bottom Micro Metrics Strip ── */}
            <div className="px-6 lg:px-16 w-full mx-auto mt-10 md:mt-12">
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-brand-primary/5 font-mono text-[10px] md:text-xs text-brand-neutral tracking-widest uppercase">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>ACTIVE CLIENT PARTNERSHIPS — 2025/2026</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-6">
                        <span>GLOBAL REACH // 14 COUNTRIES</span>
                        <span>AVERAGE ROAS LIFT // +210%</span>
                        <span>0% COOKIE-CUTTER TEMPLATES</span>
                    </div>
                </div>
            </div>
        </section>
    );
}