import "./globals.css";
import * as React from "react";
import { Providers } from "./provider";
import { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Head from "next/head";
import { MobileScreenProvider } from "@/contexts/MobileContext";

export const metadata: Metadata = {
  title: "Surakiat",
  description:
    "Surakiat is a blog and personal website where JJ shares insights, stories, and information on various topics. Explore posts about web development, technology, and more.",
  openGraph: {
    images: [
      {
        url: "https://surakiat.vercel.app/Logo-openGraph.png",
        width: 1200,
        height: 630,
        alt: "Surakiat Blog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <ThemeProvider>
          <MobileScreenProvider>
            <Providers>{children}</Providers>
          </MobileScreenProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
