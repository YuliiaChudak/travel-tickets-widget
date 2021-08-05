import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    
    body, html {
      height: 100%;
      margin: 0;
      min-width: 320px;
      padding: 0;
    }
      
    body {
      overflow-x: hidden;
    }
      
    html {
       font-family: ${({ theme }) => theme.fonts.sansSerif};
    }
`;
