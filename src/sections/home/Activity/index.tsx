import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";

import * as s from "./style.css";
import ActivityItemList from "./ActivityItemList";

export default function HomeActivitySection() {
  return (
    <section className={s.base}>
      <Typo as="h2" size={32} weight={weight.semibold}>
        동아리 활동
      </Typo>
      <div className={s.activityList}>
        <ActivityItemList />
      </div>
    </section>
  );
}
