import React from 'react';
import { ReactComponent as Banner } from '../../assets/svg/ProjectGalleryBanner.svg';
import * as s from '../../style/ProjectGallery/GalleryBannerStyle';

export default function ProjectInfo({ TopRef }: { TopRef: React.RefObject<HTMLDivElement> }) {
  return (
    <s.Section ref={TopRef}>
      <Banner />
      <s.TextBox>
        <s.HighlightText>링크 하나로 끝나는 쉬운 프로젝트 홍보!</s.HighlightText>
        <s.Description>매주 새롭게 업데이트 되는 프로젝트들의 홍보 첫 단계!</s.Description>
        <s.Description>Phase On에서 확인해보세요!</s.Description>
      </s.TextBox>
    </s.Section>
  );
}
