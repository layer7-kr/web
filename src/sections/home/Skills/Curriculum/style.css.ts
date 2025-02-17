import { flexCenter, flexColumn, flexRow } from '@/lib/utils/styles/flex';
import { colorVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  ...flexRow({
    gap: 28,
  }),
});

export const contentContainer = style({
  ...flexColumn({
    gap: 10,
  }),
});

export const description = style({
  width: '100%',
  maxWidth: 300,
});

export const timeline = style({
  ...flexCenter({
    direction: 'column',
    justify: 'flex-start',
  }),

  selectors: {
    '&[data-located="first"]': {
      marginTop: 10,
    },
  },
});

export const line = style({
  width: 2,
  height: '100%',

  backgroundColor: colorVars.point,

  selectors: {
    '&[data-located="middle"]': {
      position: 'relative',
      top: -15,
      zIndex: 0,

      minHeight: 'calc(100% + 15px)',
    },

    '&[data-located="last"]': {
      position: 'relative',
      top: -15,
      zIndex: 0,

      height: 15,
    },
  },
});

export const circle = style({
  width: 15,
  aspectRatio: '1/1',
  border: `2px solid ${colorVars.point}`,
  backgroundColor: colorVars.background,
  borderRadius: '50%',

  selectors: {
    '&[data-located="middle"], &[data-located="last"]': {
      position: 'relative',
      bottom: -5,
      zIndex: 1,
    },
  },
});

export const simpleLineContainer = style({
  width: 15,
  ...flexCenter(),
});
