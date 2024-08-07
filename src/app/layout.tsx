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
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`,
        width: 1200,
        height: 630,
        alt: "Surakiat OpenGraph Images",
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
    <html lang="en" className={`${poppins.className} dark`}>
      <Head>
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Logo-openGraph.avif`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* <!-- Apple Touch Icons -->  */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-DarkBG.avif`}
        />

        {/* <!-- Android Icons -->  */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/android-icon.png`}
        />

        {/* <!-- Favicon -->  */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/favicon-16x16.png`}
        />

        {/* <!-- Manifest -->  */}
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/manifest.json`}
        />

        {/* <!-- Microsoft Tile Icons -->  */}
        <meta
          name="msapplication-TileImage"
          content={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/mstile-150x150.png`}
        />

        {/* <!-- Safari Pinned Tab Icon -->  */}
        <link
          rel="mask-icon"
          href={`${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/safari-pinned-tab.svg`}
          color="#000000"
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
