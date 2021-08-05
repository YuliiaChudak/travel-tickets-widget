import React, { FunctionComponent, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme/theme-configurator';

const WithThemeProvider = ({ children }: { children: ReactElement }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const renderWithTheme = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(ui, {
    wrapper: WithThemeProvider as FunctionComponent<unknown>,
    ...options,
  });
};
