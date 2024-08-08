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
    overflow: auto;
  }
  #root{
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }
  
  
  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #E0E0E2;
}
`;
