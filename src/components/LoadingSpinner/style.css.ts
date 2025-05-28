import { style, keyframes } from '@vanilla-extract/css';
import { colorVars } from '@/styles/theme.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.3 },
});

const slideUp = keyframes({
  '0%': { 
    transform: 'translateY(20px)',
    opacity: 0 
  },
  '100%': { 
    transform: 'translateY(0)',
    opacity: 1 
  },
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: colorVars.background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  transition: 'opacity 0.5s ease-out',
  
  selectors: {
    '&.fadeOut': {
      animation: `${fadeOut} 0.5s ease-out forwards`,
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  animation: `${slideUp} 0.6s ease-out`,
});

export const spinner = style({
  position: 'relative',
  width: '80px',
  height: '80px',
});

export const spinnerRing = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: `3px solid transparent`,
  borderRadius: '50%',
  animation: `${spin} 1.5s linear infinite`,
  
  selectors: {
    '&:nth-child(1)': {
      borderTopColor: colorVars.point,
      animationDelay: '0s',
    },
    '&:nth-child(2)': {
      borderRightColor: colorVars.point,
      animationDelay: '0.5s',
      opacity: 0.7,
    },
    '&:nth-child(3)': {
      borderBottomColor: colorVars.point,
      animationDelay: '1s',
      opacity: 0.4,
    },
  },
});

export const progressContainer = style({
  width: '200px',
  height: '4px',
  backgroundColor: colorVars._20,
  borderRadius: '2px',
  overflow: 'hidden',
});

export const progressBar = style({
  height: '100%',
  backgroundColor: colorVars.point,
  borderRadius: '2px',
  transition: 'width 0.3s ease-out',
  background: `linear-gradient(90deg, ${colorVars.point}, #047EE9AA)`,
});

export const text = style({
  fontSize: '18px',
  fontWeight: '600',
  color: colorVars.normal,
  margin: '0',
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const percentage = style({
  fontSize: '14px',
  fontWeight: '500',
  color: colorVars._80,
  margin: '0',
  fontFamily: 'monospace',
});

export const slowConnectionText = style({
  fontSize: '12px',
  fontWeight: '400',
  color: colorVars._55,
  margin: '8px 0 0 0',
  fontStyle: 'italic',
  animation: `${pulse} 2s ease-in-out infinite`,
});
