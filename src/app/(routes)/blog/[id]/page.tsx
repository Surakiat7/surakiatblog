import React from "react";
import Head from "next/head";
import BlogPostByID from "./blogidmetapage";
import { Metadata, ResolvingMetadata } from "next";
import { getPostDataById } from "../blogpostmockdata";

type Props = {
  params: { id: string };
};

const DEFAULT_OG_IMAGE = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.surakiat.dev";

function convertToJpeg(imageUrl: string): string {
  const url = new URL(imageUrl);
  url.searchParams.set("fm", "jpg");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", "1200");
  url.searchParams.set("h", "630");
  url.searchParams.set("q", "75");
  return url.toString();
}

function generateKeywords(title: string): string {
  const words = title.split(" ");
  const keywords = words.filter((word) => word.length > 3).join(", ");
  return keywords;
}

function formatDateToISO(dateStr: string): string {
  const [datePart, timePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split("/");
  const [time, period] = timePart.split(" ");

  let [hour, minute] = time.split(":");
  if (period === "PM" && hour !== "12") hour = (parseInt(hour) + 12).toString();
  if (period === "AM" && hour === "12") hour = "00";

  return `${year}-${month}-${day}T${hour}:${minute}:00+07:00`;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id);
  const post = getPostDataById(id);

  const imageUrl = post?.imgUrl
    ? new URL(post.imgUrl, BASE_URL).toString()
    : DEFAULT_OG_IMAGE;

  const convertedImageUrl = convertToJpeg(imageUrl);
  const canonicalUrl = `${BASE_URL}/blog/${params.id}`;
  const title = post ? `${post.title} | Surakiat` : "Blog Post | Surakiat";
  const description =
    post?.description ||
    "Visit my blog to discover tips, techniques, and various methods for frontend development!";

  console.log("convertedImageUrl test:", convertedImageUrl);
  const publishedTime = post?.createdAt ? formatDateToISO(post.createdAt) : "";

  return {
    title: title,
    keywords: generateKeywords(title),
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: "Surakiat Blog",
      images: [
        {
          url: `${convertedImageUrl}`,
          width: 1200,
          height: 630,
          alt: post ? `${post.title} | Surakiat` : "Blog | Surakiat",
        },
      ],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@Surakiat",
      images: [
        {
          url: `${convertedImageUrl}`,
          width: 1200,
          height: 630,
          alt: `Preview for ${title}`,
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: "Surakiat", url: "https://www.facebook.com/Surakiatz/" }],
    other: {
      "og:image:width": "1200",
      "og:image:height": "630",
      "article:published_time": publishedTime,
      "article:section": "blog",
    },
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const post = getPostDataById(id);

  return (
    <>
      <Head>
        <meta
          property="article:published_time"
          content={post ? formatDateToISO(post.createdAt) : ""}
        />
        <meta property="article:section" content="blog" />
        <meta name="twitter:site" content="@surakiat" />
      </Head>
      <BlogPostByID />
    </>
  );
}
