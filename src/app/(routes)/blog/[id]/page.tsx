import React from "react";
import BlogPostByID from "./blogidmetapage";
import { Metadata, ResolvingMetadata } from "next";
import { getPostDataById } from "../blogpostmockdata";

type Props = {
  params: { id: string };
};

const DEFAULT_OG_IMAGE = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id);
  const post = getPostDataById(id);

  return {
    title: post ? `${post.title} | Surakiat` : "Blog Post | Surakiat",
    description:
      post?.description ||
      "Visit my blog to discover tips, techniques, and various methods for frontend development!",
    openGraph: {
      images: [
        {
          url: post?.imgUrl || DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Surakiat Blog",
        },
      ],
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPostByID />;
}
