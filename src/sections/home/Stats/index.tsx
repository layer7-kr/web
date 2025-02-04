import Typo from "@/components/Typo";
import * as s from "./style.css";
import { weight } from "@/styles/fonts/values/weight";
import StatsItem from "./StatsItem";
import StatsDetailItem from "./StatsDetail";

export default function HomeStatsSection() {
  return (
    <section className={s.base}>
      <div className={s.statsContainer}>
        <div>
          <Typo as="h2" size={48} weight={weight.semibold} color="#212E38">
            숫자로 보는
          </Typo>
          <Typo as="h1" size={48} weight={weight.black} color="#212E38">
            Layer7
          </Typo>
        </div>
        <div className={s.statsItemContainer}>
          <StatsItem name="총 방문자 수" value={24} prefix="년" />
          <StatsItem name="총 수상" value={577} prefix="개" />
          <StatsItem name="함께 한 부원" value={281} prefix="명" />
        </div>
      </div>
      <div className={s.statsDetailContainer}>
        <StatsDetailItem title="동아리 역사" content="Layer7은 nnnn년도부터 시작된 동아리로,
24년의 역사를 가지고 있으며" />
        <StatsDetailItem title="동아리 총 수상" content="577개의 수상실적을 이루어냈으며," />
        <StatsDetailItem title="함께 한 부원" content="281명의 부원과 함께했습니다" />
      </div>
    </section>
  );
}
