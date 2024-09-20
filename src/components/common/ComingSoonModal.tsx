import { SetStateAction, useEffect } from 'react';
import { Icon } from '@/components/common/Icon';
import * as s from '@/style/common/CommingSoonModalStyle';

export default function ComingSoonModal({ setShowModal }: { setShowModal: React.Dispatch<SetStateAction<boolean>> }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <s.Div>
      <s.ModalBox>
        <s.Close
          name="Close"
          fill="black"
          width={24}
          height={24}
          onClick={() => {
            setShowModal(false);
            document.body.style.overflow = 'scroll';
          }}
        />
        <s.Logoicon name="LogoIcon" />
        <s.Headline>곧 런칭 예정!</s.Headline>
        <s.Description>페이즈온은 10월 중 정식 런칭 예정에 있어요.</s.Description>
        <s.Description> 잠시 후 훌륭한 서비스로 다시 찾아올게요!</s.Description>
        <s.CheckButton type="button">
          <Icon name="Check" />
          <p>확인 완료</p>
        </s.CheckButton>
      </s.ModalBox>
    </s.Div>
  );
}
