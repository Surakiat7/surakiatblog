import React, { useRef, useState, useEffect } from 'react';
import { InputSpotlightBorderProps } from '@/types';
import { useThemeColors } from '@/@core/utils/themeColorClass';

const InputSpotlightBorder: React.FC<InputSpotlightBorderProps> = ({
  title,
  value,
  onChange,
}) => {
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const spotlightRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState<number>(0);
  const { bgInputFieldsColorClass } = useThemeColors();

  const handleMouseMove = (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!ref.current || isFocused) return;

    const div = ref.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const isTextarea = title === 'Message';

  useEffect(() => {
    if (ref.current && isTextarea) {
      const height = ref.current.clientHeight;
      if (spotlightRef.current) {
        spotlightRef.current.style.height = `${height}px`;
      }
    }
  }, [title, value, isTextarea]);

  return (
    <div className="relative w-full">
      {isTextarea ? (
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          value={value}
          onChange={onChange}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoComplete="off"
          placeholder={title}
          rows={4}
          style={{ resize: 'none' }}
          className={`${bgInputFieldsColorClass} w-full cursor-default rounded-xl border p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[#4EDFE7] focus:outline-none`}
        />
      ) : (
        <input
          ref={ref as React.RefObject<HTMLInputElement>}
          value={value}
          onChange={onChange}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoComplete="off"
          placeholder={title}
          className={`${bgInputFieldsColorClass} h-12 w-full cursor-default rounded-xl border p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[#4EDFE7] focus:outline-none`}
        />
      )}
      <input
        ref={spotlightRef}
        disabled
        style={{
          border: '1px solid rgb(78, 223, 231)',
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
        className="h-full border-[rgb(78, 223, 231)] pointer-events-none absolute left-0 top-0 z-10 w-full cursor-default rounded-xl border bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
      />
    </div>
  );
};

export default InputSpotlightBorder;