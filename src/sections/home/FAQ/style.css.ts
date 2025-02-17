import { flexBetween, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  paddingInline: 30,
  width: 'min(100%, 1200px)',

  ...flexBetween({ align: 'flex-start' }),

  '@media': {
    '(max-width: 1024px)': {
      ...flexColumn({
        gap: 30,
      }),
    },
  },
});

export const titleContainer = style({
  ...flexColumn({
    gap: 8,
  }),
});

export const items = style({
  width: 750,
  ...flexColumn({
    align: 'center',
    gap: 8,
  }),

  '@media': {
    '(max-width: 1024px)': {
      width: '100%',
    },
  },
});
