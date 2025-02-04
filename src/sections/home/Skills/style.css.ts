import { flexCenter, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  ...flexCenter({
    align: 'flex-start',
    gap: 10,
  }),
});

export const skills = style({
  paddingBlock: 20,
  ...flexColumn({
    gap: 32,
  }),
});

export const title = style({
  textTransform: 'uppercase',
});

export const skillTags = style({
  width: 300,
  ...flexCenter({
    gap: 16,
    wrap: 'wrap',
    justify: 'flex-start',
  }),
});

export const skillTag = style({
  paddingBlock: 10,
  paddingInline: 12,
  background: '#F5F6F6',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 0.8,
  },
  ':active': {
    opacity: 0.5,
  },
});

export const curriculum = style({
  ...flexColumn({
    gap: 52,
  }),
});
