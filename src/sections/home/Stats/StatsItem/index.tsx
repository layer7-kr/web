import Typo from "@/components/Typo";
import * as s from "./style.css";
import { weight } from "@/styles/fonts/values/weight";

interface StatsItemProps {
  name: string;
  value: number;
  prefix?: string;
}

export default function StatsItem({ name, value, prefix }: StatsItemProps) {
  return (
    <div className={s.base}>
      <Typo
        as="h3"
        size={{
          640: 16,
          base: 20,
        }}
        weight={weight.medium}
      >
        {name}
      </Typo>
      <Typo
        size={{
          640: 28,
          base: 38,
        }}
        weight={weight.bold}
        color="#047EE9"
      >
        {value}
        {prefix}
      </Typo>
    </div>
  );
}
