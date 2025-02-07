import { getJSON } from "@/lib/json";
import { JSONCurriculumData } from "@/types/json";
import Curriculum from "../Curriculum";

import * as s from "./style.css";

export default async function CurriculumItemList() {
  const curriculums = await getJSON<JSONCurriculumData[]>("_curriculum.json");

  const leftColumnCount = Math.ceil(curriculums.length / 2);
  const leftColumn = curriculums.slice(0, leftColumnCount);
  const rightColumn = curriculums.slice(leftColumnCount);

  const renderCurriculumItems = (
    items: JSONCurriculumData[],
    isLeftColumn: boolean,
    position: "left" | "right"
  ) => {
    return items.map((curriculum: JSONCurriculumData, index: number) => {
      const isFirst = index === 0;
      const isLast = isLeftColumn
        ? index === leftColumn.length - 1 && rightColumn.length === 0
        : index === rightColumn.length - 1;

      let located: "first" | "middle" | "last" = "middle";
      if (isFirst) located = "first";
      if (isLast) located = "last";

      const currentIndex = index + 1;

      return (
        <article key={index}>
          {index !== 0 && <Curriculum.Line />}
          <Curriculum
            name={curriculum.name}
            index={position === 'right' ? currentIndex + leftColumnCount : currentIndex}
            description={curriculum.description}
            located={located}
          />
        </article>
      );
    });
  };

  return (
    <div className={s.base}>
      <div className={s.column}>{renderCurriculumItems(leftColumn, true, 'left')}</div>
      <div className={s.column}>
        {renderCurriculumItems(rightColumn, false, 'right')}
      </div>
    </div>
  );
}
