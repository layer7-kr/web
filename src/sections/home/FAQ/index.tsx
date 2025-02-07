import Typo from '@/components/Typo';
import { getJSON } from '@/lib/json';
import { weight } from '@/styles/fonts/values/weight';
import { JSONFAQData } from '@/types/json';
import HomeFAQAccordion from './FAQAccordion';
import * as s from './style.css';

export default async function HomeFAQSection() {
  const data = await getJSON<JSONFAQData[]>('_faq.json');

  return (
    <section className={s.base}>
      <Typo as={'h2'} weight={weight.semibold} size={{
        1032: 24,
        default: 28
        }}>
        자주 묻는 질문
      </Typo>
      <HomeFAQAccordion data={data} />
    </section>
  );
}
