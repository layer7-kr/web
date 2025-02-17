import {
  flexBetween,
  flexCenter,
  flexColumn,
  flexRow,
} from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
  width: "100%",
  maxWidth: 1000,

  margin: "0 auto",
  padding: "20px 30px",

  ...flexBetween(),

  "@media": {
    "(max-width: 1024px)": {
      ...flexColumn({
        gap: 64,
      }),
    },
  },
});

export const statsContainer = style({
  width: "100%",
  maxWidth: 450,
  ...flexColumn({
    gap: 42,
  }),
});

export const statsItemContainer = style({
  ...flexRow({
    gap: 52,
  }),

  "@media": {
    "(max-width: 640px)": {
      ...flexColumn(),
    },
  },
});

// statsDetail
export const statsDetailContainer = style({
  width: "100%",
  maxWidth: 450,
  ...flexColumn({
    gap: 32,
  }),
});
