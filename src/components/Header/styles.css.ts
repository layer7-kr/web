import { flexBetween, flexCenter } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  paddingBlock: 20,
  ...flexCenter(),
});

export const container = style({
  width: 1200,
  ...flexBetween(),
});

export const items = style({
  ...flexCenter({
    gap: 40,
  }),
});
