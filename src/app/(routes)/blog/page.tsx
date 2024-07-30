import React from "react";
import BlogPost from "./blogmetapage";

export const metadata = {
  title: "Blog | Surakiat",
  description:
    "Visit my blog to discover tips, techniques, and various methods for frontend development!",
  openGraph: {
    images: [
      {
        url: "https://surakiat.vercel.app/Surakiat-DarkBG.png",
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
