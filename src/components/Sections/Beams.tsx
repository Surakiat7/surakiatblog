import React from 'react';
import { motion } from 'framer-motion';
import { BeamType } from '@/types';
import useWindowSize from '@/hooks/UseWindowSize';

const GRID_BOX_SIZE = 64;
const BEAM_WIDTH_OFFSET = 1;

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

const Beams: React.FC = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
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

export default Beams;
