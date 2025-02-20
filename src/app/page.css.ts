import { flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100vw',
  overflowX: 'hidden',
  height: '100vh',
});

export const accordion = style({
  width: '100%',
  ...flexColumn({
    align: 'center',
    gap: 118,
  }),
  paddingBlock: 64,
});

export const details = style({
  width: '100%',

  ...flexColumn({
    gap: 90,
  }),
});
