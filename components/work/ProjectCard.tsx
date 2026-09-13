"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import type { Project } from "@/constants/index";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function ProjectCard({ project, isMobile }: { project: Project; isMobile: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
    const springY = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

    return (
        <ScrollReveal duration={0.9} y={40}>
            <div
                ref={cardRef}
                className="group flex flex-col gap-6 cursor-pointer"
                data-cursor-text="VIEW"
            >
            <div className={`w-full ${project.aspectClass} overflow-hidden bg-zinc-100 relative`}>
                <div className="w-full h-8 flex items-center justify-between px-4 bg-brand-secondary/40 backdrop-blur-sm z-10 absolute top-0 left-0">
                    <span className="font-mono text-[9px] text-brand-neutral font-bold tracking-widest">{`${project.title.toUpperCase()} // LABS`}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neutral/30" />
                </div>

                <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    style={isMobile ? {} : { y: springY, willChange: "transform" }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className={isMobile ? "w-full h-full object-cover pt-8" : "absolute top-[-12%] left-0 w-full h-[124%] object-cover pt-8"}
                />
            </div>

            <div className="flex flex-col gap-1 pt-2">
                <div className="flex justify-between items-baseline">
                    <h3 className="font-heading font-black text-3xl md:text-4xl text-brand-primary tracking-tight group-hover:text-brand-neutral transition-colors duration-300">
                        {project.title}
                    </h3>
                    <span className="font-label text-[10px] md:text-xs font-bold text-brand-neutral tracking-wider text-right uppercase">
                        {project.category}
                    </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-brand-neutral leading-normal mt-0.5">
                    {project.subtitle}
                </p>
            </div>
            </div>
        </ScrollReveal>
    );
}
