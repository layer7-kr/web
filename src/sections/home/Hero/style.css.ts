import { flexCenter, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  height: '100vh',
  ...flexCenter(),
});

export const image = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
});

export const container = style({
  ...flexColumn({
    align: 'center',
    gap: 80,
  }),
});

export const branding = style({
  ...flexColumn({
    align: 'center',
    gap: 20,
  }),
});

export const info = style({
  ...flexColumn({
    align: 'center',
    gap: 20,
  }),
});

export const title = style({
  textTransform: 'uppercase',
  ...flexColumn({
    align: 'center',
    gap: 0,
  }),
});

export const titleLine = style({
  letterSpacing: '-14%',
  lineHeight: 1,
  mixBlendMode: 'difference',
});

export const apply = style({
  cursor: 'pointer',
  padding: '16px 30px',
  ...flexCenter({
    gap: 10,
  }),
  width: 'fit-content',
  borderRadius: 42,
  border: '2px solid #fff',
  background: 'rgba(255, 255, 255, 0.11)',
  transition: 'background 0.1s ease-in-out',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.4)',
  },
  ':active': {
    background: 'rgba(255, 255, 255, 0.3)',
  },
  '@media': {
    '(max-width: 768px)': {
      padding: '12px 24px',
    },
  },
});
