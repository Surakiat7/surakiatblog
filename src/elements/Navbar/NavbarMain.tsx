import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useMemo } from "react";
import { throttle } from "lodash";
import { useTheme } from "@/contexts/ThemeContext";
import ToggleSwitchTheme from "@/component/Toggle/ThemeSwitchToggle";
import Image from "next/image";
import { ShiftingDropDownMenu } from "@/component/Dropdown/DropdownMenu";
import { Divider } from "@nextui-org/react";
import { RiBloggerLine } from "react-icons/ri";
import { PiGraduationCap } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsEnvelopePaper } from "react-icons/bs";
import { TbUserSquareRounded } from "react-icons/tb";

interface NavbarElementProps {
  onScrollTo: (ref: React.RefObject<HTMLElement>) => void;
  onLogoClick: () => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  exprienceRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarElement: React.FC<NavbarElementProps> = ({
  onScrollTo,
  onLogoClick,
  aboutRef,
  blogRef,
  educationRef,
  exprienceRef,
  contactRef,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  const themeValues = useMemo(
    () => ({
      logoSrc:
        theme === "light"
          ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-DarkBG.avif`
          : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-WhiteBG.avif`,
      iconColor: theme === "light" ? "#09090b" : "#fafafa",
      dividerColor: theme === "light" ? "#d1d5db" : "#4b5563",
      textColorClass: theme === "light" ? "text-zinc-950" : "text-zinc-50",
      TitleLinearColor:
        theme === "dark"
          ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
          : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text",
    }),
    [theme]
  );

  const menuItems = [
    {
      name: "About",
      ref: aboutRef,
      icon: <TbUserSquareRounded size={26} color={themeValues.iconColor} />,
    },
    {
      name: "Blog",
      ref: blogRef,
      icon: <RiBloggerLine size={28} color={themeValues.iconColor} />,
    },
    {
      name: "Education",
      ref: educationRef,
      icon: <PiGraduationCap size={26} color={themeValues.iconColor} />,
    },
    {
      name: "Work Experience",
      ref: exprienceRef,
      icon: <IoBriefcaseOutline size={26} color={themeValues.iconColor} />,
    },
    {
      name: "Contact",
      ref: contactRef,
      icon: <BsEnvelopePaper size={26} color={themeValues.iconColor} />,
    },
  ];

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const handleMenuItemClick = (ref: React.RefObject<HTMLElement> | null) => {
    if (ref) {
      setIsMenuOpen(false);
      setTimeout(() => {
        onScrollTo(ref);
      }, 100);
    }
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`navbar-container ${
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
        <li
          className="hidden sm:flex"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <NavbarMenuToggle />
        </li>
        <li className="flex items-center gap-2">
          <Image
            src={themeValues.logoSrc}
            alt="Surakiat-Logo"
            width={40}
            height={40}
            priority
            className="cursor-pointer"
            onClick={onLogoClick}
          />
          <p
            className={`font-bold sm:hidden md:hidden ${themeValues.TitleLinearColor}`}
          >
            Surakiat
          </p>
        </li>
      </NavbarContent>
      <div className="sm:hidden flex">
        <ShiftingDropDownMenu
          onScrollTo={onScrollTo}
          aboutRef={aboutRef}
          blogRef={blogRef}
          educationRef={educationRef}
          exprienceRef={exprienceRef}
          contactRef={contactRef}
        />
      </div>
      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleSwitchTheme />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        className={`left-0 w-full sm:border-t ${
          theme === "light"
            ? "bg-zinc-50 text-zinc-950"
            : "bg-zinc-950 text-zinc-50"
        } ${
          isMenuOpen ? "h-screen" : "h-0"
        } transition-all duration-300 overflow-auto flex flex-col`}
      >
        <ul className="list-none p-0 m-0 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <li key={`${item.name}-${index}`} className="w-full">
              <NavbarMenuItem className="w-full">
                <div className="flex flex-col items-start w-full gap-2">
                  <div
                    className="flex w-full items-center gap-4"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(item.ref);
                    }}
                  >
                    {item.icon}
                    <p
                      className={`w-full text-md font-normal ${themeValues.textColorClass}`}
                    >
                      {item.name}
                    </p>
                  </div>
                  <Divider
                    style={{ backgroundColor: themeValues.dividerColor }}
                  />
                </div>
              </NavbarMenuItem>
            </li>
          ))}
        </ul>
        <div className="flex-grow" />
        <NavbarMenuItem>
          <Divider style={{ backgroundColor: themeValues.dividerColor }} />
          <div className={`flex w-full sm:text-center justify-center py-3`}>
            <p className={`text-xs ${themeValues.textColorClass}`}>
              © Copyright 2024 Surakiat. All rights reserved.
            </p>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarElement;
