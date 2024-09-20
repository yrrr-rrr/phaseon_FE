import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/ReleaseStyle';

export default function Release() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      {data.menu.release.releaseversion.map((releaseObj, index) => (
        <s.ReleaseBox key={index}>
          <s.Title>{`Release ${releaseObj.version}`}</s.Title>
          <s.ShortDescription>{releaseObj.date}</s.ShortDescription>
          {releaseObj.extrafeature.map((extraFeatureObj, extraFeatureIndex) => (
            <s.ReleaseTextBox key={extraFeatureObj.feature + extraFeatureIndex}>
              <s.ExtraFeature>{`${extraFeatureObj.feature}기능 추가`}</s.ExtraFeature>
              {extraFeatureObj.description.split('<br/>').map((text, textindex) => (
                <s.Description key={text + textindex}>{text}</s.Description>
              ))}
            </s.ReleaseTextBox>
          ))}
        </s.ReleaseBox>
      ))}
    </s.Section>
  );
}
