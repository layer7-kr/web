import { weight } from '@/styles/fonts/values/weight';
import { globalFontFace } from '@vanilla-extract/css';

export const applyGlobalFontFace = (fontFamily: string, extension: string) => {
  globalFontFace(
    fontFamily,
    Object.entries(weight).map(([name, weight]) => ({
      src: `url(${
        process.env.NEXT_PUBLIC_URL || ''
      }/fonts/${fontFamily}-${capitalizeFirstLetter(
        name,
      )}.woff2) format('${extension}')`,
      fontWeight: weight,
      fontDisplay: 'block',
    })),
  );
};

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
