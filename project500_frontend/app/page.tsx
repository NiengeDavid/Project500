import Image from "next/image";
import ImagesSliderDemo from "@/components/example/images-slider-demo";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import About from "@/components/about";

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
    </div>
  );
}
