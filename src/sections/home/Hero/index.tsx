import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/icon-set';
import Layer7Symbol from '@/components/Layer7Symbol';
import Typo from '@/components/Typo';
import { lexendMega } from '@/styles/fonts/index.css';
import { weight } from '@/styles/fonts/values/weight';
import * as s from './style.css';

export default function HomeHeroSection() {
  return (
    <section className={s.base}>
      <div className={s.container}>
        <div className={s.branding}>
          <Layer7Symbol size={136} />
          <div className={s.info}>
            <div className={s.title}>
              <Typo
                family={lexendMega}
                size={76}
                weight={weight.black}
                className={s.titleLine}
                color={'#047ee9'}>
                we hack the
              </Typo>
              <Typo
                family={lexendMega}
                size={76}
                weight={weight.black}
                className={s.titleLine}
                color={'#fff'}>
                universe
              </Typo>
            </div>
            <Typo size={18} weight={weight.extrabold} color={'#fff'}>
              선린인터넷고등학교 해킹 전문 동아리 Layer7
            </Typo>
          </div>
        </div>
        <button className={s.apply}>
          <Typo size={18} weight={weight.bold} color={'#fff'}>
            동아리 지원하기
          </Typo>
          <Icon name={IconName.ARROW_FORWARD} size={20} color={'#fff'} />
        </button>
      </div>
    </section>
  );
}
