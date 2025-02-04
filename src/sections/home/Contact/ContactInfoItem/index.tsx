import Typo from "@/components/Typo";
import * as s from "./style.css";
import { weight } from "@/styles/fonts/values/weight";
import { JSONContactInfoData } from "@/types/json";

export default function ContactInfoItem({
  name,
  ...rest
}: JSONContactInfoData) {
  return (
    <div className={s.base}>
      <Typo as="h4" size={18} weight={weight.semibold}>{name}</Typo>
      <div>
        {Object.entries(rest).map(([key, value]) => (
          <Typo key={key} size={16} weight={weight.regular} color="#636363">
            {value}
          </Typo>
        ))}
      </div>
    </div>
  );
}
