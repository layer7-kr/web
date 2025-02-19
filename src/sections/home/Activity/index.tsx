import SectionTitle from '@/components/SectionTitle';
import ActivityItemList from './ActivityItemList';
import * as s from './style.css';

export default function HomeActivitySection() {
  return (
    <section className={s.base} id={'activity'} style={{ paddingTop: 80 }}>
      <SectionTitle>동아리 활동</SectionTitle>
      <div className={s.activityList}>
        <ActivityItemList />
      </div>
    </section>
  );
}
