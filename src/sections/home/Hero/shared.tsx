"use client";

import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";
import { lexendMega } from "@/styles/fonts/index.css";

import * as s from "./style.css";

import { PropsWithChildren } from "react";
import { IconName } from "@/components/Icon/icon-set";
import Icon from "@/components/Icon";

interface HeroTitleProps {
  children: React.ReactNode;
  color?: string;
}
export const HeroTitle = ({ children, color = "#ffffff" }: HeroTitleProps) => {
  return (
    <Typo
      family={lexendMega}
      size={{
        480: 34,
        768: 52,
        default: 76,
      }}
      weight={weight.black}
      className={s.titleLine}
      letterSpacing={{
        480: "-2px",
        768: "-6px",
        default: "-10px",
      }}
      color={color}
    >
      {children}
    </Typo>
  );
};

export const HeroDescription = ({ children }: PropsWithChildren) => {
  return (
    <Typo
      size={{
        480: 15,
        default: 18,
      }}
      weight={weight.semibold}
      color={"#ffffff"}
    >
      {children}
    </Typo>
  );
};

export const ApplyButton = ({ children }: PropsWithChildren) => {
  return (
    <div className={s.apply}>
      <Typo
        size={{
          768: 15,
          default: 18,
        }}
        weight={weight.semibold}
        color={"#ffffff"}
      >
        {children}
      </Typo>
      <Icon name={IconName.ARROW_FORWARD} size={18} color={"#ffffff"} />
    </div>
  );
};
