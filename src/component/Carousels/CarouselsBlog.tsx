"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

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
    <section className="bg-slate-800 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl">Blog</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft color="#000000" />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight color="#000000"/>
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description }: PostType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {author}
      </span>
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{description}</p>
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
        "https://via.placeholder.com/800x400.png?text=Exploring+Modern+JavaScript+Frameworks",
      author: "Surakiat",
      title: "Exploring Modern JavaScript Frameworks",
      description:
        "An in-depth look at popular JavaScript frameworks like React, Angular, and Vue.js. Learn which framework might be best for your next project.",
    },
    {
      id: 2,
      imgUrl:
        "https://via.placeholder.com/800x400.png?text=CSS+Grid+vs+Flexbox",
      author: "Surakiat",
      title: "CSS Grid vs Flexbox: Which One to Use?",
      description:
        "A comprehensive comparison of CSS Grid and Flexbox. Understand the strengths and weaknesses of each layout system and when to use them.",
    },
    {
      id: 3,
      imgUrl:
        "https://via.placeholder.com/800x400.png?text=Mastering+Responsive+Design",
      author: "Surakiat",
      title: "Mastering Responsive Design for Web",
      description:
        "Tips and techniques for creating responsive web designs that look great on any device. Explore media queries, flexible grids, and more.",
    },
    {
      id: 4,
      imgUrl:
        "https://via.placeholder.com/800x400.png?text=Understanding+Web+Performance+Optimization",
      author: "Surakiat",
      title: "Understanding Web Performance Optimization",
      description:
        "Learn about techniques to improve web performance, including optimizing images, minifying CSS and JavaScript, and leveraging browser caching.",
    },
    {
      id: 5,
      imgUrl:
        "https://via.placeholder.com/800x400.png?text=Introduction+to+Progressive+Web+Apps",
      author: "Surakiat",
      title: "Introduction to Progressive Web Apps",
      description:
        "Discover the benefits of Progressive Web Apps (PWAs) and how they provide a native app-like experience on the web.",
    },
    {
      id: 6,
      imgUrl:
        "https://via.placeholder.com/800x400.png?text=Getting+Started+with+TypeScript",
      author: "Surakiat",
      title: "Getting Started with TypeScript",
      description:
        "A beginner's guide to TypeScript, including installation, basic syntax, and how it enhances JavaScript with static types.",
    },
    {
      id: 7,
      imgUrl:
        "https://via.placeholder.com/800x400.png?text=The+Future+of+Frontend+Development",
      author: "Surakiat",
      title: "The Future of Frontend Development",
      description:
        "Explore emerging trends and technologies in frontend development, including the rise of JAMstack, serverless architecture, and more.",
    },
  ];
  
