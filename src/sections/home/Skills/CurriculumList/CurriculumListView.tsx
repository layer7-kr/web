"use client";

import { JSONCurriculumData } from "@/types/json";
import Curriculum from "../Curriculum";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import * as s from "./style.css";

interface Props {
  curriculums: JSONCurriculumData[];
}

export default function CurriculumListView({ curriculums }: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const leftColumnCount = Math.ceil(curriculums.length / 2);
  const leftColumn = curriculums.slice(0, leftColumnCount);
  const rightColumn = curriculums.slice(leftColumnCount);

  const renderCurriculumItems = (
    items: JSONCurriculumData[],
    position: "left" | "right"
  ) => {
    return items.map((curriculum: JSONCurriculumData, index: number) => {
      const isFirst = index === 0;
      const isLeftColumn = position === "left";
      const isLast = isLeftColumn
        ? index === leftColumn.length - 1 && rightColumn.length === 0
        : index === rightColumn.length - 1;
      const isFirstOfRightColumn =
        position === "right" && index === 0;

      let located: "first" | "middle" | "last" = "middle";
      if (isFirst) located = "first";
      if (isLast) located = "last";

      const currentIndex = isMobile
        ? index + (isLeftColumn ? 1 : leftColumnCount + 1)
        : position === "right"
        ? index + leftColumnCount + 1
        : index + 1;

      return (
        <article className={s.item} key={index}>
          {index !== 0 && <Curriculum.Line />}
          {(isFirstOfRightColumn && isMobile) && <Curriculum.Line />}
          <Curriculum
            name={curriculum.name}
            index={currentIndex}
            description={curriculum.description}
            located={isMobile ? isFirstOfRightColumn ? "middle" : located : located}
          />
        </article>
      );
    });
  };

  return (
    <div className={s.base}>
      <div className={s.column}>
        {renderCurriculumItems(leftColumn, "left")}
      </div>
      <div className={s.column}>
        {renderCurriculumItems(rightColumn, "right")}
      </div>
    </div>
  );
}
