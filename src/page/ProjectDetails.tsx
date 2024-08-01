import Header from '../components/common/Header';
import ProjectDashboard from '../components/projectDetail/ProjectDashboard';
import ProjectIntro from '../components/projectDetail/ProjectIntro';
import { CategoryProvider } from '../context/CategoryContext';
import { ProjectDetailProvider } from '../context/ProjectDetailContext';
import * as s from '../style/projectDetail/ProjectDetailsStyle';

export default function ProjectDetails() {
  return (
    <>
      <Header />
      <s.Main>
        <ProjectDetailProvider>
          <ProjectIntro />
          <CategoryProvider>
            <ProjectDashboard />
          </CategoryProvider>
        </ProjectDetailProvider>
      </s.Main>
    </>
  );
}
