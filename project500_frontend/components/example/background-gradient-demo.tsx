"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const Hood = "/assets/shirt.jpeg";
const Book = "/assets/book.jpeg";

export default function BackgroundGradientDemo() {
  return (
    <div className="flex flex-col space-y-6 justify-between items-center mx-auto md:flex-row md:space-y-0 md:space-x-6">
      <BackgroundGradient className="rounded-[22px] max-w-sm pb-4 md:b-10 md:max-w-xl bg-white dark:bg-zinc-900">
        <Image
          src={Hood}
          alt="product1"
          height="400"
          width="400"
          className="object-contain rounded-t-[22px]"
        />
        <p className="px-4 text-start sm:text-xl text-neutral-600 mt-6 font-semibold dark:text-neutral-200">
          Project 500 Tshirt
        </p>

        <p className="p-4 text-start text-sm text-neutral-600 dark:text-neutral-400">
          You can pay directly to: <br />
          <b>Bank: </b>Prospa Capital MFB
          <br />
          <b>Account Number: </b>
          7358046848 <br />
          <b>Account Name: </b>Dyslexia Help Learning Academy <br /> <br />
          Or use the button below
        </p>
        <a
          href="https://selar.co/0l6656"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 w-36 rounded-full pl-4 pr-2 py-2 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800"
        >
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            N8,000
          </span>
        </a>
      </BackgroundGradient>

      {/* Book */}
      <BackgroundGradient className="rounded-[22px] max-w-sm pb-4 md:b-10 md:max-w-xl bg-white dark:bg-zinc-900">
        <Image
          src={Book}
          alt="product1"
          height="400"
          width="400"
          className="object-contain rounded-t-[22px]"
        />
        <p className="px-4 text-start sm:text-xl text-neutral-600 mt-6 font-semibold dark:text-neutral-200">
          Dyslexia; a super power unveiled
        </p>

        <p className="p-4 text-start text-sm text-neutral-600 dark:text-neutral-400">
          You can pay directly to: <br />
          <b>Bank: </b>Prospa Capital MFB
          <br />
          <b>Account Number: </b>
          7358046848 <br />
          <b>Account Name: </b>Dyslexia Help Learning Academy <br /> <br />
          Or use the button below
        </p>
        <a
          href="https://selar.co/187q22"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 w-36 rounded-full pl-4 pr-2 py-2 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800"
        >
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            N1000
          </span>
        </a>
      </BackgroundGradient>
    </div>
  );
}
