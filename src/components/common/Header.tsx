import { useNavigate } from 'react-router-dom';
import * as s from '@/style/common/HeaderStyle';
import { Icon } from '@/components/common/Icon';

export default function Header() {
  const navigate = useNavigate();
  return (
    <s.Header>
      <s.NavigationBox width={353}>
        <s.SvgIcon
          name="Logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <s.Nav>
          <s.IconBox
            color="#69ACFF"
            onClick={() => {
              navigate('/');
            }}
          >
            <Icon name="SmallProjectIcon" />
            <p>프로젝트</p>
          </s.IconBox>
          <p>아티클</p>
        </s.Nav>
      </s.NavigationBox>
      <s.NavigationBox width={214}>
        <s.SvgIcon name="Search" />
        <s.RegisterButton>
          <s.SvgIcon name="Register" />
          등록하기
        </s.RegisterButton>
        <s.SvgIcon name="DefaultUserImg" width={32} height={32} />
      </s.NavigationBox>
    </s.Header>
  );
}
