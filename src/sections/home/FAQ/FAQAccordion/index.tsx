'use client';

import Accordion from '@/components/Accordion';
import Typo from '@/components/Typo';
import { colorVars } from '@/styles/theme.css';
import { JSONFAQData } from '@/types/json';
import React from 'react';
import * as s from '../style.css';

interface HomeAwardsAccordionProps {
  data: JSONFAQData[];
}

export default function HomeFAQAccordion(props: HomeAwardsAccordionProps) {
  const { data } = props;

  return (
    <div className={s.items}>
      {data.map((item, index) => (
        <Accordion key={index} title={item.question} className={s.awardItem}>
          <Typo as={'span'} size={14} color={colorVars._55}>
            {item.answer.split('\n').map((answer, index) => (
              <React.Fragment key={index}>
                {answer}
                {index < item.answer.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </Typo>
        </Accordion>
      ))}
    </div>
  );
}
