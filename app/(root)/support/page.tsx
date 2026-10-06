import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Headphones, Clock, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SupportContent from "@/components/support/SupportContent";

export const metadata: Metadata = {
    title: "Support & Helpdesk — Creative Idea Studio",
    description: "Get dedicated assistance for projects, quotations, creative design assets, printing, digital marketing, and billing from Creative Idea.",
};

export default function SupportPage() {
    return (
        <main className="min-h-screen pt-28 md:pt-36 px-6 lg:px-16 bg-transparent">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
                {/* ── Breadcrumb / Return Link ── */}
                <ScrollReveal duration={0.6}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-brand-neutral hover:text-brand-tertiary uppercase transition-colors duration-200"
                    >
                        <ArrowLeft className="size-3.5" />
                        <span>Return to Studio Home</span>
                    </Link>
                </ScrollReveal>

                {/* ── Page Header / Hero ── */}
                <ScrollReveal duration={0.8}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-primary/10 pb-10 gap-8">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <div className="flex items-center gap-2.5 text-brand-tertiary text-[11px] font-bold tracking-[.2em] uppercase font-label">
                                <span className="w-7.5 h-px bg-brand-tertiary" />
                                Assistance & Helpdesk
                            </div>
                            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary leading-[0.95]">
                                Client <span className="font-serif italic font-normal text-brand-tertiary">Support.</span>
                            </h1>
                        </div>

                        <div className="max-w-md flex flex-col gap-3">
                            <p className="font-sans text-brand-neutral text-sm md:text-base leading-relaxed">
                                Reliable assistance for ongoing projects, design approvals, print production, invoices, and general enquiries.
                            </p>
                            <div className="flex items-center gap-4 text-[11px] font-mono text-brand-neutral/80 uppercase">
                                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
                                    Active Studio Desk
                                </span>
                                <span className="text-brand-primary/20">•</span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="size-3 text-brand-tertiary" />
                                    Fast Turnaround
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── Support Sections Content ── */}
                <SupportContent />
            </div>
        </main>
    );
}
