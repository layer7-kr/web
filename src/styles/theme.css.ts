import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

// 색상 변수 contract 생성
export const colorVars = createThemeContract({
  content: {
    emphasized: null,
    default: null,
    muted: null,
  },
});

createGlobalTheme('[data-theme="light"]', colorVars, {
  content: {
    emphasized: '#000000',
    default: '#212E38',
    muted: 'rgba(0, 0, 0, 0.5)',
  },
});

createGlobalTheme('[data-theme="dark"]', colorVars, {
  content: {
    emphasized: '#000000',
    default: '#212E38',
    muted: 'rgba(0, 0, 0, 0.5)',
  },
});
