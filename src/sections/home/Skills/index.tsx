import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";
import * as s from "./style.css";
import Curriculum from "./Curriculum";
import CurriculumItemList from "./CurriculumList";

export default function HomeSkillsSection() {
  return (
    <section className={s.base}>
      <div className={s.skills}>
        <Typo
          as="h2"
          size={32}
          weight={weight.bold}
          className={s.title}
        >
          Skills
        </Typo>
        <div className={s.skillTags}>
          <SkillTag name={"C언어 프로그래밍"} />
          <SkillTag name={"웹 해킹"} />
          <SkillTag name={"프로젝트"} />
          <SkillTag name={"시스템 해킹"} />
          <SkillTag name={"리버스 엔지니어링"} />
        </div>
      </div>
      <div className={s.curriculum}>
        <Typo
          as="h2"
          size={32}
          weight={weight.bold}
          className={s.title}
        >
          커리큘럼
        </Typo>
        <div>
          <CurriculumItemList />
        </div>
      </div>
    </section>
  );
}

interface SkillTagProps {
  name: string;
}

function SkillTag(props: SkillTagProps) {
  const { name } = props;

  return (
    <button className={s.skillTag}>
      <Typo size={16} weight={weight.regular}>
        {name}
      </Typo>
    </button>
  );
}
