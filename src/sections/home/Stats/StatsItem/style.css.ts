import { flexColumn } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
  padding: "20px 0",

  ...flexColumn({
    gap: 7,
  }),

  "@media": {
    "(max-width: 640px)": {
      padding: "10px 0",
    },
  },
});
