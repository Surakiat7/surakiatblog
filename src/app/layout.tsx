import "./globals.css";
import * as React from "react";
import { Providers } from "./provider";
import { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Head from "next/head";
import { MobileScreenProvider } from "@/contexts/MobileContext";
import Script from "next/script";
import { poppins } from "./fonts";
import GoogleAnalytics from "../../third-parties/GoogleTagManager";

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
    <html lang="en" className={`dark ${poppins.className}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <ThemeProvider>
          <MobileScreenProvider>
            <Providers>{children}</Providers>
          </MobileScreenProvider>
        </ThemeProvider>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-S66GX9CHSJ" />
        {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S66GX9CHSJ"
          async
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S66GX9CHSJ', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
      </body>
    </html>
  );
}
