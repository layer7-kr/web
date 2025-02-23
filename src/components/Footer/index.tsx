import { weight } from '@/styles/fonts/values/weight';
import Link from 'next/link';
import Layer7Symbol from '../Layer7Symbol';
import Typo from '../Typo';
import * as s from './style.css';

export default function Footer() {
  return (
    <footer className={s.base}>
      <div className={s.content}>
        <div className={s.contact}>
          <div className={s.logo}>
            <Layer7Symbol size={32} />
            <Typo size={20} weight={weight.bold} color={'#eee'}>
              Layer7
            </Typo>
          </div>
          <Link href={'mailto:admin@layer7.kr'} className={s.email}>
            <Typo size={14} color={'rgba(255, 255, 255, 0.8)'}>
              Email
            </Typo>
            <Typo size={14} color={'#fff'}>
              admin@layer7.kr
            </Typo>
          </Link>
        </div>
        <div className={s.divider} />
        <Typo
          size={14}
          color={'rgba(255, 255, 255, 0.5)'}
          className={s.copyRight}>
          © 2001-2025 Layer7, Hacking Club.
          <br />
          All Rights Reserved.
          <br />
        </Typo>
      </div>
      <div className={s.social}>
        <SocialButton
            label={'instagram'} 
            href={'https://www.instagram.com/sunrin_layer7'}
          />
        <div className={s.line} />
        <SocialButton
          label={'facebook'}
          href={'https://www.facebook.com/letsgolayer7'}
        />
        <div className={s.line} />
        <SocialButton
          label={'github'}
          href={'https://github.com/layer7-2025/web'}
        />
      </div>
    </footer>
  );
}

interface SocialButtonProps {
  label: string;
  href: string;
}

function SocialButton(props: SocialButtonProps) {
  const { label, href } = props;

  return (
    <Link href={href}>
      <Typo size={14} color={'rgba(255, 255, 255, 0.5)'}>
        {label}
      </Typo>
    </Link>
  );
}
