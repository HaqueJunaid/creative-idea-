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
    duration = 0.65,
    y = 24,
    className = ""
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            style={{ willChange: "transform, opacity" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

