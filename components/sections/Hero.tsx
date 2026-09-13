import ScrollReveal from "@/components/common/ScrollReveal";
import StartProjectButton from "../common/StartProjectButton";

const Hero = () => {
    return (
        <section className="relative w-full min-h-fit flex flex-col px-6 lg:px-16 pt-8 lg:pt-16 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-6 w-full mx-auto">
                <ScrollReveal duration={0.8}>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-neutral opacity-60"></div>
                        <p className="font-label text-[10px] lg:text-sm font-bold tracking-[0.2em] text-brand-neutral uppercase">
                            CREATIVE EXPERIENCE STUDIO
                        </p>
                    </div>

                    <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-heading font-black text-brand-primary leading-[1.05] tracking-tight mt-6">
                        We Make Brands <br />
                        <span className="font-serif italic font-medium text-brand-tertiary pr-2">Impossible</span> to Ignore.
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.15} duration={0.8}>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 pt-6 md:pt-12">
                        <p className="font-sans text-md md:text-lg lg:text-xl text-brand-neutral md:max-w-2xl leading-relaxed">
                            Creative Idea creates bold social campaigns, Outdoor branding, Wedding Graphics, Event Branding, digital experiences, and websites that turn attention into meaningful growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <StartProjectButton />
                            <button className="px-12 py-6 bg-transparent text-brand-primary font-label text-xs font-bold tracking-widest border border-brand-primary hover:border-brand-tertiary  hover:text-brand-tertiary transition-colors duration-300">
                                VIEW OUR WORK
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 lg:mt-24 pb-24 w-full items-stretch">
                    <ScrollReveal duration={0.9} className="md:col-span-7 h-[55vh] min-h-[380px] md:h-[80vh] lg:h-[90vh] min-h-0">
                        <div data-cursor-text="VIEW" className="w-full h-full bg-zinc-900 overflow-hidden relative cursor-pointer group">
                            <img 
                                src="/mockups/hero-primary.svg" 
                                alt="Design Agency Mockup" 
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform" 
                            />
                            <div className="absolute top-0 left-0 w-full h-10 border-b border-brand-neutral/20 bg-brand-secondary/80 flex items-center justify-between px-4 z-10">
                                 <div className="flex gap-2">
                                     <div className="w-2.5 h-2.5 rounded-full bg-brand-neutral/40"></div>
                                     <div className="w-2.5 h-2.5 rounded-full bg-brand-neutral/40"></div>
                                     <div className="w-2.5 h-2.5 rounded-full bg-brand-neutral/40"></div>
                                 </div>
                                 <div className="text-[10px] font-label font-bold tracking-widest text-brand-neutral">WORK SERVICES</div>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={0.15} duration={0.9} className="md:col-span-5 h-[55vh] min-h-[380px] md:h-[80vh] lg:h-[90vh] flex flex-col gap-6">
                        <div data-cursor-text="EXPLORE" className="flex-1 min-h-0 w-full bg-zinc-900 overflow-hidden relative cursor-pointer group">
                            <img 
                                src="/mockups/hero-secondary.svg" 
                                alt="Digital Experience Mockup" 
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform" 
                            />
                        </div>


                        <div className="flex-1 min-h-0 w-full bg-brand-tertiary p-6 lg:p-10 flex flex-col justify-between">
                            <p className="font-label text-xs font-bold tracking-[0.2em] text-brand-secondary  uppercase">
                                01 / Concept
                            </p>
                            <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-brand-secondary font-medium leading-tight">
                                Pushing boundaries in digital space.
                            </h3>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;