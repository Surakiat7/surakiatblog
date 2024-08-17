import React, { ReactNode, useEffect, useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { useTheme } from "@/contexts/ThemeContext";
import { PostData, Post } from "@/app/(routes)/blog/blogpostmockdata";
import _ from "lodash";

interface ShiftingDropDownMenuProps {
  onScrollTo: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  exprienceRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const ShiftingDropDownMenu: React.FC<ShiftingDropDownMenuProps> = ({
  onScrollTo,
  aboutRef,
  blogRef,
  educationRef,
  exprienceRef,
  contactRef,
}) => {
  return (
    <div className="flex w-full justify-center">
      <ul className="list-none p-0 m-0 flex gap-4">
        <Tabs
          onScrollTo={onScrollTo}
          aboutRef={aboutRef}
          blogRef={blogRef}
          educationRef={educationRef}
          exprienceRef={exprienceRef}
          contactRef={contactRef}
        />
      </ul>
    </div>
  );
};

const Tabs: React.FC<ShiftingDropDownMenuProps> = ({
  onScrollTo,
  aboutRef,
  blogRef,
  educationRef,
  exprienceRef,
  contactRef,
}) => {
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
    <li
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
            onScrollTo={onScrollTo}
            aboutRef={aboutRef}
            blogRef={blogRef}
            educationRef={educationRef}
            exprienceRef={exprienceRef}
            contactRef={contactRef}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && hasComponent && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </li>
  );
};

interface TabProps extends ShiftingDropDownMenuProps {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}

const Tab: React.FC<TabProps> = ({
  children,
  tab,
  handleSetSelected,
  selected,
  onScrollTo,
  aboutRef,
  blogRef,
  educationRef,
  exprienceRef,
  contactRef,
}) => {
  const { theme } = useTheme();
  const tabData = _.find(TABS, { id: tab });
  const hasComponent = !!tabData?.Component;
  const textColorClass = theme === "light" ? "text-slate-800" : "text-white";
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-800 text-zinc-50";

  const handleClick = () => {
    if (!hasComponent) {
      switch (tabData?.title.toLowerCase()) {
        case "about":
          onScrollTo(aboutRef);
          break;
        case "blog":
          onScrollTo(blogRef);
          break;
        case "education":
          onScrollTo(educationRef);
          break;
        case "work experience":
          onScrollTo(exprienceRef);
          break;
        case "contact":
          onScrollTo(contactRef);
          break;
        default:
          break;
      }
    } else {
      handleSetSelected(tab);
    }
  };

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => hasComponent && handleSetSelected(tab)}
      onClick={handleClick}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors hover:${bgColorClass} hover:${textColorClass}`}
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
  const { theme } = useTheme();
  const tab = _.find(TABS, { id: selected });

  if (
    !tab ||
    typeof tab !== "object" ||
    !("Component" in tab) ||
    tab.Component === null
  ) {
    return <div />;
  }

  const Component = tab.Component;
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
  const { theme } = useTheme();
  const [left, setLeft] = useState(0);
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

const getRandomPosts = (posts: Post[], count: number): Post[] => {
  const shuffled = _.shuffle(posts);
  return _.take(shuffled, count);
};

const Blog = () => {
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-zinc-950" : "text-white";
  const [selectedPosts, setSelectedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const randomPosts = getRandomPosts(PostData, 2);
    setSelectedPosts(randomPosts);

    const interval = setInterval(() => {
      const newRandomPosts = getRandomPosts(PostData, 2);
      setSelectedPosts(newRandomPosts);
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col h-full">
      <div className="grid grid-cols-2 w-full h-full gap-2">
        {selectedPosts.map((post) => (
          <div key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              passHref
              className="flex flex-col h-full gap-2"
            >
              <div className="w-full !h-fit">
                <Image
                  sizes="100vw"
                  height={20}
                  width={"100%"}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                  src={post.imgUrl}
                  alt={post.title}
                  loading="lazy"
                  className="!h-full w-full"
                />
              </div>
              <h1 className={`font-bold text-sm ${textColorClass}`}>
                {post.title}
              </h1>
              <p className={`text-xs ${textColorClass}`}>
                {post.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end">
        <Link href="/blog" passHref>
          <div className="mt-4 justify-end flex items-center gap-1 text-sm cursor-pointer transition-transform transform hover:translate-x-[-4px] duration-300">
            <span className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text">
              Explore all posts
            </span>
            <FiArrowRight color="#00597B" />
          </div>
        </Link>
      </div>
    </section>
  );
};

interface TabItem {
  id: number;
  title: string;
  Component: React.FC | null;
}

const TABS: TabItem[] = [
  { id: 1, title: "About", Component: null },
  { id: 2, title: "Blog", Component: Blog },
  { id: 3, title: "Education", Component: null },
  { id: 4, title: "Work Experience", Component: null },
  { id: 5, title: "Contact", Component: null },
];