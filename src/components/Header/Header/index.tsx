'use client';

import { weight } from '@/styles/fonts/values/weight';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Icon from '../Icon';
import { IconName } from '../Icon/icon-set';
import Layer7Symbol from '../Layer7Symbol';
import Typo from '../Typo';
import HeaderItem from './HeaderItem';
import * as s from './style.css';
import MobileHeaderModal from './MobileHeaderModal';
import { useState } from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  const { className } = props;

  const { theme, setTheme } = useTheme();

  const router = useRouter();

  const [mobileModalVisible, setMobileModalVisible] = useState(false);

  const handleClickLogo = () => {
    router.push('/');
  };

  const handleToggleColorScheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={cn(s.base, className)}>
      <div className={s.container}>
        <Layer7Symbol size={30} onClick={handleClickLogo} />
        <div className={s.leading}>
          <div className={s.items}>
            <HeaderItem label={'메인'} href={'#main'} />
            <HeaderItem label={'소개'} href={'#about'} />
            <HeaderItem label={'커리큘럼'} href={'#curriculum'} />
            <HeaderItem label={'활동'} href={'#activity'} />
            <HeaderItem label={'실적'} href={'#award'} />
            <HeaderItem label={'FAQ'} href={'#faq'} />
          </div>
          <div className={s.line} />
          <button className={s.colorScheme} onClick={handleToggleColorScheme}>
            <Typo size={16} weight={weight.regular} color={'#fff'}>
              {theme === 'light' ? '라이트' : '다크'}
            </Typo>
            <Icon
              name={IconName.KEYBOARD_ARROW_DOWN}
              size={24}
              color={'rgba(255, 255, 255, 0.67)'}
            />
          </button>
        </div>
        <Icon
          className={s.menuIcon}
          name={IconName.MENU}
          size={30}
          color={'#fff'}
          onClick={() => setMobileModalVisible(true)}
        />
      </div>
      {mobileModalVisible && (
        <MobileHeaderModal onClose={() => setMobileModalVisible(false)} />
      )}
    </header>
  );
}
