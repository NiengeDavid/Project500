"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
const TestLogo = "/assets/TestLogo.png";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mx-auto">
      <Navbar className="top-4" />
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
        <Image src={TestLogo} alt="Logo" width={20} height={20} />
        <span className="text-black text-sm texr-left text-nowrap md:text-lg">
          Project 500
        </span>
      </a>
      <Menu setActive={setActive}>
        <HoveredLink href="#home">Home</HoveredLink>
        <HoveredLink href="#about">About</HoveredLink>
        <HoveredLink href="#location">Location</HoveredLink>
        <HoveredLink href="/register">Register</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="...">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#sponsor">Sponsor</HoveredLink>
            <HoveredLink href="#team">Team</HoveredLink>
            <HoveredLink href="#volunteer">Volunteer</HoveredLink>
            {/* <HoveredLink href="#gallery">Gallery</HoveredLink> */}
            <HoveredLink href="#contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
