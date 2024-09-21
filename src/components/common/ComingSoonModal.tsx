import { SetStateAction, useEffect } from 'react';
import { Icon } from '@/components/common/Icon';
import * as s from '@/style/common/CommingSoonModalStyle';

export default function ComingSoonModal({ setShowModal }: { setShowModal: React.Dispatch<SetStateAction<boolean>> }) {
  const floatBox = document.querySelector('.sticky-road') as HTMLElement;
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  useEffect(() => {
    if (floatBox) {
      const defaultPosition = parseInt(window.getComputedStyle(floatBox).right, 10);
      floatBox.style.right = `${defaultPosition + 3.5}px`;
    }
    if (header) {
      const defaultHeaderPadding = parseInt(window.getComputedStyle(header).paddingRight, 10);
      header.style.paddingRight = `${defaultHeaderPadding + 3.5}px`;
    }
    if (main) {
      const defaultMainPadding = parseInt(window.getComputedStyle(main).paddingRight, 10);
      main.style.paddingRight = `${defaultMainPadding + 3.5}px`;
    }

    document.body.style.overflow = 'hidden';
  }, [floatBox, main, header]);

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
            if (floatBox) {
              floatBox.style.right = '';
            }
            if (header) {
              header.style.paddingRight = '';
            }
            if (main) {
              main.style.paddingRight = '';
            }
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
