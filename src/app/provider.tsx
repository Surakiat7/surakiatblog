"use client";

import { NextUIProvider } from "@nextui-org/react";
import GoogleAnalytics from "../../third-parties/GoogleTagManager";

const GA_MEASUREMENT_ID = "G-S66GX9CHSJ";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      <NextUIProvider>{children}</NextUIProvider>
    </>
  );
}
