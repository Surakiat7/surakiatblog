import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

export const GlowingChip: React.FC<{ children: string }> = ({ children }) => {
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
