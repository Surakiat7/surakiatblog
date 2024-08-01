"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useTheme } from "@/contexts/ThemeContext";
import { Image, Button, Spinner } from "@nextui-org/react";
import SkeletonBlogCard from "../Skeleton/SkeletonBlogCard";
import { useNavigate } from "@/utils/navigation";
import type { Post as PostType } from "@/app/(routes)/blog/blogpostdata";
import { posts as allPosts } from "@/app/(routes)/blog/blogpostdata";
import SearchButton from "../Button/SearchButton";

const BlogPostFindAll = () => {
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>(allPosts);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPosts(allPosts);
    } else {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        const results = allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(results);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <section className={`${bgColorClass}`}>
      <div className="relative overflow-hidden">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex sm:gap-2 w-full sm:items-start items-center justify-between">
                <h1 className="text-4xl font-bold sm:w-1/2">Blog</h1>
                <div className="sm:w-full">
                  <SearchButton onSearch={handleSearch} />
                </div>
              </div>
              <div className="flex w-full items-start justify-between sm:items-center gap-8">
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
                  Visit my blog to discover tips, techniques, and various
                  methods for frontend development! Whether you&apos;re looking
                  to enhance your skills or stay updated with the latest in
                  frontend technology and design.
                </p>
              </div>
              <div className="flex w-full pt-2">
                <h2 className="text-xl font-bold sm:w-full bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text">
                  {searchQuery ? (
                    <>
                      {filteredPosts.length} Search Results: {searchQuery}
                    </>
                  ) : (
                    `Totals ${filteredPosts.length} Posts`
                  )}
                </h2>
              </div>
              <div className="flex w-full min-h-screen pb-4">
                {isLoading ? (
                  <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 w-full h-fit">
                    {Array.from({ length: 3 }, (_, index) => (
                      <SkeletonBlogCard key={index} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    animate={{
                      x: offset,
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                    className="grid grid-cols-3 sm:grid-cols-1 gap-4 w-full h-fit"
                  >
                    {filteredPosts.length > 0 ? (
                      filteredPosts.map((post) => (
                        <BlogPost key={post.id} {...post} />
                      ))
                    ) : (
                      <p className="text-base font-normal">No results found</p>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ id, imgUrl, author, title, description }: PostType) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const borderColorClass =
    theme === "light" ? "border-zinc-300" : "border-zinc-600";
  const authorColorClass =
    theme === "light"
      ? "border-zinc-300 text-zinc-950"
      : "border-zinc-600 text-zinc-50";

  const handleBlogClick = (id: string) => {
    navigate.BlogParam(id);
  };

  return (
    <div
      className={`relative w-full rounded-2xl border ${borderColorClass} p-3 shrink-0 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,0,0,0.1)]`}
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

export default BlogPostFindAll;
