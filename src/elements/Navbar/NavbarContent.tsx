import React, { useState, useEffect, useMemo } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { throttle } from "lodash";
import { useTheme } from "@/contexts/ThemeContext";
import ToggleSwitchTheme from "@/component/Toggle/ThemeSwitchToggle";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { TbSmartHome } from "react-icons/tb";
import { useRouter } from "next/navigation";

const NavbarElementContent: React.FC = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
      name: "HomePage",
      icon: <TbSmartHome size={26} color={themeValues.iconColor} />,
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

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
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
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden sm:flex"
        />
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="w-full" key={`${item.name}-${index}`}>
            <div className="flex flex-col items-start w-full gap-2">
              <Link href="/" className="flex w-full items-center gap-4">
                {item.icon}
                <p
                  className={`w-full text-md font-normal ${themeValues.textColorClass}`}
                >
                  {item.name}
                </p>
              </Link>
              <Divider style={{ backgroundColor: themeValues.dividerColor }} />
            </div>
          </NavbarMenuItem>
        ))}
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

export default NavbarElementContent;
