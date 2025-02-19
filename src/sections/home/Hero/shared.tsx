'use client';

import Typo from '@/components/Typo';
import { lexendMega } from '@/styles/fonts/index.css';
import { weight } from '@/styles/fonts/values/weight';

import * as s from './style.css';

import cn from 'classnames';

import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/icon-set';
import Link from 'next/link';
import { PropsWithChildren, useState } from 'react';

interface HeroTitleProps {
  children: React.ReactNode;
  color?: string;
}
export const HeroTitle = ({ children, color = '#ffffff' }: HeroTitleProps) => {
  return (
    <Typo
      family={lexendMega}
      size={{
        480: 34,
        768: 52,
        default: 76,
      }}
      weight={weight.black}
      className={s.titleLine}
      letterSpacing={{
        480: '-2px',
        768: '-6px',
        default: '-10px',
      }}
      color={color}>
      {children}
    </Typo>
  );
};

export const HeroDescription = ({ children }: PropsWithChildren) => {
  return (
    <Typo
      size={{
        480: 15,
        default: 18,
      }}
      weight={weight.semibold}
      color={'#ffffff'}>
      {children}
    </Typo>
  );
};

interface ApplyButtonProps {
  active?: boolean;
  href?: string;
  children: React.ReactNode;
}

export const ApplyButton = ({
  active = false,
  href = '',
  children,
}: ApplyButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {active && (
        <Link
          className={s.apply}
          href={href}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}>
          <Typo
            size={{
              768: 15,
              default: 18,
            }}
            weight={weight.semibold}
            color={'#ffffff'}>
            {children}
          </Typo>
          <Icon
            name={IconName.ARROW_FORWARD}
            size={18}
            color={'#ffffff'}
            className={cn(s.arrowButton, isHover && s.active)}
          />
        </Link>
      )}
    </>
  );
};
