"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
    FileText, 
    Calendar, 
    DollarSign, 
    Users, 
    CheckCircle2, 
    Layers, 
    Printer, 
    Share2, 
    Globe, 
    Copyright, 
    Image, 
    ShieldAlert, 
    RefreshCcw, 
    Clock, 
    AlertTriangle, 
    Ban, 
    Scale, 
    Mail, 
    Phone, 
    MessageSquare, 
    MapPin, 
    Check, 
    Copy,
    ArrowUpRight,
    Sparkles,
    ShieldCheck
} from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

interface Section {
    id: string;
    number: string;
    title: string;
    icon: typeof FileText;
}

const termsSections: Section[] = [
    { id: "about-services", number: "01", title: "About Our Services", icon: FileText },
    { id: "enquiry-booking", number: "02", title: "Service Enquiry & Booking", icon: Calendar },
    { id: "pricing-payment", number: "03", title: "Pricing & Payment", icon: DollarSign },
    { id: "client-responsibilities", number: "04", title: "Client Responsibilities", icon: Users },
    { id: "design-approval", number: "05", title: "Design Approval", icon: CheckCircle2 },
    { id: "revisions-changes", number: "06", title: "Revisions & Changes", icon: Layers },
    { id: "printing-production", number: "07", title: "Printing & Production", icon: Printer },
    { id: "social-digital-marketing", number: "08", title: "Social Media & Digital Marketing", icon: Share2 },
    { id: "third-party-platforms", number: "09", title: "Third-Party Platforms", icon: Globe },
    { id: "intellectual-property", number: "10", title: "Intellectual Property", icon: Copyright },
    { id: "portfolio-use", number: "11", title: "Portfolio & Promotional Use", icon: Image },
    { id: "confidentiality", number: "12", title: "Confidentiality", icon: ShieldCheck },
    { id: "cancellation-refunds", number: "13", title: "Cancellation & Refunds", icon: RefreshCcw },
    { id: "delays", number: "14", title: "Delays & Timelines", icon: Clock },
    { id: "limitation-liability", number: "15", title: "Limitation of Liability", icon: AlertTriangle },
    { id: "prohibited-use", number: "16", title: "Prohibited Use", icon: Ban },
    { id: "changes-to-terms", number: "17", title: "Changes to These Terms", icon: RefreshCcw },
    { id: "governing-law", number: "18", title: "Governing Law & Jurisdiction", icon: Scale },
    { id: "contact", number: "19", title: "Contact Us", icon: Mail },
];

export default function TermsContent() {
    const [activeSection, setActiveSection] = useState<string>("about-services");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of termsSections) {
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
                <div className="p-6 md:p-8 bg-white/70 backdrop-blur-md border border-brand-primary/10 shadow-sm flex flex-col gap-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 border-b border-brand-primary/10 sticky top-0 bg-white/90 backdrop-blur-md z-10 -mt-2 pt-2">
                        <span className="font-label text-xs font-bold tracking-[0.2em] text-brand-tertiary uppercase flex items-center gap-2">
                            <Sparkles className="size-3.5" />
                            Terms Index
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

                    <nav className="flex flex-col gap-1" aria-label="Terms sections">
                        {termsSections.map(({ id, number, title, icon: Icon }) => {
                            const isActive = activeSection === id;
                            return (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className={`group flex items-center justify-between px-3 py-2 text-xs font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-brand-primary text-white font-semibold shadow-sm"
                                            : "text-brand-primary/80 hover:bg-brand-primary/5 hover:text-brand-primary"
                                    }`}
                                >
                                    <div className="flex items-center gap-2 truncate">
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
                    <div className="mt-2 pt-4 border-t border-brand-primary/10 flex flex-col gap-2.5">
                        <span className="font-label text-[10px] uppercase tracking-widest text-brand-neutral font-bold">
                            Contracts & Legal
                        </span>
                        <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                            Questions regarding custom scopes, NDAs, or contracts?
                        </p>
                        <a
                            href="mailto:creative.ideajsr@gmail.com"
                            className="inline-flex items-center justify-between font-label text-[11px] font-bold tracking-wider text-brand-primary hover:text-brand-tertiary uppercase transition-colors"
                        >
                            <span>Contact Legal Team</span>
                            <ArrowUpRight className="size-3.5" />
                        </a>
                    </div>
                </div>
            </aside>

            {/* ── Main Terms Body ── */}
            <div className="lg:col-span-8 flex flex-col gap-14 md:gap-18">
                {/* ── Intro Callout Card ── */}
                <ScrollReveal duration={0.6}>
                    <div className="relative p-6 md:p-8 bg-white/80 border border-brand-primary/10 backdrop-blur-sm flex flex-col gap-4 shadow-sm">
                        <div className="flex items-center gap-2 text-brand-tertiary font-label text-xs font-bold tracking-widest uppercase">
                            <Scale className="size-4" />
                            <span>Client & Studio Agreement</span>
                        </div>
                        <p className="font-sans text-brand-primary text-base md:text-lg leading-relaxed">
                            Welcome to <strong>Creative Idea</strong>. These Terms of Service (“Terms”) govern your access to and use of our website, services, products, and other offerings provided by Creative Idea.
                        </p>
                        <p className="font-sans text-brand-neutral text-sm md:text-base leading-relaxed">
                            By accessing our website or using our services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree with any part of these Terms, please do not use our website or services.
                        </p>
                        <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-brand-neutral/80">
                            <span className="px-2.5 py-1 bg-brand-primary/5 border border-brand-primary/5">Applicable to all client engagements</span>
                            <span className="px-2.5 py-1 bg-brand-primary/5 border border-brand-primary/5">Jurisdiction: Jamshedpur, Jharkhand</span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── 01. About Our Services ── */}
                <section id="about-services" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">01</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">About Our Services</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea provides advertising, branding, graphic design, printing, social media management, digital marketing, video editing, AI-generated creative services, signage, and other related creative and marketing services.
                        </p>
                        <p>
                            The exact scope of work, deliverables, timelines, revisions, and charges may vary depending on the service selected and will be communicated to the client before the work begins.
                        </p>
                    </div>
                </section>

                {/* ── 02. Service Enquiry & Booking ── */}
                <section id="enquiry-booking" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">02</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Service Enquiry & Booking</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            All service enquiries, quotations, proposals, and bookings are subject to availability and confirmation by Creative Idea.
                        </p>
                        <p>
                            A project will be considered confirmed only after the client has accepted the quotation or proposal and, where applicable, made the required advance payment.
                        </p>
                        <p>
                            Creative Idea reserves the right to refuse or discontinue a project if the requested work violates applicable laws, regulations, or our internal policies.
                        </p>
                    </div>
                </section>

                {/* ── 03. Pricing & Payment ── */}
                <section id="pricing-payment" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">03</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Pricing & Payment</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            All prices and charges will be communicated to the client before the commencement of the project.
                        </p>
                        <p>
                            Depending on the project, an advance payment may be required before work begins. The remaining balance must be paid according to the agreed payment schedule.
                        </p>
                        <div className="p-4 bg-white/60 border border-brand-primary/10 text-xs md:text-sm text-brand-neutral leading-relaxed">
                            <strong className="text-brand-primary">Additional Scope & Out-of-Pocket Costs:</strong> Any additional work, changes, extra revisions, additional quantities, urgent requirements, or services not included in the original quotation may be charged separately. Taxes, delivery charges, transportation charges, advertising spend, third-party charges, or other external expenses may be additional unless specifically mentioned in the quotation.
                        </div>
                    </div>
                </section>

                {/* ── 04. Client Responsibilities ── */}
                <section id="client-responsibilities" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">04</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Client Responsibilities</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            The client is responsible for providing accurate and complete information, content, logos, photographs, brand guidelines, product details, contact information, and other materials required to complete the project.
                        </p>
                        <p>
                            The client must ensure that any content, images, logos, trademarks, or other materials supplied to Creative Idea are legally authorised for use.
                        </p>
                        <p className="text-xs md:text-sm text-brand-neutral">
                            Creative Idea will not be responsible for delays or errors caused by incomplete, incorrect, or delayed information provided by the client.
                        </p>
                    </div>
                </section>

                {/* ── 05. Design Approval ── */}
                <section id="design-approval" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">05</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Design Approval</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea may provide design drafts, previews, samples, or proofs for client approval.
                        </p>
                        <p>
                            The client is responsible for carefully checking all text, spelling, numbers, names, dates, addresses, prices, dimensions, colours, and other information before providing final approval.
                        </p>
                        <div className="p-4 bg-brand-yellow/15 border border-brand-yellow/30 text-xs md:text-sm text-brand-primary/90 leading-relaxed">
                            <strong className="text-brand-primary">Post-Approval Disclaimer:</strong> Once a design or artwork has been approved by the client for printing, publishing, production, or final delivery, Creative Idea will not be responsible for errors that were present in the approved version.
                        </div>
                    </div>
                </section>

                {/* ── 06. Revisions & Changes ── */}
                <section id="revisions-changes" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">06</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Revisions & Changes</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            The number of revisions included in a project will depend on the quotation or package agreed upon with the client.
                        </p>
                        <p>
                            Additional revisions or major changes outside the agreed scope may attract additional charges. Changes requested after final approval may also result in additional costs and may affect the delivery timeline.
                        </p>
                    </div>
                </section>

                {/* ── 07. Printing & Production ── */}
                <section id="printing-production" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">07</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Printing & Production</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            For printing, signage, branding, and other physical production work, slight variations in colour, material, texture, size, or finishing may occur due to differences in printing processes, materials, machines, screens, and production conditions.
                        </p>
                        <p>
                            Creative Idea will make reasonable efforts to maintain the approved quality and specifications. Production timelines may vary depending on material availability, vendor schedules, weather conditions, transportation, or other circumstances beyond our reasonable control.
                        </p>
                    </div>
                </section>

                {/* ── 08. Social Media & Digital Marketing Services ── */}
                <section id="social-digital-marketing" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">08</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Social Media & Digital Marketing Services</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            For social media management, digital marketing, advertising, and related services, results may vary depending on several factors including market conditions, audience behaviour, platform algorithms, competition, advertising budgets, content quality, and client cooperation.
                        </p>
                        <p>
                            Creative Idea does not guarantee a specific number of followers, leads, sales, views, engagement, reach, or other performance results unless specifically agreed in writing.
                        </p>
                        <p className="text-xs md:text-sm text-brand-neutral">
                            Advertising budgets paid to platforms such as Meta, Google, or other third-party platforms are separate from Creative Idea's service charges unless specifically mentioned otherwise.
                        </p>
                    </div>
                </section>

                {/* ── 09. Third-Party Platforms ── */}
                <section id="third-party-platforms" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">09</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Third-Party Platforms</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Our services may involve third-party platforms, websites, software, social media networks, payment gateways, advertising platforms, hosting providers, printing vendors, or other service providers.
                        </p>
                        <p>
                            Creative Idea is not responsible for downtime, policy changes, account restrictions, algorithm changes, technical issues, or other actions taken by third-party platforms.
                        </p>
                    </div>
                </section>

                {/* ── 10. Intellectual Property ── */}
                <section id="intellectual-property" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">10</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Intellectual Property</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Unless otherwise agreed in writing, Creative Idea retains the rights to its original design concepts, creative processes, templates, working files, source files, and other proprietary materials.
                        </p>
                        <p>
                            Final approved artwork or deliverables may be provided to the client according to the agreed scope of work.
                        </p>
                        <p>
                            The client must not reproduce, resell, modify, distribute, or commercially use Creative Idea's unused concepts, rejected designs, templates, or proprietary materials without written permission.
                        </p>
                        <p className="text-xs text-brand-neutral">
                            Third-party logos, fonts, images, stock assets, music, footage, trademarks, and other copyrighted materials remain the property of their respective owners and are subject to their applicable licences and terms.
                        </p>
                    </div>
                </section>

                {/* ── 11. Portfolio & Promotional Use ── */}
                <section id="portfolio-use" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">11</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Portfolio & Promotional Use</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Unless otherwise agreed in writing, Creative Idea may display completed projects, designs, photographs, videos, or other creative work produced for a client in its portfolio, website, social media pages, presentations, or promotional materials.
                        </p>
                        <p className="p-4 bg-white/60 border border-brand-primary/10 text-xs md:text-sm text-brand-neutral">
                            <strong>Confidentiality Requests:</strong> If a client requires complete confidentiality or does not want a project to be displayed publicly, this should be communicated to Creative Idea before the project begins or through a written request.
                        </p>
                    </div>
                </section>

                {/* ── 12. Confidentiality ── */}
                <section id="confidentiality" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">12</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Confidentiality</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea will make reasonable efforts to maintain the confidentiality of information shared by clients for the purpose of completing a project.
                        </p>
                        <p>
                            Confidential information will not be intentionally disclosed to unrelated third parties except where required to provide the requested service, comply with applicable law, or protect our legal rights.
                        </p>
                    </div>
                </section>

                {/* ── 13. Cancellation & Refunds ── */}
                <section id="cancellation-refunds" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">13</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Cancellation & Refunds</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Cancellation and refund terms may vary depending on the type and stage of the project.
                        </p>
                        <p>
                            Once work has commenced, advance payments may be non-refundable because resources, time, creative work, production, or third-party services may already have been committed.
                        </p>
                        <p className="text-xs text-brand-neutral">
                            Any refund, where applicable, will be handled according to the specific agreement, quotation, or service terms provided to the client.
                        </p>
                    </div>
                </section>

                {/* ── 14. Delays ── */}
                <section id="delays" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">14</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Delays</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea will make reasonable efforts to complete projects within the agreed timeline.
                        </p>
                        <p>
                            However, delays may occur due to delayed client approvals, incomplete information, changes in requirements, payment delays, third-party vendors, material availability, technical problems, force majeure events, or circumstances beyond our reasonable control.
                        </p>
                    </div>
                </section>

                {/* ── 15. Limitation of Liability ── */}
                <section id="limitation-liability" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">15</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Limitation of Liability</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea will make reasonable efforts to provide professional and reliable services. However, we shall not be liable for indirect, incidental, consequential, or business losses resulting from the use of our services or from circumstances beyond our reasonable control.
                        </p>
                        <p>
                            Our liability, where applicable, will generally be limited to the amount paid by the client for the specific service giving rise to the claim, subject to applicable law.
                        </p>
                    </div>
                </section>

                {/* ── 16. Prohibited Use ── */}
                <section id="prohibited-use" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">16</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Prohibited Use</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            You agree not to use our website or services for any unlawful, fraudulent, abusive, misleading, defamatory, or infringing purpose.
                        </p>
                        <p>
                            Creative Idea reserves the right to refuse service or terminate a project where we reasonably believe that the requested work may violate applicable laws or third-party rights.
                        </p>
                    </div>
                </section>

                {/* ── 17. Changes to These Terms ── */}
                <section id="changes-to-terms" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">17</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Changes to These Terms</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            Creative Idea may update or modify these Terms of Service from time to time. Any revised Terms will become effective when published on our website. Users and clients are encouraged to review these Terms periodically.
                        </p>
                    </div>
                </section>

                {/* ── 18. Governing Law ── */}
                <section id="governing-law" className="scroll-mt-32 flex flex-col gap-5">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-3.5">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">18</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Governing Law & Jurisdiction</h2>
                    </div>
                    <div className="flex flex-col gap-3.5 font-sans text-brand-primary/85 leading-relaxed text-sm md:text-base">
                        <p>
                            These Terms of Service shall be governed by and interpreted in accordance with the applicable laws of India.
                        </p>
                        <p>
                            Any dispute arising in connection with these Terms or our services shall be subject to the applicable jurisdiction of the courts in Jamshedpur, Jharkhand, unless otherwise required by applicable law.
                        </p>
                    </div>
                </section>

                {/* ── 19. Contact Us ── */}
                <section id="contact" className="scroll-mt-32 flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                        <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">19</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Contact Us</h2>
                    </div>
                    <div className="flex flex-col gap-6 font-sans">
                        <p className="text-sm md:text-base text-brand-primary/85 leading-relaxed">
                            If you have any questions or clarifications regarding these Terms of Service, please contact our management:
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
                                        <span className="font-label text-[10px] uppercase tracking-widest text-brand-secondary/50">Address</span>
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
