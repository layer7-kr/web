import SectionTitle from '@/components/SectionTitle';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import CurriculumItemList from './CurriculumList';
import SkillTag from './SkillTag';
import * as s from './style.css';

export default function HomeSkillsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className={s.base} style={{ paddingTop: isMobile ? 0 : 80 }}>
      <div className={s.skills}>
        <SectionTitle>Skills</SectionTitle>
        <div className={s.skillTags}>
          <SkillTag name={'C언어 프로그래밍'} order={1} />
          <SkillTag name={'웹 해킹'} order={2} />
          <SkillTag name={'프로젝트'} order={3} />
          <SkillTag name={'시스템 해킹'} order={4} />
          <SkillTag name={'리버스 엔지니어링'} order={5} />
        </div>
      </div>
      <div
        className={s.curriculum}
        id={'curriculum'}
        style={{ paddingTop: isMobile ? 80 : 0 }}>
        <SectionTitle>커리큘럼</SectionTitle>
        <div>
          <CurriculumItemList />
        </div>
      </div>
    </section>
  );
}
