import React from 'react';
import { Block } from './Block';
import dynamic from 'next/dynamic';
import { useThemeColors } from '@/@core/utils/themeColorClass';

const DynamicLongDescription = dynamic(() => import('./LongDescription'), {
  ssr: false,
});

const AboutBlock = () => {
  const { bgColorClass, textColorClass, borderColorClass } = useThemeColors();
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
