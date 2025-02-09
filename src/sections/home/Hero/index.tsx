import Layer7Symbol from '@/components/Layer7Symbol';
import * as s from './style.css';
import { ApplyButton, HeroDescription, HeroTitle } from './shared';

export default function HomeHeroSection() {
  return (
    <section className={s.base}>
      <div className={s.container}>
        <div className={s.branding}>
          <Layer7Symbol size={80} />
          <div className={s.info}>
            <div className={s.title}>
              <HeroTitle color={'#047ee9'}>we hack the</HeroTitle>
              <HeroTitle>universe</HeroTitle>
            </div>
            <HeroDescription>
              선린인터넷고등학교 해킹 전문 동아리 Layer7
            </HeroDescription>
          </div>
        </div>
        <ApplyButton>지원하기</ApplyButton>
      </div>
    </section>
  );
}
