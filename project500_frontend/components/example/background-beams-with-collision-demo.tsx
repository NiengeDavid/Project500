import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col justify-center items-center space-y-6 px-6">
      <div className="flex justify-start w-full items-center px-5 md:px-24">
        <a
          href="/"
          className="text-white bg-black rounded-full py-4 px-6 border hover:bg-gray-700"
        >
          Back
        </a>
      </div>

      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
        School Registration for{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Dyslexia Project 500.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Dyslexia Project 500.</span>
          </div>
        </div>
      </h2>
      <span className="md:text-lg xl:text-xl max-w-lg md:max-w-2xl text-white font-light text-center">
        Thank you for your interest in having our team visit your school to
        raise dyslexia awareness among primary school children. <br />
        <b className="font-bold">Please fill out the form below👇</b>
      </span>
    </BackgroundBeamsWithCollision>
  );
}

// What&apos;s cooler than Beams?{" "}
