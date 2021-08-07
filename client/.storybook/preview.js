import { GlobalStyle } from '../src/shared/theme/global-styles';
import { NormalizeStyles } from '../src/shared/theme/normalize-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/shared/theme/theme-configurator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <NormalizeStyles />
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
