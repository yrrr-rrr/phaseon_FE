import { SVG } from './GetSvg';
import * as s from '../../style/header/HeaderStyle';

export default function Header() {
  return (
    <s.Header>
      <s.NavigationBox width={353}>
        <SVG width="112" height="32" name="logo" />
        <s.Nav>
          <s.IconBox color="#69ACFF">
            <SVG width="24" height="24" name="project" />
            <span>프로젝트</span>
          </s.IconBox>
          <span>아티클</span>
        </s.Nav>
      </s.NavigationBox>
      <s.NavigationBox width={214}>
        <SVG width="24" height="24" name="search" />
        <s.RegisterButton>
          <SVG width="18" height="18" name="register" />
          등록하기
        </s.RegisterButton>
        <SVG width="32" height="32" name="user" />
      </s.NavigationBox>
    </s.Header>
  );
}
