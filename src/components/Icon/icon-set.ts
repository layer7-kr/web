import ArrowForward from './assets/arrow_forward.svg';
import KeyboardArrowDown from './assets/keyboard_arrow_down.svg';
import Menu from './assets/menu.svg';
import Close from './assets/close.svg';
import OpenInNew from './assets/open_in_new.svg';
import Article from './assets/article.svg';

export enum IconName {
  KEYBOARD_ARROW_DOWN = 'keyboard_arrow_down',
  ARROW_FORWARD = 'arrow_forward',
  MENU = 'menu',
  CLOSE = 'close',
  OPEN_IN_NEW = 'open_in_new',
  ARTICLE = 'article',
}

export const IconNameMap = {
  [IconName.KEYBOARD_ARROW_DOWN]: KeyboardArrowDown,
  [IconName.ARROW_FORWARD]: ArrowForward,
  [IconName.MENU]: Menu,
  [IconName.CLOSE]: Close,
  [IconName.OPEN_IN_NEW]: OpenInNew,
  [IconName.ARTICLE]: Article,
} as const;
