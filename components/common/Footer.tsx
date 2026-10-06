"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useContact } from "@/context/ContactContext";
import { ArrowUpIcon, AtSign } from "lucide-react";
import { footerMarqueeText, legalLinks, socialLinks } from "@/constants";

const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
        case "instagram":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
            );
        case "facebook":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            );
        case "linkedin":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            );
        case "youtube":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
                </svg>
            );
        default:
            return null;
    }
};

export default function Footer() {
    const { openContact } = useContact();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative md:sticky md:bottom-0 md:z-0 w-full md:h-165 bg-brand-primary text-brand-secondary overflow-hidden flex flex-col justify-between py-10 px-6 lg:px-16">
            <div 
                className="absolute inset-0 pointer-events-none" 
                style={{ backgroundSize: '4rem 4rem' }}
            />

            {/* Top Marquee Bar */}
            <div className="absolute top-0 inset-x-0 h-14 bg-brand-tertiary flex items-center overflow-hidden z-10 select-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    className="flex whitespace-nowrap text-xs md:text-sm font-mono font-black tracking-[0.25em] text-white uppercase"
                >
                    <span className="pr-4">{footerMarqueeText}</span>
                    <span className="pr-4">{footerMarqueeText}</span>
                </motion.div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-16 md:mt-18 gap-5 md:gap-6">
                <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none mb-6">
                    Ready to{" "}
                    <em className="font-serif italic font-normal text-brand-tertiary">begin?</em>
                </h2>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                    <button
                        onClick={openContact}
                        className="group flex items-center justify-center gap-3 font-label font-bold text-xs md:text-sm tracking-[0.15em] uppercase text-brand-primary bg-white px-9 py-4.5 hover:bg-brand-tertiary hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-brand-tertiary/20 cursor-pointer border-none"
                    >
                        Let&apos;s Talk
                        <ArrowUpIcon className="size-5 rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                    </button>

                    <Link
                        href="/#work"
                        className="group flex items-center justify-center gap-3 font-label font-bold text-xs md:text-sm tracking-[0.15em] uppercase text-white border border-white/10 bg-white/1 px-9 py-4.5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-full sm:w-auto"
                    >
                        View Our Work
                        <ArrowUpIcon className="size-5 rotate-90 group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Social Handles with Icons + Text + Arrows */}
                <div className="flex flex-wrap gap-2.5 justify-center items-center mt-2">
                    {socialLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group font-label text-[10px] md:text-[11px] font-bold tracking-[0.16em] text-brand-secondary/80 border border-white/10 bg-white/5 px-4 py-2.5 hover:bg-brand-tertiary hover:text-white hover:border-brand-tertiary transition-all duration-300 uppercase flex items-center gap-2 cursor-pointer"
                        >
                            {getSocialIcon(item.label)}
                            <span>{item.label}</span>
                            <ArrowUpIcon className="size-3.5 rotate-45 group-hover:rotate-0 transition-transform duration-300 opacity-70 group-hover:opacity-100" />
                        </a>
                    ))}
                </div>

                {/* Legal & Policy Navigation with balanced space */}
                <div className="flex flex-wrap gap-2.5 justify-center items-center mt-0 mb-3 md:mb-5">
                    {legalLinks.map((item) => (
                        item.href === "#contact" ? (
                            <button
                                key={item.label}
                                onClick={openContact}
                                className="font-label text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-brand-neutral border border-white/5 bg-white/1 px-5 py-2.5 hover:bg-white/5 hover:border-white/10 hover:text-white transition-all duration-200 uppercase cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="font-label text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-brand-neutral border border-white/5 bg-white/1 px-5 py-2.5 hover:bg-white/5 hover:border-white/10 hover:text-white transition-all duration-200 uppercase"
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="relative z-10 w-full border-t border-white/10 pt-6 flex flex-col md:flex-row gap-6 justify-between items-center text-brand-secondary/50 text-[10px] md:text-xs font-normal tracking-[0.2em] uppercase font-label">
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
                    className="w-9 h-9 border border-brand-secondary/15 hover:bg-brand-secondary hover:border-brand-secondary/30 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-all duration-200 group"
                >
                    <ArrowUpIcon className="size-4 transition-transform duration-300 group-hover:text-brand-primary" />
                </button>
            </div>
        </footer>
    );
}
