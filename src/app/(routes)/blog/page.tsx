import React from "react";
import BlogPost from "./blogmetapage";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Surakiat",
  description:
    "Visit my blog to discover tips, techniques, and various methods for frontend development!",
  openGraph: {
    title: "Surakiat Blog",
    description:
      "Visit my blog to discover tips, techniques, and various methods for frontend development!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`,
        width: 1200,
        height: 630,
        alt: "Surakiat Blog",
      },
    ],
    locale: "th_TH",
    type: "article",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
  authors: [{ name: "Surakiat", url: "https://www.facebook.com/Surakiatz/" }],
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "article:section": "blog",
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function Page() {
  return (
    <>
      <Head>
        <meta property="article:section" content="blog" />
        <meta
          name="keywords"
          content="blog, frontend development, tips, techniques, methods, blog post"
        />
      </Head>
      <BlogPost />
    </>
  );
}
