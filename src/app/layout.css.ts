import { style } from '@vanilla-extract/css';

export const body = style({
  width: '100%',
  height: '100vh',

  position: 'relative',
});

export const header = style({
  position: 'absolute',
  top: 0,
  left: 0,
});
