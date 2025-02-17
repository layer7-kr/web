import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";

import * as s from "./style.css";
import ActivityItemList from "./ActivityItemList";
import SectionTitle from "@/components/SectionTitle";

export default function HomeActivitySection() {
  return (
    <section className={s.base}>
      <SectionTitle>동아리 활동</SectionTitle>
      <div className={s.activityList}>
        <ActivityItemList />
      </div>
    </section>
  );
}
