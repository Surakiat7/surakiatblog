import React from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const NextJSLogo: React.FC = () => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Nextjs-Logo-Black.png`
      : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Nextjs-Logo-White.png`;

  return (
    <Image
      src={logoSrc}
      alt="NextJS Logo"
      width={70}
      height={70}
      loading="lazy"
      className="object-cover"
      layout="fixed"
    />
  );
};

export default NextJSLogo;
