import React from "react";
import BlogPostByID from "./blogidmetapage";
import { getPostById } from "../blogpostdata";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id)
  const post = getPostById(id)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: post ? `${post.title} | Surakiat` : 'Blog Post | Surakiat',
    description: post?.description || 'Visit my blog to discover tips, techniques, and various methods for frontend development!',
    openGraph: {
      images: post?.imgUrl ? [post.imgUrl, ...previousImages] : previousImages,
    },
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPostByID />;
}