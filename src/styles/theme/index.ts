import { DefaultTheme } from 'styled-components';
import { lightColor, darkColor } from './color';
import media from './media';
import * as mixin from './mixin';

const theme: Record<Theme, DefaultTheme> = {
  light: { color: lightColor, media, mixin, lightColor, darkColor },
  dark: { color: darkColor, media, mixin, lightColor, darkColor }
};

export default theme;
