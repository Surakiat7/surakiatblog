import "./globals.css";
import * as React from "react";
import { Providers } from "./provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surakiat",
  description: "Surakiat blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
