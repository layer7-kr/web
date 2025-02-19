import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/icon-set';
import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { useTheme } from 'next-themes';
import HeaderItem from '../HeaderItem';
import * as s from '../style.css';

interface MobileHeaderModalProps {
  onClose: () => void;
}

export default function MobileHeaderModal({ onClose }: MobileHeaderModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  const handleToggleColorScheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return createPortal(
    <section
      className={`${s.mobileHeaderModal} ${
        isClosing ? s.mobileHeaderModalClosing : ''
      }`}>
      <div className={s.mobileHeaderModalHeader}>
        <Icon
          name={IconName.CLOSE}
          size={40}
          color={'#f1f1f1'}
          className={s.clickable}
          onClick={handleClose}
        />
      </div>
      <HeaderItem
        label={'메인'}
        href={'#main'}
        size={30}
        onClick={handleClose}
      />
      <HeaderItem
        label={'소개'}
        href={'#about'}
        size={30}
        onClick={handleClose}
      />
      <HeaderItem
        label={'커리큘럼'}
        href={'#curriculum'}
        size={30}
        onClick={handleClose}
      />
      <HeaderItem
        label={'활동'}
        href={'#activity'}
        size={30}
        onClick={handleClose}
      />
      <HeaderItem
        label={'실적'}
        href={'#award'}
        size={30}
        onClick={handleClose}
      />
      <HeaderItem label={'FAQ'} href={'#faq'} size={30} onClick={handleClose} />
      <button
        className={s.colorScheme}
        onClick={() => {
          handleToggleColorScheme();
          handleClose();
        }}>
        <Typo size={22} weight={weight.regular} color={'#fff'}>
          {theme === 'light' ? '라이트' : '다크'}
        </Typo>
      </button>
    </section>,
    document.body,
  );
}
