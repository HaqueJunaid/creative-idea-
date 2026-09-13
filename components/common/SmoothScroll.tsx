"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
        });

        const handleRaf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(handleRaf);
        };

        requestAnimationFrame(handleRaf);

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
                        duration: 1.2,
                    });
                }
            }
        };

        document.addEventListener("click", handleAnchorClick, { capture: true });

        return () => {
            lenis.destroy();
            document.removeEventListener("click", handleAnchorClick, { capture: true });
        };
    }, []);

    return <>{children}</>;
}
