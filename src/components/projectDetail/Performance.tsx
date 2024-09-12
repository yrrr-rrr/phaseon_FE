import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/PerformanceStyle';
import News from './News';

export default function Performance() {
  const { data } = useContext(ProjectDetailContext);
  function getBadge(award: string) {
    switch (award) {
      case 'Top3':
        return <s.Top3 width={56} height={56} />;
        break;
      case 'Top10':
        return <s.Top10 width={56} height={56} />;
        break;
      case 'Top50':
        return <s.Top50 width={56} height={56} />;
        break;
      case 'Top100':
        return <s.Top100 width={56} height={56} />;
        break;
      case 'PeopleChoice':
        return <s.PeopleChoice width={56} height={56} />;
        break;
    }
  }
  return (
    <s.Section>
      <section>
        <s.Title>수상 및 인증 이력</s.Title>
        <s.ShortDescription>Phase On 공식 인증 성과</s.ShortDescription>
      </section>
      <s.AwardBox>
        {data.menu.performance.certifiedaward.map((awardObj, index) => (
          <s.Award key={index}>
            {getBadge(awardObj.badge)}
            <s.AwardName>{awardObj.award}</s.AwardName>
            <s.Agency>{awardObj.certifyingAgency}</s.Agency>
          </s.Award>
        ))}
        <s.Uncertifiedaward>
          {data.menu.performance.certifiedaward.map((awardObj, index) => (
            <s.Li key={awardObj.award + index}>{awardObj.award}</s.Li>
          ))}
        </s.Uncertifiedaward>
      </s.AwardBox>
      {data.menu.performance.news && <News data={data.menu.performance.news} projectName={data.projectname} />}
    </s.Section>
  );
}
