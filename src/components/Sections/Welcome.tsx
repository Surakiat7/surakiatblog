import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { IoIosArrowDown } from 'react-icons/io';
import { useTheme } from '@/contexts/ThemeContext';
import _ from 'lodash';
import useWindowSize from '@/hooks/UseWindowSize';
import { BeamType, SplashButtonProps, DarkGridHeroElementProps } from '@/types';
import { useThemeColors } from '@/@core/utils/themeColorClass';

export const DarkGridHero: React.FC<DarkGridHeroElementProps> = ({
  scrollToAbout,
}) => {
  const { strokeColor, bgColorClass } = useThemeColors();

  return (
    <section
      className={`relative overflow-hidden ${bgColorClass}`}
    >
      <Content scrollToAbout={scrollToAbout} />
      <Beams />
      <GradientGrid strokeColor={strokeColor} />
    </section>
  );
};

const getStyles = _.memoize((theme) => ({
  TitleLinearColor:
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text'
      : 'bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text',
  contentTextColor: theme === 'dark' ? 'text-white' : 'text-slate-600',
  chipBorderAndBg:
    theme === 'dark'
      ? 'border-zinc-700 bg-zinc-900/20 text-zinc-50'
      : 'border-slate-200 bg-slate-100 text-zinc-950',
  chipGradient:
    theme === 'dark'
      ? 'bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0'
      : 'bg-gradient-to-r from-slate-500/0 via-slate-300 to-slate-500/0',
}));

const Content: React.FC<{ scrollToAbout: () => void }> = ({
  scrollToAbout,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 sm:py-6 py-32">
      <div
        className={`relative animate-fadeInUp1 opacity-0 ${styles.contentTextColor}`}
      >
        <GlowingChip>Welcome, I&apos;m JJ 😊</GlowingChip>
      </div>
      <h1
        className={`animate-fadeInUp2 opacity-0 pb-2 text-center font-bold leading-tight sm:text-2xl text-5xl md:text-7xl lg:leading-tight ${styles.TitleLinearColor}`}
      >
        Surakiat Tablakorn
      </h1>
      <p
        className={`animate-fadeInUp3 opacity-0 pb-8 sm:pb-4 text-center leading-relaxed sm:text-base text-lg md:leading-relaxed ${styles.contentTextColor}`}
      >
        I&rsquo;m a Frontend Developer based in Bangkok, Thailand, specializing
        in crafting exceptional web applications and everything in between. With
        hands-on experience in Next.js, React, and JavaScript/TypeScript, I
        excel in creating responsive web applications and translating UI/UX
        designs into functional, user-friendly interfaces. My expertise includes
        collaborative problem-solving and finding effective solutions while
        working directly with clients and system users. I&rsquo;m passionate
        about delivering high-quality, scalable solutions and continuously
        improving through direct communication and feedback.
      </p>
      <div className="animate-fadeInUp4 opacity-0 flex flex-col items-center gap-6 sm:flex-row">
        <SplashButton
          scrollToAbout={scrollToAbout}
          className="flex flex-col px-12 items-center"
        >
          Scroll Down
          <IoIosArrowDown />
        </SplashButton>
      </div>
    </div>
  );
};

const GlowingChip: React.FC<{ children: string }> = ({ children }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <span
      className={`relative z-10 mb-4 inline-block rounded-full border ${styles.chipBorderAndBg} px-3 py-1.5 text-xs md:mb-0`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-3 right-3 h-[1px] ${styles.chipGradient}`}
      />
    </span>
  );
};

const SplashButton: React.FC<SplashButtonProps> = ({
  children,
  className,
  scrollToAbout,
  ...rest
}) => {
  return (
    <button
      onClick={scrollToAbout}
      className={twMerge(
        'rounded-full bg-gradient-to-br from-[#4EDFE7] to-[#00597B] py-2 text-zinc-50 ring-2 ring-[#4EDFE7]/50 ring-offset-2 ring-offset-zinc-50 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const Beams: React.FC = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = useMemo(
    () => [
      {
        top: GRID_BOX_SIZE * 0,
        left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
        transition: { duration: 3.5, repeatDelay: 5, delay: 2 },
      },
      {
        top: GRID_BOX_SIZE * 12,
        left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
        transition: { duration: 3.5, repeatDelay: 10, delay: 4 },
      },
      {
        top: GRID_BOX_SIZE * 3,
        left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
      },
      {
        top: GRID_BOX_SIZE * 9,
        left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
        transition: { duration: 2, repeatDelay: 7.5, delay: 3.5 },
      },
      {
        top: 0,
        left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
        transition: { duration: 3, repeatDelay: 2, delay: 1 },
      },
      {
        top: GRID_BOX_SIZE * 2,
        left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
        transition: { duration: 5, repeatDelay: 5, delay: 5 },
      },
    ],
    [numColumns]
  );

  return (
    <>
      {_.map(placements, (p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const Beam: React.FC<BeamType> = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: [0, 1, 0], y: 32 * 8 }}
      transition={{
        ease: 'easeInOut',
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1,
        ...transition,
      }}
      style={{ top, left }}
      className="absolute z-10 h-[124px] sm:h-[64px] w-[2px] bg-gradient-to-b from-[#4EDFE7]/0 to-[#4EDFE7]"
    />
  );
};

const GradientGrid: React.FC<{
  strokeColor: string;
}> = ({ strokeColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 32 32'%3e%3cg fill='none' stroke='${strokeColor}' stroke-width='.5'%3e%3cpath d='M1 16h30M1 8h30M1 24h30M1 4h30M1 12h30M1 20h30M1 28h30M5 0v32M9 0v32M13 0v32M17 0v32M21 0v32M25 0v32M29 0v32M3 0v32M7 0v32M11 0v32M15 0v32M19 0v32M23 0v32M27 0v32'/%3e%3c/g%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 bg-center [mask-image:radial-gradient(ellipse,white,transparent)]"
      />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 64;
const BEAM_WIDTH_OFFSET = 1;
