import * as layers from '@/styles/layer.css';
import { globalStyle, StyleRule } from '@vanilla-extract/css';

const resetGlobalStyle = (selector: string, rule: StyleRule) => {
  globalStyle(selector, {
    '@layer': {
      [layers.reset]: rule,
    },
  });
};

export { resetGlobalStyle };
