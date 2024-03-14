import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-gradient-to-tr from-sky-400 to-sky-800 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Press me
    </Button>
  );
};

export default CustomButton;