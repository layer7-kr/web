'use client';

import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { useEffect, useState } from 'react';
import * as s from './style.css';

interface StatsItemProps {
  name: string;
  value: number;
  prefix?: string;
}

export default function StatsItem({ name, value, prefix }: StatsItemProps) {
  const [shownValue, setShownValue] = useState(value - 50 > 0 ? value - 50 : 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShownValue((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }

        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className={s.base}>
      <Typo
        as='h3'
        size={{
          640: 16,
          base: 20,
        }}
        weight={weight.medium}
        color={colorVars._80}>
        {name}
      </Typo>
      <Typo
        size={{
          640: 28,
          base: 38,
        }}
        weight={weight.bold}
        color={colorVars.point}>
        {shownValue}
        {prefix}
      </Typo>
    </div>
  );
}
