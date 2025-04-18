import { flexCenter, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  paddingInline: 30,
  ...flexCenter({
    align: 'flex-start',
    gap: 10,
  }),

  '@media': {
    '(max-width: 1024px)': {
      ...flexColumn({
        gap: 32,
      }),
    },
  },
});

export const skills = style({
  paddingBlock: 20,
  ...flexColumn({
    gap: 30,
  }),
  paddingTop: 80,
});

export const title = style({
  textTransform: 'uppercase',
});

export const skillTags = style({
  maxWidth: 400,
  ...flexCenter({
    gap: 16,
    wrap: 'wrap',
    justify: 'flex-start',
  }),
});

export const curriculum = style({
  ...flexColumn({
    gap: 30,
  }),
  paddingTop: 80,
});
