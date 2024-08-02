"use client";

import React, { ReactNode, useEffect, useState, RefObject } from "react";
import { AnimationProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "@/contexts/ThemeContext";
import dynamic from "next/dynamic";

interface DarkGridHeroElementProps {
  scrollToAbout: () => void;
}

const Beams = dynamic(() => import("@/component/HeroComponent/Beams"), {
  ssr: false,
});
const GradientGrid = dynamic(
  () => import("@/component/HeroComponent/GradientGrid"),
  { ssr: false }
);

export const DarkGridHero: React.FC<DarkGridHeroElementProps> = ({
  scrollToAbout,
}) => {
  const { theme } = useTheme();
  const strokeColor =
    theme === "dark" ? "rgb(0 88 124 / 0.5)" : "rgb(230 234 235 / 0.5)";

  return (
    <section
      className={`relative overflow-hidden ${
        theme === "dark" ? "bg-zinc-950" : "bg-zinc-50"
      }`}
    >
      <Content scrollToAbout={scrollToAbout} />
      <Beams />
      <GradientGrid theme={theme} strokeColor={strokeColor} />
    </section>
  );
};

const Content: React.FC<{ scrollToAbout: () => void }> = ({
  scrollToAbout,
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 sm:py-6 py-32">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className={`relative ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
      >
        <GlowingChip>Welcome, I&apos;m JJ 😊</GlowingChip>
      </motion.div>
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
        className={`pb-2 text-center font-bold leading-tight sm:text-2xl text-5xl md:text-7xl lg:leading-tight ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
      >
        Surakiat Tablakorn
      </motion.h1>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
        className={`pb-8 sm:pb-4 text-center leading-relaxed sm:text-base text-lg md:leading-relaxed ${
          theme === "dark" ? "text-white" : "text-slate-600"
        }`}
      >
        I&rsquo;m a Frontend Developer based in Bangkok, Thailand, specializing
        in crafting exceptional web applications and everything in between. With
        hands-on experience in Next.js, React, and JavaScript/TypeScript, I
        excel in creating responsive web applications and translating UI/UX
        designs into functional, user-friendly interfaces. My expertise includes
        collaborative problem-solving and finding effective solutions while
        working directly with clients and system users. I&rsquo;m passionate
        about delivering high-quality, scalable solutions and continuously
        improving through direct communication and feedback.
      </motion.p>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      >
        <SplashButton
          scrollToAbout={scrollToAbout}
          className="flex flex-col px-12 items-center"
        >
          Scroll Down
          <IoIosArrowDown />
        </SplashButton>
      </motion.div>
    </div>
  );
};

const GlowingChip: React.FC<{ children: string }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <span
      className={`relative z-10 mb-4 inline-block rounded-full border ${
        theme === "dark"
          ? "border-zinc-700 bg-zinc-900/20 text-zinc-50"
          : "border-slate-200 bg-slate-100 text-zinc-950"
      } px-3 py-1.5 text-xs md:mb-0`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-3 right-3 h-[1px] ${
          theme === "dark"
            ? "bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0"
            : "bg-gradient-to-r from-slate-500/0 via-slate-300 to-slate-500/0"
        }`}
      />
    </span>
  );
};

const SplashButton: React.FC<ButtonProps> = ({
  children,
  className,
  scrollToAbout,
  ...rest
}) => {
  return (
    <button
      onClick={scrollToAbout}
      className={twMerge(
        "rounded-full bg-gradient-to-br from-[#4EDFE7] to-[#00597B] py-2 text-zinc-50 ring-2 ring-[#4EDFE7]/50 ring-offset-2 ring-offset-zinc-50 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
  scrollToAbout: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;