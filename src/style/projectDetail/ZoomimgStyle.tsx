import styled from 'styled-components';
import { ReactComponent as CloseButton } from '../../assets/svg/Close.svg';
import { ReactComponent as Left } from '../../assets/svg/LeftButton.svg';
import { ReactComponent as Right } from '../../assets/svg/RightButton.svg';

export const Section = styled.section<{ $show: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 4;
`;

export const LeftButton = styled(Left)`
  position: absolute;
  left: 12vw;
  z-index: 5;
  cursor: pointer;
`;
export const RightButton = styled(Right)`
  position: absolute;
  right: 12vw;
  z-index: 5;
  cursor: pointer;
`;

export const HandelBox = styled.section`
  width: 98vw;
  height: 60px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 6;
`;

export const Close = styled(CloseButton)`
  cursor: pointer;
`;

export const ImgWrapper = styled.div<{ $type: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Div = styled.div<{ $zoomCount: number }>`
  width: ${({ $zoomCount }) => `${80 * $zoomCount}%`};
  height: 80%;
  position: relative;
`;

export const Img = styled.img<{
  $type: string;
  $zoomCount: number;
  $drag: boolean;
  $dragDirection: string;
  $dragOffSet: number;
}>`
  margin: ${({ $dragOffSet }) => ($dragOffSet == 0 ? '0 auto' : `0 0 0 ${$dragOffSet}px`)};
  width: 100%;
  height: 100%;
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
`;
