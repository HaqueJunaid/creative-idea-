"use client";

import { useState } from "react";
import { motion, useTransform, useMotionValueEvent, type MotionValue } from "motion/react";

const particles = Array.from({ length: 100 }).map((_, i) => {
    const angle = (i / 100) * 2 * Math.PI + (Math.random() - 0.5) * 0.15;
    const velocity = 80 + Math.random() * 200;
    const x = Math.cos(angle) * velocity;
    const y = Math.sin(angle) * velocity;
    const colors = ["#3366FF", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#8B5CF6"];
    return {
        id: i,
        x,
        y,
        color: colors[i % colors.length],
        size: 5 + Math.random() * 6,
        isRound: Math.random() > 0.4,
        rotate: (Math.random() - 0.5) * 360,
        delay: Math.random() * 0.08
    };
});

interface DeliveredLabelProps {
    progress: MotionValue<number>;
}

export default function DeliveredLabel({ progress }: DeliveredLabelProps) {
    const [hasPopped, setHasPopped] = useState(false);

    useMotionValueEvent(progress, "change", (latest: number) => {
        if (latest >= 0.98) {
            setHasPopped(true);
        } else if (latest < 0.85) {
            setHasPopped(false);
        }
    });

    const opacity = useTransform(progress, [0.85, 0.98], [0.25, 1]);
    const scale = useTransform(progress, [0.85, 0.98], [0.96, 1]);

    const nodeBg = useTransform(
        progress,
        [0.85, 0.98],
        ["#E5E5E5", "#AC002D"]
    );

    const nodeBorder = useTransform(
        progress,
        [0.85, 0.98],
        ["rgba(15, 15, 15, 0.1)", "rgba(172, 0, 45, 0.25)"]
    );

    return (
        <div className="flex gap-8 md:gap-16 relative pb-12">
            <div className="flex flex-col items-center relative z-10 w-12 shrink-0">
                <motion.div
                    style={{ borderColor: nodeBorder }}
                    className="w-12 h-12 rounded-full border bg-[#F9F8F6] flex items-center justify-center relative"
                >
                    <motion.div
                        style={{ backgroundColor: nodeBg }}
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                    >
                        <motion.svg
                            initial={{ scale: 0, opacity: 0 }}
                            animate={hasPopped ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </motion.svg>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div style={{ opacity, scale }} className="flex-1 pt-2 relative">
                <span className="font-mono text-[10px] text-brand-neutral font-bold tracking-[.15em] uppercase block">
                    SUCCESS
                </span>

                <h3 className="font-heading font-black text-2xl md:text-3xl text-brand-primary mt-2.5 tracking-tight relative inline-block">
                    Project Delivered
                    
                    {hasPopped && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
                            {particles.map((p) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                                    animate={{
                                        x: p.x,
                                        y: p.y,
                                        scale: [0, 1.3, 0.9, 0],
                                        opacity: [1, 1, 0.4, 0],
                                        rotate: p.rotate
                                    }}
                                    transition={{
                                        duration: 1.1,
                                        ease: [0.1, 0.8, 0.3, 1],
                                        delay: p.delay,
                                        times: [0, 0.15, 0.7, 1]
                                    }}
                                    style={{
                                        position: "absolute",
                                        width: p.size,
                                        height: p.size,
                                        backgroundColor: p.color,
                                        borderRadius: p.isRound ? "50%" : "0%",
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </h3>
            </motion.div>
        </div>
    );
}
