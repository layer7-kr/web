import { flexBetween } from '@/lib/utils/styles/flex';
import { colorVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  padding: 16,
  borderRadius: 4,
  cursor: 'pointer',
});

export const active = style({
  outline: `1.5px solid ${colorVars.point}`,
});

export const label = style({
  width: '100%',
  ...flexBetween(),
});
