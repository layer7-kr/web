import { flexBetween } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  padding: 16,
  borderRadius: 4,
  cursor: 'pointer',
});

export const active = style({
  outline: '1.5px solid #047EE9',
});

export const label = style({
  width: '100%',
  ...flexBetween(),
});
