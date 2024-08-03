import styled from 'styled-components';
import { ReactComponent as Top3Badge } from '../../assets/svg/Top3.svg';
import { ReactComponent as Top10Badge } from '../../assets/svg/Top10.svg';
import { ReactComponent as Top50Badge } from '../../assets/svg/Top50.svg';
import { ReactComponent as Top100Badge } from '../../assets/svg/Top100.svg';
import { ReactComponent as PeopleChoiceBadge } from '../../assets/svg/PeopleChoice.svg';

export const Section = styled.section`
  padding-top: 32px;
  width: 780px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.9);
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.section`
  margin-bottom: 24px;
`;

export const Title = styled.p`
  margin-bottom: 4px;
  color: #1464e5;
  font-size: 22px;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;
`;

export const ShortDescription = styled.p`
  color: #858588;
  font-size: 14px;
  font-weight: 400;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const BadgeBox = styled.section`
  margin-bottom: 8px;
  width: auto;
  height: 80px;
  display: flex;
`;

export const Top3 = styled(Top3Badge)`
  margin-right: 20px;
  width: 80px;
`;
export const Top10 = styled(Top10Badge)`
  margin-right: 20px;
  width: 80px;
`;
export const Top50 = styled(Top50Badge)`
  margin-right: 20px;
  width: 80px;
`;
export const Top100 = styled(Top100Badge)`
  margin-right: 20px;
  width: 80px;
`;
export const PeopleChoice = styled(PeopleChoiceBadge)`
  margin-right: 20px;
  width: 80px;
`;

export const Ul = styled.ul`
  width: 740px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
`;

export const Li = styled.li`
  text-indent: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  color: #47484c;
  display: flex;
  align-items: center;
  position: relative;
  &&::after {
    content: '';
    width: 3px;
    height: 3px;
    border-radius: 10px;
    border: none;
    display: block;
    position: absolute;
    top: 10px;
    background-color: black;
  }
`;

export const MarginBox = styled.section`
  margin: 24px 0;
  width: 740px;
`;
