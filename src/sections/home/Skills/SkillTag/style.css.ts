import { colorVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const base = style({
  paddingBlock: 10,
  paddingInline: 12,
  background: colorVars.lowTone,
  borderRadius: 4,
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 0.8,
  },
  ':active': {
    opacity: 0.5,
  },
});
