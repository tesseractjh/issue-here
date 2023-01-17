import 'styled-components';
import media from '@styles/theme/media';
import * as mixin from '@styles/theme/mixin';
import * as placeholder from '@styles/theme/placeholder';

declare module 'styled-components' {
  type Color = {
    BACKGROUND: string;
    BACKGROUND_DARK: string;
    BACKGROUND_LIGHT: string;
    BORDER: string;
    BORDER_DARK: string;
    INACTIVE: string;
    BOX_SHADOW: string;
    BOX_SHADOW_LIGHT: string;
    WHITE: string;
    GRAY: string;
    GRAY_DARK: string;
    GRAY_LIGHT: string;
    BLUE: string;
    BLUE_DARK: string;
    BLUE_LIGHT: string;
    NAVY: string;
    NAVY_DARK: string;
    NAVY_LIGHT: string;
    GREEN: string;
    GREEN_DARK: string;
    GREEN_LIGHT: string;
    RED: string;
    RED_DARK: string;
    RED_LIGHT: string;
  };

  interface DefaultTheme {
    color: Color;
    media: typeof media;
    mixin: typeof mixin;
    placeholder: typeof placeholder;
    lightColor: Color;
    darkColor: Color;
  }
}
