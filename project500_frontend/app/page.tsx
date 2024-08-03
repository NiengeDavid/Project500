import Image from "next/image";
import ImagesSliderDemo from "@/components/example/images-slider-demo";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import About from "@/components/about";
import AppleCardsCarouselDemo from "@/components/example/apple-cards-carousel-demo";
import { Sponsor } from "@/components/example/sponsor";
import AnimatedTooltipPreview  from "@/components/example/animated-tooltip-demo";
import BackgroundBeamsDemo from "@/components/example/background-beams-demo";
import Contact from "@/components/contact";
import { FooterDemo } from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full text-center text-2xl font-medium text-red-500">
      <div className="w-full">
        <ImagesSliderDemo />
      </div>
      <div className="w-full flex justify-center">
        <NavbarDemo />
      </div>
      <div className="w-full">
        <About />
      </div>
      <div className="w-full">
        <AppleCardsCarouselDemo />
      </div>
      <div className="w-full">
        <Sponsor />
      </div>
      <div className="w-full">
        <AnimatedTooltipPreview />
      </div>
      <div className="w-full">
        <BackgroundBeamsDemo />
      </div>
      <div className="w-full">
        <Contact />
      </div>
      <div className="w-full mt-20">
        <FooterDemo />
      </div>
    </div>
  );
}
