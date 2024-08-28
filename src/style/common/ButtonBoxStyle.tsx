import styled from 'styled-components';
import { ReactComponent as Left } from '../../assets/svg/LeftButton.svg';
import { ReactComponent as Right } from '../../assets/svg/RightButton.svg';

export const ButtonBox = styled.div`
  padding: 10px 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 49%;
  z-index: 1;
  pointer-events: none;
`;

export const PrevButton = styled(Left)`
  pointer-events: auto;
  cursor: pointer;
`;

export const NextButton = styled(Right)`
  pointer-events: auto;
  cursor: pointer;
`;
