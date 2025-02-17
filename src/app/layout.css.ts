import { colorVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const body = style({
  width: '100%',
  height: '100vh',
  background: colorVars.background,
});

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
});
