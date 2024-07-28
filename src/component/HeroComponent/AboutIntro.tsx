"use client";

import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export const AboutHero = () => {
  const { theme } = useTheme();

  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";

  return (
    <div className={`p-12 sm:p-6 ${bgColorClass}`}>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="grid grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
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
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  const { theme } = useTheme();

  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-100 text-zinc-950"
      : "bg-zinc-800 text-zinc-50";

  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-600";

  return (
    <Block
      className={`col-span-12 row-span-2 md:col-span-6 ${bgColorClass} ${borderColorClass}`}
    >
      <div className="flex sm:flex-col items-center sm:items-start gap-4">
        <Image
          isZoomed
          width="100%"
          height="auto"
          className="object-cover w-[100px] h-[100px]"
          src="/img/me.jpg"
          alt="Profile me"
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`text-4xl sm:text-xl font-medium leading-tight ${textColorClass}`}
          >
            Hi, I'm JJ. Surakiat Tablakorn{" "}
            <span className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text">
              Frontend Developer.
            </span>
          </h1>
          <Link
            href="#"
            className="flex items-center gap-1 transition-transform transform hover:translate-y-[-4px] duration-300"
          >
            <span className={`${textColorClass}`}>Contact me</span>
            <FiArrowRight />
          </Link>
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
      : "bg-zinc-800 text-zinc-50";

  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-600";

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
