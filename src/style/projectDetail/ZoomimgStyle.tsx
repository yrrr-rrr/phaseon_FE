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
  width: 98vw;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 6;
  background-color: yellowgreen;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Div = styled.div<{ $drag: boolean; $dragOffSet: number }>`
  display: flex;
  align-items: center;
  transition-duration: ${({ $drag }) => ($drag ? 'none' : '0.3s')};
  transform: translateX(${({ $dragOffSet }) => `${$dragOffSet}px`});
`;

export const Img = styled.img<{
  $type: string;
  $zoomCount: number;
  $drag: boolean;
  $dragDirection: string;
  $dragOffSet: number;
}>`
  padding: 0 20px;
  box-sizing: border-box;
  width: ${({ $type }) => ($type == 'row' ? '100%' : '40%')};
  height: 100vh;
  position: absolute;
  object-fit: contain;
  user-select: none;
  transition-duration: ${({ $dragOffSet }) => ($dragOffSet != 0 ? '' : '0.3s')};
  transform-origin: center center;
  opacity: ${({ $dragDirection }) => ($dragDirection !== 'none' ? 0 : 1)};
  cursor: ${({ $drag }) => ($drag ? 'grabbing' : 'grab')};
`;

export const Button = styled.p<{ $direction: string }>`
  font-size: 20px;
  position: absolute;
  ${({ $direction }) => ($direction == 'left' ? 'left:0;' : 'right:0;')}
  background-color: yellowgreen;
  z-index: 5;
  cursor: pointer;
`;
