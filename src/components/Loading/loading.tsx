'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { Spinner } from '@nextui-org/react';

interface LoadingProps {
  children?: ReactNode;
}

export const Loading: React.FC<LoadingProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-950">
        <Spinner label="Loading..." color="white" />
      </div>
    );
  }

  return <>{children}</>;
};
