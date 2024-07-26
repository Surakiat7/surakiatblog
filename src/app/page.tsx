import React from "react";
import Bolg from "./blog/page";
import NavbarElement from "@/elements/Navbar/Navbar";
import { DarkGridHero } from "@/component/HeroComponent/HeroComponent";
import ShuffleHero from "@/component/HeroComponent/ShuffleImageHero";
import LogoHero from "@/component/HeroComponent/LogoTechStackHero";
import BlogPostCarousel from "@/component/Carousels/CarouselsBlog";
import { RevealBento } from "@/component/HeroComponent/SocialIntro";
import { Logo } from "@/elements/Logo/Logo";
import { SwapLogos } from "@/component/HeroComponent/SwapLogos";

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
    </>
  );
}
