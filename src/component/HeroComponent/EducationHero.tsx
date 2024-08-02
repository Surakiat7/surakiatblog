"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import CardEducations from "../Card/CardEducation";

const educationData = [
  {
    institution: "Kuchanwittayakom School",
    program: "High school, Mathematics-Science",
    duration: "2013 - 2019",
    description:
      "Basic studies in science and mathematics, which drive interest in technology and problem-solving.",
    logo: "/logo/kc-logo.png",
  },
  {
    institution: "Ubon Ratchathani University",
    program: "Bachelor of Science Program in Computer Science",
    duration: "2019 - 2023",
    description:
      "Acquired comprehensive knowledge in computer science, with a focus on web development and software design.",
    logo: "/logo/ubu-logo.png",
  },
];

const Education: React.FC = () => {
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light" ? "bg-zinc-50 text-zinc-950" : "bg-zinc-950 text-zinc-50";

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
      <div className="w-full sm:px-6 flex flex-col items-center">
        <h1 className="text-center font-bold text-4xl md:text-6xl max-w-xl">
          Education
        </h1>
        <p className="text-center font-normal text-md max-w-2xl pt-4">
          I have a solid educational background that has prepared me for a
          successful career as a Frontend Developer. Here’s an overview of my
          educational journey.
        </p>
      </div>
      <div className="w-full pt-4 flex sm:flex-col gap-4 px-12 sm:px-6">
        <CardEducations data={educationData} />
      </div>
    </section>
  );
};

export default Education;
