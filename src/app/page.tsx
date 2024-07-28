import React from "react";
import NavbarElement from "@/elements/Navbar/Navbar";
import { DarkGridHero } from "@/component/HeroComponent/HeroComponent";
import ShuffleHero from "@/component/HeroComponent/ShuffleImageHero";
import LogoHero from "@/component/HeroComponent/LogoTechStackHero";
import BlogPostCarousel from "@/component/Carousels/CarouselsBlog";
import { AboutHero } from "@/component/HeroComponent/AboutIntro";
import { SwapLogos } from "@/component/HeroComponent/SwapLogos";
import Footer from "@/elements/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavbarElement />
      <DarkGridHero />
      <AboutHero />
      <LogoHero />
      <ShuffleHero />
      <BlogPostCarousel />
      <SwapLogos />
      <Footer />
    </>
  );
}
