import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  scrollToAbout: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SplashButton: React.FC<ButtonProps> = ({
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
