import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NormalizeStyles } from "./shared/theme/normalize-styles";
import { theme } from "./shared/theme/theme-configurator";
import { GlobalStyle } from "./shared/theme/global-styles";
import Page from './shared/components/page/Page'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <NormalizeStyles />
        <GlobalStyle />
        <Page><h1>page</h1></Page>
      </ThemeProvider>
  )
}

export default App
