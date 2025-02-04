import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('*', {
  boxSizing: 'border-box',
  color: '#000',
  lineHeight: 1.5,
  fontWeight: 400,
  letterSpacing: '-0.02',
});
