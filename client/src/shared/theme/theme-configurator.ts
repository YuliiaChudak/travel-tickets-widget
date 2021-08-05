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
  primary: 'Roboto',
  secondary: 'Khand',
};

export const sizeViewPort = {
  xsMin: '320px',
  xsMax: '767px',
  smMin: '768px',
  smMax: '999px',
  lg: '1200px',
};

export const deviceViewPort = {
  xs: `(min-width: ${sizeViewPort.xsMin}) and (max-width ${sizeViewPort.xsMax})`,
  sm: `(min-width: ${sizeViewPort.smMin}) and (max-width ${sizeViewPort.smMax})`,
  lg: `(min-width: ${sizeViewPort.lg})`,
};

export const theme = {
  colors,
  fonts,
  sizeViewPort,
  deviceViewPort,
};

export type Theme = typeof theme;
