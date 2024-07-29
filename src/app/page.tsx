"use client";

import React, { useRef, useState, useEffect } from "react";
import NavbarElement from "@/elements/Navbar/NavbarMain";
import { DarkGridHero } from "@/component/HeroComponent/HeroComponent";
import LogoHero from "@/component/HeroComponent/LogoTechStackHero";
import BlogPostCarousel from "@/component/Carousels/CarouselsBlog";
import { AboutHero } from "@/component/HeroComponent/AboutIntro";
import Footer from "@/elements/Footer/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import Education from "@/component/HeroComponent/EducationHero";
import WorkExprience from "@/component/HeroComponent/WorkExprienceHero";
import Contact from "@/component/HeroComponent/ContactHero";

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
        <WorkExprience />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      {/* End blog section */}
      <Footer />
    </div>
  );
}
