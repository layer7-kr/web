import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import * as s from './style.css';

interface CurriculumProps {
  name: string;
  description: string;
  index: number;
  located: 'first' | 'last' | 'middle';
}

export default function Curriculum({
  name,
  description,
  index,
  located,
}: CurriculumProps) {
  return (
    <div className={s.base}>
      <div className={s.timeline} data-located={located}>
        <div className={s.circle} data-located={located} />
        <div className={s.line} data-located={located} />
      </div>
      <div className={s.contentContainer}>
        <Typo as='h3' size={18} weight={weight.medium} color={colorVars._95}>
          {index}. {name}
        </Typo>
        <Typo
          size={13}
          weight={weight.regular}
          color={colorVars._80}
          className={s.description}>
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
