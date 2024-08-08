import React, { useState, useEffect, useMemo } from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import ToggleSwitchTheme from "@/component/Toggle/ThemeSwitchToggle";
import { useRouter } from "next/navigation";

const NavbarElementContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  const themeValues = useMemo(
    () => ({
      logoSrc:
        theme === "light"
          ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-DarkBG.avif`
          : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-WhiteBG.avif`,
      TitleLinearColor:
        theme === "dark"
          ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
          : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text",
    }),
    [theme]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`transition-colors navbar-container sticky top-0 z-50 ${
        theme === "light"
          ? isScrolled
            ? "bg-zinc-50/30 backdrop-blur-sm text-zinc-950"
            : "bg-zinc-50 text-zinc-950"
          : isScrolled
          ? "bg-zinc-950/30 backdrop-blur-sm text-zinc-50"
          : "bg-zinc-950 text-zinc-50"
      }`}
    >
      <NavbarContent justify="start" as="ul" className="list-none p-0 m-0">
        <li className="flex items-center gap-2">
          <Image
            src={themeValues.logoSrc}
            alt="Surakiat-Logo"
            width={40}
            height={40}
            priority
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <p
            className={`font-bold sm:hidden md:hidden ${themeValues.TitleLinearColor}`}
          >
            Surakiat
          </p>
        </li>
      </NavbarContent>
      <NavbarContent justify="end">
        <ToggleSwitchTheme />
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarElementContent