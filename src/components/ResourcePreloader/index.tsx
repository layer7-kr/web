'use client';

import { useEffect } from 'react';

export default function ResourcePreloader(): null {
  useEffect(() => {
    // Preload critical assets
    const criticalAssets = [
      '/assets/background.webp',
    ];

    // Preload images
    criticalAssets.forEach(asset => {
      if (asset.match(/\.(png|jpg|jpeg|webp|gif)$/i)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = asset;
        document.head.appendChild(link);
      }
    });

    // Preload fonts that are likely to be used immediately
    const fontAssets = [
      '/assets/fonts/Pretendard/Pretendard-Regular.woff2',
      '/assets/fonts/Pretendard/Pretendard-Medium.woff2',
      '/assets/fonts/Pretendard/Pretendard-Bold.woff2',
    ];

    fontAssets.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = font;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
