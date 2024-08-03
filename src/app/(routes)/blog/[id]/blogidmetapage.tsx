"use client";

import { useParams } from "next/navigation";
import BackButton from "@/component/Button/BackButton";
import NavbarElementContent from "@/elements/Navbar/NavbarContent";
import React, { useEffect, useState } from "react";
import { Image, Divider, User, Link, Spinner } from "@nextui-org/react";
import BreadcrumbsComponent from "@/component/Breadcrumbs/Breadcrumbs";
import { PiEyeglassesDuotone } from "react-icons/pi";
import { Post, posts } from "../blogpostdata";
import { useTheme } from "@/contexts/ThemeContext";
import { useMobileScreen } from "@/contexts/MobileContext";

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
  const TitleLinearColor =
    theme === "dark"
      ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
      : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text";

  useEffect(() => {
    setTimeout(() => {
      const foundPost = posts.find((p) => p.id === postId);
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

  const profileImageUrl = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/me.jpg`;

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
              />
              <h1
                className={`text-4xl sm:text-xl font-bold ${TitleLinearColor}`}
              >
                {post.title}
              </h1>
              <Divider />
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
                    <p>{post.view}</p>
                  </div>
                </div>
              </div>
              <Divider className="mb-8" />
            </div>
            <div className="flex w-full gap-2 flex-col">
              <p className="text-base">{post.description}</p>
            </div>
            {post.content.map((section, index) => (
              <div key={index} className="flex w-full gap-2 flex-col my-8">
                {section.imagesrc && (
                  <div className="w-full">
                    <Image
                      width="100%"
                      radius="lg"
                      style={{ height: contentImageHeight, width: "100%" }}
                      height={contentImageHeight}
                      className="object-cover w-full h-fit"
                      src={section.imagesrc}
                      alt={section.subtitle}
                    />
                  </div>
                )}
                <h2 className="text-lg font-medium">{section.subtitle}</h2>
                <p className="text-base">{section.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPostByID;
