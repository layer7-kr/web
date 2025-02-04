import { flexCenter, flexColumn, flexRow } from "@/lib/utils/styles/flex";
import { weight } from "@/styles/fonts/values/weight";
import { globalStyle, style } from "@vanilla-extract/css";

export const base = style({
  width: "100%",

  padding: "165px 0",

  ...flexColumn({
    gap: 140,
    align: "center",
  }),
});

export const divider = style({
  width: 250,
  height: 1,

  backgroundColor: "#BFBFBF",
});

// Top section
export const topSection = style({
  ...flexRow({
    gap: 100,
  }),
});

export const visionSection = style({
  ...flexColumn({
    gap: 24,
  }),
});

export const visionTitle = style({
  ...flexColumn({
    gap: 4,
  }),
});

export const historySection = style({
  padding: "0 20px",

  ...flexColumn({
    gap: 19,
  }),
});

export const historyContent = style({
  maxWidth: 620,
});

// Bottom section
export const nowSection = style({
  padding: "0 20px",

  ...flexCenter({
    direction: 'column',
    gap: 32,
  }),
});

export const nowContent = style({
    maxWidth: 700,

    textAlign: 'center',
})

globalStyle(`${nowContent} b`, {
    fontWeight: weight.semibold,
    
    color: 'inherit'
});