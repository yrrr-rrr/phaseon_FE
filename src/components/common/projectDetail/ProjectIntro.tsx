import { useContext, useEffect } from 'react';
import { ProjectDetailContext } from '../../../context/ProjectDetailContext';
import { Updater } from 'use-immer';
import * as s from '../../../style/projectDetail/ProjectIntroStyle';
import { DetailDataType } from '../../../interface';
import { ReactComponent as Banner } from '../../../assets/svg/AttiBanner.svg';

export default function ProjectIntro() {
  const { data, updateData } = useContext(ProjectDetailContext);

  useEffect(() => {
    getData(updateData);
  }, []);

  return (
    <s.Section>
      <Banner />
      <s.IntroSection>
        <s.MainImg />
        <s.ProjectName>{data.projectname}</s.ProjectName>
        <s.ProjectBrief>{data.intro.projectbrief}</s.ProjectBrief>
        <s.Description>{data.intro.description}</s.Description>
      </s.IntroSection>
    </s.Section>
  );
}

async function getData(updateData: Updater<DetailDataType>) {
  try {
    const response = await fetch('dummy/atti.json');
    const data = await response.json();
    updateData((obj) => {
      Object.assign(obj, data);
    });
  } catch (err) {
    console.log(err);
  }
}
