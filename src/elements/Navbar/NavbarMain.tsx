import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { useMemo } from 'react';
import { throttle } from 'lodash';
import { useTheme } from '@/contexts/ThemeContext';
import ToggleSwitchTheme from '@/components/Toggle/SwitchTheme';
import Image from 'next/image';
import { ShiftingDropDownMenu } from '@/components/Dropdown/Menu';
import { Divider } from '@nextui-org/react';
import { RiBloggerLine } from 'react-icons/ri';
import { PiGraduationCap } from 'react-icons/pi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { BsEnvelopePaper } from 'react-icons/bs';
import { TbUserSquareRounded } from 'react-icons/tb';
import { useThemeColors } from '@/@core/utils/themeColorClass';

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
  const {
    iconColor,
    dividerColor,
    textColorClass,
    TitleLinearColor,
  } = useThemeColors();

  const themeValues = useMemo(
    () => ({
      logoSrc:
        theme === 'light'
          ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-DarkBG.avif`
          : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-WhiteBG.avif`,
    }),
    [theme]
  );

  const menuItems = [
    {
      name: 'About',
      ref: aboutRef,
      icon: <TbUserSquareRounded size={26} color={iconColor} />,
    },
    {
      name: 'Blog',
      ref: blogRef,
      icon: <RiBloggerLine size={28} color={iconColor} />,
    },
    {
      name: 'Education',
      ref: educationRef,
      icon: <PiGraduationCap size={26} color={iconColor} />,
    },
    {
      name: 'Work Experience',
      ref: exprienceRef,
      icon: <IoBriefcaseOutline size={26} color={iconColor} />,
    },
    {
      name: 'Contact',
      ref: contactRef,
      icon: <BsEnvelopePaper size={26} color={iconColor} />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

    const menuButton = document.querySelector('.menu');
    if (menuButton) {
      menuButton.classList.remove('opened');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`navbar-container ${
        theme === 'light'
          ? isScrolled
            ? 'bg-zinc-50/30 backdrop-blur-sm text-zinc-950'
            : 'bg-zinc-50 text-zinc-950'
          : isScrolled
          ? 'bg-zinc-950/30 backdrop-blur-sm text-zinc-50'
          : 'bg-zinc-950 text-zinc-50'
      }`}
    >
      <NavbarContent justify="start" as="ul" className="list-none p-0 m-0">
        <li className="hidden sm:flex">
          <button
            role="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => {
              toggleMenu();
              const menuButton = document.querySelector('.menu');
              if (menuButton) {
                menuButton.classList.toggle('opened');
              }
            }}
            className={`inline-flex items-center p-1 border rounded-lg ${
              theme === 'light' ? 'border-zinc-900' : 'border-zinc-50'
            }`}
          >
            <div className="menu" id="menu-content">
              <svg width="30" height="30" viewBox="0 0 100 100">
                <path
                  className={`line line1 ${
                    theme === 'dark' ? 'theme-dark' : ''
                  }`}
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  strokeLinecap="round"
                />
                <path
                  className={`line line2 ${
                    theme === 'dark' ? 'theme-dark' : ''
                  }`}
                  d="M 20,50 H 80"
                  strokeLinecap="round"
                />
                <path
                  className={`line line3 ${
                    theme === 'dark' ? 'theme-dark' : ''
                  }`}
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </button>
        </li>
        <li className="flex items-center gap-2 sm:gap-0">
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
            className={`font-bold sm:hidden md:hidden ${TitleLinearColor}`}
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
          theme === 'light'
            ? 'bg-zinc-50 text-zinc-950'
            : 'bg-zinc-950 text-zinc-50'
        } ${
          isMenuOpen ? 'h-screen' : 'h-0'
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
                      className={`w-full text-md font-normal ${textColorClass}`}
                    >
                      {item.name}
                    </p>
                  </div>
                  <Divider
                    style={{ backgroundColor: dividerColor }}
                  />
                </div>
              </NavbarMenuItem>
            </li>
          ))}
        </ul>
        <div className="flex-grow" />
        <NavbarMenuItem>
          <Divider style={{ backgroundColor: dividerColor }} />
          <div className={`flex w-full sm:text-center justify-center py-3`}>
            <p className={`text-xs ${textColorClass}`}>
              © Copyright 2024 Surakiat. All rights reserved.
            </p>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarElement;
