import { useEffect } from 'react';
import { Updater, useImmer } from 'use-immer';
import { ProjectGalleryData } from '../../interface';
import * as s from '../../style/ProjectGallery/ProjectCollectionStyle';
import { useNavigate } from 'react-router-dom';

export default function ProjectCollection() {
  const [project, updateProject] = useImmer<ProjectGalleryData>({
    data: [],
  });
  const navigate = useNavigate();
  useEffect(() => {
    getProjects(updateProject);
  }, []);
  return (
    <s.Section>
      {project.data.map((projectObj, index) => (
        <s.Project
          key={index}
          onClick={() => {
            navigate(projectObj.param.toLowerCase());
          }}
        >
          <s.Img src={projectObj.img} alt="" />
          <s.ProjectName>{projectObj.projectname}</s.ProjectName>
          <s.Description>{projectObj.description}</s.Description>
        </s.Project>
      ))}
    </s.Section>
  );
}

async function getProjects(updateProject: Updater<ProjectGalleryData>) {
  const response = await fetch('dummy/projectCollection.json');
  const data = await response.json();
  updateProject((obj) => {
    Object.assign(obj, data);
  });
}
