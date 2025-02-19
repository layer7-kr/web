import ArrowForward from './assets/arrow_forward.svg';
import KeyboardArrowDown from './assets/keyboard_arrow_down.svg';
import Menu from './assets/menu.svg';
import Close from './assets/close.svg';

export enum IconName {
  KEYBOARD_ARROW_DOWN = 'keyboard_arrow_down',
  ARROW_FORWARD = 'arrow_forward',
  MENU = 'menu',
  CLOSE = 'close',
}

export const IconNameMap = {
  [IconName.KEYBOARD_ARROW_DOWN]: KeyboardArrowDown,
  [IconName.ARROW_FORWARD]: ArrowForward,
  [IconName.MENU]: Menu,
  [IconName.CLOSE]: Close,
} as const;
