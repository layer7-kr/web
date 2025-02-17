'use client';

import Accordion from '@/components/Accordion';
import { JSONFAQData } from '@/types/json';
import * as s from '../style.css';

interface HomeAwardsAccordionProps {
  data: JSONFAQData[];
}

export default function HomeFAQAccordion(props: HomeAwardsAccordionProps) {
  const { data } = props;

  return (
    <div className={s.items}>
      {data.map((item, index) => (
        <Accordion key={index} title={item.question} content={item.answer} />
      ))}
    </div>
  );
}
