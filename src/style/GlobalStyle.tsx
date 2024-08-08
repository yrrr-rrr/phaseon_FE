import { createGlobalStyle } from 'styled-components';
import Pretendard_Variable from './font/PretendardJPVariable.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard';
  src: url(${Pretendard_Variable})format("woff");
  font-style: normal;
}

  *{
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
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
