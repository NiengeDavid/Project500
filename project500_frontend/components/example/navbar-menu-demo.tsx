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
      className={cn(
        "flex justify-center items-center fixed top-10 inset-x-0 max-w-screen-md mx-2 z-50 bg-white bg-opacity-90 shadow rounded-3xl md:mx-auto",
        className
      )}
    >
      <a
        href="/"
        className="flex w-full justify-start px-2 space-x-2 items-center"
      >
        <Image src={TestLogo} alt="Logo" width={28} height={28} />
        <span className="text-black text-lg texr-left text-nowrap">
          Project 500
        </span>
      </a>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/">About</HoveredLink>
        <HoveredLink href="/">Location</HoveredLink>
        <HoveredLink href="/">Sponsor</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="...">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Volunteer">Volunteer</HoveredLink>
            <HoveredLink href="/Team">Team</HoveredLink>
            <HoveredLink href="/Gallery">Gallery</HoveredLink>
            <HoveredLink href="/Contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
