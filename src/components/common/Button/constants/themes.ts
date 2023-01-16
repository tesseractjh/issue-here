const THEMES_BUTTON = {
  normal: {
    border: 'BLUE_DARK',
    background: ['BLUE_DARK', 'BLUE_LIGHT'],
    hoverBackground: ['BLUE', 'BLUE_LIGHT'],
    text: ['WHITE', 'GRAY_DARK']
  },
  gray: {
    border: 'GRAY_DARK',
    background: ['GRAY_DARK', 'BACKGROUND'],
    hoverBackground: ['GRAY', 'BACKGROUND_DARK'],
    text: ['WHITE', 'GRAY_DARK']
  }
} as const;

export default THEMES_BUTTON;
