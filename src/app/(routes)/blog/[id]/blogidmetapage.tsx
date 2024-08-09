"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Image,
  Divider,
  User,
  Link,
  Spinner,
  Snippet,
} from "@nextui-org/react";
import BreadcrumbsComponent from "@/component/Breadcrumbs/Breadcrumbs";
import BackButton from "@/component/Button/BackButton";
import { PiEyeglassesDuotone } from "react-icons/pi";
import { PostData, Post } from "../blogpostmockdata";
import { useTheme } from "@/contexts/ThemeContext";
import { useMobileScreen } from "@/contexts/MobileContext";
import NavbarElementContent from "@/elements/Navbar/NavbarContent";
import FallbackImage from "@/component/FallbackImage/FallbackImage";

type Props = {};

const BlogPostByID: React.FC<Props> = () => {
  const params = useParams();
  const id = params.id as string;
  const postId = parseInt(id);
  const { mobileScreen } = useMobileScreen();

  const coverImageHeight = mobileScreen ? 200 : 600;
  const contentImageHeight = mobileScreen ? 140 : 400;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";
  const dividerColor = theme === "light" ? "#d1d5db" : "#4b5563";
  const TitleLinearColor =
    theme === "dark"
      ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
      : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text";

  useEffect(() => {
    setTimeout(() => {
      const foundPost = PostData.find((p) => p.id === postId);
      setPost(foundPost || null);
      setLoading(false);
    }, 1000);
  }, [postId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-950">
        <Spinner label="Loading..." color="white" />
      </div>
    );
  }

  if (!post) {
    return <p className={`${TitleLinearColor} text-xl`}>Post not found</p>;
  }

  const profileImageUrl = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/me.avif`;
  const fallbackImageUrl =
    theme === "light"
      ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Image-notfound-Black.avif`
      : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Image-notfound-White.avif`;

  const breadcrumbsItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title },
  ];

  return (
    <main className="w-full">
      <NavbarElementContent />
      <div className="px-32 sm:px-0">
        <div className={`${bgColorClass}`}>
          <div className="py-4 sm:py-4 px-8 sm:px-4 w-full">
            <div className="flex w-full gap-2 flex-col">
              <BreadcrumbsComponent items={breadcrumbsItems} />
              <BackButton />
            </div>
            <div className="flex gap-4 w-full pt-6 sm:pt-4 flex-col">
              <Image
                isZoomed
                width="100%"
                radius="lg"
                style={{ height: coverImageHeight, width: "100%" }}
                height={coverImageHeight}
                className="object-cover w-full h-fit"
                src={post.imgUrl}
                alt={`${post.title} image`}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="flex w-full flex-col gap-2">
                <h1
                  className={`text-4xl sm:text-xl font-bold ${TitleLinearColor}`}
                >
                  {post.title}
                </h1>
                <p className="text-base text-md">{post.description}</p>
              </div>
              <Divider style={{ backgroundColor: `${dividerColor}` }} />
              <div className="flex sm:flex-col sm:gap-4 sm:justify-start w-full justify-between items-center">
                <User
                  name={post.author}
                  className="w-full justify-start"
                  description={
                    <Link
                      href="https://www.linkedin.com/in/surakiat000/"
                      size="sm"
                      isExternal
                      className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text font-medium text-base"
                    >
                      @Surakiat
                    </Link>
                  }
                  avatarProps={{
                    src: `${profileImageUrl}`,
                  }}
                />
                <div className="flex gap-4 justify-end sm:justify-start w-full items-center">
                  <p>Written on {post.createdAt}</p>
                  <div className="flex items-center gap-2">
                    <PiEyeglassesDuotone size={26} />
                    <p>{post.views}</p>
                  </div>
                </div>
              </div>
              <Divider
                style={{ backgroundColor: `${dividerColor}` }}
                className="mb-6"
              />
            </div>
            {post.content.map((section, index) => (
              <div key={index} className="flex w-full gap-2 flex-col pb-6">
                <h2 className="text-lg font-medium">{section.subtitle}</h2>
                {section.imagesrc && (
                  <div className="w-full sm:h-full justify-center">
                    <FallbackImage
                      width="100%"
                      radius="lg"
                      height={contentImageHeight}
                      style={{ height: contentImageHeight, width: "100%" }}
                      className="w-full h-full object-contain"
                      src={section.imagesrc}
                      alt={section.subtitle}
                      loading="lazy"
                      fallbackSrc={fallbackImageUrl}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <p className="text-base">{section.paragraph}</p>
                {section.snippet && (
                  <div className="flex w-full custom-scrollbar overflow-hidden overflow-x-auto">
                    <Snippet
                      tooltipProps={{
                        color: "foreground",
                        content: "Copy this snippet",
                        disableAnimation: true,
                        placement: "right",
                        closeDelay: 0,
                      }}
                      style={{ fontSize: mobileScreen ? "12px" : "inherit" }}
                    >
                      {section.snippet}
                    </Snippet>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPostByID;
