import React, { ReactNode, useEffect, useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import { useTheme } from "@/contexts/ThemeContext";

export const ShiftingDropDownMenu = () => {
  return (
    <div className="flex w-full justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);
  const hasComponent =
    selected !== null && !!TABS.find((t) => t.id === selected)?.Component;

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && hasComponent && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  const tabData = TABS.find((t) => t.id === tab);
  const hasComponent = !!tabData?.Component;
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-slate-800" : "text-white";
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-100 text-zinc-950"
      : "bg-zinc-800 text-zinc-50";

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? bgColorClass : textColorClass
      }`}
    >
      <span>{children}</span>
      {hasComponent && (
        <FiChevronDown
          className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
  const tab = TABS.find((t) => t.id === selected);
  const Component = tab?.Component;
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light"
      ? "border-zinc-200 bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100"
      : "border-zinc-700 bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950";

  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className={`absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-3xl border ${bgColorClass} p-4`}
    >
      <Bridge />
      <Nub selected={selected} />

      {Component ? (
        <motion.div
          initial={{
            opacity: 0,
            x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <Component />
        </motion.div>
      ) : (
        <div />
      )}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);
  const { theme } = useTheme();
  const nubColorClass =
    theme === "light"
      ? "border-zinc-200 bg-zinc-100"
      : "border-zinc-700 bg-zinc-950";

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border ${nubColorClass}`}
    />
  );
};

const Blog = () => {
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-slate-800" : "text-white";
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <Link href="#">
          <Image
            isZoomed
            width="100%"
            height="auto"
            loading="lazy"
            className="mb-2 h-14 w-full object-cover"
            alt="Mastering Responsive Design for Web Image with Zoom"
            src="https://arnapana.com/assets/images/blog/article_1597821616.jpg"
          />
          <h4 className={`mb-0.5 font-bold text-sm ${textColorClass}`}>
            Mastering Responsive Design
          </h4>
          <p className={`text-xs ${textColorClass}`}>
            Tips and techniques for creating responsive web designs that look
            great on any device.
          </p>
        </Link>
        <Link href="#">
          <Image
            isZoomed
            width="100%"
            height="auto"
            className="mb-2 h-14 w-full object-cover"
            src="https://www.xenonstack.com/hubfs/web-performance-optimization.png"
            alt="Web Performance Optimization Image"
          />
          <h4 className={`mb-0.5 font-bold text-sm ${textColorClass}`}>
            Understanding Web Performance
          </h4>
          <p className={`text-xs ${textColorClass}`}>
            Learn about techniques to improve web performance, including
            optimizing images, minifying CSS and JavaScript.
          </p>
        </Link>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm">
        <span className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text">
          View more
        </span>
        <FiArrowRight color="#00597B" />
      </button>
    </div>
  );
};

const TABS = [
  {
    title: "About",
    Component: undefined,
  },
  {
    title: "Blog",
    Component: Blog,
  },
  {
    title: "Education",
    Component: undefined,
  },
  {
    title: "Work Experience",
    Component: undefined,
  },
  {
    title: "Contact",
    Component: undefined,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
