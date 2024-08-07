import { useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import FloatingBox from '../components/projectDetail/FloatingBox';
import ProjectDashboard from '../components/projectDetail/ProjectDashboard';
import ProjectIntro from '../components/projectDetail/ProjectIntro';
import { CategoryProvider } from '../context/CategoryContext';
import { ProjectDetailProvider } from '../context/ProjectDetailContext';
import * as s from '../style/projectDetail/ProjectDetailsStyle';

export default function ProjectDetails() {
  const { projectName } = useParams();
  console.log(projectName);
  return (
    <>
      <Header />
      <s.Main>
        <ProjectDetailProvider>
          <s.Div>
            <FloatingBox />
          </s.Div>
          <ProjectIntro />
          <CategoryProvider>
            <ProjectDashboard />
          </CategoryProvider>
        </ProjectDetailProvider>
      </s.Main>
      <Footer />
    </>
  );
}
