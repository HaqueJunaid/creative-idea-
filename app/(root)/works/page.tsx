import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WorksMotionGallery from "@/components/work/WorksMotionGallery";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
    title: "All Works & Archive — Creative Idea Studio",
    description: "Explore 10 curated client case studies across art direction, high-velocity digital experiences, branding, 3D motion, and performance growth.",
};

export default function WorksPage() {
    return (
        <main className="min-h-screen pt-28 md:pt-36 px-6 lg:px-16 bg-transparent">
            <div className="w-full mx-auto flex flex-col gap-12 md:gap-16">
                {/* ── Breadcrumb / Back Link ── */}
                <ScrollReveal duration={0.6}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-brand-neutral hover:text-brand-tertiary uppercase transition-colors duration-200"
                    >
                        <ArrowLeft className="size-3.5" />
                        <span>Return to Studio Home</span>
                    </Link>
                </ScrollReveal>

                {/* ── Page Hero Title & Manifesto ── */}
                <ScrollReveal duration={0.8}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-primary/10 pb-12 gap-8">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <div className="flex items-center gap-2.5 text-brand-tertiary text-[11px] font-bold tracking-[.2em] uppercase font-label">
                                <span className="w-7.5 h-px bg-brand-tertiary" />
                                Index / 2024 — 2026 Archive
                            </div>
                            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary leading-[0.95]">
                                All <span className="font-serif italic font-normal text-brand-tertiary">Works.</span>
                            </h1>
                        </div>

                        <div className="max-w-md flex flex-col gap-2">
                            <p className="font-sans text-brand-neutral text-sm md:text-base leading-relaxed">
                                A curated selection of 10 digital platforms, visual identities, and social advertising campaigns engineered to interrupt the noise and capture market share.
                            </p>
                            <span className="font-mono text-[10px] text-brand-tertiary font-bold tracking-widest uppercase">
                                [ 10 FEATURED PROJECTS // COMPLETE ARCHIVE ]
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── Motion Scroll Gallery Section ── */}
                <WorksMotionGallery />
            </div>
        </main>
    );
}
