import React from 'react';

type FallbackImageProps = {
  src: string;
  alt: string;
  fallbackSrc: string;
  [key: string]: any;
};

const FallbackImage: React.FC<FallbackImageProps> = ({ src, alt, fallbackSrc, ...props }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default FallbackImage;