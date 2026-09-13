"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { services } from "@/constants";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 25, mass: 0.5 };
    const imageX = useSpring(mouseX, springConfig);
    const imageY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - 150);
        mouseY.set(e.clientY - rect.top - 180);
    };

    return (
        <section
            ref={containerRef}
            id="services"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative w-full py-24 px-6 lg:px-16 bg-brand-tertiary text-brand-secondary overflow-hidden cursor-none"
        >
            <div className="w-full mx-auto flex flex-col relative z-10">
                <ScrollReveal duration={0.8}>
                    <div className="flex flex-col gap-4 border-b border-brand-yellow/30 pb-10">
                        <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-secondary">
                            What We <em className="font-serif font-normal italic text-brand-yellow">Do?</em>
                        </h2>
                        <p className="font-sans text-brand-secondary/50 text-sm md:text-lg">
                            Tailored creative capabilities to help your brand stand out.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="flex flex-col w-full">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.id} delay={index * 0.08} duration={0.8} y={20}>
                            <div
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                data-cursor-text={service.title}
                                className="group relative w-full border-b border-brand-yellow/30 py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center cursor-none transition-all duration-300"
                            >
                                <div className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-brand-tertiary md:text-brand-secondary/20 group-hover:text-brand-yellow transition-colors duration-300 min-w-20">
                                    {service.id}
                                </div>
                                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                                    <h3 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-secondary md:text-brand-secondary/20 group-hover:text-brand-secondary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-sm md:text-base text-brand-secondary/40 md:max-w-md lg:max-w-lg leading-relaxed group-hover:text-brand-yellow transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
            <motion.div
                style={{
                    x: imageX,
                    y: imageY,
                    pointerEvents: "none",
                }}
                animate={{
                    opacity: hoveredIndex !== null ? 1 : 0,
                    scale: hoveredIndex !== null ? 1 : 0.8,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hidden md:block absolute top-0 left-0 w-75 h-90 z-20 pointer-events-none overflow-hidden border border-brand-secondary/20 shadow-2xl bg-zinc-800"
            >
                {services.map((service, index) => (
                    <motion.img
                        key={service.id}
                        src={service.image}
                        alt={service.title}
                        animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ))}
            </motion.div>
        </section>
    );
}
