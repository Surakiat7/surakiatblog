import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
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

  const logoSrc =
    theme === "light" ? "/Surakiat-DarkBG.png" : "/Surakiat-WhiteBG.png";
  const iconColor = theme === "light" ? "#09090b" : "#fafafa";
  const dividerColor = theme === "light" ? "#d1d5db" : "#4b5563";
  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";

  const menuItems = [
    {
      name: "HomePage",
      icon: <TbSmartHome size={26} color={iconColor} />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <NavbarBrand className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="Surakiat-Logo"
            width={40}
            height={40}
            sizes="100vw"
            loading="lazy"
            className="object-cover w-[40px] h-[40px] cursor-pointer"
            onClick={() => router.push("/")}
          />
          <p className={`font-bold sm:hidden ${textColorClass}`}>Surakiat</p>
        </NavbarBrand>
      </NavbarContent>
      {/* <NavbarContent className="sm:hidden flex gap-4" justify="center">
        <NavbarItem>
          <Link className={`${textColorClass}`} href="/">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent> */}
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
                <p className={`w-full text-md font-normal ${textColorClass}`}>
                  {item.name}
                </p>
              </Link>
              <Divider style={{ backgroundColor: dividerColor }} />
            </div>
          </NavbarMenuItem>
        ))}
        <div className="flex-grow" />
        <NavbarMenuItem>
          <Divider style={{ backgroundColor: dividerColor }} />
          <div className={`flex w-full sm:text-center justify-center py-3`}>
            <p className={`text-sm sm:text-xs ${textColorClass}`}>
              © Copyright 2024 Surakiat.Dev. All rights reserved.
            </p>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarElementContent;
