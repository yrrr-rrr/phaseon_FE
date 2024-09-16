import { useNavigate } from 'react-router-dom';
import * as s from '../../style/common/HeaderStyle';
import { ReactComponent as ProjectIcon } from '../../assets/svg/SmallProjectIcon.svg';

export default function Header() {
  const navigate = useNavigate();
  return (
    <s.Header>
      <s.NavigationBox width={353}>
        <s.Logo
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
            <ProjectIcon />
            <p>프로젝트</p>
          </s.IconBox>
          <p>아티클</p>
        </s.Nav>
      </s.NavigationBox>
      <s.NavigationBox width={214}>
        <s.Search />
        <s.RegisterButton>
          <s.Register />
          등록하기
        </s.RegisterButton>
        <s.User width={32} height={32} />
      </s.NavigationBox>
    </s.Header>
  );
}
