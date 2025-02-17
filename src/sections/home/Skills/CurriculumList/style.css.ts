import { flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  gap: 34,

  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: 5,
    },
  },
});

export const column = style({
  ...flexColumn(),
});

export const item = style({
  width: '100%',
});
