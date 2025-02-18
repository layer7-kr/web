'use client';

import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { motion } from 'framer-motion';
import * as s from './style.css';

interface StatsDetailItemProps {
  title: string;
  order: number;
  content: string;
}

export default function StatsDetailItem(props: StatsDetailItemProps) {
  const { title, order, content } = props;

  return (
    <motion.div
      className={s.base}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: order * 0.175 }}>
      <Typo as='h3' size={24} weight={weight.semibold} color={colorVars.normal}>
        {title}
      </Typo>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: order * 0.175 + 0.3 }}>
        <Typo
          size={16}
          weight={weight.medium}
          color={colorVars._55}
          className={s.content}>
          {content}
        </Typo>
      </motion.div>
    </motion.div>
  );
}
