import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BlockProps } from '@/types';

export const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <div
      className={twMerge(
        'col-span-12 rounded-lg border border-zinc-700 bg-zinc-800 p-6',
        className
      )}
      {...rest}
    />
  );
};
