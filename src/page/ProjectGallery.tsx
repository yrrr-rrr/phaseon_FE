import { useRef } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ProjectInfo from '../components/projectGallery/GalleryBanner';
import ProjectCollection from '../components/projectGallery/ProjectCollection';
import { Main } from '../style/common/MainStyle';

export default function ProjectGallery() {
  const TopRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header TopRef={TopRef} />
      <Main $overflow="hidden">
        <ProjectInfo />
        <ProjectCollection TopRef={TopRef} />
      </Main>
      <Footer />
    </>
  );
}
