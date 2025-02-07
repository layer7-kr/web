import { globalStyle, style } from "@vanilla-extract/css";

export const base = style({
  position: 'relative',
  width: '100%',
  height: 320,
  overflow: 'hidden',

  '@media': {
        '(max-width: 550px)': {
            height: 240,
        }
    }
});

export const backgroundImage = style({
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,

  background: 'rgba(0, 0, 0, 0.5)',

  padding: '30px',
  
  transition: 'background 0.5s ease',
  ':hover': {
    background: 'rgba(0, 0, 0, 0.6)',
  },
});

globalStyle(`${base}:hover ${backgroundImage}`, {
    transform: 'scale(1.05)',
});