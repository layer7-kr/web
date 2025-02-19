import {
  flexBetween,
  flexCenter,
  flexColumn,
  flexRow,
} from '@/lib/utils/styles/flex';
import { keyframes, style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  paddingBlock: 20,
  paddingInline: 30,
  ...flexCenter(),
  zIndex: 100,
  transition:
    'background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out',
});

export const container = style({
  width: 1200,
  ...flexBetween(),
  zIndex: 100,
});

export const background = style({
  background: '#0E0F10',
});

export const leading = style({
  ...flexCenter({
    gap: 19,
  }),

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
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

export const menuIcon = style({
  display: 'none',

  cursor: 'pointer',

  ':active': {
    opacity: 0.7,
  },

  '@media': {
    '(max-width: 768px)': {
      display: 'block',
    },
  },
});

const showModal = keyframes({
  '0%': {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  },
  '100%': {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
});

const hideModal = keyframes({
  '0%': {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
  '100%': {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  },
});

export const mobileHeaderModal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,

  width: '100%',
  height: '100%',

  backgroundColor: '#000',

  padding: 40,

  clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',

  animation: `${showModal} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,

  ...flexColumn({
    gap: 30,
  }),
});

export const mobileHeaderModalClosing = style({
  animation: `${hideModal} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
});

export const mobileHeaderModalHeader = style({
  width: '100%',
  ...flexRow({
    justify: 'flex-end',
  }),
});

export const clickable = style({
  cursor: 'pointer',

  ':active': {
    opacity: 0.7,
  },
});
