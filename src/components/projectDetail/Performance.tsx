import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/PerformanceStyle';
import News from '@/components/projectDetail/News';

export default function Performance() {
  const { projectInfo, accomplishmentInfo } = useContext(ProjectDetailContext);
  const news = accomplishmentInfo.accomplishments.filter((obj) => obj.type === 'NEWS');
  // const reward = accomplishmentInfo.accomplishments.filter((obj) => obj.type === 'REWARD');
  const achievement = accomplishmentInfo.accomplishments.filter((obj) => obj.type === 'ACHIEVEMENT');
  const certification = accomplishmentInfo.accomplishments.filter((obj) => obj.type === 'CERTIFICATE');

  // 추후 일반 img로 변경 예정
  function getBadge(award: string) {
    switch (award) {
      case 'Top3':
        return <s.SvgIcon name="Top3" width={56} height={56} />;
        break;
      case 'Top10':
        return <s.SvgIcon name="Top10" width={56} height={56} />;
        break;
      case 'Top50':
        return <s.SvgIcon name="Top50" width={56} height={56} />;
        break;
      case 'Top100':
        return <s.SvgIcon name="Top100" width={56} height={56} />;
        break;
      case 'PeopleChoice':
        return <s.SvgIcon name="PeopleChoice" width={56} height={56} />;
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
        {certification.map((awardObj, index) => (
          <s.Award key={index}>
            {getBadge(awardObj.thumbnail)}
            <s.AwardName>{awardObj.title}</s.AwardName>
            <s.Agency>{awardObj.publisher}</s.Agency>
          </s.Award>
        ))}
        <s.Uncertifiedaward>
          {achievement.map((awardObj, index) => (
            <s.Li key={index + awardObj.title}>{awardObj.title}</s.Li>
          ))}
        </s.Uncertifiedaward>
      </s.AwardBox>
      {news.length && <News data={news} projectName={projectInfo.title} />}
    </s.Section>
  );
}
