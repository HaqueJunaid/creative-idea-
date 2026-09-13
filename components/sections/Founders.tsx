"use client";

import { useState, useRef, useCallback } from "react";
import { founders } from "@/constants";
import FounderCard from "@/components/founders/FounderCard";
import FounderModal from "@/components/founders/FounderModal";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Founders() {
    const [activeModal, setActiveModal] = useState<{ index: number; rect: DOMRect } | null>(null);
    const cardRefs = useRef<(HTMLElement | null)[]>([]);

    const handleOpen = useCallback((index: number, rect: DOMRect) => {
        setActiveModal({ index, rect });
    }, []);

    const handleClose = useCallback(() => {
        setActiveModal(null);
    }, []);

    return (
        <>
            <section
                id="about"
                className="relative w-full min-h-screen py-[clamp(70px,10vw,140px)] px-6 lg:px-16 bg-transparent text-brand-secondary overflow-hidden"
            >
                {/* ── Header ── */}
                <ScrollReveal duration={0.8}>
                    <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-10 mb-17.5">
                        <div>
                            {/* Eyebrow */}
                            <div className="flex items-center gap-2.5 mb-4.5 text-brand-tertiary text-[11px] font-bold tracking-[.18em] uppercase font-label">
                                <span className="w-7.5 h-px bg-brand-tertiary" />
                                The mind behind the work
                            </div>

                            <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary max-w-190">
                                One mind.<br />
                                One <em className="font-serif font-normal text-brand-tertiary italic">obsession.</em>
                            </h2>
                        </div>

                        <p className="max-w-82.5 text-brand-neutral text-sm leading-[1.7] font-sans">
                            Strategy, engineering, and creative vision come together through the founder who built the agency from the ground up.
                        </p>
                    </header>
                </ScrollReveal>

                {/* ── Card ── */}
                <div className="w-full max-w-362.5 mx-auto">
                    {founders.map((founder, i) => (
                        <ScrollReveal key={founder.name} delay={i * 0.15} duration={0.9} y={40} className="w-full">
                            <FounderCard
                                founder={founder}
                                index={i}
                                total={founders.length}
                                onOpen={handleOpen}
                                hidden={activeModal?.index === i}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ── Modal (portal) ── */}
            {activeModal !== null && (
                <FounderModal
                    founder={founders[activeModal.index]}
                    founderIndex={activeModal.index}
                    total={founders.length}
                    originRect={activeModal.rect}
                    onClose={handleClose}
                />
            )}
        </>
    );
}
