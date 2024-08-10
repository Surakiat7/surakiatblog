import React from "react";
import BlogPostByID from "./blogidmetapage";
import { Metadata, ResolvingMetadata } from "next";
import { getPostDataById } from "../blogpostmockdata";

type Props = {
  params: { id: string };
};

const DEFAULT_OG_IMAGE = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com';

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id);
  const post = getPostDataById(id);

  const imageUrl = post?.imgUrl ? new URL(post.imgUrl, BASE_URL).toString() : DEFAULT_OG_IMAGE;
  const canonicalUrl = `${BASE_URL}/blog/${params.id}`;

  return {
    title: post ? `${post.title} | Surakiat` : "Blog Post | Surakiat",
    description:
      post?.description ||
      "Visit my blog to discover tips, techniques, and various methods for frontend development!",
    openGraph: {
      title: post ? `${post.title} | Surakiat` : "Blog Post | Surakiat",
      description: post?.description || "Visit my blog to discover tips, techniques, and various methods for frontend development!",
      url: canonicalUrl,
      siteName: 'Surakiat Blog',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post ? `${post.title} | Surakiat` : "Blog | Surakiat",
        },
      ],
      locale: 'th_TH',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post ? `${post.title} | Surakiat` : "Blog Post | Surakiat",
      description: post?.description || "Visit my blog to discover tips, techniques, and various methods for frontend development!",
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: 'Surakiat', url: 'https://www.facebook.com/Surakiatz/' }],
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPostByID />;
}