import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/PerformanceStyle';
import News from './News';

export default function Performance() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      <s.MarginBox>
        <s.TitleBox>
          <s.Title>Certified Award</s.Title>
          <s.ShortDescription>Phase On 공식 인증 성과</s.ShortDescription>
        </s.TitleBox>
        <s.BadgeBox>
          {data.menu.performance.certifiedaward.map((awardObj, key) => {
            switch (awardObj.badge) {
              case 'Top3':
                return <s.Top3 key={awardObj.badge + key} width={80} height={80} />;
                break;
              case 'Top10':
                return <s.Top10 key={awardObj.badge + key} width={80} height={80} />;
                break;
              case 'Top50':
                return <s.Top50 key={awardObj.badge + key} width={80} height={80} />;
                break;
              case 'Top100':
                return <s.Top100 key={awardObj.badge + key} width={80} height={80} />;
                break;
              case 'PeopleChoice':
                return <s.PeopleChoice key={awardObj.badge + key} width={80} height={80} />;
                break;
            }
          })}
        </s.BadgeBox>
        <s.Ul>
          {data.menu.performance.certifiedaward.map((awardObj, index) => (
            <s.Li key={awardObj.award + index}>{awardObj.award}</s.Li>
          ))}
        </s.Ul>
      </s.MarginBox>
      <s.MarginBox>
        <s.TitleBox>
          <s.Title>Accomplishments</s.Title>
          <s.ShortDescription>{`${data.projectname}팀 프로젝트 성과`}</s.ShortDescription>
        </s.TitleBox>
        <s.Ul>
          {data.menu.performance.accomplishment.map((text, index) => (
            <s.Li key={text + index}>{text}</s.Li>
          ))}
        </s.Ul>
      </s.MarginBox>
      {data.menu.performance.news && <News data={data.menu.performance.news} projectName={data.projectname} />}
    </s.Section>
  );
}
