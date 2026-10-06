"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
    ShieldCheck, 
    Lock, 
    FileText, 
    Bell, 
    Cookie, 
    Share2, 
    UserCheck, 
    ExternalLink, 
    RefreshCw, 
    Mail, 
    Phone, 
    MessageSquare, 
    MapPin, 
    Globe, 
    Check, 
    Copy,
    ArrowUpRight,
    Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

interface Section {
    id: string;
    number: string;
    title: string;
    icon: typeof ShieldCheck;
}

const sections: Section[] = [
    { id: "consent", number: "01", title: "Your Consent", icon: UserCheck },
    { id: "communication", number: "02", title: "Communication & Marketing", icon: Bell },
    { id: "cookies", number: "03", title: "Cookies & Tracking", icon: Cookie },
    { id: "disclosure", number: "04", title: "Disclosure of Information", icon: Share2 },
    { id: "usage", number: "05", title: "Usage of Personal & Profile Data", icon: FileText },
    { id: "third-party", number: "06", title: "Third-Party Websites & Services", icon: ExternalLink },
    { id: "security", number: "07", title: "Data Security Measures", icon: Lock },
    { id: "changes", number: "08", title: "Changes to This Privacy Policy", icon: RefreshCw },
    { id: "contact", number: "09", title: "Contact Us", icon: Mail },
];

export default function PrivacyContent() {
    const [activeSection, setActiveSection] = useState<string>("consent");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCopyUrl = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24">
            {/* ── Table of Contents (Sticky Sidebar for Desktop) ── */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
                <div className="p-6 md:p-8 bg-white/70 backdrop-blur-md border border-brand-primary/10 shadow-sm flex flex-col gap-6">
                    <div className="flex items-center justify-between pb-4 border-b border-brand-primary/10">
                        <span className="font-label text-xs font-bold tracking-[0.2em] text-brand-tertiary uppercase flex items-center gap-2">
                            <Sparkles className="size-3.5" />
                            Table of Contents
                        </span>
                        <button
                            onClick={handleCopyUrl}
                            className="flex items-center gap-1.5 font-mono text-[10px] text-brand-neutral hover:text-brand-primary tracking-wider uppercase transition-colors cursor-pointer"
                            title="Copy link to page"
                        >
                            {copied ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
                            <span>{copied ? "Copied" : "Share"}</span>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-1.5" aria-label="Privacy sections">
                        {sections.map(({ id, number, title, icon: Icon }) => {
                            const isActive = activeSection === id;
                            return (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className={`group flex items-center justify-between px-3.5 py-2.5 text-xs font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-brand-primary text-white font-semibold shadow-sm"
                                            : "text-brand-primary/80 hover:bg-brand-primary/5 hover:text-brand-primary"
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5 truncate">
                                        <Icon className={`size-3.5 shrink-0 ${isActive ? "text-brand-tertiary" : "text-brand-neutral group-hover:text-brand-primary"}`} />
                                        <span className="truncate">{title}</span>
                                    </div>
                                    <span className={`font-mono text-[10px] shrink-0 ml-2 ${isActive ? "text-brand-secondary/60" : "text-brand-neutral/60"}`}>
                                        {number}
                                    </span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Quick Direct Inquiries Box */}
                    <div className="mt-2 pt-6 border-t border-brand-primary/10 flex flex-col gap-3">
                        <span className="font-label text-[10px] uppercase tracking-widest text-brand-neutral font-bold">
                            Direct Privacy Queries
                        </span>
                        <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                            Have specific privacy concerns or compliance questions?
                        </p>
                        <a
                            href="mailto:creative.ideajsr@gmail.com"
                            className="inline-flex items-center justify-between font-label text-[11px] font-bold tracking-wider text-brand-primary hover:text-brand-tertiary uppercase transition-colors"
                        >
                            <span>Email Legal Desk</span>
                            <ArrowUpRight className="size-3.5" />
                        </a>
                    </div>
                </div>
            </aside>

            {/* ── Main Policy Content Body ── */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-20">
                {/* ── Intro Callout Card ── */}
                <ScrollReveal duration={0.6}>
                    <div className="relative p-6 md:p-8 bg-white/80 border border-brand-primary/10 backdrop-blur-sm flex flex-col gap-4 shadow-sm">
                        <div className="flex items-center gap-2 text-brand-tertiary font-label text-xs font-bold tracking-widest uppercase">
                            <ShieldCheck className="size-4" />
                            <span>Commitment to Transparency</span>
                        </div>
                        <p className="font-sans text-brand-primary text-base md:text-lg leading-relaxed">
                            <strong>Creative Idea</strong> (“We”, “Our”, “Us”) respects the privacy of our customers, clients, website visitors, and users. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit or use our website and services.
                        </p>
                        <p className="font-sans text-brand-neutral text-sm md:text-base leading-relaxed">
                            By accessing or using our website, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
                        </p>
                        <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-brand-neutral/80">
                            <span className="px-2.5 py-1 bg-brand-primary/5 border border-brand-primary/5">Applicable to all online & offline services</span>
                            <span className="px-2.5 py-1 bg-brand-primary/5 border border-brand-primary/5">Governed under Indian Law (Jharkhand Jurisdiction)</span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── Section 1: Your Consent ── */}
                <section id="consent" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">01</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Your Consent</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            We may collect personal information such as your name, phone number, email address, business details, location, billing information, and other information that you voluntarily provide to us while contacting us, requesting a service, submitting an enquiry, or using our website.
                        </p>
                        <div className="p-4 md:p-5 bg-brand-primary text-brand-secondary border border-brand-primary/20 flex items-start gap-3.5">
                            <Lock className="size-5 text-brand-tertiary shrink-0 mt-0.5" />
                            <p className="text-xs md:text-sm leading-relaxed text-brand-secondary/90">
                                <strong className="text-white">Strict Privacy Standard:</strong> We do not sell, rent, or trade your personal information to third parties for their independent marketing purposes without your consent, except where disclosure is required or permitted by applicable law.
                            </p>
                        </div>
                        <p>
                            We may share information with trusted service providers or partners when it is necessary to provide, manage, or improve the services requested by you.
                        </p>
                    </div>
                </section>

                {/* ── Section 2: Communication & Marketing ── */}
                <section id="communication" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">02</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Communication & Marketing</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            When you contact Creative Idea, request information, purchase our services, or otherwise interact with us, you may receive communications related to your enquiry, services, offers, updates, or other relevant information.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                            <li className="p-4 bg-white/60 border border-brand-primary/10 flex flex-col gap-2">
                                <span className="font-label text-xs font-bold uppercase text-brand-primary tracking-wider">Promotional Opt-Out</span>
                                <p className="text-xs text-brand-neutral leading-relaxed">
                                    You may choose not to receive promotional communications from us at any time by contacting us directly or using the unsubscribe option.
                                </p>
                            </li>
                            <li className="p-4 bg-white/60 border border-brand-primary/10 flex flex-col gap-2">
                                <span className="font-label text-xs font-bold uppercase text-brand-primary tracking-wider">Essential Communications</span>
                                <p className="text-xs text-brand-neutral leading-relaxed">
                                    Please note that you may still receive essential transactional communications relating to active enquiries, project deliverables, invoices, or accounts.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* ── Section 3: Cookies ── */}
                <section id="cookies" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">03</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Cookies</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Our website may use cookies and similar technologies to improve your browsing experience, understand website usage, remember preferences, and analyse website performance.
                        </p>
                        <p>
                            Cookies help us understand which pages and interactive features are most engaging to our visitors, allowing us to continuously optimize our digital presentation and services.
                        </p>
                        <div className="p-4 bg-white/60 border border-brand-primary/10 text-xs text-brand-neutral leading-relaxed">
                            <strong className="text-brand-primary">Managing Preferences:</strong> You may choose to disable or restrict cookies through your browser settings at any time. However, doing so may affect certain interactive features or performance functionality across the website.
                        </div>
                    </div>
                </section>

                {/* ── Section 4: Disclosure of Your Information ── */}
                <section id="disclosure" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">04</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Disclosure of Your Information</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea may share your information only when reasonably necessary for legitimate business purposes, including:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {[
                                "Providing the products, designs, and services requested by you.",
                                "Processing enquiries, quotations, payments, or client service requests.",
                                "Communicating with you regarding project milestones and updates.",
                                "Working with trusted third-party service providers who assist us in operating our business.",
                                "Protecting our website, business, customers, and users from fraud, misuse, or security threats.",
                                "Complying with applicable laws, statutory regulations, legal processes, or government requests.",
                            ].map((item, index) => (
                                <div key={index} className="p-4 bg-white/60 border border-brand-primary/10 flex items-start gap-3">
                                    <span className="font-mono text-xs font-bold text-brand-tertiary shrink-0 mt-0.5">•</span>
                                    <span className="text-xs md:text-sm text-brand-primary/85 leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="pt-2 text-xs md:text-sm text-brand-neutral">
                            We may also use technical diagnostics such as IP addresses, browser types, device fingerprints, and anonymized activity metrics to troubleshoot technical issues, improve page responsiveness, and analyse general visitor trends.
                        </p>
                    </div>
                </section>

                {/* ── Section 5: Usage of Personal & Profile Information ── */}
                <section id="usage" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">05</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Usage of Personal & Profile Information</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>We may use the information provided by you to:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Provide and manage the creative and production services you request.",
                                "Respond promptly to your project enquiries and communications.",
                                "Prepare formal quotations, scopes of work, proposals, invoices, and contracts.",
                                "Resolve disputes, provide support, and troubleshoot operational issues.",
                                "Improve our design products, client workflows, website speed, and customer experience.",
                                "Understand client requirements, brand positioning goals, and design preferences.",
                                "Inform you about relevant services, curated case studies, new offerings, and studio updates.",
                                "Conduct quality surveys or request constructive feedback where applicable.",
                                "Maintain the ongoing security and flawless functioning of our website and studio systems.",
                            ].map((item, index) => (
                                <div key={index} className="p-3.5 bg-white/50 border border-brand-primary/10 flex items-start gap-2.5">
                                    <Check className="size-4 text-brand-tertiary shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm text-brand-primary/90 leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-brand-neutral pt-1">
                            Where applicable, you retain the complete freedom to opt out of promotional or non-essential communications at any moment.
                        </p>
                    </div>
                </section>

                {/* ── Section 6: Third-Party Websites & Services ── */}
                <section id="third-party" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">06</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Third-Party Websites & Services</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Our website or communications may contain links to third-party websites, social media platforms (such as Instagram, LinkedIn, YouTube, X), payment gateways, advertising tools, or external platforms.
                        </p>
                        <div className="p-4 md:p-5 bg-brand-yellow/15 border border-brand-yellow/30 flex flex-col gap-2">
                            <span className="font-label text-xs font-bold uppercase text-brand-primary tracking-wider">Independent Third-Party Policies</span>
                            <p className="text-xs md:text-sm text-brand-primary/80 leading-relaxed">
                                Creative Idea is not responsible for the privacy practices, content, security, or policies of such external third-party websites. We strongly recommend reviewing the specific privacy notices and terms of use of any third-party website before providing them with personal details.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Section 7: Data Security ── */}
                <section id="security" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">07</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Data Security</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            We implement reasonable administrative, technical, and organizational measures to safeguard your personal data against unauthorized access, misuse, alteration, accidental loss, disclosure, or destruction.
                        </p>
                        <p className="text-xs md:text-sm text-brand-neutral leading-relaxed">
                            However, please note that no method of electronic storage or transmission over the public internet can ever be guaranteed to be 100% impenetrable. While we make every diligent effort to protect your information through strict practices, absolute security cannot be guaranteed.
                        </p>
                    </div>
                </section>

                {/* ── Section 8: Changes to This Privacy Policy ── */}
                <section id="changes" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">08</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Changes to This Privacy Policy</h2>
                    </div>
                    <div className="flex flex-col gap-4 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea may update or modify this Privacy Policy from time to time to reflect modifications in our services, business structure, technological enhancements, or applicable statutory and legal requirements.
                        </p>
                        <p>
                            Any revised Privacy Policy will become immediately effective upon being published on this page. We encourage clients and visitors to check back periodically to stay informed.
                        </p>
                    </div>
                </section>

                {/* ── Section 9: Contact Us ── */}
                <section id="contact" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">09</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Contact Us</h2>
                    </div>
                    <div className="flex flex-col gap-6 font-sans">
                        <p className="text-sm md:text-base text-brand-primary/85 leading-relaxed">
                            If you have any questions, feedback, concerns, or requests regarding this Privacy Policy or how your personal information is handled by Creative Idea, please feel free to get in touch with our team:
                        </p>

                        {/* Direct Contact Card */}
                        <div className="p-6 md:p-8 bg-brand-primary text-brand-secondary flex flex-col gap-6 border border-brand-primary shadow-xl">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                                <div>
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-brand-tertiary uppercase font-bold">Studio Headquarters</span>
                                    <h3 className="font-heading text-2xl md:text-3xl font-black text-white mt-1">Creative Idea</h3>
                                    <p className="font-sans text-xs md:text-sm text-brand-secondary/70 mt-1">
                                        Founder & Design Consultant: <span className="text-white font-medium">Adarsh Sharma</span>
                                    </p>
                                </div>
                                <div className="shrink-0 flex gap-2">
                                    <a
                                        href="https://wa.me/918507756877"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-label text-xs uppercase tracking-wider font-bold bg-brand-tertiary hover:bg-brand-tertiary/90 text-white px-4 py-3 transition-all"
                                    >
                                        <MessageSquare className="size-3.5" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href="tel:+918507756877"
                                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-3.5 group"
                                >
                                    <Phone className="size-4 text-brand-tertiary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-label text-[10px] uppercase tracking-widest text-brand-secondary/50">Phone / WhatsApp</span>
                                        <span className="font-mono text-sm text-white font-semibold">+91 85077 56877</span>
                                    </div>
                                </a>

                                <a
                                    href="mailto:creative.ideajsr@gmail.com"
                                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-3.5 group"
                                >
                                    <Mail className="size-4 text-brand-tertiary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col gap-0.5 truncate">
                                        <span className="font-label text-[10px] uppercase tracking-widest text-brand-secondary/50">Official Email</span>
                                        <span className="font-sans text-sm text-white font-semibold truncate">creative.ideajsr@gmail.com</span>
                                    </div>
                                </a>

                                <a
                                    href="http://www.creativeidea.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-3.5 group"
                                >
                                    <Globe className="size-4 text-brand-tertiary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-label text-[10px] uppercase tracking-widest text-brand-secondary/50">Web Portal</span>
                                        <span className="font-sans text-sm text-white font-semibold">www.creativeidea.in</span>
                                    </div>
                                </a>

                                <div className="p-4 bg-white/5 border border-white/10 flex items-start gap-3.5">
                                    <MapPin className="size-4 text-brand-tertiary shrink-0 mt-1" />
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-label text-[10px] uppercase tracking-widest text-brand-secondary/50">Location</span>
                                        <span className="font-sans text-xs text-white leading-relaxed">
                                            Sonari, Jamshedpur, Tatanagar – Jharkhand, India – 831011
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
