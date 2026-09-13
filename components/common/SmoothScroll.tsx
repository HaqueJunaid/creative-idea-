"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Disable custom smooth scroll if user prefers reduced motion or on touch screens for 120Hz native touch response
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

        const lenis = new Lenis({
            duration: isTouch ? 0.8 : 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 1,
            syncTouch: false,
            autoResize: true,
        });

        let rafId: number;
        const handleRaf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(handleRaf);
        };

        rafId = requestAnimationFrame(handleRaf);

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (!link) return;

            const href = link.getAttribute("href");
            if (href && href.startsWith("#") && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    lenis.scrollTo(targetElement as HTMLElement, {
                        offset: 0,
                        duration: 1.0,
                    });
                }
            }
        };

        document.addEventListener("click", handleAnchorClick, { capture: true });

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            document.removeEventListener("click", handleAnchorClick, { capture: true });
        };
    }, []);

    return <>{children}</>;
}

