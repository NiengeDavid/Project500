"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const coreTeam = [
  {
    id: 1,
    name: "Blessing Ingyape",
    designation: "Co-pioneer Dyslexia Project Africa",
    image: "/assets/team/coachB.jpeg",
    link: "https://blessingingyape.com.ng/",
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

const volunteers = [
  { id: 4, name: "Kolawole Mathew Olusegun" },
  { id: 5, name: "Adaise Grace Ojochenemi" },
  { id: 6, name: "Adegbite Oluwabusolami Mary" },
  { id: 7, name: "Okolinta Chimsom Ruth" },
  { id: 8, name: "Adeyemo Mercy Adeola" },
  { id: 9, name: "Murungi Kaari Emmy" },
  { id: 10, name: "Agbir Bridget Agini" },
  { id: 11, name: "Oyebanji Itoro Gloria" },
  { id: 12, name: "Amos Dauda Bivan" },
  { id: 13, name: "Davou Mafeng Luka" },
  { id: 14, name: "Agaku Elijah Aondowase" },
  { id: 15, name: "Gyekye-Adarkwa Elorm" },
  { id: 16, name: "Igbaako Jennifer Doobee" },
  { id: 17, name: "Tekoa LaToya" },
  { id: 18, name: "Ogundipe Ayomide Rachael" },
  { id: 19, name: "Agbolade Marvelous Oluwadabira" },
  { id: 20, name: "Nkwelle Rita Mekang" },
  { id: 21, name: "Olatunji Ruth Oluwaseyi" },
  { id: 22, name: "Adekanmbi Rukayat Adeola" },
  { id: 23, name: "Benjamin Victoria Ojonugwa" },
  { id: 24, name: "Akinlolu Precious Oluwadunsin" },
  { id: 25, name: "Abdulsalam Fatima" },
  { id: 26, name: "Jambol Suzan Ezekiel" },
  { id: 27, name: "Oludipo Atinuke Oluwafunmilola" },
  { id: 28, name: "Akawa Stella Onome" },
  { id: 29, name: "Mulei Florence Mwende" },
  { id: 30, name: "Ibrahim Ibikunle Olalekan" },
  { id: 31, name: "Tiza Joanna Nguemo" },
  { id: 32, name: "EnowBisong Njonje Alice Bessem" },
  { id: 33, name: "Offiong Mary Imaobong" },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="py-12 bg-white">
      <h1 className="text-black text-center text-4xl font-bold leading-normal mb-12">
        Meet The Team
      </h1>

      {/* Core Team */}
      <div className="flex flex-row items-center justify-center w-full mb-8">
        <AnimatedTooltip items={coreTeam} />
      </div>

      {/* Volunteers Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Dyslexia Project 500 Phase 1 Volunteers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="p-3 text-center rounded-lg transition-all duration-300
                         bg-gray-50 hover:bg-black hover:text-white
                         cursor-pointer border border-gray-200 hover:border-blue-200
                         text-sm md:text-base"
            >
              {volunteer.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
