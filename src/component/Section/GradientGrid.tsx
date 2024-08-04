import React from 'react';
import { motion } from 'framer-motion';

interface GradientGridProps {
  theme: 'light' | 'dark';
  strokeColor: string;
}

const GradientGrid: React.FC<GradientGridProps> = ({ theme, strokeColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
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

export default GradientGrid;