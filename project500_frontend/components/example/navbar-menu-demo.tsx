"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
//import TestLogo from "../public/assets/TestLogo.png";
const TestLogo = "/assets/TestLogo.png";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mx-auto">
      <Navbar className="top-4" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("flex justify-center items-center fixed top-10 inset-x-0 max-w-screen-md mx-auto z-50", className)}
    >
      <a href="/" className="flex w-full justify-start px-2 space-x-2 items-center">
        <Image
          src={TestLogo}
          alt="Logo"
          width={28}
          height={28}
        />
        <span className="text-white text-lg texr-left text-nowrap">
          Project 500
        </span>
      </a>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/">About</HoveredLink>
        <HoveredLink href="/">Location</HoveredLink>
        <HoveredLink href="/">Sponsors</HoveredLink>
        <HoveredLink href="/">Host</HoveredLink>
      </Menu>
    </div>
  );
}
