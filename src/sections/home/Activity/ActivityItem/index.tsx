import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";
import Image from "next/image";
import * as s from "./style.css";
import { JSONActivityData } from "@/types/json";

export default function ActivityItem({ imageName, name }: JSONActivityData) {
  return (
    <section className={s.base}>
      <Image
        src={`/assets/activity/${imageName}`}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={s.backgroundImage}
        priority
      />
      <div className={s.overlay}>
        <Typo as="h3" size={16} weight={weight.semibold} color="#fff">
          {name}
        </Typo>
      </div>
    </section>
  );
}