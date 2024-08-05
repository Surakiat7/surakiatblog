import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Block } from "./Block";
import dynamic from "next/dynamic";

const DynamicLongDescription = dynamic(() => import("./LongDescription"), {
  ssr: false,
});

const AboutBlock = () => {
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";
  const bgColorClass = theme === "light" ? "bg-zinc-100 text-zinc-950" : "bg-zinc-950 text-zinc-50";
  const borderColorClass = theme === "light" ? "border-zinc-300" : "border-zinc-700";

  return (
    <Block
      className={`flex w-full ${bgColorClass} ${borderColorClass}`}
    >
      <p className={`${textColorClass} text-xl sm:text-base font-normal`}>
        I am passionate about creating exceptional user experiences{" "}
        <DynamicLongDescription />
      </p>
    </Block>
  );
};

export default AboutBlock;
