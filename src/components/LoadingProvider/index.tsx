'use client';

import { useEffect, useState, useCallback } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

interface LoadingProviderProps {
  children: React.ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Mark as initialized once the component mounts
    setIsInitialized(true);

    // Set a maximum loading time (fallback for slow connections or failed resources)
    const maxLoadingTime = setTimeout(() => {
      console.warn('Loading timeout reached, showing content anyway');
      setIsLoading(false);
    }, 20000); // 20 seconds max to account for image loading

    return () => {
      clearTimeout(maxLoadingTime);
    };
  }, []);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Don't show anything until the component is initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <>
      {isLoading && (
        <LoadingSpinner onLoadComplete={handleLoadComplete} />
      )}
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: 'opacity 0.5s ease-in-out',
          minHeight: '100vh'
        }}
        aria-hidden={isLoading}
      >
        {children}
      </div>
    </>
  );
}
