"use client";

import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function BackgroundBeamsDemo() {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-6 text-start md:p-4">
        <h1 className="mb-8 text-start text-sm text-nowrap leading-normal w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Volunteer for PROJECT 500 &#10509;
        </h1>
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  md:text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-start relative z-10 mb-5">
          Welcome to Project500, we&apos;ve currently closed the volunteer
          quoter for this cohort of the Project500. You can leave your mail and
          we&apos;ll be right in your box when the next cohort kicksoff in
          January 2025. Thank you for the interest to serve.
        </p>
        <button
          onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSdVuKa84ng8lo2ei7qz0sQgc6MzVwmeRBVUMqHR9JUoV-8N6A/viewform?usp=sharing")}
          className="px-4 py-2 cursor-pointer backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative"
        >
          Join now →
          <div className="absolute inset-x-0 cursor-pointer  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
}
