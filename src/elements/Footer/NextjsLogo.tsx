import React from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const NextJSLogo: React.FC = () => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Nextjs-Logo-Black.avif`
      : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Nextjs-Logo-White.avif`;

  return (
    <Image
      src={logoSrc}
      alt="NextJS Logo"
      width={70}
      height={70}
      loading="lazy"
      className="object-cover"
    />
  );
};

export default NextJSLogo;
