import React from 'react';
import dynamic from 'next/dynamic';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { Block } from './Block';
import { AboutHeroProps, HeaderBlockProps } from '@/types';
import { useThemeColors } from '@/@core/utils/themeColorClass';

const DynamicAboutBlock = dynamic(() => import('./AboutBlock'), { ssr: false });

const AboutHero: React.FC<AboutHeroProps> = ({ contactRef }) => {
  const { bgColorSencondaryClass } = useThemeColors();

  return (
    <div className={`flex w-full h-full p-12 sm:p-6 ${bgColorSencondaryClass}`}>
      <div className="flex flex-col w-full gap-4">
        <HeaderBlock contactRef={contactRef} />
        <DynamicAboutBlock />
      </div>
    </div>
  );
};

const HeaderBlock: React.FC<HeaderBlockProps> = ({ contactRef }) => {
  const { bgColorClass, textColorClass, borderColorClass, TitleLinearColor } = useThemeColors();

  const handleContactClick = () => {
    if (contactRef.current) {
      const navbar = document.querySelector(
        '.navbar-container'
      ) as HTMLElement | null;
      const yOffset = navbar ? -navbar.getBoundingClientRect().height : 0;
      const y =
        contactRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const profileImageUrl = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/me.avif`;

  return (
    <Block className={`flex w-full ${bgColorClass} ${borderColorClass}`}>
      <div className="flex w-full sm:flex-col items-center sm:items-start gap-4">
        <Image
          className="object-cover w-[100px] h-[100px] rounded-2xl"
          src={profileImageUrl}
          alt="Profile me"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`text-2xl sm:text-[18px] font-bold ${TitleLinearColor}`}
          >
            Hi, I&apos;m JJ. Surakiat Tablakorn Frontend Developer
          </h1>
          <div
            className={`flex w-fit items-center gap-1 cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300 ${textColorClass}`}
            onClick={handleContactClick}
          >
            <span className="text-md">Contact me</span>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </Block>
  );
};

export default AboutHero;
