import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { CategoryContext } from '@/context/CategoryContext';
import StarButton from '@/components/common/StarButon';
import ShareButton from '@/components/common/ShareButton';
import NotificationButton from '@/components/common/NotificationButton';
import * as s from '@/style/projectDetail/FloatingBoxStyle';
import { Icon } from '@/components/common/Icon';

export default function FloatingBox() {
  const { data } = useContext(ProjectDetailContext);
  const { setCurrentCategory, introRef } = useContext(CategoryContext);
  function changeCategory(category: string) {
    setCurrentCategory(category);
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <s.Section $buttonNum={data.floatmenu.buttons.length}>
      <s.ViewCategoryBox>
        <s.Category>{`phase ${data.floatmenu.phase}`}</s.Category>
        <s.ViewBox>
          <Icon name="View" />
          <s.View>{data.floatmenu.view}</s.View>
        </s.ViewBox>
      </s.ViewCategoryBox>
      <s.PromotionBox>
        {data.floatmenu.buttons.map((buttonObj, index) => (
          <s.PromotionButton
            key={buttonObj.buttontext + index}
            onClick={() => {
              window.open(buttonObj.link);
            }}
          >
            <Icon name="TempImg" />
            <s.ButtonText>{buttonObj.buttontext}</s.ButtonText>
          </s.PromotionButton>
        ))}
        <s.CoffeeChatButton>
          <Icon name="Coffee" />
          <s.CoffeeChatText>커피챗 요청하기</s.CoffeeChatText>
        </s.CoffeeChatButton>
      </s.PromotionBox>
      <s.ImgBox>
        <s.Title>주요 성과</s.Title>
        <div>
          {(() => {
            switch (data.menu.performance.certifiedaward[0]?.badge) {
              case 'Top3':
                return <s.SvgIcon name="Top3" width={40} height={40} />;
                break;
              case 'Top10':
                return <s.SvgIcon name="Top10" width={40} height={40} />;
                break;
              case 'Top50':
                return <s.SvgIcon name="Top50" width={40} height={40} />;
                break;
              case 'Top100':
                return <s.SvgIcon name="Top100" width={40} height={40} />;
                break;
              case 'PeopleChoice':
                return <s.SvgIcon name="PeopleChoice" width={40} height={40} />;
                break;
            }
          })()}
        </div>
        <s.MoreContent
          onClick={() => {
            changeCategory('performance');
          }}
        >
          전체보기
        </s.MoreContent>
      </s.ImgBox>
      <s.ImgBox>
        <s.Title>제작자</s.Title>
        <div>
          {data.menu.introduction.members.map((memberObj, index) => {
            if (index < 6) {
              if (memberObj.img == null) {
                return <s.PersonSvg key={index} name="DefaultUserImg" width={40} height={40} />;
              }
              return <s.Img src={`/public/${memberObj.img}`} alt="" key={index} />;
            }
          })}
        </div>
        <s.MoreContent
          onClick={() => {
            changeCategory('introduction');
          }}
        >
          전체보기
        </s.MoreContent>
      </s.ImgBox>
      <s.ButtonBox>
        <s.Div>
          <StarButton width={90} height={32} />
          <NotificationButton width={90} height={32} />
        </s.Div>
        <ShareButton width={188} height={32} />
      </s.ButtonBox>
    </s.Section>
  );
}
