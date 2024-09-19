import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { ZoomContext } from '@/context/ZoomContext';
import ZoomContainer from '@/components/projectDetail/Zoom/ZoomContainer';
import Carousel from '@/components/projectDetail/Carousel';
import * as s from '@/style/projectDetail/ProjectInfoStyle';

export default function ProjectInfo() {
  const { data } = useContext(ProjectDetailContext);
  const { showZoomComponent } = useContext(ZoomContext);
  return (
    <s.Section>
      {showZoomComponent && <ZoomContainer />}
      <Carousel />
      <s.MainFeatureBox>
        <s.MarginBox>
          <s.Title>{`01. ${data.projectname} 기능 소개`}</s.Title>
          <s.ShortDescription>{data.menu.projectinfo.mainfeatures.shortdescription}</s.ShortDescription>
        </s.MarginBox>
        {data.menu.projectinfo.mainfeatures.feature.map((featureObj, key) => (
          <s.MarginBox key={featureObj.title + key}>
            <s.FeatureTitle>{featureObj.title}</s.FeatureTitle>
            <div>
              {featureObj.description.split('<br/>').map((text, textKey) => (
                <s.FeatureDesription key={text + textKey}>
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
          {data.menu.projectinfo.techstack.map((tech, key) => (
            <s.Tech key={key}>
              <s.TechText>{`${tech}`}</s.TechText>
            </s.Tech>
          ))}
        </s.TechBox>
      </s.TechStackBox>
    </s.Section>
  );
}
