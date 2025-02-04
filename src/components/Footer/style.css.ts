import { flexCenter } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';
import { flexColumn } from './../../lib/utils/styles/flex';

export const base = style({
  width: '100%',
  background: '#111417',
  paddingBlock: 50,
  ...flexColumn({
    align: 'center',
    gap: 42,
  }),
});

export const content = style({
  ...flexColumn({
    align: 'center',
    gap: 24,
  }),
});

export const contact = style({
  ...flexColumn({
    align: 'center',
    gap: 14,
  }),
});

export const logo = style({
  ...flexCenter({
    gap: 10,
  }),
});

export const email = style({
  ...flexCenter({
    gap: 12,
  }),
});

export const divider = style({
  width: 64,
  height: 1,
  background: 'rgba(255, 255, 255, 0.30)',
});

export const copyRight = style({
  textAlign: 'center',
});

export const social = style({
  ...flexCenter({
    gap: 16,
  }),
});

export const line = style({
  width: 1,
  height: 20,
  background: 'rgba(255, 255, 255, 0.28)',
});
