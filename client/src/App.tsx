import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import SlotWidgetScene from './scenes/slot-widgets/SlotWidgetsScene';
import Page from './shared/components/page/Page';
import { GlobalStyle } from './shared/theme/global-styles';
import { NormalizeStyles } from './shared/theme/normalize-styles';
import { theme } from './shared/theme/theme-configurator';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NormalizeStyles />
        <GlobalStyle />
        <Page>
          <SlotWidgetScene />
        </Page>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
