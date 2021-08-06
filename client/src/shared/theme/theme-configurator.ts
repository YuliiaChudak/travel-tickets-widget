const colors = {
  primaryActive: '#00B0FF',
  primaryBg: '#d5e8f8',
  primaryError: '#F4CDCF',
  primaryText: '#29425b',
  secondaryText: '#597385',
  secondaryTextLight: '#a5b3bd',
  primaryYellow: '#f6e41f',
  primaryGrey: '#eeeeee',
  secondaryGrey: '#dddddd',
  primaryWhite: '#FFFFFF',
};

const fonts = {
  sansSerif: 'sans-serif',
  roboto: 'Roboto',
  khand: 'Khand, sans-serif',
};

export const deviceViewPorts = {
  xs: '@media only screen and (min-width: 320px) and (max-width: 767px)',
  sm: '@media only screen and (min-width: 768px) and (max-width: 999px)',
};

export const theme = {
  colors,
  fonts,
  deviceViewPorts,
};

export type Theme = typeof theme;
