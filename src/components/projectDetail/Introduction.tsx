import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/IntroductionStyle';
import { ReactComponent as Instargram } from '../../assets/svg/Instargram.svg';

export default function Introduction() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      {data.category.introduction.members.map((memberObj, index) => (
        <s.Profile key={index}>
          {memberObj.img == null ? (
            <s.PersonSvg width="56" height="56" />
          ) : (
            <s.Img src={`/public/${memberObj.img}`} alt="" />
          )}
          <s.Name>{memberObj.name}</s.Name>
          <s.InfoBox>
            <p>{memberObj.role}</p>
            <p>{memberObj.email}</p>
          </s.InfoBox>
          <div>
            {memberObj.profilelink.map((links, linkindex) => {
              if (links.icon == 'instargram') {
                return (
                  <Instargram
                    key={links.link}
                    onClick={() => {
                      window.open(links.link);
                    }}
                  />
                );
              }
            })}
          </div>
        </s.Profile>
      ))}
    </s.Section>
  );
}
