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
    <div className="w-full">
      <div id="home" className="w-full">
        <ImagesSliderDemo />
      </div>
      <div className="w-full flex justify-center">
        <NavbarDemo />
      </div>
      <div id="about" className="w-full">
        <About />
      </div>
      <div id="location" className="w-full">
        <AppleCardsCarouselDemo />
      </div>
      <div id="sponsor" className="w-full">
        <Sponsor />
      </div>
      <div id="team" className="w-full">
        <AnimatedTooltipPreview />
      </div>
      <div id="volunteer" className="w-full">
        <BackgroundBeamsDemo />
      </div>
      <div id="contact" className="w-full">
        <Contact />
      </div>
      <div className="w-full mt-20">
        <FooterDemo />
      </div>
    </div>
  );
}
