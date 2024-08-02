"use client";

import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

interface AboutHeroProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ contactRef }) => {
  const { theme } = useTheme();

  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";

  return (
    <div className={`flex w-full h-full p-12 sm:p-6 ${bgColorClass}`}>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="flex flex-col w-full gap-4"
      >
        <HeaderBlock contactRef={contactRef} />
        <AboutBlock />
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

  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-100 text-zinc-950"
      : "bg-zinc-950 text-zinc-50";

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

  return (
    <Block className={`flex w-full ${bgColorClass} ${borderColorClass}`}>
      <div className="flex w-full sm:flex-col items-center sm:items-start gap-4">
        <Image
          isZoomed
          className="object-cover w-[100px] h-[100px]"
          src="/img/me.jpg"
          alt="Profile me"
          loading="lazy"
          width={100}
          height={100}
          data-loaded="true"
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`text-4xl sm:text-xl font-bold leading-tight ${textColorClass}`}
          >
            Hi, I&apos;m JJ. Surakiat Tablakorn{" "}
            <span className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text">
              Frontend Developer.
            </span>
          </h1>
          <div
            className="flex items-center gap-1 cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300"
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

const AboutBlock = () => {
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-100 text-zinc-950"
      : "bg-zinc-950 text-zinc-50";

  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-700";

  return (
    <Block
      className={`col-span-12 leading-snug ${bgColorClass} ${borderColorClass}`}
    >
      <p className={`${textColorClass} text-xl sm:text-base font-normal`}>
        I am passionate about creating exceptional user experiences{" "}
        <span className="text-zinc-400">
          through seamless design and development, utilizing modern technologies
          like Next.js, React, Tailwind CSS, and many more. I love building
          responsive and user-friendly web applications, and I am committed to
          continuously improving website performance and speed. Additionally, I
          am excited about learning and incorporating new technologies into my
          development work, and I enjoy collaborating with teams to create
          outstanding web experiences.
        </span>
      </p>
    </Block>
  );
};
