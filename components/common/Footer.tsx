"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useContact } from "@/context/ContactContext";
import { ArrowUpIcon, AtSign } from "lucide-react";

export default function Footer() {
    const { openContact } = useContact();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const marqueeText = "HIGH-VELOCITY CREATIVE ✦ SOCIAL ADVERTISING ✦ WEB DEVELOPMENT ✦ BRAND STRATEGY ✦ ART DIRECTION ✦ ";

    return (
        <footer className="relative md:sticky md:bottom-0 md:z-0 w-full md:h-155 bg-brand-primary text-brand-secondary overflow-hidden flex flex-col justify-between py-12 px-6 lg:px-16">
            <div 
                className="absolute inset-0 ointer-events-none" 
                style={{ backgroundSize: '4rem 4rem' }}
            />

            <div className="absolute top-0 inset-x-0 h-14 bg-brand-tertiary flex items-center overflow-hidden z-10 select-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    className="flex whitespace-nowrap text-xs md:text-sm font-mono font-black tracking-[0.25em] text-white uppercase"
                >
                    <span className="pr-4">{marqueeText}</span>
                    <span className="pr-4">{marqueeText}</span>
                </motion.div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-20 gap-8 md:gap-12">
                <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none">
                    Ready to{" "}
                    <em className="font-serif italic font-normal text-brand-tertiary">begin?</em>
                </h2>

                <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
                    <button
                        onClick={openContact}
                        className="group flex items-center justify-center gap-3 font-label font-bold text-xs md:text-sm tracking-[0.15em] uppercase text-brand-primary bg-white px-10 py-5 hover:bg-brand-tertiary hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-brand-tertiary/20 cursor-pointer border-none"
                    >
                        Let&apos;s Talk
                        <ArrowUpIcon className="size-6 rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                    </button>

                    <Link
                        href="#work"
                        className="group flex items-center justify-center gap-3 font-label font-bold text-xs md:text-sm tracking-[0.15em] uppercase text-white border border-white/10 bg-white/1 px-10 py-5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-full sm:w-auto"
                    >
                        View Our Work
                        <ArrowUpIcon className="size-6 rotate-90 group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
                </div>

                <div className="flex flex-wrap gap-2.5 justify-center items-center mt-2 mb-10 md:mb-0">
                    {["Privacy Policy", "Terms of Service", "Support"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="font-label text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-brand-neutral border border-white/5 bg-white/1 px-6 py-3  hover:bg-white/5 hover:border-white/10 hover:text-white transition-all duration-200 uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="relative z-10 w-full border-t border-white/5 pt-8 flex flex-col md:flex-row gap-6 justify-between items-center text-brand-secondary/50 text-[10px] md:text-xs font-normal tracking-[0.2em] uppercase font-label">
                <div>
                    &copy; 2026 CREATIVE IDEA. ALL RIGHTS RESERVED.
                </div>

                <div className="text-brand-secondary/50 font-label tracking-widest text-[9px] md:text-[10px] lowercase flex items-center justify-center gap-1.5">
                    <AtSign className="size-4" />
                    creativeidea.studio12@gmail.com
                </div>

                <button
                    onClick={scrollToTop}
                    aria-label="Back to Top"
                    className="w-10 h-10 rounded-full border border-brand-secondary/10 hover:bg-brand-secondary hover:border-brand-secondary/30 flex items-center justify-center text-white cursor-pointer hover:scale-150 transition-all duration-200 group"
                >
                    <ArrowUpIcon className="transition-transform duration-300 group-hover:text-brand-primary" />
                </button>
            </div>
        </footer>
    );
}
