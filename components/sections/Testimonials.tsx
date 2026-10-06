"use client";

import { useState } from "react";
import { Star, ArrowUpRight, CheckCircle2, MessageSquareQuote, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { testimonials, googleReviewUrl } from "@/constants";

const filterCategories = ["ALL", "BRANDING & WEB", "DIGITAL MARKETING", "ACP & SIGNAGE", "CAMPAIGN & ADS", "SEO & SOCIAL MEDIA"];

export default function Testimonials() {
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

    const filteredReviews = selectedCategory === "ALL"
        ? testimonials
        : testimonials.filter((item) => item.serviceTag === selectedCategory);

    return (
        <section
            id="testimonials"
            className="relative w-full py-24 md:py-36 px-6 lg:px-16 bg-transparent text-brand-primary overflow-hidden border-t border-brand-primary/10"
        >
            <div className="w-full mx-auto flex flex-col gap-14 md:gap-18 relative z-10">
                {/* ── Section Header ── */}
                <ScrollReveal duration={0.8}>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-brand-primary/10">
                        <div className="flex flex-col gap-3 max-w-2xl">
                            <div className="flex items-center gap-2.5 text-brand-tertiary text-[11px] font-bold tracking-[.18em] uppercase font-label">
                                <span className="w-7.5 h-px bg-brand-tertiary" />
                                Verified Client Feedback
                            </div>

                            <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary leading-[1.02]">
                                Google <br />
                                <em className="font-serif font-normal text-brand-tertiary italic">Reviews.</em>
                            </h2>
                        </div>

                        {/* Google Rating Trust Badge & Direct Review Button */}
                        <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4">
                            <div className="flex items-center gap-4 bg-white/80 border border-brand-primary/10 px-5 py-3.5 backdrop-blur-sm shadow-sm">
                                <div className="flex items-center gap-2.5 border-r border-brand-primary/10 pr-4">
                                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                        />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="font-heading font-bold text-sm text-brand-primary leading-tight">Google Rating</span>
                                        <span className="font-mono text-[10px] text-brand-neutral">Business Reviews</span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-amber-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <span className="font-mono text-[11px] font-bold text-brand-primary tracking-wider mt-0.5">
                                        5.0 / 5.0 Rating
                                    </span>
                                </div>
                            </div>

                            <a
                                href={googleReviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-wider font-bold bg-brand-primary text-white hover:bg-brand-tertiary px-6 py-3.5 transition-all duration-300 shadow-sm"
                            >
                                <span>Write a Review</span>
                                <ArrowUpRight className="size-3.5 rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── Category Filter Pills ── */}
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="font-mono text-[10px] uppercase text-brand-neutral tracking-widest mr-2 flex items-center gap-1.5 font-bold">
                        <Sparkles className="size-3 text-brand-tertiary" /> Filter:
                    </span>
                    {filterCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`font-label text-[10px] tracking-[0.14em] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer ${
                                selectedCategory === cat
                                    ? "bg-brand-primary text-white border-brand-primary font-bold shadow-xs"
                                    : "bg-white/50 text-brand-primary/70 border-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Reviews Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReviews.map((review, index) => (
                        <ScrollReveal key={review.id} duration={0.5} delay={index * 0.08}>
                            <div className="p-7 md:p-8 bg-white/70 border border-brand-primary/10 backdrop-blur-sm flex flex-col justify-between gap-6 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 h-full relative group">
                                {/* Top review metadata */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-amber-500">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>

                                        <span className="font-mono text-[10px] uppercase text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1 font-bold">
                                            {review.serviceTag}
                                        </span>
                                    </div>

                                    {/* Quote Text */}
                                    <p className="font-sans text-brand-primary/90 text-sm md:text-base leading-relaxed relative z-10 italic">
                                        &ldquo;{review.text}&rdquo;
                                    </p>
                                </div>

                                {/* Author Profile Footer */}
                                <div className="pt-5 border-t border-brand-primary/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-primary text-white flex items-center justify-center font-heading font-black text-xs uppercase tracking-wider">
                                            {review.initials}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1.5">
                                                <span className="font-heading font-bold text-sm text-brand-primary">
                                                    {review.name}
                                                </span>
                                                <span title="Verified Customer">
                                                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                                                </span>
                                            </div>
                                            <span className="font-sans text-[11px] text-brand-neutral truncate max-w-44">
                                                {review.role}, {review.company}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Google Logo Marker */}
                                    <div className="flex items-center gap-1 font-mono text-[10px] text-brand-neutral/80 uppercase">
                                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                            />
                                        </svg>
                                        <span>Verified</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
