import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      svg: React.SVGProps<SVGSVGElement>;
      path: React.SVGProps<SVGPathElement>;
    }
    interface Window {
      gtag: (
        command: "config" | "event",
        targetId: string,
        params?: { [key: string]: any }
      ) => void;
      dataLayer: any[];
    }
  }
}
