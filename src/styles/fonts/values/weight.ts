export type WeightKeys = keyof typeof weight;

export const weight = {
  black: '900',
  extrabold: '800',
  bold: '700',
  semibold: '600',
  medium: '500',
  regular: '400',
  light: '300',
} as const;
