'use client';

import React, { useRef, useState } from 'react';
import NavbarElement from '@/elements/Navbar/NavbarMain';
import { DarkGridHero } from '@/components/Sections/Welcome';
import LogoHero from '@/components/Sections/LogoTechStack';
import BlogPostCarousel from '@/components/Sections/CarouselBlogs';
import AboutHero from '@/components/Sections/AboutIntro';
import Footer from '@/elements/Footer/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import Education from '@/components/Sections/Education';
import WorkExperience from '@/components/Sections/WorkExprience';
import Contact from '@/components/Sections/Contact';
import { useNavbarHeight, useScrollToTop } from '@/hooks/UseCustomEffects';

export default function Home() {
  const { theme } = useTheme();
  const bgColorClass = theme === 'light' ? 'bg-zinc-50' : 'bg-zinc-950';
  const navbarHeight = useNavbarHeight();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const exprienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useScrollToTop();

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const yOffset = -navbarHeight;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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