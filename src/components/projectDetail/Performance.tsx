import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/PerformanceStyle';
import News from './News';

export default function Performance() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      <section>
        <s.TitleBox>
          <s.Title>Certified Award</s.Title>
          <s.ShortDescription>Phase On 공식 인증 성과</s.ShortDescription>
        </s.TitleBox>
        <s.BadgeBox>
          {data.category.performance.certifiedaward.map((awardObj, key) => {
            if (awardObj.badge == 'Top3') {
              return <s.Top3 key={key} />;
            } else if (awardObj.badge == 'Top10') {
              return <s.Top10 key={key} />;
            } else if (awardObj.badge == 'Top50') {
              return <s.Top10 key={key} />;
            } else if (awardObj.badge == 'Top100') {
              return <s.Top100 key={key} />;
            } else {
              return <s.PeopleChoice key={key} />;
            }
          })}
        </s.BadgeBox>
        <s.Ul>
          {data.category.performance.certifiedaward.map((awardObj, index) => (
            <s.Li key={awardObj.award + index}>{awardObj.award}</s.Li>
          ))}
        </s.Ul>
      </section>
      <s.MarginBox>
        <s.TitleBox>
          <s.Title>Accomplishments</s.Title>
          <s.ShortDescription>{`${data.projectname}팀 프로젝트 성과`}</s.ShortDescription>
        </s.TitleBox>
        <s.Ul>
          {data.category.performance.accomplishment.map((text, index) => (
            <s.Li key={text + index}>{text}</s.Li>
          ))}
        </s.Ul>
      </s.MarginBox>
      <News data={data.category.performance.news} projectName={data.projectname} />
    </s.Section>
  );
}
