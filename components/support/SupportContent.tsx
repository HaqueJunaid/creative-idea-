"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    HelpCircle, 
    FolderKanban, 
    Palette, 
    Printer, 
    CreditCard, 
    Clock, 
    Mail, 
    Phone, 
    MessageSquare, 
    MapPin, 
    Globe, 
    Send, 
    Headphones, 
    Zap, 
    Sparkles 
} from "lucide-react";
import { useContact } from "@/context/ContactContext";
import ScrollReveal from "@/components/common/ScrollReveal";

const supportCategories = [
    {
        id: "general",
        number: "01",
        title: "General Support",
        icon: HelpCircle,
        description: "For general enquiries, service-related questions, quotations, or information about Creative Idea, you can contact our team directly.",
        tip: "Ideal for new clients looking to understand our service offerings and capabilities.",
        badge: "New Inquiries",
    },
    {
        id: "project",
        number: "02",
        title: "Project Support",
        icon: FolderKanban,
        description: "If you are an existing client and need assistance regarding an ongoing project, please share your project details, requirements, or concerns with our team. We will review your request and respond as soon as reasonably possible.",
        tip: "Please provide your project name or quotation reference for expedited assistance.",
        badge: "Active Clients",
    },
    {
        id: "creative",
        number: "03",
        title: "Design & Creative Support",
        icon: Palette,
        description: "For design-related requirements, revisions, corrections, artwork approvals, branding, social media creatives, video editing, or other creative services, please provide clear instructions and the required reference files wherever applicable.",
        tip: "Sending high-resolution assets and reference links ensures prompt execution.",
        badge: "Creative Assets",
    },
    {
        id: "production",
        number: "04",
        title: "Printing & Production Support",
        icon: Printer,
        description: "For printing, signage, branding, or production-related queries, please mention the order details, required quantity, size, material, and delivery requirements so that our team can assist you efficiently.",
        tip: "Include dimensions, Pantone colors, and substrate preferences if known.",
        badge: "Physical Media",
    },
    {
        id: "billing",
        number: "05",
        title: "Payment & Billing Support",
        icon: CreditCard,
        description: "For payment, invoice, quotation, or billing-related queries, please contact us with your relevant project or invoice details.",
        tip: "Official invoices and GST receipts are issued for all project stages.",
        badge: "Accounts & GST",
    },
    {
        id: "response-time",
        number: "06",
        title: "Response Time & Working Hours",
        icon: Clock,
        description: "We aim to respond to support requests as soon as possible during our working hours. Response times may vary depending on the nature and complexity of the request.",
        tip: "Urgent project requests are prioritized via direct WhatsApp communication.",
        badge: "Fast Turnaround",
    },
];

export default function SupportContent() {
    const { openContact } = useContact();

    return (
        <div className="flex flex-col gap-14 md:gap-20 pb-24">
            {/* ── Top Overview Banner ── */}
            <ScrollReveal duration={0.6}>
                <div className="relative p-6 md:p-10 bg-white/80 border border-brand-primary/10 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
                    <div className="flex flex-col gap-3 max-w-2xl">
                        <div className="flex items-center gap-2 text-brand-tertiary font-label text-xs font-bold tracking-widest uppercase">
                            <Headphones className="size-4" />
                            <span>Client Helpdesk & Service Desk</span>
                        </div>
                        <h2 className="font-heading font-black text-2xl md:text-3xl text-brand-primary leading-tight">
                            Dedicated support for every stage of your brand journey.
                        </h2>
                        <p className="font-sans text-brand-neutral text-sm md:text-base leading-relaxed">
                            At Creative Idea, we are committed to providing reliable support and assistance to our clients and website visitors. If you have any questions about our services, ongoing projects, quotations, payments, designs, printing, social media management, digital marketing, or any other service, our team is available to assist you.
                        </p>
                    </div>

                    <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                        <button
                            onClick={openContact}
                            className="flex items-center justify-center gap-2.5 font-label font-bold text-xs uppercase tracking-wider bg-brand-primary text-white hover:bg-brand-tertiary px-6 py-4 transition-all duration-300 shadow-md cursor-pointer"
                        >
                            <Send className="size-3.5" />
                            <span>Submit Enquiry</span>
                        </button>
                        <a
                            href="https://wa.me/918507756877"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2.5 font-label font-bold text-xs uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-4 transition-all duration-300 shadow-md"
                        >
                            <MessageSquare className="size-3.5" />
                            <span>Instant WhatsApp</span>
                        </a>
                    </div>
                </div>
            </ScrollReveal>

            {/* ── Support Categories Grid (Sections 1 through 6) ── */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-brand-primary/10 pb-4">
                    <div className="flex items-center gap-2.5 font-label text-xs font-bold tracking-widest text-brand-tertiary uppercase">
                        <Sparkles className="size-3.5" />
                        <span>Support Channels by Requirement</span>
                    </div>
                    <span className="font-mono text-xs text-brand-neutral">01 — 06</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supportCategories.map(({ id, number, title, icon: Icon, description, tip, badge }) => (
                        <div
                            key={id}
                            id={id}
                            className="p-6 md:p-7 bg-white/70 border border-brand-primary/10 backdrop-blur-sm flex flex-col justify-between gap-5 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex flex-col gap-3.5">
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 bg-brand-primary/5 flex items-center justify-center text-brand-tertiary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                        <Icon className="size-5" />
                                    </div>
                                    <span className="font-mono text-xs font-bold text-brand-neutral/60 bg-brand-primary/5 px-2 py-0.5">
                                        {number}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-brand-tertiary font-bold">
                                        {badge}
                                    </span>
                                    <h3 className="font-heading font-bold text-lg text-brand-primary group-hover:text-brand-tertiary transition-colors">
                                        {title}
                                    </h3>
                                </div>

                                <p className="font-sans text-xs md:text-sm text-brand-primary/80 leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-brand-primary/5 flex items-start gap-2 text-[11px] font-sans text-brand-neutral leading-normal">
                                <span className="font-bold text-brand-tertiary shrink-0">Tip:</span>
                                <span>{tip}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Faster Assistance Best Practices Callout ── */}
            <ScrollReveal duration={0.6}>
                <div className="p-6 md:p-8 bg-brand-yellow/20 border border-brand-yellow/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-brand-yellow/40 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                            <Zap className="size-5 text-brand-primary" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <h4 className="font-heading font-bold text-base md:text-lg text-brand-primary">
                                For Faster Assistance
                            </h4>
                            <p className="font-sans text-xs md:text-sm text-brand-primary/85 leading-relaxed max-w-2xl">
                                Please include your <strong>full name</strong>, <strong>contact number</strong>, <strong>project name or quotation reference</strong>, and a <strong>brief description of your requirement</strong> when reaching out. This allows our design and production leads to review your project files immediately.
                            </p>
                        </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                        <button
                            onClick={openContact}
                            className="font-label text-xs uppercase tracking-wider font-bold bg-brand-primary text-white hover:bg-brand-tertiary px-5 py-3 transition-colors cursor-pointer"
                        >
                            Open Quick Form
                        </button>
                    </div>
                </div>
            </ScrollReveal>

            {/* ── Section 07: Contact Us ── */}
            <section id="contact" className="scroll-mt-32 flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-brand-primary/10 pb-4">
                    <span className="font-mono text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2.5 py-1">07</span>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-primary">Direct Contact Directory</h2>
                </div>

                {/* Direct Contact Card */}
                <div className="p-6 md:p-8 bg-brand-primary text-brand-secondary flex flex-col gap-6 border border-brand-primary shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                        <div>
                            <span className="font-mono text-[10px] tracking-[0.2em] text-brand-tertiary uppercase font-bold">Studio Helpdesk</span>
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
                                <span>WhatsApp (Direct)</span>
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
                                <span className="font-label text-[10px] uppercase tracking-widest text-brand-secondary/50">Support Email</span>
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
                                <span className="font-label text-[10px] uppercase tracking-widest text-brand-secondary/50">Headquarters Address</span>
                                <span className="font-sans text-xs text-white leading-relaxed">
                                    Sonari, Jamshedpur, Tatanagar – Jharkhand, India – 831011
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
