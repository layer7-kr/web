'use client';

import { weight } from '@/styles/fonts/values/weight';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { IconName } from '../Icon/icon-set';
import Typo from '../Typo';
import * as s from './style.css';

interface AccordionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function Accordion(props: AccordionProps) {
  const { title, className, children } = props;

  const titleRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setTitleHeight(titleRef.current?.clientHeight ?? 0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setTitleHeight(titleRef.current?.clientHeight ?? 0);
  }, [titleRef]);

  return (
    <div
      className={cn(s.base, isOpen && s.active, className)}
      onClick={() => setIsOpen(!isOpen)}>
      <motion.div
        style={{
          overflow: 'hidden',
        }}
        initial={{ height: titleHeight }}
        animate={{ height: isOpen ? 'auto' : titleHeight }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}>
        <div className={s.label} ref={titleRef}>
          <Typo size={16} weight={weight.semibold} color={'#212E38'}>
            {title}
          </Typo>
          <motion.div
            style={{
              height: 24,
            }}
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}>
            <Icon
              name={IconName.KEYBOARD_ARROW_DOWN}
              size={24}
              color={'#1C1B1F'}
            />
          </motion.div>
        </div>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
          }}
          transition={{
            duration: 0.3,
            delay: isOpen ? 0.05 : 0,
            ease: 'easeInOut',
          }}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
