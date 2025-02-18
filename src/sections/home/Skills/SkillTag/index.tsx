'use client';

import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { motion } from 'framer-motion';
import * as s from './style.css';

interface SkillTagProps {
  name: string;
  order: number;
}

export default function SkillTag(props: SkillTagProps) {
  const { order, name } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * order }}
      viewport={{ once: true }}>
      <button className={s.base}>
        <Typo size={16} weight={weight.regular} color={colorVars.lowToneText}>
          {name}
        </Typo>
      </button>
    </motion.div>
  );
}
