import styled from 'styled-components';

export const Section = styled.section`
  padding: 32px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const Project = styled.div`
  width: 253px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  cursor: pointer;
`;

export const ProjectName = styled.span`
  color: #47484c;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const Description = styled.p`
  color: #858588;
  font-size: 12px;
  font-weight: 400;
  line-height: 133.4%;
  letter-spacing: 0.302px;
`;

export const Img = styled.img`
  width: 19vw;
  height: 19vw;
  border-radius: 12px;
`;
