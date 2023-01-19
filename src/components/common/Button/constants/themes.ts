const THEMES_BUTTON = {
  normal: {
    border: 'BLUE_DARK',
    background: ['BLUE_DARK', 'BLUE_LIGHT'],
    hoverBackground: ['BLUE', 'BLUE_LIGHT'],
    text: ['WHITE', 'INPUT_TEXT']
  },
  gray: {
    border: 'GRAY_DARK',
    background: ['GRAY_DARK', 'BACKGROUND'],
    hoverBackground: ['GRAY', 'BACKGROUND_DARK'],
    text: ['WHITE', 'INPUT_TEXT']
  }
} as const;

export default THEMES_BUTTON;
