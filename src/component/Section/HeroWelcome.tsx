"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "@/contexts/ThemeContext";
import dynamic from "next/dynamic";
import { GlowingChip } from "./GlowingChip";
import { SplashButton } from "./SplashButton";
import Beams from "./Beams";
import GradientGrid from "./GradientGrid";

const DynamicIntroText = dynamic(() => import("./IntroText"), {
  loading: () => <div className="flex w-full h-fit pb-8"></div>,
  ssr: false,
});

interface DarkGridHeroElementProps {
  scrollToAbout: () => void;
}

export const DarkGridHero: React.FC<DarkGridHeroElementProps> = ({
  scrollToAbout,
}) => {
  const { theme } = useTheme();
  const strokeColor =
    theme === "dark" ? "rgb(0 88 124 / 0.5)" : "rgb(230 234 235 / 0.5)";

  return (
    <section
      className={`relative overflow-hidden h-[600px] ${
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
  const { theme } = useTheme();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const TitleLinearColor = useMemo(
    () =>
      theme === "dark"
        ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
        : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text",
    [theme]
  );

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
        transition={{ duration: 1.35, delay: 0.15, ease: "easeInOut" }}
        className={`pb-2 text-center font-bold leading-tight sm:text-2xl text-5xl md:text-7xl lg:leading-tight ${TitleLinearColor}`}
      >
        Surakiat Tablakorn
      </motion.h1>
      {showIntro && <DynamicIntroText theme={theme} />}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.55, delay: 0.75, ease: "easeInOut" }}
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

export default DarkGridHero;
