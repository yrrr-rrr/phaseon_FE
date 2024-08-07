import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
`;

export const TextBox = styled.div`
  width: 465px;
  height: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

export const HighlightText = styled.h1`
  margin-bottom: 15px;
  color: #000;
  font-size: 28px;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;

export const Description = styled.p`
  color: #47484c;
  font-size: 14px;
  font-weight: 400;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;
