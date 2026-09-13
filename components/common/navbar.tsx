"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import type { NavbarProps } from "@/constants";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { usePathname } from "next/navigation";
import AnimatedNavLink from "@/components/navbar/AnimatedNavLink";
import { useContact } from "@/context/ContactContext";
import { ArrowUpIcon } from "lucide-react";

const menuVariants: Variants = {
    initial: { clipPath: "inset(0 0 100% 0)" },
    animate: { clipPath: "inset(0 0 0% 0)", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } },
    exit: { clipPath: "inset(0 0 100% 0)", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } },
};

const linkContainerVariants: Variants = {
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
    exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const linkVariants: Variants = {
    initial: { y: "105%", opacity: 0 },
    animate: { y: "0%", opacity: 1, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: "105%", opacity: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } },
};

const footerVariants: Variants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: 16, transition: { duration: 0.3 } },
};

const PixelDot = ({ trigger }: { trigger: boolean }) => {
    return (
        <span className="relative w-2 h-2 ml-1 mb-1.5 self-end inline-block">
            {/* The main pixel dot */}
            <motion.span
                className="absolute inset-0 bg-brand-tertiary"
                animate={trigger ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
            />
            {/* Particle pixels that float up */}
            <AnimatePresence>
                {trigger && (
                    <>
                        <motion.span
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: [0, 5, 8],
                                y: [0, -10, -20],
                                opacity: [0, 1, 0],
                                scale: [1, 0.8, 0.4]
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0
                            }}
                            className="absolute inset-0 bg-brand-tertiary"
                        />
                        <motion.span
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: [0, -6, -10],
                                y: [0, -14, -26],
                                opacity: [0, 1, 0],
                                scale: [1, 0.8, 0.4]
                            }}
                            transition={{
                                duration: 0.9,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.25
                            }}
                            className="absolute inset-0 bg-brand-tertiary"
                        />
                        <motion.span
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: [0, 2, 3],
                                y: [0, -18, -30],
                                opacity: [0, 1, 0],
                                scale: [1, 0.8, 0.4]
                            }}
                            transition={{
                                duration: 1.0,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.5
                            }}
                            className="absolute inset-0 bg-brand-tertiary"
                        />
                    </>
                )}
            </AnimatePresence>
        </span>
    );
};

const Navbar = () => {
    const { openContact } = useContact();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [logoHovered, setLogoHovered] = useState(false);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 24);

            if (currentScrollY <= 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navBg = isOpen
        ? "bg-brand-primary"
        : scrolled
            ? "bg-brand-secondary/90 backdrop-blur-md border-b border-brand-primary/8"
            : "bg-brand-secondary border-b border-brand-primary/8";

    return (
        <>
            <nav className={`px-6 md:px-12 lg:px-16 h-17 flex items-center justify-between fixed w-full z-50 top-0 left-0 transition-all duration-500 ${(isVisible || isOpen) ? "translate-y-0" : "-translate-y-full"
                } ${navBg}`}>

                <motion.div
                    className="relative z-50 flex items-baseline gap-0 select-none cursor-pointer"
                    onMouseEnter={() => setLogoHovered(true)}
                    onMouseLeave={() => setLogoHovered(false)}
                >
                    <Link
                        href="/"
                        className="flex items-baseline gap-0"
                        style={{ color: isOpen ? "var(--color-brand-secondary)" : "var(--color-brand-primary)" }}
                    >
                        <span className="font-heading font-black text-2xl md:text-2xl tracking-tight leading-none">
                            Creative
                        </span>
                        <span
                            className="font-serif italic font-medium text-brand-tertiary text-2xl md:text-2xl leading-none px-1.5"
                            style={{ color: isOpen ? "var(--color-brand-tertiary)" : undefined }}
                        >
                            Idea
                        </span>
                        <PixelDot trigger={logoHovered} />
                    </Link>
                </motion.div>

                <ul className="hidden md:flex items-center gap-7 lg:gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map(({ label, link }: NavbarProps) => (
                        <li key={label}>
                            <AnimatedNavLink
                                label={label}
                                link={link}
                                onClick={link === "#contact" ? openContact : undefined}
                            />
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-5">
                    <span className="flex items-center gap-2 font-label text-[10px] tracking-[.16em] text-brand-neutral uppercase">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        Available
                    </span>

                    <div className="w-px h-4 bg-brand-primary/15" />

                    <button
                        onClick={openContact}
                        data-magnetic
                        className="group flex items-center gap-2 font-label font-bold text-[11px] tracking-[.14em] uppercase text-brand-tertiary
                                   border border-brand-tertiary/40 px-5 py-2.5 hover:bg-brand-primary hover:text-brand-secondary hover:border-brand-primary
                                   transition-all duration-300 cursor-pointer bg-transparent"
                    >
                        Let&apos;s Talk
                        <ArrowUpIcon className="size-4 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </button>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    data-magnetic
                    className="md:hidden relative z-50 flex flex-col justify-center items-end gap-1.25 w-10 h-10 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="h-[1.5px] block origin-center"
                        style={{ backgroundColor: isOpen ? "var(--color-brand-secondary)" : "var(--color-brand-primary)" }}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0, width: "65%" }}
                        transition={{ duration: 0.25 }}
                        className="h-[1.5px] block"
                        style={{ backgroundColor: isOpen ? "var(--color-brand-secondary)" : "var(--color-brand-primary)", width: "65%" }}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -7, width: "100%" } : { rotate: 0, y: 0, width: "80%" }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="h-[1.5px] block origin-center"
                        style={{ backgroundColor: isOpen ? "var(--color-brand-secondary)" : "var(--color-brand-primary)", width: "80%" }}
                    />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-brand-primary flex flex-col justify-between px-6 pt-28 pb-10 overflow-hidden"
                    >
                        <motion.ul
                            variants={linkContainerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col"
                        >
                            {navLinks.map(({ label, link }: NavbarProps, i) => (
                                <div key={label} className="overflow-hidden border-b border-brand-secondary/8 py-6">
                                    <motion.li variants={linkVariants} className="flex items-baseline justify-between">
                                        {link === "#contact" ? (
                                            <button
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    openContact();
                                                }}
                                                className="font-heading font-black text-[8vw] text-brand-secondary
                                                           hover:text-brand-tertiary transition-colors duration-300 inline-block leading-[1.1] text-left cursor-pointer bg-transparent border-none p-0"
                                            >
                                                {label}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link}
                                                onClick={() => setIsOpen(false)}
                                                className="font-heading font-black text-[8vw] text-brand-secondary
                                                           hover:text-brand-tertiary transition-colors duration-300 inline-block leading-[1.1]"
                                            >
                                                {label}
                                            </Link>
                                        )}
                                        <span className="font-label text-brand-secondary/25 text-[10px] tracking-widest">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </motion.li>
                                </div>
                            ))}
                        </motion.ul>

                        <motion.div
                            variants={footerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col gap-6"
                        >
                            <div className="h-px w-full bg-brand-secondary/10" />
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col gap-1.5">
                                    <p className="font-label text-brand-secondary/40 text-[9px] tracking-[.2em] uppercase">Get in touch</p>
                                    <Link
                                        href="creativeidea.studio12@gmail.com"
                                        className="font-sans text-sm text-brand-secondary hover:text-brand-tertiary transition-colors duration-200"
                                    >
                                        hello@creativeidea.com
                                    </Link>
                                </div>
                                <div className="flex items-center gap-4">
                                    {[
                                        {
                                            label: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                <circle cx="12" cy="12" r="4" />
                                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                                            </svg>, href: "#inst"
                                        },
                                        {
                                            label: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>, href: "#github"
                                        },
                                        {
                                            label: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>, href: "#linkedin"
                                        },
                                    ].map(({ label, href }) => (
                                        <Link
                                            key={href + label}
                                            href={href}
                                            className="font-label text-[12px] tracking-[.18em] text-brand-secondary/50 hover:text-brand-tertiary transition-colors duration-200 uppercase"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;