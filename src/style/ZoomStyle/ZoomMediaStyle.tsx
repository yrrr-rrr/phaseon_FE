import styled from 'styled-components';

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
  height: 70%;
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
