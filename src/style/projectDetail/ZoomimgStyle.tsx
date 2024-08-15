import styled from 'styled-components';

export const Section = styled.section<{ $show: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0b1000eb;
  z-index: 4;
`;

export const HandelBox = styled.section`
  width: 98%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  background-color: yellowgreen;
`;

export const Img = styled.img<{ $type: string }>`
  padding-top: 20px;
  width: ${({ $type }) => ($type == 'row' ? '98%' : '30%')};
  height: 100%;
  box-sizing: border-box;
  cursor: grab;
`;

export const Button = styled.p<{ $direction: string }>`
  font-size: 20px;
  position: absolute;
  ${({ $direction }) => ($direction == 'left' ? 'left:0;' : 'right:0;')}
  background-color: yellowgreen;
  z-index: 5;
  cursor: pointer;
`;
