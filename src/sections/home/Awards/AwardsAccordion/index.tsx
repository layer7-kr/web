'use client';

import Accordion from '@/components/Accordion';
import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { JSONAwardsData } from '@/types/json';
import React, { useState } from 'react';
import * as s from '../style.css';

interface HomeAwardsAccordionProps {
  data: JSONAwardsData[];
}

export default function HomeAwardsAccordion(props: HomeAwardsAccordionProps) {
  const { data } = props;

  const [showAll, setShowAll] = useState(false);

  const sortedData = [...data].sort((a, b) => b.year - a.year);

  const visibleData = showAll ? sortedData : sortedData.slice(0, 4);

  return (
    <div className={s.items}>
      <div className={s.awards}>
        {visibleData.map((item, index) => (
          <Accordion
            key={index}
            title={item.year.toString()}
            className={s.awardItem}>
            <Typo as={'span'} size={14} color={colorVars._55}>
              {item.items.map((award, index) => (
                <React.Fragment key={index}>
                  {award}
                  {index < item.items.length - 1 && <br />}
                </React.Fragment>
              ))}
            </Typo>
          </Accordion>
        ))}
      </div>
      {!showAll && (
        <button className={s.more} onClick={() => setShowAll(!showAll)}>
          <Typo size={14} weight={weight.semibold} color={colorVars._80}>
            더 보기
          </Typo>
        </button>
      )}
    </div>
  );
}
