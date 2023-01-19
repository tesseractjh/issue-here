import { DefaultTheme } from 'styled-components';
import { lightColor, darkColor } from './color';
import media from './media';
import * as mixin from './mixin';
import * as placeholder from './placeholder';

const theme: Record<Theme, DefaultTheme> = {
  light: {
    color: lightColor,
    media,
    mixin,
    placeholder,
    lightColor,
    darkColor
  },
  dark: { color: darkColor, media, mixin, placeholder, lightColor, darkColor }
};

export default theme;
