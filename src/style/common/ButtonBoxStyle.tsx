import styled from 'styled-components';
import { ReactComponent as Left } from '../../assets/svg/LeftButton.svg';
import { ReactComponent as Right } from '../../assets/svg/RightButton.svg';

export const ButtonBox = styled.div<{ $top: number }>`
  padding: 10px 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: ${({ $top }) => `${$top}vh`};
  z-index: 1;
`;

export const PrevButton = styled(Left)`
  cursor: pointer;
`;

export const NextButton = styled(Right)`
  cursor: pointer;
`;
