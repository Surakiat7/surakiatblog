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
  twitter: {
    card: "summary_large_image",
    site: "@surakiat",
    title: "Blog | Surakiat",
    description:
      "Visit my blog to discover tips, techniques, and various methods for frontend development!",
    images: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`,
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
};

export default function Page() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="blog, frontend development, tips, techniques, methods"
        />
        <meta property="og:title" content="Blog | Surakiat" />
        <meta
          property="og:description"
          content="Visit my blog to discover tips, techniques, and various methods for frontend development!"
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/blog`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@surakiat" />
        <meta property="twitter:title" content="Blog | Surakiat" />
        <meta
          property="twitter:description"
          content="Visit my blog to discover tips, techniques, and various methods for frontend development!"
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`}
        />
        <meta property="article:section" content="blog" />
      </Head>
      <BlogPost />
    </>
  );
}
