import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import OurStory from "@/components/sections/OurStory";
import WhyDifferent from "@/components/sections/WhyDifferent";
import Process from "@/components/sections/Process";
import Founders from "@/components/sections/Founders";
import CtaDual from "@/components/sections/CtaDual";

export default function Home() {
  return (
    <div className="mt-24">
      <Hero />
      <BrandMarquee />
      <SelectedWork />
      <Services />
      <OurStory />
      <WhyDifferent />
      <Process />
      <Founders />
      <CtaDual />
    </div>
  );
}

