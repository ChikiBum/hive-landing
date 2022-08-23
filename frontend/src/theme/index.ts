import type { DefaultTheme } from 'styled-components';
import { colorPalette } from './color-palette';
import { fontSizes } from './font-sizes';
import { spaces } from './spaces';
import { fontWeights } from './font-weights';
import { fontFamilies } from './font-families';
import { percents } from './percents';
import { fontWeight } from './font-weight';

export const theme: DefaultTheme = {
  colors: colorPalette,
  fonts: fontSizes,
  fontWeights,
  fontFamilies,
  spaces: spaces,
  percents: percents,
  fontWeight: fontWeight,
  weight: fontWeight,
};
