import "./globals.css";
import * as React from "react";
import { Anuphan } from "next/font/google";
import { Providers } from "./provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "J-BLOGS",
  description: "",
};

const anuphan = Anuphan({ subsets: ["latin"] });

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}