import KeyboardArrowDown from './assets/keyboard_arrow_down.svg';

export enum IconName {
  KEYBOARD_ARROW_DOWN = 'keyboard_arrow_down',
}

export const IconNameMap = {
  [IconName.KEYBOARD_ARROW_DOWN]: KeyboardArrowDown,
} as const;
