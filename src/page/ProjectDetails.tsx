import Header from '../components/common/Header';
import ProjectIntro from '../components/common/projectDetail/ProjectIntro';
import { ProjectDetailProvider } from '../context/ProjectDetailContext';
import * as s from '../style/projectDetail/ProjectDetailsStyle';

export default function ProjectDetails() {
  return (
    <>
      <Header />
      <s.Main>
        <ProjectDetailProvider>
          <ProjectIntro />
        </ProjectDetailProvider>
      </s.Main>
    </>
  );
}
