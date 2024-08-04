"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import NextJSLogo from "./NextjsLogo";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaLine,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-DarkBG.png`
      : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-WhiteBG.png`;
  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";
  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-700";
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";
  const socialColor = theme === "light" ? "#09090b" : "#fafafa";
  const TitleLinearColor =
    theme === "dark"
      ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
      : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text";

  return (
    <main className={`px-8 py-8 ${bgColorClass} w-full`}>
      <div className="flex sm:flex-col sm:justify-center w-full justify-between pb-4 sm:gap-4">
        <div className="flex w-full justify-start sm:justify-center items-center gap-6">
          <div className="flex sm:w-fit sm:justify-center items-center gap-2">
            <Image
              src={logoSrc}
              alt="Surakiat-Logo"
              width={40}
              height={40}
              priority
              className="object-cover"
            />
            <p className={`font-bold sm:hidden ${TitleLinearColor}`}>
              SURAKIAT
            </p>
          </div>
          <div
            className={`flex gap-2 border-l ${borderColorClass} items-center`}
          >
            <p
              className={`pl-6 font-normal whitespace-nowrap ${textColorClass}`}
            >
              Made with.
            </p>
            <NextJSLogo />
          </div>
        </div>
        <div className="flex w-full justify-end sm:justify-center items-start">
          <div className="flex items-center gap-2">
            <Link
              aria-label="Visit our facebook profile"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/Surakiatz"
              className="transition-transform transform hover:translate-y-[-4px] duration-300"
            >
              <FaFacebookSquare color={socialColor} className="h-8 w-8" />
            </Link>
            <Link
              aria-label="Visit our line add"
              rel="noopener noreferrer"
              target="_blank"
              href="https://line.me/ti/p/OtdDn-Ik0A"
              className="transition-transform transform hover:translate-y-[-4px] duration-300"
            >
              <FaLine color={socialColor} className="h-8 w-8" />
            </Link>
            <Link
              aria-label="Visit our dribbble profile"
              rel="noopener noreferrer"
              target="_blank"
              href="https://dribbble.com/TABLAKORN"
              className="transition-transform transform hover:translate-y-[-4px] duration-300"
            >
              <FaDribbbleSquare color={socialColor} className="h-8 w-8" />
            </Link>
            <Link
              aria-label="Visit our linkedin profile"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/surakiat000/"
              className="transition-transform transform hover:translate-y-[-4px] duration-300"
            >
              <FaLinkedin color={socialColor} className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`flex w-full sm:text-center sm:justify-center border-t ${borderColorClass} pt-4`}
      >
        <p className={`text-sm sm:text-xs sm:text-center ${TitleLinearColor}`}>
          © Copyright 2024 Surakiat.Dev. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Footer;
