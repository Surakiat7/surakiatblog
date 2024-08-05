"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { Poppins } from "next/font/google";
import { Block } from "./Block";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const DynamicAboutBlock = dynamic(() => import("./AboutBlock"), { ssr: false });

interface AboutHeroProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ contactRef }) => {
  const { theme } = useTheme();

  const bgColorClass = useMemo(
    () =>
      theme === "light"
        ? "bg-zinc-200 text-zinc-950"
        : "bg-zinc-900 text-zinc-50",
    [theme]
  );

  return (
    <div
      className={`flex w-full h-full p-12 sm:p-6 ${bgColorClass} ${poppins.className}`}
    >
      <div className="flex flex-col w-full gap-4">
        <HeaderBlock contactRef={contactRef} />
        <DynamicAboutBlock />
      </div>
    </div>
  );
};

interface HeaderBlockProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({ contactRef }) => {
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-100 text-zinc-950"
      : "bg-zinc-950 text-zinc-50";
  const TitleLinearColor =
    theme === "dark"
      ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
      : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text";
  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-700";

  const handleContactClick = () => {
    if (contactRef.current) {
      const navbar = document.querySelector(
        ".navbar-container"
      ) as HTMLElement | null;
      const yOffset = navbar ? -navbar.getBoundingClientRect().height : 0;
      const y =
        contactRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const profileImageUrl = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/me.avif`;

  return (
    <Block className={`flex w-full ${bgColorClass} ${borderColorClass}`}>
      <div className="flex w-full sm:flex-col items-center sm:items-start gap-4">
        <Image
          className="object-cover w-[100px] rounded-2xl h-[100px]"
          src={profileImageUrl}
          alt="Profile me"
          width={100}
          height={100}
          priority
        />
        <div className={`flex flex-col gap-2`}>
          <h1 className={`text-2xl sm:text-[18px] font-bold ${TitleLinearColor}`}>
            Hi, I&apos;m JJ. Surakiat Tablakorn Frontend Developer
          </h1>
          <div
            className={`flex w-fit items-center gap-1 cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300 ${textColorClass}`}
            onClick={handleContactClick}
          >
            <span className="text-md">Contact me</span>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </Block>
  );
};

export default AboutHero;
