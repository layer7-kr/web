import { flexBetween, flexColumn } from '@/lib/utils/styles/flex';
import { colorVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const base = style({
  paddingInline: 30,

  width: 'min(100%, 1200px)',

  ...flexBetween({ align: 'flex-start' }),

  '@media': {
    '(max-width: 1024px)': {
      ...flexColumn({
        gap: 30,
      }),
    },
  },
});

export const items = style({
  width: 800,
  ...flexColumn({
    align: 'center',
    gap: 16,
  }),

  '@media': {
    '(max-width: 1024px)': {
      width: '100%',
    },
  },
});

export const awards = style({
  width: '100%',
  ...flexColumn({
    align: 'center',
    gap: 8,
  }),
});

export const more = style({
  paddingInline: 20,
  paddingBlock: 8,
  background: colorVars.arcBlack,
  width: 'fit-content',
  borderRadius: 12,
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 0.8,
  },
  ':active': {
    opacity: 0.6,
  },
});

export const awardItem = style({
  background: colorVars.arcBlack,
  border: '1px solid rgba(0, 0, 0, 0.1)',
});
