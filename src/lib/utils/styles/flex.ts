import { StyleRule } from '@vanilla-extract/css';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface FlexOptions {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: FlexWrap;
  gap?: number | string;
}

export const createFlex = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 0,
}: FlexOptions = {}): StyleRule => ({
  display: 'flex',
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  flexWrap: wrap,
  gap,
});

export const flexRow = (options?: Omit<FlexOptions, 'direction'>) =>
  createFlex({ ...options, direction: 'row' });

export const flexColumn = (options?: Omit<FlexOptions, 'direction'>) =>
  createFlex({ ...options, direction: 'column' });

export const flexCenter = (options?: Partial<FlexOptions>) =>
  createFlex({
    justify: 'center',
    align: 'center',
    ...options,
  });

export const flexBetween = (options?: Partial<FlexOptions>) =>
  createFlex({
    justify: 'space-between',
    align: 'center',
    ...options,
  });
