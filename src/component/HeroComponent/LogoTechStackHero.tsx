"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiMysql,
  SiAntdesign,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiJira,
  SiAdobe,
  SiGit,
  SiDocker,
  SiMicrosoftazure,
} from "react-icons/si";
import { IconType } from "react-icons";
import { RiNextjsFill } from "react-icons/ri";
import { FaCloudflare } from "react-icons/fa6";

const LogoHero = () => {
  return (
    <section className="bg-black pb-12">
      <div className="w-full px-6 py-6 flex flex-col items-center">
        <h1 className="text-center text-4xl md:text-6xl max-w-xl font-semibold">
          My TechStack
        </h1>
        <p className="text-center max-w-2xl pt-4">
          As a Frontend Developer, my tech stack is designed to deliver
          high-quality, interactive, and responsive web applications. Here’s a
          look at the key technologies and tools I use.
        </p>
      </div>

      <div className="flex  overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }: { Icon: IconType }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-800 text-white transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={RiNextjsFill} />
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiTypescript} />
    <LogoItem Icon={SiHtml5} />
    <LogoItem Icon={SiCss3} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiAntdesign} />
    <LogoItem Icon={SiMui} />
    <LogoItem Icon={SiBootstrap} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiFigma} />
    <LogoItem Icon={SiAdobe} />
    <LogoItem Icon={SiGit} />
    <LogoItem Icon={SiDocker} />
    <LogoItem Icon={SiMicrosoftazure} />
    <LogoItem Icon={SiMysql} />
    <LogoItem Icon={SiSwagger} />
    <LogoItem Icon={SiPostman} />
    <LogoItem Icon={FaCloudflare} />
    <LogoItem Icon={SiJira} />
  </>
);

export default LogoHero;
