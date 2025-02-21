import { flexCenter, flexColumn, flexRow } from '@/lib/utils/styles/flex';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',

  padding: '165px 30px',
  overflowX: 'hidden',

  ...flexColumn({
    gap: 140,
    align: 'center',
  }),

  '@media': {
    '(max-width: 1024px)': {
      padding: '60px 30px',
      gap: 100,
    },
    '(max-width: 450px)': {
      gap: 60,
    },
  },
});

export const divider = style({
  width: 250,
  height: 1,

  border: 'none',

  backgroundColor: colorVars._20,

  '@media': {
    '(max-width: 600px)': {
      width: 100,
    },
    '(max-width: 450px)': {
      marginRight: 'auto',
    },
  },
});

// Top section
export const topSection = style({
  width: '100%',

  ...flexRow({
    gap: 100,
    justify: 'center',
  }),

  '@media': {
    '(max-width: 1536px)': {
      gap: 0,
      justifyContent: 'space-around',
    },
    '(max-width: 1024px)': {
      ...flexColumn({
        gap: 64,
      }),
      width: 'fit-content',
    },
  },
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
  paddingInline: 30,

  ...flexColumn({
    gap: 19,
  }),

  '@media': {
    '(max-width: 1024px)': {
      padding: 0,
    },
  },
});

export const historyContent = style({
  maxWidth: 520,
});

// Bottom section
export const nowSection = style({
  ...flexCenter({
    direction: 'column',
    gap: 32,
  }),

  '@media': {
    '(max-width: 1175px)': {
      gap: 22,
    },
    '(max-width: 450px)': {
      ...flexColumn({
        gap: 16,
      }),
    },
  },
});

export const nowContent = style({
  maxWidth: 700,

  textAlign: 'center',

  '@media': {
    '(max-width: 450px)': {
      textAlign: 'left',
    },
  },
});

export const textAlignLeft = style({
  textAlign: 'left',
});

globalStyle(`${nowContent} b`, {
  fontWeight: weight.semibold,

  color: 'inherit',
});
