"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsCol1, projectsCol2 } from "@/constants/index";
import ProjectCard from "@/components/work/ProjectCard";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function SelectedWork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const y2 = useTransform(scrollYProgress, [0, 1], [80, 260]);

    const springConfig = { stiffness: 80, damping: 25, mass: 0.5 };
    const smoothY1 = useSpring(y1, springConfig);
    const smoothY2 = useSpring(y2, springConfig);

    return (
        <section
            id="work"
            ref={containerRef}
            className="relative w-full py-24 md:py-36 px-6 lg:px-16 bg-transparent overflow-hidden"
        >
            <div className="w-full mx-auto flex flex-col gap-20">
                <ScrollReveal duration={0.8}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-primary/10 pb-10 gap-6">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary">
                                Selected <span className="font-serif italic font-normal text-brand-tertiary">Work.</span>
                            </h2>
                            <p className="font-sans text-brand-neutral text-sm md:text-lg">
                                Ideas designed to move brands forward.
                            </p>
                        </div>

                        <Link
                            href="/works"
                            data-magnetic
                            data-cursor-text="ALL WORKS"
                            className="group inline-flex items-center gap-3 font-label font-bold text-xs md:text-sm tracking-[0.16em] uppercase text-brand-primary hover:text-brand-tertiary transition-all duration-300 pb-1 self-start md:self-end"
                        >
                            <span className="relative pb-0.5">
                                See all works
                                <span className="absolute bottom-0 left-0 w-full h-px bg-brand-primary group-hover:bg-brand-tertiary transition-colors duration-300" />
                            </span>
                            <span className="w-9 h-9 rounded-full border border-brand-primary/20 flex items-center justify-center group-hover:border-brand-tertiary group-hover:bg-brand-tertiary group-hover:text-white transition-all duration-300">
                                <ArrowUpRight className="size-4.5 rotate-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </span>
                        </Link>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-28 w-full items-start">
                    <motion.div style={{ y: isMobile ? 0 : smoothY1 }} className="flex flex-col gap-24 md:gap-36">
                        {projectsCol1.map((project) => (
                            <ProjectCard key={project.id} project={project} isMobile={isMobile} />
                        ))}
                    </motion.div>

                    <motion.div style={{ y: isMobile ? 0 : smoothY2 }} className="flex flex-col gap-24 md:gap-36 md:pt-24">
                        {projectsCol2.map((project) => (
                            <ProjectCard key={project.id} project={project} isMobile={isMobile} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
