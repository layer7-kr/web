import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";
import * as s from "./style.css";
import Curriculum from "./Curriculum";

export default function HomeSkillsSection() {
  return (
    <section className={s.base}>
      <div className={s.skills}>
        <Typo
          as="h2"
          size={32}
          weight={weight.bold}
          color="#212E38"
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
          color="#212E38"
          className={s.title}
        >
          커리큘럼
        </Typo>
        <div>
          <Curriculum
            name="1. 프로그래밍"
            description="IT 기술 전반의 기초가 되는 프로그래밍 수업을 진행합니다. 프로그래밍교육을 통해 IT 기본 소양을 기릅니다."
            located="first"
          />
          <Curriculum.Line />
          <Curriculum
            name="1. 프로그래밍"
            description="IT 기술 전반의 기초가 되는 프로그래밍 수업을 진행합니다. 프로그래밍교육을 통해 IT 기본 소양을 기릅니다."
            located="middle"
          />
          <Curriculum.Line />
          <Curriculum
            name="1. 프로그래밍"
            description="IT 기술 전반의 기초가 되는 프로그래밍 수업을 진행합니다. 프로그래밍교육을 통해 IT 기본 소양을 기릅니다."
            located="last"
          />
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
      <Typo size={16} weight={weight.regular} color="#212E38">
        {name}
      </Typo>
    </button>
  );
}
