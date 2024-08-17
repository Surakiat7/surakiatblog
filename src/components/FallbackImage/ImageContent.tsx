import React from 'react';
import Image from 'next/image';
import { FallbackImageProps } from '@/types';

const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  fallbackSrc,
  ...props
}) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
  };

  return <Image src={src} alt={alt} onError={handleError} {...props} />;
};

export default FallbackImage;
