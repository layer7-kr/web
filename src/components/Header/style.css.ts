import { flexBetween, flexCenter } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  paddingBlock: 20,
  ...flexCenter(),
  zIndex: 100,
  transition: 'background 0.3s',
});

export const background = style({
  background: '#0E0F10',
});

export const container = style({
  width: 1200,
  ...flexBetween(),
});

export const leading = style({
  ...flexCenter({
    gap: 19,
  }),
});

export const items = style({
  ...flexCenter({
    gap: 40,
  }),
});

export const line = style({
  width: 1,
  height: 16,
  background: 'rgba(255, 255, 255, 0.28)',
});

export const colorScheme = style({
  cursor: 'pointer',
  ...flexCenter({
    gap: 6,
  }),
});
