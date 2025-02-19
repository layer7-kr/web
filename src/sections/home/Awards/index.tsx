import SectionTitle from '@/components/SectionTitle';
import { getJSON } from '@/lib/json';
import { JSONAwardsData } from '@/types/json';
import HomeAwardsAccordion from './AwardsAccordion';
import * as s from './style.css';

export default async function HomeAwardsSection() {
  const data = await getJSON<JSONAwardsData[]>('_awards.json');

  return (
    <section className={s.base} id={'award'} style={{ paddingTop: 80 }}>
      <SectionTitle>대회 수상실적</SectionTitle>
      <HomeAwardsAccordion data={data} />
    </section>
  );
}
