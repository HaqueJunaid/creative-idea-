"use client";

import { motion } from "motion/react";
import React from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    blur?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    duration = 0.85,
    y = 30,
    blur = 12,
    className = ""
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: y, filter: `blur(${blur}px)` }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
