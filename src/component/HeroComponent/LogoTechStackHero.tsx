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
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { useState, useEffect } from "react";

const LogoHero = () => {
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light" ? "bg-zinc-50 text-zinc-950" : "bg-zinc-950 text-zinc-50";

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
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

      <div className="flex overflow-hidden">
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

const LogoItem = ({ Icon, label }: { Icon: IconType; label: string }) => {
  const { theme } = useTheme();
  const logoColor = theme === "light" ? "#09090b" : "#fafafa";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Tooltip
      content={label}
      placement="top"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <Link
        href="/"
        rel="nofollow"
        target="_blank"
        className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-zinc-800 text-white transition-colors"
        onMouseEnter={() => setIsOpen(true)}
      >
        <Icon color={logoColor} className="text-4xl md:text-5xl" />
      </Link>
    </Tooltip>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiReact} label="React" />
    <LogoItem Icon={RiNextjsFill} label="Next.js" />
    <LogoItem Icon={SiJavascript} label="JavaScript" />
    <LogoItem Icon={SiTypescript} label="TypeScript" />
    <LogoItem Icon={SiHtml5} label="HTML5" />
    <LogoItem Icon={SiCss3} label="CSS3" />
    <LogoItem Icon={SiTailwindcss} label="Tailwind CSS" />
    <LogoItem Icon={SiAntdesign} label="Ant Design" />
    <LogoItem Icon={SiMui} label="Material-UI" />
    <LogoItem Icon={SiBootstrap} label="Bootstrap" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiFigma} label="Figma" />
    <LogoItem Icon={SiAdobe} label="Adobe" />
    <LogoItem Icon={SiGit} label="Git" />
    <LogoItem Icon={SiDocker} label="Docker" />
    <LogoItem Icon={SiMicrosoftazure} label="Microsoft Azure" />
    <LogoItem Icon={SiMysql} label="MySQL" />
    <LogoItem Icon={SiSwagger} label="Swagger" />
    <LogoItem Icon={SiPostman} label="Postman" />
    <LogoItem Icon={FaCloudflare} label="Cloudflare" />
    <LogoItem Icon={SiJira} label="Jira" />
  </>
);

export default LogoHero;
