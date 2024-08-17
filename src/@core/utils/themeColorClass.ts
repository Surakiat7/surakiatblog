import { useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import _ from 'lodash';

export const useThemeColors = () => {
  const { theme } = useTheme();

  const bgColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-100 text-zinc-950'
        : 'bg-zinc-950 text-zinc-50',
    [theme]
  );

  const bgColorSencondaryClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-200 text-zinc-950'
        : 'bg-zinc-900 text-zinc-50',
    [theme]
  );

  const bgColorThridClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-50 text-zinc-950'
        : 'bg-zinc-950 text-zinc-50',
    [theme]
  );

  const bgWarpperClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-50 border-zinc-200'
        : 'bg-zinc-950 border-zinc-700',
    [theme]
  );

  const bgButtonColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-50 text-zinc-950'
        : 'bg-zinc-900 text-zinc-50',
    [theme]
  );

  const Color3DClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-50 text-zinc-950'
        : 'bg-zinc-950 text-zinc-50',
    [theme]
  );

  const shadowClass = useMemo(
    () =>
      theme === 'light'
        ? 'hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:border-[#4EDFE7]'
        : 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-[#4EDFE7]',
    [theme]
  );

  const iconColor = useMemo(
    () => (theme === 'light' ? '#09090b' : '#fafafa'),
    [theme]
  );

  const authorColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'border-zinc-300 text-zinc-950'
        : 'border-zinc-600 text-zinc-50',
    [theme]
  );

  const textColorClass = useMemo(
    () => (theme === 'light' ? 'text-zinc-950' : 'text-zinc-50'),
    [theme]
  );

  const borderColorClass = useMemo(
    () => (theme === 'light' ? 'border-zinc-300' : 'border-zinc-700'),
    [theme]
  );

  const dividerColor = useMemo(
    () => (theme === 'light' ? '#d1d5db' : '#4b5563'),
    [theme]
  );

  const bgContentColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-200 text-zinc-950'
        : 'bg-zinc-900 text-zinc-50',
    [theme]
  );

  const glowLineClass = useMemo(
    () =>
      theme === 'dark'
        ? 'bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0'
        : 'bg-gradient-to-r from-slate-500/0 via-slate-300 to-slate-500/0',
    [theme]
  );

  const BorderGlowLineClass = useMemo(
    () =>
      theme === 'dark'
        ? 'border-zinc-700 bg-zinc-900/20 text-zinc-50'
        : 'border-slate-200 bg-slate-100 text-zinc-950',
    [theme]
  );

  const TitleLinearColor = useMemo(
    () =>
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text'
        : 'bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text',
    [theme]
  );

  const bglinearLeftClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-gradient-to-r from-zinc-50 to-zinc-50/0'
        : 'bg-gradient-to-r from-zinc-950 to-zinc-950/0',
    [theme]
  );

  const bglinearRightClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-gradient-to-l from-zinc-50 to-zinc-50/0'
        : 'bg-gradient-to-l from-zinc-950 to-zinc-950/0',
    [theme]
  );

  const logoColor = useMemo(
    () => (theme === 'light' ? '#09090b' : '#fafafa'),
    [theme]
  );

  const bgLogoColorClass = useMemo(
    () => (theme === 'light' ? 'hover:bg-zinc-200' : 'hover:bg-zinc-800'),
    [theme]
  );

  const strokeColor = useMemo(
    () => (theme === 'dark' ? 'rgb(0 88 124 / 0.5)' : 'rgb(230 234 235 / 0.5)'),
    [theme]
  );

  const textExprienceColorClass = useMemo(
    () => (theme === 'light' ? 'text-zinc-600' : 'text-white'),
    [theme]
  );

  const nubColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'border-zinc-200 bg-zinc-100'
        : 'border-zinc-700 bg-zinc-950',
    [theme]
  );

  const BgDropDownMenuColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'border-zinc-200 bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100'
        : 'border-zinc-700 bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950',
    [theme]
  );

  const bgDropDownMenuColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-200 text-zinc-950'
        : 'bg-zinc-800 text-zinc-50',
    [theme]
  );

  const bgLinearDropDownMenuColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'border-zinc-200 bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100'
        : 'border-zinc-700 bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950',
    [theme]
  );

  return {
    bgColorClass,
    bgLinearDropDownMenuColorClass,
    bgDropDownMenuColorClass,
    BgDropDownMenuColorClass,
    nubColorClass,
    bgColorThridClass,
    logoColor,
    textExprienceColorClass,
    strokeColor,
    textColorClass,
    bglinearRightClass,
    bgLogoColorClass,
    glowLineClass,
    shadowClass,
    BorderGlowLineClass,
    bgWarpperClass,
    bglinearLeftClass,
    Color3DClass,
    dividerColor,
    borderColorClass,
    TitleLinearColor,
    authorColorClass,
    bgContentColorClass,
    iconColor,
    bgButtonColorClass,
    bgColorSencondaryClass,
  };
};
