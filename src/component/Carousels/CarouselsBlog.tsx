"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import SearchButton from "../Button/SearchButton";
import { useTheme } from "@/contexts/ThemeContext";
import { Image } from "@nextui-org/react";
import SkeletonBlogCard from "../Skeleton/SkeletonBlogCard";
import { useNavigate } from "@/utils/navigation";
import { Post, posts } from "@/app/(routes)/blog/blogpostdata";
import Link from "next/link";

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
            <div className="flex flex-col gap-4 sm:gap-2 w-full px-12 sm:px-6 pt-12 sm:pt-6">
              <div className="flex w-full items-center justify-between">
                <h2 className="text-4xl font-bold sm:w-full">Blog</h2>
                {/* <SearchButton /> */}
              </div>
              <div className="flex w-full items-start justify-between sm:items-center gap-8 pb-4 sm:pb-0">
                <p className="font-normal text-md sm:hidden">
                  Visit my blog to discover tips, techniques, and various
                  methods for frontend development! Whether you&apos;re looking
                  to enhance your skills or stay updated with the latest in
                  frontend technology and design, I&apos;ll be sharing articles
                  and tutorials that might help you in one way or another.
                  Let&apos;s develop your frontend skills together with shared
                  knowledge and experience.
                  <Link
                    href="/blog"
                    className="pl-2 bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300"
                  >
                    View All Posts
                  </Link>
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
                    aria-label="Shift Left"
                  >
                    <FiArrowLeft color={iconColor} />
                  </button>
                  <button
                    className={`rounded-lg border-[1px] border-neutral-400 ${bgButtonColorClass} p-1.5 text-2xl transition-opacity ${
                      CAN_SHIFT_RIGHT ? "" : "opacity-30"
                    }`}
                    disabled={!CAN_SHIFT_RIGHT}
                    onClick={shiftRight}
                    aria-label="Shift Right"
                  >
                    <FiArrowRight color={iconColor} />
                  </button>
                </div>
              </div>
              <div className="hidden sm:flex sm:pb-2">
                <Link
                  href="/blog"
                  className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300"
                >
                  View All Posts
                </Link>
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
              : posts.map((post) => <BlogPostCard key={post.id} {...post} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BlogPostCard = ({ id, imgUrl, author, title, description }: PostType) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-600";
  const authorColorClass =
    theme === "light"
      ? "border-zinc-300 text-zinc-950"
      : "border-zinc-600 text-zinc-50";

  const handleBlogClick = (id: string) => {
    navigate.MainRoute().BlogParam(id);
  };

  return (
    <div
      className={`relative rounded-2xl border ${borderColorClass} p-3 shrink-0 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,0,0,0.1)]`}
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
      onClick={() => handleBlogClick(id.toString())}
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
