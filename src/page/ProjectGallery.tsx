import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ProjectInfo from '../components/projectGallery/GalleryBanner';
import ProjectCollection from '../components/projectGallery/ProjectCollection';
import * as s from '../style/projectDetail/ProjectDetailsStyle';

export default function ProjectGallery() {
  return (
    <>
      <Header />
      <s.Main>
        <ProjectInfo />
        <ProjectCollection />
      </s.Main>
      <Footer />
    </>
  );
}
