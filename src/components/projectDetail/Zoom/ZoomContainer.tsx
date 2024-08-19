import { useContext } from 'react';
import { ProjectDetailContext } from '../../../context/ProjectDetailContext';
import { ZoomContext } from '../../../context/ZoomContext';
import HandleBox from './HandleBox';
import ZoomMediaBox from './ZoomMediaBox';
import * as s from '../../../style/projectDetail/ZoomimgStyle';

export default function ZoomContainer() {
  const { data } = useContext(ProjectDetailContext);
  const { showZoomComponent, setStartImg, startImg } = useContext(ZoomContext);
  const carouselImgs = data.category.projectinfo.carousel;

  return (
    <s.Section $show={showZoomComponent}>
      <HandleBox />
      <s.LeftButton
        onClick={() => {
          setStartImg((prev) => {
            if (prev == 0) {
              return carouselImgs.length - 1;
            }
            return prev - 1;
          });
        }}
      />
      <ZoomMediaBox />
      <s.RightButton
        onClick={() => {
          setStartImg((prev) => {
            if (prev == carouselImgs.length - 1) {
              return 0;
            }
            return prev + 1;
          });
          console.log(startImg);
        }}
      />
    </s.Section>
  );
}
