import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

// 색상 변수 contract 생성
export const colorVars = createThemeContract({
  normal: '',
  point: '',
  background: '',
  lowTone: '',
  lowToneText: '',
  arcBlack: '',
  _95: '',
  _80: '',
  _55: '',
  _20: '',
  _10: '',
});

createGlobalTheme('[data-theme="light"]', colorVars, {
  normal: '#212E38',
  point: '#047EE9',
  background: '#FFFFFF',
  lowTone: '#F5F6F6',
  lowToneText: '#586173',
  arcBlack: '#FFFFFF',
  _95: 'rgba(0, 0, 0, 0.95)',
  _80: 'rgba(0, 0, 0, 0.80)',
  _55: 'rgba(0, 0, 0, 0.55)',
  _20: 'rgba(0, 0, 0, 0.20)',
  _10: 'rgba(0, 0, 0, 0.10)',
});

createGlobalTheme('[data-theme="dark"]', colorVars, {
  normal: '#FFFFFF',
  point: '#2957E1',
  background: '#0E0F10',
  lowTone: '#19191D',
  lowToneText: '#D9DBDD',
  arcBlack: '#19191D',
  _95: 'rgba(255, 255, 255, 0.95)',
  _80: 'rgba(255, 255, 255, 0.80)',
  _55: 'rgba(255, 255, 255, 0.55)',
  _20: 'rgba(255, 255, 255, 0.20)',
  _10: 'rgba(255, 255, 255, 0.10)',
});
