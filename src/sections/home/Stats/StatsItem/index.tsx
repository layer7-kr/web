'use client';

import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as s from './style.css';

interface StatsItemProps {
  name: string;
  value: number;
  prefix?: string;
}

export default function StatsItem({ name, value, prefix }: StatsItemProps) {
  const ref = useRef(null);
  const [shownValue, setShownValue] = useState(
    value - 500 > 0 ? value - 500 : 0,
  );

  const isInView = useInView(ref, {
    amount: 0.07,
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setShownValue((prevValue) => {
          if (prevValue >= value) {
            clearInterval(interval); // 목표값에 도달하면 중지
            return value;
          }

          return prevValue + 1;
        });
      }, 30);
    }
  }, [isInView, shownValue, value]);

  return (
    <div className={s.base} ref={ref}>
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
        as={'span'}
        weight={weight.bold}
        color={colorVars.point}>
        {shownValue}
        {prefix}
      </Typo>
    </div>
  );
}
