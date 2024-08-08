"use client";

import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function BackgroundBeamsDemo() {
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
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-center relative z-10">
          Welcome to Project500, we&apos;ve currently closed the volunteer quoter for this cohort of the Project500.
          You can leave your mail and we&apos;ll be right in your box when the next cohort kicksoff in January 2025.
          Thank you for the interest to serve.
        </p>
        <input
          type="text"
          placeholder="hi@hello.com"
          className="rounded-lg text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
