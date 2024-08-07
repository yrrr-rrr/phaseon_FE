import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import { ReactComponent as Coffee } from '../../assets/svg/Coffee.svg';
import StarButton from '../common/StarButon';
import ShareButton from '../common/ShareButton';
import * as s from '../../style/projectDetail/FloatingBoxStyle';
import { ReactComponent as Temp } from '../../assets/svg/TempImg.svg';

export default function FloatingBox() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      <s.ViewCategoryBox>
        <s.Category>{data.floatmenu.category}</s.Category>
        <s.View>{`조회수 ${data.floatmenu.view}`}</s.View>
      </s.ViewCategoryBox>
      <s.PromotionBox>
        {data.floatmenu.buttons.map((buttonObj, index) => (
          <s.PromotionButton
            key={buttonObj.buttontext + index}
            onClick={() => {
              window.open(buttonObj.link);
            }}
          >
            <Temp />
            <s.ButtonText>{buttonObj.buttontext}</s.ButtonText>
          </s.PromotionButton>
        ))}
        <s.CoffeeChatButton>
          <Coffee />
          <s.CoffeeChatText>커피챗 요청하기</s.CoffeeChatText>
        </s.CoffeeChatButton>
      </s.PromotionBox>
      <s.ReleaseBox>
        <s.Title>출시 노트</s.Title>
        <s.ReleaseDescription>{data.floatmenu.releasenote}</s.ReleaseDescription>
      </s.ReleaseBox>
      <s.ImgBox>
        <s.Title>주요 성과</s.Title>
        <div>
          {data.floatmenu.performance.map((badge, index) => (
            <s.Badge key={badge + index} width={40} height={40} />
          ))}
        </div>
        <s.MoreContent>전체보기</s.MoreContent>
      </s.ImgBox>
      <s.ImgBox>
        <s.Title>제작자</s.Title>
        <div>
          {data.floatmenu.members.map((memberImg, index) => (
            <s.Img key={index} src={memberImg} alt="" />
          ))}
        </div>
        <s.MoreContent>전체보기</s.MoreContent>
      </s.ImgBox>
      <s.ButtonBox>
        <StarButton width={103} height={32} />
        <ShareButton width={103} height={32} />
      </s.ButtonBox>
    </s.Section>
  );
}
