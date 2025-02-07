"use client";

import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";
import { lexendMega } from "@/styles/fonts/index.css";

import * as s from "./style.css";

import { PropsWithChildren } from "react";

interface HeroTitleProps {
  children: React.ReactNode;
  color?: string;
}
export const HeroTitle = ({ children, color = "#ffffff" }: HeroTitleProps) => {
  return (
    <Typo
      family={lexendMega}
      size={{
        450: 34,
        600: 48,
        768: 62,
        default: 76,
      }}
      weight={weight.black}
      className={s.titleLine}
      letterSpacing={{
        450: "-3px",
        600: "-7px",
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
    <Typo size={{450: 15,
      default: 18,}} weight={weight.semibold} color={"#ffffff"}>
      {children}
    </Typo>
  );
};
