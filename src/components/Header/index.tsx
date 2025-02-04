'use client';

import cn from 'classnames';
import { useRouter } from 'next/navigation';
import Layer7Symbol from '../Layer7Symbol';
import HeaderItem from './HeaderItem';
import * as s from './styles.css';

interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  const { className } = props;

  const router = useRouter();

  const handleClickLogo = () => {
    router.push('/');
  };

  return (
    <header className={cn(s.base, className)}>
      <div className={s.container}>
        <Layer7Symbol size={30} onClick={handleClickLogo} />
        <div className={s.items}>
          <HeaderItem label={'메인'} href={'#'} />
          <HeaderItem label={'소개'} href={'#'} />
          <HeaderItem label={'커리큘럼'} href={'#'} />
          <HeaderItem label={'활동'} href={'#'} />
          <HeaderItem label={'실적'} href={'#'} />
          <HeaderItem label={'FAQ'} href={'#'} />
        </div>
      </div>
    </header>
  );
}
