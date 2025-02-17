import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { JSONContactInfoData } from '@/types/json';
import * as s from './style.css';

export default function ContactInfoItem({
  name,
  ...rest
}: JSONContactInfoData) {
  return (
    <div className={s.base}>
      <Typo as='h4' size={18} weight={weight.semibold} color={colorVars._95}>
        {name}
      </Typo>
      <div>
        {Object.entries(rest).map(([key, value]) => (
          <Typo
            key={key}
            size={16}
            weight={weight.regular}
            color={colorVars._80}>
            {value}
          </Typo>
        ))}
      </div>
    </div>
  );
}
