import styled from 'styled-components';

export const Main = styled.main<{ $overflow: string }>`
  padding: 0 12vw;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: ${({ $overflow }) => $overflow};
`;
export const Div = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 10vw;
  z-index: 4;
`;
