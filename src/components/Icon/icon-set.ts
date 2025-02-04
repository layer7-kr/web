import ArrowForward from './assets/arrow_forward.svg';
import KeyboardArrowDown from './assets/keyboard_arrow_down.svg';

export enum IconName {
  KEYBOARD_ARROW_DOWN = 'keyboard_arrow_down',
  ARROW_FORWARD = 'arrow_forward',
}

export const IconNameMap = {
  [IconName.KEYBOARD_ARROW_DOWN]: KeyboardArrowDown,
  [IconName.ARROW_FORWARD]: ArrowForward,
} as const;
