"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react";

export default function PageLoader() {
    const progress = useMotionValue(0);
    const [displayProgress, setDisplayProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    // Transform progress (0 to 100) to percentage strings
    const widthTransform = useTransform(progress, (v) => `${v}%`);

    useEffect(() => {
        // Smoothly animate the progress motion value from 0 to 100
        const controls = animate(progress, 100, {
            duration: 3.5,
            ease: [0.42, 0, 0.58, 1], // Smooth cubic ease-in-out
            onUpdate: (latest) => {
                setDisplayProgress(Math.round(latest));
            },
            onComplete: () => {
                // Initiate fade out of the inner loader contents first
                setIsFading(true);
                setTimeout(() => {
                    setIsFinished(true);
                }, 500); // Slide up after fade-out completes
            }
        });

        return () => controls.stop();
    }, [progress]);

    useEffect(() => {
        if (isFinished) {
            document.body.style.overflow = "hidden";
            const timeout = setTimeout(() => {
                setIsRemoved(true);
                document.body.style.overflow = "auto";
            }, 1000);
            return () => clearTimeout(timeout);
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [isFinished]);

    if (isRemoved) return null;

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    className="fixed inset-0 bg-[#B3022E] z-99999 flex flex-col justify-center items-stretch"
                    initial={{ y: "0%" }}
                    exit={{ 
                        y: "-100%",
                        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
                    }}
                >
                    {/* Centered container with side padding/margins - Fades out before sliding up */}
                    <motion.div 
                        className="w-full px-12 md:px-24 lg:px-32 max-w-7xl mx-auto"
                        animate={{ opacity: isFading ? 0 : 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="relative w-full h-0.5 bg-white/10">
                            {/* Progress Line */}
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-white"
                                style={{ width: widthTransform }}
                            />

                            {/* Moving Percentage Indicator */}
                            <motion.div 
                                className="absolute top-6 font-serif italic font-medium text-white text-5xl md:text-8xl tracking-tight pointer-events-none select-none"
                                style={{ 
                                    left: widthTransform,
                                    x: "-50%" // Centers it over the leading edge
                                }}
                            >
                                {displayProgress}%
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
