"use client";

import { useTheme } from "@/contexts/ThemeContext";

const WorkExprience = () => {
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
      <div className="w-full px-6 py-6 flex flex-col items-center">
        <h1 className="text-center font-bold text-4xl md:text-6xl max-w-xl">
          WorkExprience
        </h1>
        <p className="text-center font-normal text-md max-w-2xl pt-4">
          I have a solid educational background that has prepared me for a
          successful career as a Frontend Developer. Here’s an overview of my
          educational journey.
        </p>
      </div>
    </section>
  );
};

export default WorkExprience;
