import React from 'react';
import { motion } from 'framer-motion';

const IntroText: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => (
  <motion.p
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.45, ease: 'easeOut' }}
    className={`pb-8 sm:pb-4 text-center leading-relaxed sm:text-base text-lg md:leading-relaxed ${
      theme === 'dark' ? 'text-white' : 'text-slate-600'
    }`}
  >
    I&rsquo;m a Frontend Developer based in Bangkok, Thailand, specializing in
    crafting exceptional web applications and everything in between. With
    hands-on experience in Next.js, React, and JavaScript/TypeScript, I excel in
    creating responsive web applications and translating UI/UX designs into
    functional, user-friendly interfaces. My expertise includes collaborative
    problem-solving and finding effective solutions while working directly with
    clients and system users. I&rsquo;m passionate about delivering
    high-quality, scalable solutions and continuously improving through direct
    communication and feedback.
  </motion.p>
);

export default IntroText;
