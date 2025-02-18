'use client';

import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as s from './style.css';

interface StatsItemProps {
  name: string;
  value: number;
  prefix?: string;
}

export default function StatsItem({ name, value, prefix }: StatsItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.07, once: true });

  const motionValue = useMotionValue(value - 50 > 0 ? value - 50 : 0);
  const animatedValue = useTransform(motionValue, (latest) =>
    Math.round(latest),
  );

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 1.5, ease: 'easeOut' });
    }
  }, [isInView, motionValue, value]);

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
        <motion.span
          style={{
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
            display: 'inline-block',
          }}>
          {animatedValue}
        </motion.span>
        {prefix}
      </Typo>
    </div>
  );
}
