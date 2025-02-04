import { style } from '@vanilla-extract/css';

export const base = style({
  fill: 'currentColor',
  flexShrink: 0,
  userSelect: 'none',
  transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
});

export const clickable = style({
  display: 'inline-block',
  flexShrink: 0,
  cursor: 'pointer',
});
