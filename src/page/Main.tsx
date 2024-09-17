import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AllProjectView from '@/components/main/AllProjectView';
import MainBanner from '@/components/main/MainBanner';
import { MainProvider } from '@/context/MainContext';
import * as s from '@/style/main/MainStyle';

export default function Main() {
  return (
    <>
      <Header />
      <s.MainStyle>
        <MainProvider>
          <MainBanner />
          <s.Section>
            <s.StickyRoad>
              <Category />
            </s.StickyRoad>
            <AllProjectView />
          </s.Section>
        </MainProvider>
      </s.MainStyle>
      <Footer />
    </>
  );
}
