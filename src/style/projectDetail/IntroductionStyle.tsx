import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Section = styled.section`
  padding: 32px 20px;
  width: 780px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.9);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Profile = styled.div`
  padding: 16px 0;
  margin-bottom: 16px;
  width: 178px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  margin-bottom: 12px;
  width: 56px;
  height: 56px;
  border-radius: 100%;
`;

export const PersonSvg = styled(Icon)`
  margin-bottom: 12px;
`;

export const Name = styled.p`
  margin-bottom: 4px;
  color: #171719;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const Role = styled.div`
  color: rgba(55, 56, 60, 0.61);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 146.7%;
  letter-spacing: 0.144px;
`;

export const LinkBox = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
`;
