"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavbarElement from "@/elements/Navbar/NavbarMain";
import Footer from "@/elements/Footer/Footer";
import { useTheme } from "@/contexts/ThemeContext";

interface DarkGridHeroProps {
  scrollToAbout: () => void;
}

// Lazy load components
const DarkGridHero = dynamic<DarkGridHeroProps>(() =>
  import('@/component/Section/HeroWelcome').then((mod) => mod.DarkGridHero)
);
const LogoHero = dynamic(() => import('@/component/Section/LogoTechStack'));
const BlogPostCarousel = dynamic(() => import('@/component/Carousels/CarouselsBlog'));
const AboutHero = dynamic(() => import('@/component/Section/AboutIntro'));
const Education = dynamic(() => import('@/component/Section/Education'));
const WorkExperience = dynamic(() => import('@/component/Section/WorkExprience'));
const Contact = dynamic(() => import('@/component/Section/Contact'));

export default function Home() {
  const { theme } = useTheme();
  const bgColorClass = theme === "light" ? "bg-zinc-50" : "bg-zinc-950";
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const exprienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector(".navbar-container");
      if (navbar) {
        setNavbarHeight(navbar.getBoundingClientRect().height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const yOffset = -navbarHeight;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    scrollTo(aboutRef);
  };

  return (
    <div className={`w-full ${bgColorClass}`}>
      <NavbarElement
        onLogoClick={scrollToHome}
        onScrollTo={scrollTo}
        aboutRef={aboutRef}
        blogRef={blogRef}
        educationRef={educationRef}
        exprienceRef={exprienceRef}
        contactRef={contactRef}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {/* Started home section */}
      <DarkGridHero scrollToAbout={scrollToAbout} />
      {/* End home section */}
      {/* Started about section */}
      <div ref={aboutRef}>
        <AboutHero contactRef={contactRef} />
      </div>
      <LogoHero />
      {/* End about section */}
      {/* Started blog section */}
      <div ref={blogRef}>
        <BlogPostCarousel />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={exprienceRef}>
        <WorkExperience />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      {/* End blog section */}
      <Footer />
    </div>
  );
}
