"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { animate, stagger } from "motion/react";
import { createPortal } from "react-dom";
import type { FounderModalProps } from "@/constants";
import { X } from "lucide-react";
import Link from "next/link";

export default function FounderModal({ founder, founderIndex, total, originRect, onClose }: FounderModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const mainImageRef = useRef<HTMLImageElement>(null);
    const contentPanelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeImage, setActiveImage] = useState(0);
    const closingRef = useRef(false);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    useEffect(() => {
        if (!modalRef.current || !backdropRef.current) return;
        const modal = modalRef.current;
        const backdrop = backdropRef.current;

        if (isMobile) {
            modal.style.opacity = "0";
            modal.style.transform = "scale(0.93)";
            modal.getBoundingClientRect();
            animate(modal, { opacity: [0, 1], scale: [0.93, 1] }, { type: "spring", stiffness: 260, damping: 28, mass: 0.9 });
            animate(backdrop, { opacity: [0, 1] }, { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] });
            if (contentRef.current) {
                const els = Array.from(contentRef.current.querySelectorAll("[data-modal-item]"));
                animate(
                    els,
                    { opacity: [0, 1], y: [18, 0] },
                    { delay: stagger(0.06, { startDelay: 0.18 }), duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                );
            }
            return;
        }

        modal.style.left = `${originRect.left}px`;
        modal.style.top = `${originRect.top}px`;
        modal.style.width = `${originRect.width}px`;
        modal.style.height = `${originRect.height}px`;
        modal.getBoundingClientRect();

        const targetW = Math.min(1360, window.innerWidth * 0.95);
        const targetH = Math.min(840, window.innerHeight * 0.92);
        const targetL = (window.innerWidth - targetW) / 2;
        const targetT = (window.innerHeight - targetH) / 2;

        animate(
            modal,
            { left: targetL, top: targetT, width: targetW, height: targetH },
            { type: "spring", stiffness: 180, damping: 28, mass: 1.1 }
        );

        animate(backdrop, { opacity: [0, 1] }, { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] });

        if (contentPanelRef.current) {
            animate(
                contentPanelRef.current,
                { maxWidth: ["0px", "780px"] },
                { delay: 0.22, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            );
        }

        if (contentRef.current) {
            const els = Array.from(contentRef.current.querySelectorAll("[data-modal-item]"));
            animate(
                els,
                { opacity: [0, 1], y: [24, 0] },
                { delay: stagger(0.07, { startDelay: 0.45 }), duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            );
        }
    }, [originRect, isMobile]);

    const close = useCallback(() => {
        if (closingRef.current || !modalRef.current || !backdropRef.current) return;
        closingRef.current = true;
        const modal = modalRef.current;
        const backdrop = backdropRef.current;

        if (contentRef.current) {
            const els = Array.from(contentRef.current.querySelectorAll("[data-modal-item]"));
            animate(els, { opacity: 0, y: 16 }, { duration: 0.15, ease: [0.4, 0, 1, 1] });
        }

        if (isMobile) {
            animate(modal, { opacity: 0, scale: 0.93 }, { duration: 0.22, ease: [0.4, 0, 1, 1] });
            animate(backdrop, { opacity: 0 }, { duration: 0.3, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }).then(onClose);
            return;
        }

        if (contentPanelRef.current) {
            animate(
                contentPanelRef.current,
                { maxWidth: "0px" },
                { duration: 0.25, ease: [0.4, 0, 1, 1] }
            );
        }

        setTimeout(() => {
            animate(
                modal,
                { left: originRect.left, top: originRect.top, width: originRect.width, height: originRect.height },
                { type: "spring", stiffness: 200, damping: 28, mass: 1.0 }
            );
        }, 100);

        animate(backdrop, { opacity: 0 }, { duration: 0.45, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }).then(onClose);
    }, [originRect, onClose, isMobile]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [close]);

    useEffect(() => {
        const handler = () => {
            if (!modalRef.current || closingRef.current || isMobile) return;
            const w = Math.min(1360, window.innerWidth * 0.95);
            const h = Math.min(840, window.innerHeight * 0.92);
            animate(
                modalRef.current,
                { left: (window.innerWidth - w) / 2, top: (window.innerHeight - h) / 2, width: w, height: h },
                { duration: 0.35 }
            );
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, [isMobile]);

    const switchImage = useCallback((idx: number) => {
        if (idx === activeImage || !mainImageRef.current) return;
        const img = mainImageRef.current;
        const dir = idx > activeImage ? -15 : 15;
        animate(img, { opacity: 0, scale: 1.035, x: dir }, { duration: 0.18 }).then(() => {
            setActiveImage(idx);
            img.style.removeProperty("transform");
            animate(img, { opacity: [0, 1], scale: [1.035, 1], x: 0 }, { duration: 0.55, ease: [0.22, 1, 0.36, 1] });
        });
    }, [activeImage]);

    const mobileModalClass = "fixed inset-4 z-101 flex flex-col bg-[#111] border border-white/12 rounded-xl overflow-y-auto will-change-transform";
    const desktopModalClass = "z-101 flex flex-row bg-[#111] border border-white/12 will-change-[left,top,width,height] overflow-hidden";

    return createPortal(
        <>
            <div
                ref={backdropRef}
                onClick={(e) => { if (e.target === e.currentTarget) close(); }}
                style={{ opacity: 0 }}
                className="fixed inset-0 z-100 bg-black/82 backdrop-blur-[18px]"
            />

            <div
                ref={modalRef}
                style={isMobile ? {} : { position: "fixed", overflow: "hidden" }}
                className={isMobile ? mobileModalClass : desktopModalClass}
            >
                <div className={`relative  ${isMobile ? "h-120 w-full" : "w-[40%] min-h-0"} overflow-hidden bg-[#181818]`}>
                    <img
                        ref={mainImageRef}
                        src={founder.images[activeImage]}
                        alt={founder.name}
                        className={`absolute inset-0 w-full h-full object-cover will-change-transform object-top`}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                    <div className="absolute left-6 bottom-5 z-3 text-white/70 text-[10px] tracking-[.15em] font-label">
                        {total === 1 ? "FOUNDER // 01" : `${String(founderIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}
                    </div>
                </div>

                <div
                    ref={contentPanelRef}
                    style={isMobile ? {} : { maxWidth: "0px", overflow: "hidden", flexShrink: 0 }}
                    className={isMobile ? "w-full" : ""}
                >
                    <div
                        ref={contentRef}
                        className={`relative flex flex-col justify-between min-w-0 p-8 ${isMobile ? "" : "md:p-[clamp(35px,4vw,65px)] w-[clamp(360px,52vw,720px)]"}`}
                    >
                        <button
                            onClick={close}
                            aria-label="Close"
                            className="absolute top-5 right-5 z-10 w-10 h-10 place-items-center flex items-center justify-center   
                                       border border-white/12 rounded-full bg-transparent text-white text-lg cursor-pointer
                                       transition-colors duration-250 hover:bg-brand-yellow hover:text-brand-primary"
                        >
                            <X size={18} />
                        </button>

                        <div>
                            <div data-modal-item className="text-brand-yellow text-[10px] tracking-[.16em] uppercase font-label font-bold">
                                {founder.role}
                            </div>

                            <h2
                                data-modal-item
                                className="mt-4 font-serif font-normal leading-[.86] tracking-[-0.06em] text-brand-secondary text-4xl md:text-5xl lg:text-[80px]"
                            >
                                {founder.name}
                            </h2>

                            <p data-modal-item className="mt-6 text-brand-neutral text-sm leading-[1.8] font-sans">
                                {founder.bio}
                            </p>

                            <div data-modal-item className="grid grid-cols-3 gap-5 mt-8 pt-6 border-t border-white/12">
                                {founder.stats.map(([num, label]) => (
                                    <div key={label}>
                                        <div className="text-xl font-medium text-brand-secondary font-sans">{num}</div>
                                        <div className="mt-1 text-brand-neutral text-[9px] tracking-widest uppercase font-label">{label}</div>
                                    </div>
                                ))}
                            </div>

                            <div data-modal-item className="hidden md:grid grid-cols-3 gap-2 mt-8">
                                {founder.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => switchImage(i)}
                                        className={`relative h-65 overflow-hidden border bg-[#181818] cursor-pointer transition-[opacity,border-color] duration-300
                                                    ${i === activeImage ? "opacity-100 border-brand-yellow" : "opacity-55 border-transparent hover:opacity-80"}`}
                                    >
                                        <img
                                            src={img}
                                            alt={founder.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.06]"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <footer data-modal-item className="flex justify-between items-center mt-8 text-brand-neutral text-[9px] tracking-[.12em] uppercase font-label">
                            <span>Founder / 2026</span>
                            <div className="flex gap-2">
                                <Link href="#" aria-label="Instagram" className="grid w-8 h-8 place-items-center border border-white/12 rounded-full text-white no-underline hover:border-brand-tertiary hover:text-brand-tertiary transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                        <circle cx="12" cy="12" r="4"/>
                                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                                    </svg>
                                </Link>
                                <Link href="#" aria-label="GitHub" className="grid w-8 h-8 place-items-center border border-white/12 rounded-full text-white no-underline hover:border-brand-tertiary hover:text-brand-tertiary transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                    </svg>
                                </Link>
                                <Link href="#" aria-label="LinkedIn" className="grid w-8 h-8 place-items-center border border-white/12 rounded-full text-white no-underline hover:border-brand-tertiary hover:text-brand-tertiary transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect x="2" y="9" width="4" height="12"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </Link>
                            </div>
                        </footer>

                    </div>
                </div>
            </div>
        </>,
        document.body
    );
}
