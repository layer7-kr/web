import { flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  paddingBlock: 20,

  ...flexColumn({
    gap: 7,
  }),

  '@media': {
    '(max-width: 640px)': {
      padding: 10,
    },
  },
});
