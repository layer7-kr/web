import Typo from "@/components/Typo";
import { getJSON } from "@/lib/json";
import { weight } from "@/styles/fonts/values/weight";
import { JSONAwardsData } from "@/types/json";
import HomeAwardsAccordion from "./AwardsAccordion";
import * as s from "./style.css";

export default async function HomeAwardsSection() {
  const data = await getJSON<JSONAwardsData[]>("_awards.json");

  const TitleSize = {
    1032: 24,
    default: 28,
  };

  return (
    <section className={s.base}>
      <Typo
        as={"h2"}
        weight={weight.semibold}
        size={TitleSize}
      >
        대회 수상실적
      </Typo>
      <HomeAwardsAccordion data={data} />
    </section>
  );
}
