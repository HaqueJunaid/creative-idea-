import Navbar from "@/components/common/navbar";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";
import PageLoader from "@/components/common/PageLoader";
import Footer from "@/components/common/Footer";
import { ContactProvider } from "@/context/ContactContext";
import ContactModal from "@/components/common/ContactModal";
import SmoothScroll from "@/components/common/SmoothScroll";

const RootLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <ContactProvider>
            <SmoothScroll>
                <MagneticCursor magneticFactor={0.35} blendMode="exclusion" cursorSize={20}>
                    <div className="relative min-h-screen w-full bg-brand-secondary overflow-x-clip flex flex-col">
                        <PageLoader />
                        <Navbar />
                        <div className="relative z-10 bg-brand-secondary md:mb-155">
                            <AnimatedBackground />
                            {children}
                        </div>
                        <Footer />
                        <ContactModal />
                    </div>
                </MagneticCursor>
            </SmoothScroll>
        </ContactProvider>
    );
};

export default RootLayout;