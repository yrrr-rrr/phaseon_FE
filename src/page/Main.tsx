import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AllProjectView from '@/components/main/AllProjectView';
import MainBanner from '@/components/main/MainBanner';
import { MainProvider } from '@/context/MainContext';
import * as s from '@/style/main/MainStyle';
import ComingSoonModal from '@/components/common/ComingSoonModal';

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <ComingSoonModal setShowModal={setShowModal} />}
      <Header setShowModal={setShowModal} />
      <s.MainStyle>
        <MainProvider>
          <MainBanner />
          <s.Section>
            <AllProjectView />
          </s.Section>
        </MainProvider>
      </s.MainStyle>
      <Footer />
    </>
  );
}
