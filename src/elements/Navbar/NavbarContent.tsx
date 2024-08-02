import React, { useState, useEffect } from "react";
import {
  Navbar,
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

const NavbarElementContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const logoSrc =
    theme === "light"
      ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-DarkBG.png`
      : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-WhiteBG.png`;
  const iconColor = theme === "light" ? "#09090b" : "#fafafa";
  const dividerColor = theme === "light" ? "#d1d5db" : "#4b5563";
  const textColorClass = theme === "light" ? "text-zinc-950" : "text-zinc-50";
  const TitleLinearColor =
    theme === "dark"
      ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
      : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text";

  const menuItems = [
    {
      name: "HomePage",
      icon: <TbSmartHome size={26} color={iconColor} />,
    },
  ];

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
        <nav aria-label="Main navigation">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logoSrc}
                alt="Surakiat-Logo"
                width={40}
                height={40}
                priority
              />
              <h1
                className={`font-bold text-xl sm:hidden md:hidden ${TitleLinearColor}`}
              >
                Surakiat
              </h1>
            </Link>
          </div>
        </nav>
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
        <nav>
          <ul className="list-none p-0 m-0">
            {menuItems.map((item, index) => (
              <li key={`${item.name}-${index}`} className="w-full">
                <NavbarMenuItem className="w-full">
                  <Link
                    href="/"
                    className="flex w-full items-center pb-3 gap-4"
                  >
                    <div className="w-fit">{item.icon}</div>
                    <span
                      className={`w-full text-md font-normal ${textColorClass}`}
                    >
                      {item.name}
                    </span>
                  </Link>
                  <Divider style={{ backgroundColor: dividerColor }} />
                </NavbarMenuItem>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-grow" />
        <footer>
          <Divider style={{ backgroundColor: dividerColor }} />
          <div className={`flex w-full sm:text-center justify-center py-3`}>
            <p className={`text-xs ${textColorClass}`}>
              © Copyright 2024 Surakiat. All rights reserved.
            </p>
          </div>
        </footer>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarElementContent;
