import React from "react";
import NavbarElement from "@/elements/Navbar/Navbar";
import { DarkGridHero } from "@/component/HeroComponent/HeroComponent";
import ShuffleHero from "@/component/HeroComponent/ShuffleImageHero";
import LogoHero from "@/component/HeroComponent/LogoTechStackHero";
import BlogPostCarousel from "@/component/Carousels/CarouselsBlog";
import { RevealBento } from "@/component/HeroComponent/SocialIntro";
import { SwapLogos } from "@/component/HeroComponent/SwapLogos";
import Footer from "@/elements/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavbarElement />
      {/* <Bolg /> */}
      <DarkGridHero />
      <RevealBento />
      <ShuffleHero />
      <LogoHero />
      <BlogPostCarousel />
      <SwapLogos />
      <Footer />
    </>
  );
}
