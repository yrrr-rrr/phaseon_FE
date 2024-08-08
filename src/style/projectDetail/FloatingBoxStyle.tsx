import styled from 'styled-components';
import { ReactComponent as Top3Icon } from '../../assets/svg/Top3.svg';
import { ReactComponent as Top10Icon } from '../../assets/svg/Top10.svg';
import { ReactComponent as Top100Icon } from '../../assets/svg/Top100.svg';
import { ReactComponent as Top50Icon } from '../../assets/svg/Top50.svg';
import { ReactComponent as PeoPleChoiceIcon } from '../../assets/svg/PeopleChoice.svg';
import { ReactComponent as Person } from '../../assets/svg/Person.svg';

export const Section = styled.section`
  margin-bottom: 80px;
  padding: 16px;
  width: 240px;
  height: 545px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 140px;
  gap: 8px;
  background-color: white;
  z-index: 2;
`;

export const ViewCategoryBox = styled.div`
  width: 208px;
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.p`
  padding: 4.5px 6px;
  width: 67px;
  height: 23px;
  box-sizing: border-box;

  color: #34c759;
  font-size: 11px;
  font-weight: 600;
  line-height: 127.3%;
  letter-spacing: 0.342px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #34c75914;
`;

export const View = styled.span`
  color: #47484c;
  font-size: 13px;
  font-weight: 400;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const PromotionBox = styled.div`
  padding: 7.6px 0 12px 0;
  width: 208px;
  border-bottom: 1px solid #cfebff7f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PromotionButton = styled.button`
  margin-bottom: 4px;
  padding: 7px 14px;
  width: 208px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #69acff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;

  &&:hover {
    background-color: #f7fbff;
  }
  &&:active {
    background-color: #edf5ff;
  }
`;

export const ButtonText = styled.span`
  margin-left: 4px;
  color: #69acff;
  font-size: 13px;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const CoffeeChatButton = styled.button`
  padding: 7px 14px;
  width: 208px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #69acff;
  outline: none;

  &&:hover {
    background-color: #63a1ee;
  }
  &&:active {
    background-color: #5a91d6;
  }
`;

export const CoffeeChatText = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const ReleaseBox = styled.div`
  padding: 16px 12px;
  width: 208px;
  border-bottom: 1px solid #cfebff7f;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.span`
  color: #171719;
  font-size: 11px;
  font-weight: 590;
  line-height: 13px;
  letter-spacing: 0.06px;
`;

export const ReleaseDescription = styled.p`
  color: #858588;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.06px;
`;

export const ImgBox = styled.div`
  padding: 16px 12px;
  width: 208px;
  border-bottom: 1px solid #cfebff7f;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Top3 = styled(Top3Icon)`
  margin-right: -10px;
`;
export const Top10 = styled(Top10Icon)`
  margin-right: -10px;
`;
export const Top50 = styled(Top50Icon)`
  margin-right: -10px;
`;
export const Top100 = styled(Top100Icon)`
  margin-right: -10px;
`;
export const PeopleChoice = styled(PeoPleChoiceIcon)`
  margin-right: -10px;
`;

export const MoreContent = styled.span`
  color: #47484c;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.06px;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Img = styled.img`
  margin-right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
`;

export const ButtonBox = styled.div`
  margin: 16px 0;
  width: 208px;
  display: flex;
  gap: 8px;
`;

export const PersonSvg = styled(Person)`
  margin-right: -10px;
  border-radius: 100%;
  background-color: white;
`;
