"use client";

import React from "react";
import NavbarElement from "@/elements/Navbar/Navbar";
import { DarkGridHero } from "@/component/HeroComponent/HeroComponent";
import LogoHero from "@/component/HeroComponent/LogoTechStackHero";
import BlogPostCarousel from "@/component/Carousels/CarouselsBlog";
import { AboutHero } from "@/component/HeroComponent/AboutIntro";
import Footer from "@/elements/Footer/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const bgColorClass = theme === "light" ? "bg-zinc-50" : "bg-zinc-950";
  return (
    <div className={`w-full ${bgColorClass}`}>
      <NavbarElement />
      <DarkGridHero />
      <AboutHero />
      <LogoHero />
      <BlogPostCarousel />
      <Footer />
    </div>
  );
}
