"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const Hood = "/assets/Sweatshirt.jpg"

export default function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm pb-4 md:b-10 md:max-w-xl bg-white dark:bg-zinc-900">
        <Image
          src={Hood}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-t-[22px]"
        />
        <p className="px-4 text-start sm:text-xl text-black mt-6 mb- dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="p-4 text-start text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="ml-4 rounded-full pl-4 pr-2 py-2 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            N10,000
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
