"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import SearchButton from "../Button/SearchButton";
import { useTheme } from "@/contexts/ThemeContext";
import { Image } from "@nextui-org/react";
import SkeletonBlogCard from "../Skeleton/SkeletonBlogCard";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";
  const bgButtonColorClass =
    theme === "light" ? "bg-zinc-50 text-zinc-950" : "bg-zinc-900 text-zinc-50";
  const iconColor = theme === "light" ? "#09090b" : "#fafafa";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className={`${bgColorClass}`} ref={ref}>
      <div className="relative overflow-hidden">
        <div className="w-full">
          <div className="flex pt-4 items-center justify-between">
            <div className="flex flex-col gap-4 w-full px-12 sm:px-6 pt-12 sm:pt-6">
              <div className="flex sm:gap-4 w-full items-center justify-between">
                <h2 className="text-4xl font-bold sm:w-full">Blog</h2>
                <SearchButton />
              </div>
              <div className="flex w-full items-start justify-between sm:items-center gap-8 pb-4">
                <p className="font-normal text-md sm:hidden">
                  Visit my blog to discover tips, techniques, and various
                  methods for frontend development! Whether you&apos;re looking
                  to enhance your skills or stay updated with the latest in
                  frontend technology and design, I&apos;ll be sharing articles
                  and tutorials that might help you in one way or another.
                  Let&apos;s develop your frontend skills together with shared
                  knowledge and experience.
                </p>
                <p className="hidden sm:flex font-normal text-md">
                  Visit my blog to discover tips for frontend development.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    className={`rounded-lg border-[1px] border-neutral-400 ${bgButtonColorClass} p-1.5 text-2xl transition-opacity ${
                      CAN_SHIFT_LEFT ? "" : "opacity-30"
                    }`}
                    disabled={!CAN_SHIFT_LEFT}
                    onClick={shiftLeft}
                  >
                    <FiArrowLeft color={iconColor} />
                  </button>
                  <button
                    className={`rounded-lg border-[1px] border-neutral-400 ${bgButtonColorClass} p-1.5 text-2xl transition-opacity ${
                      CAN_SHIFT_RIGHT ? "" : "opacity-30"
                    }`}
                    disabled={!CAN_SHIFT_RIGHT}
                    onClick={shiftRight}
                  >
                    <FiArrowRight color={iconColor} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex pt-2 px-12 pb-12 sm:px-6 sm:pb-6"
          >
            {isLoading
              ? Array.from({ length: 6 }, (_, index) => (
                  <SkeletonBlogCard key={index} />
                ))
              : posts.map((post) => <Post key={post.id} {...post} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description }: PostType) => {
  const { theme } = useTheme();
  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-600";
  const authorColorClass =
    theme === "light"
      ? "border-zinc-300 text-zinc-950"
      : "border-zinc-600 text-zinc-50";

  return (
    <div
      className={`relative rounded-2xl border ${borderColorClass} p-3 shrink-0 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,0,0,0.1)]`}
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <Image
        width="100%"
        height="auto"
        loading="lazy"
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
        src={imgUrl}
      />
      <span
        className={`rounded-xl border-[1px] ${authorColorClass} px-1.5 py-1 text-xs uppercase`}
      >
        {author}
      </span>
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default BlogPostCarousel;

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl:
      "https://inexture.com/wp-content/uploads/2023/04/Top-7-JavaScript-Frameworks-for-Web-App-Development-1100-x-600.png",
    author: "Author: Surakiat",
    title: "Exploring Modern JavaScript Frameworks",
    description:
      "An in-depth look at popular JavaScript frameworks like React, Angular, and Vue.js. Learn which framework might be best for your next project.",
  },
  {
    id: 2,
    imgUrl:
      "https://pbs.twimg.com/media/Fqwt91aWYAAbOah?format=jpg&name=4096x4096",
    author: "Author: Surakiat",
    title: "CSS Grid vs Flexbox: Which One to Use?",
    description:
      "A comprehensive comparison of CSS Grid and Flexbox. Understand the strengths and weaknesses of each layout system and when to use them.",
  },
  {
    id: 3,
    imgUrl: "https://arnapana.com/assets/images/blog/article_1597821616.jpg",
    author: "Author: Surakiat",
    title: "Mastering Responsive Design for Web",
    description:
      "Tips and techniques for creating responsive web designs that look great on any device. Explore media queries, flexible grids, and more.",
  },
  {
    id: 4,
    imgUrl: "https://www.xenonstack.com/hubfs/web-performance-optimization.png",
    author: "Author: Surakiat",
    title: "Understanding Web Performance Optimization",
    description:
      "Learn about techniques to improve web performance, including optimizing images, minifying CSS and JavaScript, and leveraging browser caching.",
  },
  {
    id: 5,
    imgUrl: "https://cdn.presslabs.com/wp-content/uploads/2019/03/pwas.png",
    author: "Author: Surakiat",
    title: "Introduction to Progressive Web Apps",
    description:
      "Discover the benefits of Progressive Web Apps (PWAs) and how they provide a native app-like experience on the web.",
  },
  {
    id: 6,
    imgUrl:
      "https://media.licdn.com/dms/image/D5612AQF1X3R7A10-GA/article-cover_image-shrink_720_1280/0/1696269587807?e=2147483647&v=beta&t=RezCmM0hMmBFdllWBKTmYA7hpmvTbBKjP8DSmV8cnUQ",
    author: "Author: Surakiat",
    title: "Getting Started with TypeScript",
    description:
      "A beginner&apos;s guide to TypeScript, including installation, basic syntax, and how it enhances JavaScript with static types.",
  },
  {
    id: 7,
    imgUrl:
      "https://programmerblog.net/wp-content/uploads/2021/06/Top-5-JavaScript-Libraries-2021.png",
    author: "Author: Surakiat",
    title: "Top JavaScript Libraries to Watch in 2021",
    description:
      "Explore the top JavaScript libraries that are making waves in the developer community this year. Find out what makes them stand out.",
  },
];
