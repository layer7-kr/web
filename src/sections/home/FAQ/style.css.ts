import { flexBetween, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: 1200,
  ...flexBetween({ align: 'flex-start' }),
});

export const items = style({
  width: 800,
  ...flexColumn({
    align: 'center',
    gap: 8,
  }),
});

export const awardItem = style({
  background: '#F5F6F6',
});
