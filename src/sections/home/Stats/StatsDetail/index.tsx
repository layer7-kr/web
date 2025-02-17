import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import * as s from './style.css';

interface StatsDetailItemProps {
  title: string;
  content: string;
}

export default function StatsDetailItem({
  title,
  content,
}: StatsDetailItemProps) {
  return (
    <div className={s.base}>
      <Typo as='h3' size={24} weight={weight.semibold} color={colorVars.normal}>
        {title}
      </Typo>
      <Typo
        size={16}
        weight={weight.medium}
        color={colorVars._55}
        className={s.content}>
        {content}
      </Typo>
    </div>
  );
}
