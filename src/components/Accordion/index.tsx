'use client';

import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { IconName } from '../Icon/icon-set';
import Typo from '../Typo';
import * as s from './style.css';

interface AccordionProps {
  title: string;
  isOpened?: boolean;
  className?: string;
  content: string;
}

export default function Accordion(props: AccordionProps) {
  const { title, isOpened = false, className, content } = props;

  const titleRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(isOpened);
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
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      style={{
        width: '100%',
      }}>
      <div className={cn(s.base, isOpen && s.active, className)}>
        <motion.div
          style={{
            overflow: 'hidden',
          }}
          initial={{ height: isOpen ? 'auto' : titleHeight }}
          animate={{ height: isOpen ? 'auto' : titleHeight }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}>
          <div className={s.label} ref={titleRef}>
            <Typo
              size={18}
              weight={weight.medium}
              color={colorVars.normal}
              className={s.title}>
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
            }}
            transition={{
              duration: 0.3,
              delay: isOpen ? 0.05 : 0,
              ease: 'easeInOut',
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <Typo
              as={'span'}
              size={15}
              color={colorVars._55}
              className={s.content}>
              {content.split('\n').map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index < content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </Typo>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
