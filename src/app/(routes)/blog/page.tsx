import React from "react";
import BlogPost from "./blogmetapage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Surakiat",
  description:
    "Visit my blog to discover tips, techniques, and various methods for frontend development!",
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`,
        width: 1200,
        height: 630,
        alt: "Surakiat Blog",
      },
    ],
  },
};

export default function Page() {
  return <BlogPost />;
}
