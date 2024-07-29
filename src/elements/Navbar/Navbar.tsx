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
import { ShiftingDropDownMenu } from "@/component/Dropdown/DropdownMenu";

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

  const menuItems = [
    { name: "About", ref: aboutRef },
    { name: "Blog", ref: blogRef },
    { name: "Education", ref: educationRef },
    { name: "Work Experience", ref: exprienceRef },
    { name: "Contact", ref: contactRef },
  ];

  const logoSrc =
    theme === "light" ? "/Surakiat-DarkBG.png" : "/Surakiat-WhiteBG.png";

  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";

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
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            className="object-cover w-[40px] h-[40px] cursor-pointer"
            onClick={onLogoClick}
          />
          <p className={`font-bold sm:hidden ${textColorClass}`}>
            Surakiat.Dev
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden flex gap-4" justify="center">
        <ShiftingDropDownMenu
          onScrollTo={onScrollTo}
          aboutRef={aboutRef}
          blogRef={blogRef}
          educationRef={educationRef}
          exprienceRef={exprienceRef}
          contactRef={contactRef}
        />
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
        } transition-all duration-300 overflow-auto`}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={`w-full ${textColorClass}`}
              href="#"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(item.ref);
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarElement;
