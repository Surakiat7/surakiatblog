"use client";

import React, { useMemo } from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      className={`flex w-full h-full p-12 sm:p-6 ${bgColorClass} ${inter.className}`}
    >
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="flex flex-col w-full gap-4"
      >
        <HeaderBlock contactRef={contactRef} />
        <DynamicAboutBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-12 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

interface HeaderBlockProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({ contactRef }) => {
  const { theme } = useTheme();

  const textColorClass = useMemo(
    () => (theme === "light" ? "text-zinc-950" : "text-zinc-50"),
    [theme]
  );

  const bgColorClass = useMemo(
    () =>
      theme === "light"
        ? "bg-zinc-100 text-zinc-950"
        : "bg-zinc-950 text-zinc-50",
    [theme]
  );

  const TitleLinearColor = useMemo(
    () =>
      theme === "dark"
        ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
        : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text",
    [theme]
  );

  const borderColorClass = useMemo(
    () => (theme === "light" ? "border-zinc-300" : "border-zinc-700"),
    [theme]
  );

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

  const profileImageUrl = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/me.jpg`;

  return (
    <Block className={`flex w-full ${bgColorClass} ${borderColorClass}`}>
      <div className="flex w-full sm:flex-col items-center sm:items-start gap-4">
        <Image
          className="object-cover w-[100px] h-[100px]"
          src={profileImageUrl}
          alt="Profile me"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`text-4xl sm:text-xl font-bold leading-tight ${TitleLinearColor}`}
          >
            Hi, I&apos;m JJ. Surakiat Tablakorn{" "}
            <span className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text">
              Frontend Developer.
            </span>
          </h1>
          <div
            className={`flex items-center gap-1 cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300 ${TitleLinearColor}`}
            onClick={handleContactClick}
          >
            <span className={`${textColorClass}`}>Contact me</span>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </Block>
  );
};

export default AboutHero;
