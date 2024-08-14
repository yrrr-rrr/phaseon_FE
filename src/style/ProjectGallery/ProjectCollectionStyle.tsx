import styled from 'styled-components';

export const Section = styled.section`
  padding: 32px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
`;

export const Project = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
`;

export const ProjectName = styled.p`
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
  width: 15vw;
  height: 15vw;
  border-radius: 12px;
`;
