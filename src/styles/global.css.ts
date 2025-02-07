import { globalStyle } from '@vanilla-extract/css';
import './fonts/index.css';
import { pretendard } from './fonts/index.css';
import './reset.css';
import './theme.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: pretendard,
  color: '#000',
  lineHeight: 1.5,
  fontWeight: 400,
  letterSpacing: -0.02,
});
