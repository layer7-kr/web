import Typo from "@/components/Typo";
import { getJSON } from "@/lib/json";
import { weight } from "@/styles/fonts/values/weight";
import { JSONAwardsData } from "@/types/json";
import HomeAwardsAccordion from "./AwardsAccordion";
import * as s from "./style.css";
import SectionTitle from "@/components/SectionTitle";

export default async function HomeAwardsSection() {
  const data = await getJSON<JSONAwardsData[]>("_awards.json");

  return (
    <section className={s.base}>
      <SectionTitle>대회 수상실적</SectionTitle>
      <HomeAwardsAccordion data={data} />
    </section>
  );
}
