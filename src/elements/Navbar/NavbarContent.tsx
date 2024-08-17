import React, { useState, useEffect, useMemo } from 'react';
import { Navbar, NavbarContent } from '@nextui-org/react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import ToggleSwitchTheme from '@/components/Toggle/SwitchTheme';
import { useRouter } from 'next/navigation';
import { throttle } from 'lodash';
import { useThemeColors } from '@/@core/utils/themeColorClass';

const NavbarElementContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const {
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

  return (
    <Navbar
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
      className={`navbar-container sticky top-0 z-50 ${
        theme === 'light'
          ? isScrolled
            ? 'bg-zinc-50/30 backdrop-blur-sm text-zinc-950'
            : 'bg-zinc-50 text-zinc-950'
          : isScrolled
          ? 'bg-zinc-950/30 backdrop-blur-sm text-zinc-50'
          : 'bg-zinc-950 text-zinc-50'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <NavbarContent
        as="ul"
        className="w-full p-0 m-0 items-center flex justify-between"
        role="menubar"
        aria-label="Main menu"
      >
        <li className="flex items-center gap-2" role="menuitem">
          <button
            aria-label="Go to homepage"
            onClick={() => router.push('/')}
            className="flex items-center"
          >
            <Image
              src={themeValues.logoSrc}
              alt="Surakiat logo"
              width={40}
              height={40}
              priority
              className="cursor-pointer"
            />
          </button>
          <p
            className={`font-bold sm:hidden md:hidden ${TitleLinearColor}`}
          >
            Surakiat
          </p>
        </li>
        <li className="flex items-center gap-2 ml-auto" role="menuitem">
          <ToggleSwitchTheme />
        </li>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarElementContent;
