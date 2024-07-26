"use client";

import React from "react";
import {
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiTypescript,
  SiBootstrap,
  SiAntdesign,
  SiNextdotjs,
  SiPostman,
  SiSwagger,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";
import { motion } from "framer-motion";

export const SwapLogos = () => {
  return (
    <div className="bg-neutral-900 py-8">
      <Logos />
    </div>
  );
};

const Logos = () => {
  return (
    <section>
      <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-neutral-700 border border-neutral-700">
        <Spinner
          top={<SiTailwindcss className="text-[#0DA5E9]" />}
          bottom={<SiHtml5 className="text-[#DD4A25]" />}
        />
        <Spinner
          top={<SiFramer className="text-[#0095FF]" />}
          bottom={<SiCss3 className="text-[#254BDD]" />}
        />
        <Spinner
          top={<SiReact className="text-[#58C4DC]" />}
          bottom={<SiJavascript className="text-[#EFD81D]" />}
        />
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-neutral-700 border border-neutral-700">
        <Spinner
          top={<SiTypescript className="text-[#007ACC]" />}
          bottom={<SiBootstrap className="text-[#7952B3]" />}
        />
        <Spinner
          top={<SiAntdesign className="text-[#0170FE]" />}
          bottom={<SiNextdotjs className="text-[#000000]" />}
        />
        <Spinner
          top={<SiPostman className="text-[#FF6C37]" />}
          bottom={<SiSwagger className="text-[#85EA2D]" />}
        />
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-neutral-700 border border-neutral-700">
        <Spinner
          top={<SiVercel className="text-[#000000]" />}
          bottom={<SiGit className="text-[#F05032]" />}
        />
      </div>
    </section>
  );
};

const TRANSITION = {
  ease: "easeInOut",
  duration: 10,
  repeat: Infinity,
  times: [0, 0.3, 0.4, 0.7, 0.8, 1],
};

const Spinner = ({
  top,
  bottom,
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
}) => {
  return (
    <div className="relative h-12 w-full overflow-hidden bg-neutral-900 text-2xl">
      {/* TOP SPINNER */}
      <motion.div
        style={{
          y: "-50%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-12 w-[50px] overflow-hidden rounded-full bg-neutral-900 ring-[1px] ring-neutral-700"
      >
        <div
          style={{
            bottom: 0,
            transform: "translateY(50%) translateX(-50%)",
          }}
          className="absolute left-1/2"
        >
          {top}
        </div>
        <div
          style={{
            top: 0,
            transform: "translateY(-50%) translateX(-50%) rotate(180deg)",
          }}
          className="absolute left-1/2"
        >
          {bottom}
        </div>
      </motion.div>

      {/* BOTTOM SPINNER */}
      <motion.div
        style={{
          y: "50%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-12 w-[50px] overflow-hidden rounded-full bg-neutral-900 ring-[1px] ring-neutral-700"
      >
        <div
          style={{
            bottom: 0,
            transform: "translateY(50%) translateX(-50%) rotate(180deg)",
          }}
          className="absolute left-1/2"
        >
          {bottom}
        </div>
        <div
          style={{
            top: 0,
            transform: "translateY(-50%) translateX(-50%)",
          }}
          className="absolute left-1/2"
        >
          {top}
        </div>
      </motion.div>
    </div>
  );
};
