import { flexBetween, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: 1200,
  ...flexBetween({ align: 'flex-start' }),
});

export const items = style({
  width: 800,
  ...flexColumn({
    align: 'center',
    gap: 60,
  }),
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
  background: '#047EE9',
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
  background: '#fff',
  border: '1px solid rgba(0, 0, 0, 0.1)',
});
