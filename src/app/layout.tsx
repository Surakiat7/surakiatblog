import "./globals.css";
import * as React from "react";
import { Providers } from "./provider";
import { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MobileScreenProvider } from "@/contexts/MobileContext";
import Script from "next/script";
import Head from "next/head";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Surakiat",
  description:
    "Surakiat is a blog and personal website where JJ shares insights, stories, and information on various topics. Explore posts about web development, technology, and more.",
  openGraph: {
    title: "Surakiat",
    description:
      "Surakiat is a blog and personal website where JJ shares insights, stories, and information on various topics. Explore posts about web development, technology, and more.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.surakiat.dev",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`,
        width: 1200,
        height: 630,
        alt: "Surakiat OpenGraph Images",
      },
    ],
    type: "website",
    locale: "th_TH",
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} dark`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_BASE_URL || "https://www.surakiat.dev"}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="blog, personal website, web development, technology, insights, stories, surakiat, Surakiat Tabakorn, JJ, jj"
        />
      </Head>
      <body>
        <ThemeProvider>
          <MobileScreenProvider>
            <Providers>{children}</Providers>
          </MobileScreenProvider>
        </ThemeProvider>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'G-S66GX9CHSJ');
            `,
          }}
        />
      </body>
    </html>
  );
}
