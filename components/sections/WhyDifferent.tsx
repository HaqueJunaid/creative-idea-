"use client";

import { motion } from "motion/react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { 
    Layers, 
    Lightbulb, 
    UserCheck, 
    Users, 
    Zap, 
    MessageSquareQuote, 
    Handshake
} from "lucide-react";
import { differenceItems } from "@/constants";

const iconMap = {
    Layers,
    Lightbulb,
    UserCheck,
    Users,
    Zap,
    MessageSquareQuote,
    Handshake
};

export default function WhyDifferent() {
    return (
        <section
            id="why-us"
            className="relative w-full py-24 md:py-36 px-6 lg:px-16 bg-transparent text-brand-primary overflow-hidden border-t border-brand-primary/10"
        >
            <div className="w-full mx-auto flex flex-col gap-16 relative z-10">
                {/* ── Section Header ── */}
                <ScrollReveal duration={0.8}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-brand-primary/10">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2.5 text-brand-tertiary text-[11px] font-bold tracking-[.18em] uppercase font-label">
                                <span className="w-7.5 h-px bg-brand-tertiary" />
                                Why Creative Idea
                            </div>

                            <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary leading-[1.05]">
                                What Makes <br />
                                Us <em className="font-serif font-normal text-brand-tertiary italic">Different.</em>
                            </h2>
                        </div>

                        <div className="max-w-md flex flex-col gap-2">
                            <p className="font-sans text-brand-neutral text-sm md:text-base leading-relaxed">
                                A modern hybrid agency model crafted to eliminate friction between big ideas and tangible real-world execution.
                            </p>
                            <span className="font-mono text-[11px] text-brand-tertiary font-bold tracking-widest uppercase">
                                07 Core Differentiators
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── 7 Differentiators Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {differenceItems.map((item, index) => {
                        const IconComponent = iconMap[item.iconName];
                        const isWide = index === 6; // 7th item can span across on large screens
                        return (
                            <ScrollReveal
                                key={item.id}
                                delay={index * 0.07}
                                duration={0.8}
                                y={25}
                                className={isWide ? "md:col-span-2 lg:col-span-3" : ""}
                            >
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className={`group relative bg-white border border-brand-primary/10 p-8 sm:p-10 flex flex-col justify-between gap-8 h-full shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:border-brand-primary/25 transition-all duration-300 overflow-hidden ${
                                        isWide ? "lg:flex-row lg:items-center" : ""
                                    }`}
                                >
                                    {/* Top Accents */}
                                    <div className="flex items-center justify-between w-full">
                                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 border border-brand-tertiary/20 px-3 py-1">
                                            {item.number}
                                        </span>
                                        <div className="w-10 h-10 bg-brand-primary/3 group-hover:bg-brand-tertiary group-hover:text-white transition-colors duration-300 flex items-center justify-center text-brand-primary">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className={`flex flex-col gap-3 ${isWide ? "lg:max-w-2xl" : ""}`}>
                                        <h3 className="font-heading font-black text-xl sm:text-2xl text-brand-primary tracking-tight group-hover:text-brand-tertiary transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="font-sans text-sm sm:text-base text-brand-neutral leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Subtle Watermark Number */}
                                    <span className="absolute -bottom-4 -right-2 font-heading font-black text-8xl text-brand-primary/2 select-none pointer-events-none group-hover:text-brand-tertiary/5 transition-colors duration-300">
                                        {item.number}
                                    </span>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* ── Brand Motto Highlight ── */}
                <ScrollReveal duration={0.8} y={20}>
                    <div className="w-full bg-brand-primary text-brand-secondary p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-3 shadow-xl">
                        <span className="font-mono text-[10px] text-brand-yellow tracking-[0.25em] font-bold uppercase">
                            OUR PROMISE
                        </span>
                        <p className="font-heading font-black text-xl sm:text-2xl md:text-3xl tracking-wide uppercase leading-tight text-white max-w-4xl">
                            ONE TEAM. ONE ROOF. ONE CREATIVE PARTNER FOR YOUR BRAND.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
