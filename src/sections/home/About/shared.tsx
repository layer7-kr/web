import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";
import * as s from "./style.css";
import classNames from "classnames";

export const AboutVisionTextBreakpoints = {
  title: {
    640: 32,
    1536: 42,
    default: 52,
  },
  subject: {
    640: 20,
    default: 28,
  },
  description: {
    1536: 18,
    default: 24,
  },
};

export function AboutArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typo
      size={{
        640: 24,
        1536: 32,
        default: 42,
      }}
      weight={weight.bold}
      color={"#000"}
    >
      {children}
    </Typo>
  );
}

export function AboutArticleDescription({
  children,
  textAlign = "center",
}: {
  children: React.ReactNode;
  textAlign?: "center" | "left";
}) {
  return (
    <Typo
      size={{
        640: 18,
        1536: 20,
        default: 24,
      }}
      weight={weight.regular}
      color={"#808080"}
      className={classNames(s.nowContent, {
        [s.textAlignLeft]: textAlign === "left",
      })}
    >
      {children}
    </Typo>
  );
}
