import React, { useEffect, useState } from 'react';
import { Card, Skeleton } from '@nextui-org/react';
import { useThemeColors } from '@/@core/utils/themeColorClass';

interface ThemeContextType {
  theme: 'light' | 'dark';
}

const CARD_WIDTH = 350;
const MARGIN = 20;

const SkeletonBlogCard: React.FC = () => {
  const {
    borderColorClass,
  } = useThemeColors();
  const [isOnBlogPage, setIsOnBlogPage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOnBlogPage(window.location.pathname === '/blog');
    }
  }, []);

  const cardStyle = isOnBlogPage
    ? {}
    : {
        width: CARD_WIDTH,
        marginRight: MARGIN,
      };

  return (
    <Card
      className={`relative flex flex-col gap-2 rounded-2xl border ${borderColorClass} p-3 shrink-0`}
      style={cardStyle}
    >
      <Skeleton className="rounded-lg mb-2 h-[200px] w-full" />
      <Skeleton className="w-2/5 h-6 rounded-xl" />
      <Skeleton className="w-3/4 h-6 rounded-lg mt-2" />
      <Skeleton className="w-full h-24 rounded-lg" />
    </Card>
  );
};

export default SkeletonBlogCard;
