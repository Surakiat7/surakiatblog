"use client";

import React, { ReactNode, useEffect, useState, RefObject } from "react";
import { AnimationProps, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "@/contexts/ThemeContext";

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

const Beams: React.FC = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Beam: React.FC<BeamType> = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: [0, 1, 0], y: 32 * 8 }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1,
        ...transition,
      }}
      style={{ top, left }}
      className="absolute z-10 h-[124px] sm:h-[64px] w-[2px] bg-gradient-to-b from-[#4EDFE7]/0 to-[#4EDFE7]"
    />
  );
};

const GradientGrid: React.FC<{
  theme: "light" | "dark";
  strokeColor: string;
}> = ({ theme, strokeColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 32 32'%3e%3cg fill='none' stroke='${strokeColor}' stroke-width='.5'%3e%3cpath d='M1 16h30M1 8h30M1 24h30M1 4h30M1 12h30M1 20h30M1 28h30M5 0v32M9 0v32M13 0v32M17 0v32M21 0v32M25 0v32M29 0v32M3 0v32M7 0v32M11 0v32M15 0v32M19 0v32M23 0v32M27 0v32'/%3e%3c/g%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 bg-center [mask-image:radial-gradient(ellipse,white,transparent)]"
      />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 64;
const BEAM_WIDTH_OFFSET = 1;

interface BeamType {
  top: number;
  left: number;
  transition?: AnimationProps["transition"];
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
  scrollToAbout: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
