"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export default function ImagesSliderDemo() {
  const images = [
    "/assets/slider/1.jpeg",
    "/assets/slider/2.jpeg",
    "/assets/slider/3.jpeg",
    "/assets/slider/4.jpeg",
    "/assets/slider/5.jpeg",
    "/assets/slider/6.jpeg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Project 500!<br /> Creating dyslexia awareness in Africa
        </motion.p>
        <a href="https://forms.gle/iAVHZxrkpJWTkzHQA" target="_blank" rel="noopener noreferrer" className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </a>
      </motion.div>
    </ImagesSlider>
  );
}
