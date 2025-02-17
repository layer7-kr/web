import Typo from "@/components/Typo";
import { getJSON } from "@/lib/json";
import { weight } from "@/styles/fonts/values/weight";
import { JSONFAQData } from "@/types/json";
import HomeFAQAccordion from "./FAQAccordion";
import * as s from "./style.css";
import SectionTitle from "@/components/SectionTitle";

export default async function HomeFAQSection() {
  const data = await getJSON<JSONFAQData[]>("_faq.json");

  return (
    <section className={s.base}>
      <div className={s.titleContainer}>
        <SectionTitle>자주 묻는 질문</SectionTitle>
        <Typo size={{ 1032: 16, default: 18 }}>
          Layer7에 궁금한 점이 있으신가요?
        </Typo>
      </div>
      <HomeFAQAccordion data={data} />
    </section>
  );
}
