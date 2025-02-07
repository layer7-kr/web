import { flexBetween, flexColumn } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
  padding: "0 20px",
  width: "min(100%, 1200px)",

  ...flexBetween({ align: "flex-start" }),

  "@media": {
    "(max-width: 1000px)": {
      ...flexColumn({
        gap: 40,
      }),
    },
  },
});

export const items = style({
  width: 800,
  ...flexColumn({
    align: "center",
    gap: 8,
  }),

  "@media": {
    "(max-width: 1000px)": {
      width: "100%",
    },
  },
});

export const awardItem = style({
  background: "#F5F6F6",
});
