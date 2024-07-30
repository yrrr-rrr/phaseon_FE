import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    
  }
  body{
    width: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 1);
  }
  #root{
    width: 100%;
    height: 100%;
    
  }
`;
