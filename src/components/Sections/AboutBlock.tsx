import React, { useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Block } from './Block';
import dynamic from 'next/dynamic';

const DynamicLongDescription = dynamic(() => import('./LongDescription'), {
  ssr: false,
});

const AboutBlock = () => {
  const { theme } = useTheme();

  const textColorClass = useMemo(
    () => (theme === 'light' ? 'text-zinc-950' : 'text-zinc-50'),
    [theme]
  );

  const bgColorClass = useMemo(
    () =>
      theme === 'light'
        ? 'bg-zinc-100 text-zinc-950'
        : 'bg-zinc-950 text-zinc-50',
    [theme]
  );

  const borderColorClass = useMemo(
    () => (theme === 'light' ? 'border-zinc-300' : 'border-zinc-700'),
    [theme]
  );

  return (
    <Block
      className={`col-span-12 leading-snug ${bgColorClass} ${borderColorClass}`}
    >
      <p className={`${textColorClass} text-xl sm:text-base font-normal`}>
        I am passionate about creating exceptional user experiences{' '}
        <DynamicLongDescription />
      </p>
    </Block>
  );
};

export default AboutBlock;
