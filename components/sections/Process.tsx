"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { processSteps } from "@/constants";
import ProcessStepCard from "@/components/process/ProcessStepCard";
import DeliveredLabel from "@/components/process/DeliveredLabel";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 90%"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 25,
        mass: 0.3
    });

    return (
        <section
            id="process"
            ref={containerRef}
            className="relative w-full py-24 md:py-36 px-6 lg:px-16 bg-transparent text-brand-primary"
        >
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-32" duration={0.8}>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2.5 text-brand-tertiary text-[11px] font-bold tracking-[.18em] uppercase font-label">
                            <span className="w-7.5 h-px bg-brand-tertiary" />
                            Our Process
                        </div>

                        <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-primary leading-tight">
                            A Blueprint <br />
                            For High-Impact <br />
                            <em className="font-serif font-normal text-brand-tertiary italic">Growth.</em>
                        </h2>

                        <p className="max-w-md text-brand-neutral text-sm md:text-base leading-relaxed font-sans mt-2">
                            We eliminate guesswork. We audit your infrastructure, engineer the campaign framework, generate hook variations, and aggressively scale what works.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="lg:col-span-7 relative pl-0">
                    <div className="absolute left-6 top-6 bottom-6 w-[2px] -translate-x-1/2 pointer-events-none">
                        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line
                                x1="1"
                                y1="0"
                                x2="1"
                                y2="100%"
                                stroke="rgba(15, 15, 15, 0.07)"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                            <motion.line
                                x1="1"
                                y1="0"
                                x2="1"
                                y2="100%"
                                stroke="var(--color-brand-tertiary)"
                                strokeWidth="2"
                                style={{ pathLength: smoothProgress }}
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col">
                        {processSteps.map((step, i) => (
                            <ProcessStepCard
                                key={step.id}
                                step={step}
                                index={i}
                                total={processSteps.length}
                            />
                        ))}
                        <DeliveredLabel progress={smoothProgress} />
                    </div>
                </div>
            </div>
        </section>
    );
}
