"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { ProcessStep } from "@/constants";

interface ProcessStepCardProps {
    step: ProcessStep;
    index: number;
    total: number;
}

export default function ProcessStepCard({ step, index, total }: ProcessStepCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(
        scrollYProgress,
        [0.15, 0.35, 0.6, 0.8],
        [0.35, 1, 1, 0.45]
    );

    const scale = useTransform(
        scrollYProgress,
        [0.15, 0.35, 0.6, 0.8],
        [0.98, 1, 1, 0.98]
    );

    const filter = useTransform(
        scrollYProgress,
        [0.15, 0.35, 0.6, 0.8],
        ["blur(8px)", "blur(0px)", "blur(0px)", "blur(4px)"]
    );

    const nodeBg = useTransform(
        scrollYProgress,
        [0.15, 0.35],
        ["#E5E5E5", "#AC002D"]
    );

    const nodeBorder = useTransform(
        scrollYProgress,
        [0.15, 0.35],
        ["rgba(15, 15, 15, 0.1)", "rgba(172, 0, 45, 0.25)"]
    );

    return (
        <div ref={ref} className="flex gap-8 md:gap-16 relative pb-24 last:pb-8">
            <div className="flex flex-col items-center relative z-10 w-12 shrink-0">
                <motion.div
                    style={{ borderColor: nodeBorder }}
                    className="w-12 h-12 rounded-full border bg-[#F9F8F6] flex items-center justify-center relative"
                >
                    <motion.div
                        style={{ backgroundColor: nodeBg }}
                        className="w-4 h-4 rounded-full"
                    />
                </motion.div>
            </div>

            <motion.div style={{ opacity, scale, filter }} className="flex-1 pt-2">
                <span className="font-mono text-[10px] text-brand-neutral font-bold tracking-[.15em] uppercase">
                    {step.tag}
                </span>

                <h3 className="font-heading font-black text-2xl md:text-3xl text-brand-primary mt-2.5 tracking-tight">
                    {step.title}
                </h3>

                <p className="mt-4 text-brand-neutral text-sm md:text-base leading-relaxed max-w-xl font-sans">
                    {step.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mt-6">
                    {step.outputs.map((out) => (
                        <span
                            key={out}
                            className="font-label text-[10px] font-bold text-brand-primary/75 tracking-wider uppercase border border-brand-primary/10 px-3.5 py-1.5 rounded-full bg-brand-primary/[0.02]"
                        >
                            {out}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
