"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Blessing Ingyape",
    designation: "Co-pioneer Dyslexia Project Africa",
    image: "/assets/team/coachB.jpeg",
    link: "www.blessingingyape.ng",
  },
  {
    id: 2,
    name: "Adunola Shoge",
    designation: "Co-pioneer Dyslexia Project Africa",
    image: "/assets/team/shoge.jpeg",
    link: "https://www.linkedin.com/in/adunola-shoge",
  },
  {
    id: 3,
    name: "Mary Offiong",
    designation: "Project Admin Dyslexia Project Africa",
    image: "/assets/team/mary.jpeg",
    link: "https://about.me/maryoffiong",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="">
      <h1 className="mt-20 text-black text-center text-4xl text-nowrap font-bold leading-normal w-full">
        Meet The Team
      </h1>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
