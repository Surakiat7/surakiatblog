import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeContextType {
  theme: "light" | "dark";
}

const CARD_WIDTH = 350;
const MARGIN = 20;

const SkeletonBlogCard: React.FC = () => {
  const { theme } = useTheme() as ThemeContextType;
  const borderColorClass: string =
    theme === "light" ? "border-zinc-300" : "border-zinc-600";

  return (
    <Card
      className={`relative rounded-2xl border ${borderColorClass} p-3 shrink-0`}
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <Skeleton className="rounded-lg mb-3 h-[200px] w-full" />
      <Skeleton className="w-1/4 h-6 rounded-xl mb-2" />
      <Skeleton className="w-3/4 h-6 rounded-lg mb-2" />
      <Skeleton className="w-full h-24 rounded-lg" />
    </Card>
  );
};

export default SkeletonBlogCard;