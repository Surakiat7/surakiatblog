"use client";

import React from "react";
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
import { ShiftingDropDownMenu } from "@/component/Dropdown/DropdownMenu";

export default function NavbarElement() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  const menuItems = [
    "About",
    "Blog",
    "Education",
    "Work Experience",
    "Contact",
    "Login",
  ];

  const logoSrc =
    theme === "light" ? "/Surakiat-DarkBG.png" : "/Surakiat-WhiteBG.png";

  const textColorClass = theme === "light" ? "text-slate-800" : "text-white";

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-colors ${
        theme === "light" ? "bg-white text-slate-800" : "bg-zinc-950 text-white"
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
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            className="object-cover w-[40px] h-[40px]"
          />
          <p className={`font-bold sm:hidden ${textColorClass}`}>SURAKIAT</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden flex gap-4" justify="center">
        <ShiftingDropDownMenu />
        {/* <NavbarItem isActive>
          <Link color="success" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${textColorClass}`} href="#" aria-current="page">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${textColorClass}`} href="#" aria-current="page">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${textColorClass}`} href="#" aria-current="page">
            Work Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${textColorClass}`} href="#">
            Contact
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleSwitchTheme />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#" color="success">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu
        className={`left-0 w-full ${
          theme === "light" ? "bg-white text-slate-800" : "bg-zinc-950 text-white"
        } ${
          isMenuOpen ? "h-screen" : "h-0"
        } transition-all duration-300 overflow-auto`}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${textColorClass}`}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
