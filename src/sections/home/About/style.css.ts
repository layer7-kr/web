import { flexCenter, flexColumn, flexRow } from "@/lib/utils/styles/flex";
import { weight } from "@/styles/fonts/values/weight";
import { globalStyle, style } from "@vanilla-extract/css";

export const base = style({
  width: "100%",

  padding: "165px 20px",

  ...flexColumn({
    gap: 140,
    align: "center",
  }),

  '@media': {
    '(max-width: 1000px)': {
      padding: "60px 20px",
      gap: 100,
    },
    '(max-width: 450px)': {
      gap: 60,
    },
  }
});

export const divider = style({
  width: 250,
  height: 1,

  border: 'none',

  backgroundColor: "#BFBFBF",

  '@media': {
    '(max-width: 600px)': {
      width: 100,
    },
    '(max-width: 450px)': {
      marginRight: 'auto'
    },
  }
});

// Top section
export const topSection = style({
  ...flexRow({
    gap: 100,
  }),

  '@media': {
    '(max-width: 1000px)': {
      ...flexColumn({
        gap: 100,
      }),
    },
  }
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

  '@media': {
    '(max-width: 1000px)': {
      padding: "0",
    },
  }
});

export const historyContent = style({
  maxWidth: 620,
  '@media': {
    '(max-width: 1175px)': {
      maxWidth: 450,
    },
  }
});

// Bottom section
export const nowSection = style({
  ...flexCenter({
    direction: "column",
    gap: 32,
  }),

  '@media': {
    '(max-width: 1175px)': {
      gap: 22,
    },
    '(max-width: 450px)': {
      ...flexColumn({
        gap: 16,
      })
    }
  }
});

export const nowContent = style({
  maxWidth: 700,

  textAlign: "center",

  '@media': {
    '(max-width: 450px)': {
      textAlign: "left",
    }
  }
});

globalStyle(`${nowContent} b`, {
  fontWeight: weight.semibold,

  color: "inherit",
});
