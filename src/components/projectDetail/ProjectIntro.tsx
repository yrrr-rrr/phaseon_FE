import { useContext, useEffect } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import { Updater } from 'use-immer';
import * as s from '../../style/projectDetail/ProjectIntroStyle';
import { DetailDataType } from '../../interface';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryContext';

export default function ProjectIntro() {
  const { data, updateData } = useContext(ProjectDetailContext);
  const { introRef } = useContext(CategoryContext);
  const { projectName } = useParams();
  useEffect(() => {
    if (!projectName) return;
    getData(updateData, projectName);
  }, []);

  return (
    <s.Section ref={introRef}>
      <s.Banner src={`/public/png/${projectName}Banner.png`} alt="" />
      <s.IntroSection>
        <s.MainImg src={`/public/png/${projectName}.png`} alt="" />
        <s.ProjectName>{data.projectname}</s.ProjectName>
        <s.ProjectBrief>{data.intro.projectbrief}</s.ProjectBrief>
        <s.Description>{data.intro.description}</s.Description>
      </s.IntroSection>
    </s.Section>
  );
}

async function getData(updateData: Updater<DetailDataType>, projectName: string) {
  try {
    const response = await fetch(`/public/dummy/${projectName}.json`);
    const data = await response.json();
    updateData((obj) => {
      Object.assign(obj, data.data);
    });
  } catch (err) {
    console.log(err);
  }
}
