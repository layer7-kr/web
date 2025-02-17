import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import * as s from './style.css';

interface StatsItemProps {
  name: string;
  value: number;
  prefix?: string;
}

export default function StatsItem({ name, value, prefix }: StatsItemProps) {
  return (
    <div className={s.base}>
      <Typo
        as='h3'
        size={{
          640: 16,
          base: 20,
        }}
        weight={weight.medium}
        color={colorVars._80}>
        {name}
      </Typo>
      <Typo
        size={{
          640: 28,
          base: 38,
        }}
        weight={weight.bold}
        color={colorVars.point}>
        {value}
        {prefix}
      </Typo>
    </div>
  );
}
