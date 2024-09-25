import * as s from '@/style/common/FooterStyle';
import { Icon } from '@/components/common/Icon';

export default function Footer() {
  return (
    <s.Footer>
      <s.TopSection>
        <s.ServiceInfo>
          <Icon name="Logo" />
          <p>링크 하나로 시작하는 프로젝트 홍보 첫 발 내딛기</p>
        </s.ServiceInfo>
        <s.FooterMenu>
          <s.Menu>제안하기</s.Menu>
          <s.Menu>서비스 소개</s.Menu>
          <s.Menu>이용약관</s.Menu>
          <s.Menu>개인정보 처리방침</s.Menu>
        </s.FooterMenu>
      </s.TopSection>
      <s.MidSection>
        <s.Div>
          <s.DividingLine>지금.lab</s.DividingLine>
          <p>대표 남우진</p>
        </s.Div>
        <s.Div>
          <s.DividingLine>부산광역시 부산진구 동천로 116, 3층</s.DividingLine>
          <p>사업자등록번호: 765-57-00786</p>
        </s.Div>
        <p>문의하기: treejin@phaseon.me</p>
      </s.MidSection>
      <s.BottomSection>
        <p>© 2024 지금.lab</p>
        <div>
          <s.Instargram name="INSTARGRAM" width={24} height={24} fill="#8E8E93" />
          <s.LinkedIn name="LINKEDIN" width={24} height={24} fill="#8E8E93" />
        </div>
      </s.BottomSection>
    </s.Footer>
  );
}
