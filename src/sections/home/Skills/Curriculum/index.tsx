import Typo from "@/components/Typo";
import * as s from "./style.css";
import { weight } from "@/styles/fonts/values/weight";

interface CurriculumProps {
  name: string;
  description: string;
  located: "first" | "last" | "middle";
}

export default function Curriculum({
  name,
  description,
  located,
}: CurriculumProps) {
  return (
    <div className={s.base}>
      <div className={s.timeline} data-located={located}>
        <div className={s.circle} data-located={located} />
        <div className={s.line} data-located={located} />
      </div>
      <div className={s.contentContainer}>
        <Typo as="h3" size={22} weight={weight.medium} color="#212E38">
          {name}
        </Typo>
        <Typo
          size={16}
          weight={weight.regular}
          color="#666666"
          className={s.description}
        >
          {description}
        </Typo>
      </div>
    </div>
  );
}

Curriculum.Line = Line;

interface SkillTagProps {
  height?: number;
}

function Line({ height = 30 }: SkillTagProps) {
  return (
    <div className={s.simpleLineContainer}>
      <div className={s.line} style={{ height }} />
    </div>
  );
}
