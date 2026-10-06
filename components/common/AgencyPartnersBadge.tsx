"use client";

import React from "react";

interface AgencyPartnersBadgeProps {
    className?: string;
}

export default function AgencyPartnersBadge({ className = "" }: AgencyPartnersBadgeProps) {
    return (
        <div
            className={`inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-white/90 border border-brand-primary/10 rounded-none shadow-xs backdrop-blur-xs select-none ${className} w-fit`}
        >
            {/* Text Heading */}
            <div className="flex flex-col">
                <span className="font-heading text-xs sm:text-sm md:text-base font-semibold text-brand-primary leading-tight">
                    Official Agency
                </span>
                <span className="font-heading text-xs sm:text-sm md:text-base font-semibold text-brand-primary leading-tight">
                    Partners for
                </span>
                <span className="font-heading text-sm sm:text-base md:text-lg font-black text-[#EA580C] tracking-tight leading-tight mt-0.5">
                    Facebook &amp; Google
                </span>
            </div>

            {/* Badges Container */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Meta Business Partner Badge Card */}
                <div className="flex-1 sm:flex-initial flex flex-col items-center justify-center px-4 py-2.5 bg-white border border-zinc-300 rounded-none min-w-32.5 sm:min-w-36.25 hover:border-brand-primary/40 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1">
                        {/* Meta Logo */}
                        <svg
                            viewBox="0 0 89.2 60"
                            className="h-4 sm:h-4.5 w-auto"
                            fill="#0081FB"
                            aria-label="Meta"
                        >
                            <path d="M44.6,18.7c-4.2-6-9-9.7-14.7-9.7C17.3,9,8.5,19.2,8.5,33.5c0,13.7,8.2,23.5,20.5,23.5c6.3,0,11.5-4.2,15.6-10.7c4.1,6.5,9.3,10.7,15.6,10.7c12.3,0,20.5-9.8,20.5-23.5C80.7,19.2,71.9,9,59.3,9C53.6,9,48.8,12.7,44.6,18.7z M30.8,49.2c-7.9,0-13.8-6.9-13.8-15.7c0-8.9,5.8-15.7,13.8-15.7c5.1,0,9.2,3.9,12.7,11.2C39.6,42.4,35.6,49.2,30.8,49.2z M58.4,49.2c-4.8,0-8.8-6.8-12.7-20.2c3.5-7.3,7.6-11.2,12.7-11.2c8,0,13.8,6.8,13.8,15.7C72.2,42.3,66.4,49.2,58.4,49.2z" />
                        </svg>
                        <span className="font-heading font-extrabold text-sm sm:text-base text-zinc-900 tracking-tight">
                            Meta
                        </span>
                    </div>
                    <span className="font-sans text-[10px] sm:text-[11px] font-medium text-zinc-700 whitespace-nowrap">
                        Business Partner
                    </span>
                </div>

                {/* Google Partner Badge Card */}
                <div className="flex-1 sm:flex-initial flex flex-col items-center justify-center px-4 py-2.5 bg-white border border-zinc-300 rounded-none min-w-32.5 sm:min-w-36.25 hover:border-brand-primary/40 transition-colors">
                    <div className="flex items-center justify-center mb-1">
                        {/* Google 4-color 'G' Logo */}
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4.5 sm:h-5 w-auto"
                            aria-label="Google"
                        >
                            <path
                                fill="#4285F4"
                                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24Z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.98 0 12s.45 3.84 1.25 5.42l4.03-3.15Z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                            />
                        </svg>
                    </div>
                    <span className="font-sans text-[10px] sm:text-[11px] font-medium text-zinc-700 whitespace-nowrap">
                        Google Partner
                    </span>
                </div>
            </div>
        </div>
    );
}
