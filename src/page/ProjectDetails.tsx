import { useState } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import FloatingBox from '@/components/projectDetail/FloatingBox';
import ProjectDashboard from '@/components/projectDetail/ProjectDashboard';
import ProjectIntro from '@/components/projectDetail/ProjectIntro';
import { CategoryProvider } from '@/context/CategoryContext';
import { ProjectDetailProvider } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/ProjectDetailsStyle';
import { Main } from '@/style/common/MainStyle';
import ComingSoonModal from '@/components/common/ComingSoonModal';

export default function ProjectDetails() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <ComingSoonModal setShowModal={setShowModal} />}
      <Header setShowModal={setShowModal} />
      <Main $overflow="none">
        <ProjectDetailProvider>
          <CategoryProvider>
            <s.Div className="sticky-road">
              <FloatingBox setShowModal={setShowModal} />
            </s.Div>
            <ProjectIntro />
            <ProjectDashboard />
          </CategoryProvider>
        </ProjectDetailProvider>
      </Main>
      <Footer />
    </>
  );
}
