'use client';

import { useEffect, useState, useCallback } from 'react';
import * as s from './style.css';

interface LoadingSpinnerProps {
  onLoadComplete: () => void;
}

export default function LoadingSpinner({ onLoadComplete }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0);

  const handleLoadComplete = useCallback(() => {
    setProgress(100);
    
    // Add a smooth transition delay
    setTimeout(() => {
      onLoadComplete();
    }, 800);
  }, [onLoadComplete]);

  const checkAllResourcesLoaded = useCallback(() => {
    return new Promise<void>((resolve) => {
      const promises: Promise<void>[] = [];

      // Check only critical/above-the-fold img elements
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isAboveFold = (el: Element) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        return rect.top < viewportHeight * 1.2;
      };

      const images = document.querySelectorAll('img');
      const essentialImages = Array.from(images).filter(img => {
        const fetchPriority = img.getAttribute('fetchpriority');
        const loadingAttr = img.getAttribute('loading');
        return fetchPriority === 'high' || loadingAttr === 'eager' || isAboveFold(img);
      });

      essentialImages.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
          return;
        }
        
        promises.push(new Promise<void>((imgResolve) => {
          const timeout = setTimeout(() => imgResolve(), 8000); // Longer timeout for critical images
          
          const handleLoad = () => {
            clearTimeout(timeout);
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
            imgResolve();
          };
          
          const handleError = () => {
            clearTimeout(timeout);
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
            console.warn('Image failed to load:', img.src);
            imgResolve();
          };
          
          img.addEventListener('load', handleLoad);
          img.addEventListener('error', handleError);
        }));
      });

      // Do not duplicate hero background image fetch; rely on Next/Image priority

      // Skip scanning CSS background images to avoid blocking on decorative assets

      // Wait for all promises or resolve after a reasonable time
      Promise.all(promises).then(() => {
        console.log('All resources loaded');
        resolve();
      });
      
      // Fallback timeout
      setTimeout(() => {
        console.log('Resource loading timeout, proceeding anyway');
        resolve();
      }, 15000);
    });
  }, []);

  useEffect(() => {
    const progressInterval: NodeJS.Timeout = setInterval(() => {
      setProgress(prev => {
        if (prev >= 85) return prev; // Cap at 85% until all resources load
        return Math.min(prev + Math.random() * 10 + 3, 85);
      });
    }, 400);

    const finalizeLoading = async () => {
      setProgress(90);
      
      try {
        // Wait a moment for DOM to be fully ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Wait for all resources to load
        await checkAllResourcesLoaded();
        
        setProgress(100);
        handleLoadComplete();
      } catch (error) {
        console.warn('Some resources failed to load, proceeding anyway:', error);
        handleLoadComplete();
      }
    };

    // Check if page is already fully loaded
    if (document.readyState === 'complete') {
      // Even if complete, check for resources
      setTimeout(finalizeLoading, 100);
      return () => {
        clearInterval(progressInterval);
      };
    }

    // Listen for different loading events
    const handleDOMContentLoaded = () => {
      setProgress(prev => Math.max(prev, 50));
    };

    const handleLoad = () => {
      setProgress(75);
      // Wait longer for Next.js images to render
      setTimeout(finalizeLoading, 1000);
    };

    // Set up more frequent checks for dynamic content and images
    const resourceCheckInterval = setInterval(() => {
      if (document.readyState === 'complete') {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const isAboveFold = (el: Element) => {
          const rect = (el as HTMLElement).getBoundingClientRect();
          return rect.top < viewportHeight * 1.2;
        };

        const images = document.querySelectorAll('img');
        const essentialImages = Array.from(images).filter(img => {
          const fetchPriority = img.getAttribute('fetchpriority');
          const loadingAttr = img.getAttribute('loading');
          return fetchPriority === 'high' || loadingAttr === 'eager' || isAboveFold(img);
        });

        const allEssentialLoaded = essentialImages.every(img => img.complete && img.naturalWidth > 0);
        
        if (allEssentialLoaded && essentialImages.length > 0) {
          clearInterval(resourceCheckInterval);
          finalizeLoading();
        }
      }
    }, 500); // Check every 500ms

    // Set up mutation observer to watch for new images being added
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              const newImages = element.querySelectorAll('img');
              if (newImages.length > 0) {
                console.log(`New images detected: ${newImages.length}`);
                // Reset the check when new images are found
              }
            }
          });
        }
      });
    });

    // Start observing
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Event listeners
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }
    
    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      clearInterval(progressInterval);
      clearInterval(resourceCheckInterval);
      mutationObserver.disconnect();
    };
  }, [handleLoadComplete, checkAllResourcesLoaded]);

  return (
    <div 
      className={s.container}
      role="status"
      aria-live="polite"
      aria-label="Loading Layer7 website"
    >
      <div className={s.content}>
        <div className={s.spinner} aria-hidden="true">
          <div className={s.spinnerRing}></div>
          <div className={s.spinnerRing}></div>
          <div className={s.spinnerRing}></div>
        </div>
        <div className={s.progressContainer} aria-hidden="true">
          <div 
            className={s.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
