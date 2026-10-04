"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useContact } from "@/context/ContactContext";
import { ArrowUpIcon, Sparkles } from "lucide-react";
import { availableRoles } from "@/constants";

export default function JoinModal() {
    const { isJoinOpen, closeJoin } = useContact();
    const [mounted, setMounted] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string>("Graphic Designer");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form field states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isJoinOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsSubmitted(false);
            setErrorMsg(null);
        }
    }, [isJoinOpen]);

    if (!mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg(null);

        try {
            const res = await fetch("/api/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    role: selectedRole,
                    portfolio,
                    message,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to submit your application. Please try again.");
            }

            setIsSubmitted(true);
            setName("");
            setEmail("");
            setPhone("");
            setPortfolio("");
            setMessage("");
            setSelectedRole("Graphic Designer");

            setTimeout(() => {
                closeJoin();
            }, 2800);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
            setErrorMsg(msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return createPortal(
        <AnimatePresence>
            {isJoinOpen && (
                <motion.div
                    key="join-modal"
                    className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeJoin}
                        className="absolute inset-0 bg-brand-primary/25 backdrop-blur-lg"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        className="relative bg-[#0E0E0E] border border-brand-secondary/5 w-full max-w-4xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] z-10 grid grid-cols-1 lg:grid-cols-12 min-h-160"
                    >
                        {/* Close button */}
                        <button
                            onClick={closeJoin}
                            aria-label="Close"
                            className="absolute top-6 right-6 w-9 h-9 border border-brand-secondary/10 flex items-center justify-center text-brand-secondary/50 hover:text-brand-secondary hover:border-brand-secondary/20 hover:scale-105 transition-all duration-200 cursor-pointer z-25"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left Info Column */}
                        <div className="hidden lg:col-span-5 bg-black/20 p-8 md:p-12 md:flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-secondary/5 relative overflow-hidden">
                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="flex items-center gap-2 text-brand-yellow font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    JOIN OUR TEAM
                                </div>
                                <h3 className="font-heading font-black text-3xl md:text-4xl text-brand-secondary tracking-tight leading-tight">
                                    Create work that makes an impact.
                                </h3>
                                <p className="text-brand-neutral text-sm leading-relaxed font-sans max-w-xs mt-2">
                                    We are always looking for passionate thinkers, designers, and builders. Tell us about your journey and what you love creating.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 mt-12 relative z-10 border-t border-brand-secondary/5 pt-8">
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-[9px] text-brand-secondary/35 tracking-widest uppercase">CAREERS DIRECT</span>
                                    <a href="mailto:creativeidea.studio12@gmail.com" className="text-brand-secondary hover:text-brand-yellow font-sans text-sm md:text-base transition-colors duration-200">
                                        creativeidea.studio12@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 bg-emerald-400 animate-pulse" />
                                    <span className="font-mono text-[10px] text-brand-secondary/60 tracking-wider uppercase">
                                        Active Hiring • Jamshedpur &amp; Remote
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -15 }}
                                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="block md:hidden mb-8">
                                            <span className="font-mono text-[10px] text-brand-yellow font-bold tracking-widest uppercase">
                                                CAREERS APPLICATION
                                            </span>
                                            <h2 className="font-heading font-bold text-2xl text-brand-secondary tracking-tight mt-1">
                                                Join <span className="font-serif font-normal text-brand-tertiary italic">Creative Idea</span>
                                            </h2>
                                        </div>

                                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1 relative group">
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Your Full Name *"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        disabled={isSubmitting}
                                                        className="bg-transparent border-b placeholder-brand-secondary/20 focus:outline-none focus:border-brand-yellow py-3 transition-colors duration-300 text-sm font-sans w-full disabled:opacity-50"
                                                    />
                                                    <span className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                                </div>

                                                <div className="flex flex-col gap-1 relative group">
                                                    <input
                                                        type="email"
                                                        required
                                                        placeholder="Email Address *"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        disabled={isSubmitting}
                                                        className="bg-transparent border-b placeholder-brand-secondary/20 focus:outline-none focus:border-brand-yellow py-3 transition-colors duration-300 text-sm font-sans w-full disabled:opacity-50"
                                                    />
                                                    <span className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1 relative group">
                                                    <input
                                                        type="tel"
                                                        placeholder="Contact Number"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        disabled={isSubmitting}
                                                        className="bg-transparent border-b placeholder-brand-secondary/20 focus:outline-none focus:border-brand-yellow py-3 transition-colors duration-300 text-sm font-sans w-full disabled:opacity-50"
                                                    />
                                                    <span className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                                </div>

                                                <div className="flex flex-col gap-1 relative group">
                                                    <input
                                                        type="url"
                                                        placeholder="Portfolio / LinkedIn / Behance"
                                                        value={portfolio}
                                                        onChange={(e) => setPortfolio(e.target.value)}
                                                        disabled={isSubmitting}
                                                        className="bg-transparent border-b placeholder-brand-secondary/20 focus:outline-none focus:border-brand-yellow py-3 transition-colors duration-300 text-sm font-sans w-full disabled:opacity-50"
                                                    />
                                                    <span className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Role Selector Chips */}
                                            <div className="flex flex-col gap-2 mt-1">
                                                <span className="font-mono text-[9px] text-brand-secondary/35 tracking-widest uppercase font-bold">
                                                    PRIMARY ROLE / DISCIPLINE *
                                                </span>
                                                <div className="flex flex-wrap gap-1.5 max-h-fit overflow-y-auto pr-1">
                                                    {availableRoles.map((role) => (
                                                        <button
                                                            key={role}
                                                            type="button"
                                                            onClick={() => setSelectedRole(role)}
                                                            className={`py-1.5 px-3 border text-[10px] md:text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                                                                selectedRole === role
                                                                    ? "bg-brand-yellow border-brand-yellow text-brand-primary font-bold shadow-md shadow-brand-yellow/10"
                                                                    : "bg-brand-secondary/2 border-brand-secondary/5 text-brand-neutral hover:border-brand-secondary/15 hover:text-brand-secondary"
                                                            }`}
                                                        >
                                                            {role}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1 relative group">
                                                <textarea
                                                    required
                                                    rows={3}
                                                    placeholder="Tell us about yourself, your experience, or why you want to join..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    disabled={isSubmitting}
                                                    className="bg-transparent border-b placeholder-brand-secondary/20 focus:outline-none focus:border-brand-yellow py-2.5 transition-colors duration-300 text-sm font-sans resize-none w-full disabled:opacity-50"
                                                />
                                                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow group-focus-within:w-full transition-all duration-300 pointer-events-none" />
                                            </div>

                                            {errorMsg && (
                                                <div className="text-red-500 font-sans text-xs bg-red-500/10 border border-red-500/20 px-4 py-2.5">
                                                    {errorMsg}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="group mt-2 w-full flex items-center justify-center gap-3 font-label font-bold text-xs tracking-[0.15em] uppercase text-brand-primary bg-brand-secondary py-4 hover:bg-brand-yellow hover:text-brand-primary transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? "Submitting Application..." : "Submit Join Request"}
                                                {!isSubmitting && (
                                                    <ArrowUpIcon className="size-5 rotate-90 group-hover:translate-x-1.5 transition-transform duration-300" />
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.96 }}
                                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex flex-col items-center text-center py-10"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 flex items-center justify-center mb-6">
                                            <svg
                                                className="w-6 h-6 text-brand-yellow animate-bounce"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="font-heading font-black text-2xl text-brand-secondary tracking-tight">
                                            Application Received!
                                        </h3>
                                        <p className="text-brand-neutral text-sm font-sans mt-3 max-w-xs leading-relaxed">
                                            Thank you for reaching out to join Creative Idea. We will review your profile and reach out shortly!
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
