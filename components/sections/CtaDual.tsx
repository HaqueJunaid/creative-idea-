"use client";

import { motion } from "motion/react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { useContact } from "@/context/ContactContext";
import { ArrowUpIcon, Sparkles, Handshake } from "lucide-react";

export default function CtaDual() {
    const { openContact, openJoin } = useContact();

    return (
        <section className="relative w-full py-20 px-6 lg:px-16 bg-transparent text-brand-primary overflow-hidden">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* ── Left CTA: Join Us ── */}
                <ScrollReveal duration={0.8} y={20} className="h-full">
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="group relative bg-white border border-brand-primary/10 p-8 sm:p-12 flex flex-col justify-between gap-8 h-full shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] hover:border-brand-primary/20 transition-all duration-300 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 relative z-10">
                            <div className="flex items-center gap-2 text-brand-tertiary text-[11px] font-bold tracking-[.18em] uppercase font-label">
                                <Sparkles className="w-4 h-4" />
                                Careers &amp; Culture
                            </div>
                            <h3 className="font-heading font-black text-3xl sm:text-4xl text-brand-primary tracking-tight leading-tight">
                                Love what we&apos;re <br className="hidden sm:block" />
                                <span className="font-serif italic font-normal text-brand-tertiary">building?</span>
                            </h3>
                            <p className="font-sans text-brand-neutral text-sm sm:text-base leading-relaxed max-w-md">
                                We are always looking for passionate designers, strategists, developers, and storytellers to push creative boundaries together.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-brand-primary/10 flex items-center justify-between relative z-10">
                            <button
                                onClick={openJoin}
                                className="group/btn inline-flex items-center gap-3 font-label font-bold text-xs sm:text-sm tracking-[0.15em] uppercase text-brand-primary bg-brand-primary/5 hover:bg-brand-primary hover:text-white px-8 py-4 transition-all duration-300 cursor-pointer border-none"
                            >
                                <span>Join Us</span>
                                <ArrowUpIcon className="w-4 h-4 rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                            </button>
                            <span className="font-mono text-[10px] text-brand-neutral tracking-widest uppercase hidden sm:inline-block">
                                Open Opportunities
                            </span>
                        </div>
                    </motion.div>
                </ScrollReveal>

                {/* ── Right CTA: Contact Us ── */}
                <ScrollReveal duration={0.8} y={20} delay={0.1} className="h-full">
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="group relative bg-brand-primary text-brand-secondary p-8 sm:p-12 flex flex-col justify-between gap-8 h-full shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 relative z-10">
                            <div className="flex items-center gap-2 text-brand-yellow text-[11px] font-bold tracking-[.18em] uppercase font-label">
                                <Handshake className="w-4 h-4" />
                                Client Partnerships
                            </div>
                            <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                                Need a marketing <br className="hidden sm:block" />
                                <span className="font-serif italic font-normal text-brand-yellow">partner?</span>
                            </h3>
                            <p className="font-sans text-brand-secondary/70 text-sm sm:text-base leading-relaxed max-w-md">
                                Let&apos;s build memorable campaigns, responsive digital experiences, and high-impact physical branding for your business.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                            <button
                                onClick={openContact}
                                className="group/btn inline-flex items-center gap-3 font-label font-bold text-xs sm:text-sm tracking-[0.15em] uppercase text-brand-primary bg-brand-yellow hover:bg-white px-8 py-4 transition-all duration-300 cursor-pointer shadow-lg"
                            >
                                <span>Contact Us</span>
                                <ArrowUpIcon className="w-4 h-4 rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                            </button>
                            <span className="font-mono text-[10px] text-brand-secondary/50 tracking-widest uppercase hidden sm:inline-block">
                                Let&apos;s Collaborate
                            </span>
                        </div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
