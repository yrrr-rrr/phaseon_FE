import styled from 'styled-components';

export const Section = styled.section`
  width: 1100px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Banner = styled.img`
  width: 1100px;
  height: 160px;
  position: absolute;
`;

export const TempBanner = styled.div`
  width: 1100px;
  height: 160px;
  position: absolute;
  background-color: #f7f7f8;
`;

export const IntroSection = styled.section`
  margin-top: 80px;
  padding: 0 20px;
  width: 780px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: none;
  z-index: 2;
`;

export const MainImg = styled.img`
  margin-bottom: 24px;
  width: 160px;
  border-radius: 4px;
  box-shadow:
    0px 5.405px 21.62px 0px rgba(0, 0, 0, 0.12),
    0px 2.702px 10.81px 0px rgba(0, 0, 0, 0.08),
    0px 0px 2.702px 0px rgba(0, 0, 0, 0.08);
`;

export const ProjectName = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 133.4%;
  letter-spacing: -0.972px;
`;

export const ProjectBrief = styled.p`
  margin-bottom: 16px;
  color: #858588;
  font-size: 22px;
  font-weight: 400;
  line-height: 136.4%;
  letter-spacing: -0.427px;
`;

export const Description = styled.p`
  color: #171719;
  font-size: 16px;
  font-weight: 400;
  line-height: 162.5%;
  letter-spacing: 0.091px;
`;
