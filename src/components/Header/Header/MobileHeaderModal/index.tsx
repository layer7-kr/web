import { useState } from 'react';
import { createPortal } from 'react-dom';

import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/icon-set';
import HeaderItem from '../HeaderItem';
import * as s from '../style.css';

interface MobileHeaderModalProps {
  onClose: () => void;
}

export default function MobileHeaderModal({ onClose }: MobileHeaderModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
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
    </section>,
    document.body,
  );
}
