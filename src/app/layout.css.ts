import { colorVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const body = style({
  width: '100%',
  height: '100vh',
  background: colorVars.background,
  transition:
    'background 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out',
});

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
});
