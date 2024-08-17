import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

const TOGGLE_CLASSES =
  'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10';

const ToggleSwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <SliderToggle selected={theme} setSelected={setTheme} />
    </>
  );
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: 'light' | 'dark';
  setSelected: (theme: 'light' | 'dark') => void;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'light' ? 'text-white' : 'text-slate-300'
        }`}
        onClick={() => setSelected('light')}
        aria-label="Switch to light theme"
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'dark' ? 'text-white' : 'text-slate-800'
        }`}
        onClick={() => setSelected('dark')}
        aria-label="Switch to dark theme"
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === 'dark' ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#4EDFE7] to-[#00597B]"
        />
      </div>
    </div>
  );
};

export default ToggleSwitchTheme;
