"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import BackgroundGradientDemo from "../example/background-gradient-demo";

export function Sponsor() {
  return (
    <div className="h-full rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full p-6 py-12">
      <div className="max-w-screen-xl flex flex-col justisfy-between items-center mx-auto space-y-6 p-6 md:flex-row md:space-y-0 md:space-x-10">
        <div className="w-full text-start text-white font-semibold leading-normal">
          <h1 className="mb-4 text-white text-start text-lg text-nowrap font-semibold leading-normal w-full">
            SPONSOR PROJECT 500 &#10509;
          </h1>
          <h1 className="text-5xl xl:text-7xl">
            Be a part of this <br /> project and change lives.
          </h1>
          <span className="font-light text-lg mt-6">
            Support our volunteers in the Dyslexia Project 500 by sponsoring a
            project 500 T-shirt!, and/or the book  “dyslexia - a superpower unveiled” for children in Africa.

          </span>
        </div>
        <BackgroundGradientDemo />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
