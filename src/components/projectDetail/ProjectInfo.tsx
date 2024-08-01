import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/ProjectInfoStyle';
import Carousel from './Carousel';
export default function ProjectInfo() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      <Carousel />
      <s.MainFeatureBox>
        <s.MarginBox>
          <s.Title>{`01. ${data.projectname} 기능 소개`}</s.Title>
          <s.ShortDescription>{data.category.projectinfo.mainfeatures.shortdescription}</s.ShortDescription>
        </s.MarginBox>
        {data.category.projectinfo.mainfeatures.feature.map((obj, n) => (
          <s.MarginBox key={obj.title + n}>
            <s.FeatureTitle>{obj.title}</s.FeatureTitle>
            <div>
              {obj.description.split('<br/>').map((text, n) => (
                <s.FeatureDesription key={text + n}>
                  {text}
                  <br />
                </s.FeatureDesription>
              ))}
            </div>
          </s.MarginBox>
        ))}
      </s.MainFeatureBox>
      <s.TechStackBox>
        <s.MarginBox>
          <s.Title>{`02. ${data.projectname} 주요 기술`}</s.Title>
          <s.ShortDescription>{`${data.projectname} Build with:`}</s.ShortDescription>
        </s.MarginBox>
        <s.TechBox>
          {data.category.projectinfo.techstack.map((tech, n) => (
            <s.Tech key={tech + n}>
              <s.TechText>{`#${tech}`}</s.TechText>
            </s.Tech>
          ))}
        </s.TechBox>
      </s.TechStackBox>
    </s.Section>
  );
}
