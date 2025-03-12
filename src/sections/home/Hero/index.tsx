'use client';

import Layer7Symbol from '@/components/Layer7Symbol';
import Image from 'next/image';
// import { ApplyButton } from './shared';
import { HeroDescription, HeroTitle } from './shared';
import * as s from './style.css';

export default function HomeHeroSection() {
  return (
    <section className={s.base} id={'main'}>
      <div className={s.image}>
        <Image
          src='/assets/background.webp'
          alt='Layer7'
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>
      <div className={s.container}>
        <div className={s.branding}>
          <Layer7Symbol size={80} />
          <div className={s.info}>
            <div className={s.title}>
              <HeroTitle color={'#047ee9'}>we hack the</HeroTitle>
              <HeroTitle>universe</HeroTitle>
            </div>
            <HeroDescription>
              선린인터넷고등학교 해킹 전공 동아리 Layer7
            </HeroDescription>
          </div>
        </div>
        <div className={s.buttons}>
{/*           <ApplyButton active href='http://preview.layer7.kr/'>
            2025 시연회
          </ApplyButton>
          <ApplyButton active href='https://sunrin-security.com/'>
            지원하기
          </ApplyButton> */}
        </div>
      </div>
    </section>
  );
}
