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
import { useMobileScreen } from "@/hooks/UseMobileMediaQuery";
import NavbarElementContent from "@/elements/Navbar/NavbarContent";
import FallbackImage from "@/component/FallbackImage/FallbackImage";
import Footer from "@/elements/Footer/Footer";
import { FaLine, FaLinkedin, FaShareAltSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import Toast from "@/component/Notification/Toast";

const BlogPostByID: React.FC = () => {
  const { id } = useParams();
  const postId = parseInt(id as string);
  const { mobileScreen } = useMobileScreen();
  const { theme } = useTheme();

  const coverImageHeight = mobileScreen ? 200 : 600;
  const contentImageHeight = mobileScreen ? 140 : 400;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const bgContentColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";
  const borderColorClass =
    theme === "light" ? "border-zinc-400" : "border-zinc-50";
  const dividerColor = theme === "light" ? "#d1d5db" : "#4b5563";
  const TitleLinearColor =
    theme === "dark"
      ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
      : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text";

  useEffect(() => {
    const foundPost = PostData.find((p) => p.id === postId);
    setPost(foundPost || null);
    setLoading(false);
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

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}&text=${encodeURIComponent(post.title)}`,
      "_blank"
    );
  };

  const shareToLine = () => {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(
      () => {
        setToast({ type: "success", message: "Link copied to clipboard!" });
      },
      (err) => {
        console.error("Failed to copy link: ", err);
        setToast({ type: "error", message: "Failed to copy link!" });
      }
    );
  };

  return (
    <main className={`w-full ${bgContentColorClass}`}>
      <NavbarElementContent />
      {/* Start Toast */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      {/* End Toast */}
      <div className={`px-32 sm:px-0 border-b-1 ${borderColorClass}`}>
        <div className={`${bgContentColorClass}`}>
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
              <Divider style={{ backgroundColor: dividerColor }} />
              <div className="flex sm:flex-col sm:gap-4 sm:justify-start w-full justify-between items-center">
                <User
                  name={post.author}
                  className="w-full justify-start"
                  description={
                    <Link
                      href="https://www.linkedin.com/in/surakiat000/"
                      size="lg"
                      isExternal
                      className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text font-medium text-base"
                    >
                      @Surakiat
                    </Link>
                  }
                  avatarProps={{ src: profileImageUrl }}
                />
                <div className="flex sm:flex-col gap-4 sm:gap-2 justify-end sm:justify-start w-full items-center sm:items-start">
                  <div className="flex items-center gap-2">
                    <p>Share</p>
                    <div className="flex items-center gap-2">
                      {[
                        {
                          Icon: FaSquareFacebook,
                          alt: "Facebook",
                          onClick: shareToFacebook,
                        },
                        {
                          Icon: FaSquareXTwitter,
                          alt: "Twitter",
                          onClick: shareToTwitter,
                        },
                        { Icon: FaLine, alt: "Line", onClick: shareToLine },
                        {
                          Icon: FaLinkedin,
                          alt: "LinkedIn",
                          onClick: shareToLinkedIn,
                        },
                        {
                          Icon: FaShareAltSquare,
                          alt: "Share",
                          onClick: copyLink,
                        },
                      ].map(({ Icon, alt, onClick }, idx) => (
                        <Icon
                          key={idx}
                          size={30}
                          className="transition-transform transform hover:translate-y-[-4px] duration-300 cursor-pointer"
                          aria-label={alt}
                          onClick={onClick}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="whitespace-nowrap">
                      Written on {post.createdAt}
                    </p>
                    <div className="flex items-center gap-2">
                      <PiEyeglassesDuotone size={26} />
                      <p>{post.views}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider
                style={{ backgroundColor: dividerColor }}
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
            <div className="w-full">
              <Divider
                style={{ backgroundColor: dividerColor }}
                className="mb-2"
              />
              <div className="flex justify-start sm:justify-center">
                <div className="flex items-center gap-2">
                  <p>Share</p>
                  <div className="flex items-center gap-2">
                    {[
                      { Icon: FaSquareFacebook, alt: "Facebook" },
                      { Icon: FaSquareXTwitter, alt: "Twitter" },
                      { Icon: FaLine, alt: "Line" },
                      { Icon: FaLinkedin, alt: "LinkedIn" },
                      { Icon: FaShareAltSquare, alt: "Share" },
                    ].map(({ Icon, alt }, idx) => (
                      <Icon
                        key={idx}
                        size={30}
                        className="transition-transform transform hover:translate-y-[-4px] duration-300 cursor-pointer"
                        aria-label={alt}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Divider
                style={{ backgroundColor: dividerColor }}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default BlogPostByID;
