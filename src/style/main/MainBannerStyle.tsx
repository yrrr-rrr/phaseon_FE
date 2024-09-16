import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TempBanner = styled.div`
  width: 1100px;
  height: 160px;
  background-color: #f7f7f8;
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
