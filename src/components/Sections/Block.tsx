import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BlockProps } from '@/types';

export const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <div
      className={twMerge(
        'col-span-12 rounded-lg border p-6',
        className
      )}
      {...rest}
    />
  );
};
