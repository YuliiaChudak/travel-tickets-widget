import { createGlobalStyle } from 'styled-components';
import { getFont } from './helpers';

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
       font-family: ${getFont('sansSerif')};
    }
`;
