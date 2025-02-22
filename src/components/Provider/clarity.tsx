'use client';

import Clarity from '@microsoft/clarity';
import { useEffect, useState } from 'react';

const PROJECT_ID = 'qdk1wb0ni1' as const;

export default function ClarityProvider() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    Clarity.init(PROJECT_ID);
    setIsInitialized(true);
  }, [isInitialized]);

  return null;
}
