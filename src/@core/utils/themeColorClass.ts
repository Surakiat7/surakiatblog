import { useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const getCssClasses = (theme: 'light' | 'dark') => {
  const isLight = theme === 'light';

  return {
    bgColorClass: isLight ? 'bg-zinc-100 text-zinc-950' : 'bg-zinc-950 text-zinc-50',
    bgColorSencondaryClass: isLight ? 'bg-zinc-200 text-zinc-950' : 'bg-zinc-900 text-zinc-50',
    bgColorThridClass: isLight ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-950 text-zinc-50',
    bgWarpperClass: isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-700',
    bgButtonColorClass: isLight ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-900 text-zinc-50',
    Color3DClass: isLight ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-950 text-zinc-50',
    shadowClass: isLight
      ? 'hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:border-[#4EDFE7]'
      : 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-[#4EDFE7]',
    iconColor: isLight ? '#09090b' : '#fafafa',
    authorColorClass: isLight ? 'border-zinc-300 text-zinc-950' : 'border-zinc-600 text-zinc-50',
    textColorClass: isLight ? 'text-zinc-950' : 'text-zinc-50',
    borderColorClass: isLight ? 'border-zinc-300' : 'border-zinc-700',
    dividerColor: isLight ? '#d1d5db' : '#4b5563',
    bgContentColorClass: isLight ? 'bg-zinc-200 text-zinc-950' : 'bg-zinc-900 text-zinc-50',
    glowLineClass: isLight
      ? 'bg-gradient-to-r from-slate-500/0 via-slate-300 to-slate-500/0'
      : 'bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0',
    BorderGlowLineClass: isLight
      ? 'border-slate-200 bg-slate-100 text-zinc-950'
      : 'border-zinc-700 bg-zinc-900/20 text-zinc-50',
    TitleLinearColor: isLight
      ? 'bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text'
      : 'bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text',
    bglinearLeftClass: isLight ? 'bg-gradient-to-r from-zinc-50 to-zinc-50/0' : 'bg-gradient-to-r from-zinc-950 to-zinc-950/0',
    bglinearRightClass: isLight ? 'bg-gradient-to-l from-zinc-50 to-zinc-50/0' : 'bg-gradient-to-l from-zinc-950 to-zinc-950/0',
    logoColor: isLight ? '#09090b' : '#fafafa',
    bgLogoColorClass: isLight ? 'hover:bg-zinc-200' : 'hover:bg-zinc-800',
    strokeColor: isLight ? 'rgb(230 234 235 / 0.5)' : 'rgb(0 88 124 / 0.5)',
    textExprienceColorClass: isLight ? 'text-zinc-600' : 'text-white',
    nubColorClass: isLight ? 'border-zinc-200 bg-zinc-100' : 'border-zinc-700 bg-zinc-950',
    BgDropDownMenuColorClass: isLight
      ? 'border-zinc-200 bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100'
      : 'border-zinc-700 bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950',
    bgDropDownMenuColorClass: isLight ? 'bg-zinc-200 text-zinc-950' : 'bg-zinc-800 text-zinc-50',
    bgInputFieldsColorClass: isLight ? 'bg-zinc-200 border-zinc-100' : 'bg-zinc-950 border-zinc-800',
    socialColorClass: isLight ? '#09090b' : '#fafafa',
    bgLinearDropDownMenuColorClass: isLight
      ? 'border-zinc-200 bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100'
      : 'border-zinc-700 bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950',
  };
};

export const useThemeColors = () => {
  const { theme } = useTheme();
  return useMemo(() => getCssClasses(theme), [theme]);
};