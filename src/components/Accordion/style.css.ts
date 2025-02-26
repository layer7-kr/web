import { flexBetween, flexColumn } from '@/lib/utils/styles/flex';
import { colorVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  padding: 16,
  borderRadius: 4,
  cursor: 'pointer',
  background: colorVars.arcBlack,
  border: `1px solid ${colorVars._10}`,
});

export const active = style({
  outline: `1.5px solid ${colorVars.point}`,
});

export const title = style({
  userSelect: 'none',
});

export const content = style({
  cursor: 'text',
});

export const label = style({
  width: '100%',
  ...flexBetween(),
});
