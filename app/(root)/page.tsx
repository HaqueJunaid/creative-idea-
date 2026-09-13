import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Founders from "@/components/sections/Founders";

export default function Home() {
  return (
    <div className="mt-24">
      <Hero />
      <BrandMarquee />
      <SelectedWork />
      <Services />
      <Process />
      <Founders />
    </div>
  );
}

