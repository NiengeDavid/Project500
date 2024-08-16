"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Countries Involved In This Project.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const dummyData: Record<string, string[]> = {
  nigeria: [
    "FCT Abuja",
    "Kaduna",
    "Jigawa",
    "Kano",
    "Benue",
    "Oyo State",
    "Lagos",
    "Ogun",
    "Osun",
    "Borno",
    "Katsina",
    "Bauchi",
    "Jos",
    "Rivers",
    "Imo",
    "Enugu",
  ],
  kenya: ["Nairobi", "Busia", "Naivasha", "Kissi"],
  rwanda: ["Kigali"],
  cameroon: [" Limbe", "Yaounde", "Bamenda"],
  ghana: ["Accra", "Northen Region"],
};

interface DummyContentProps {
  country: string;
}

const DummyContent = ({ country }: DummyContentProps) => {
  return (
    <>
      {dummyData[country]?.map((item: string, index: number) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {item}
              </span>{" "}
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Nigeria",
    title: "16 Cities Covered",
    src: "/assets/ng.jpeg",
    content: <DummyContent country="nigeria" />,
  },
  {
    category: "Ghana",
    title: "2 Cities Covered",
    src: "/assets/ghana.jpeg",
    content: <DummyContent country="ghana" />,
  },
  {
    category: "Rwanda",
    title: "Kigali Covered ",
    src: "/assets/rwanda.jpeg",
    content: <DummyContent country="rwanda"/>,
  },

  {
    category: "Cameroon",
    title: "3 Cities Covered",
    src: "/assets/cameroon.jpeg",
    content: <DummyContent country="cameroon" />,
  },
  {
    category: "Kenya",
    title: "4 Cities Covered",
    src: "/assets/kenya.jpeg",
    content: <DummyContent country="kenya"/>,
  },
];
