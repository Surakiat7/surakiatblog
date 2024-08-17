import React from 'react';
import { useThemeColors } from '@/@core/utils/themeColorClass';

export const GlowingChip: React.FC<{ children: string }> = ({ children }) => {
  const { glowLineClass, BorderGlowLineClass } = useThemeColors();

  return (
    <span
      className={`relative z-10 mb-4 inline-block rounded-full border ${BorderGlowLineClass} px-3 py-1.5 text-xs md:mb-0`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-3 right-3 h-[1px] ${glowLineClass}`}
      />
    </span>
  );
};
