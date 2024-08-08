import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import YouTube from 'react-youtube';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/CarouselStyle';

export default function Carousel() {
  const options: EmblaOptionsType = { align: 'center', loop: true, slidesToScroll: 2 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { data } = useContext(ProjectDetailContext);
  const [currentImg, setCurrentImg] = useState<number>(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentImg(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <s.Section>
      <s.PrevButton
        onClick={() => {
          emblaApi?.scrollNext();
        }}
      />
      <s.CarouselViewport ref={emblaRef}>
        <s.CarouselContainer>
          {data.category.projectinfo.carousel.map((carouselObj, key) => {
            if (carouselObj.type == 'video') {
              return (
                <s.CarouselSlide key={carouselObj.img + key}>
                  <YouTube
                    videoId={carouselObj.img}
                    opts={{
                      width: '320px',
                      height: '180px',
                    }}
                  />
                </s.CarouselSlide>
              );
            } else {
              return (
                <s.CarouselSlide key={carouselObj.img + key}>
                  <s.Img src={`/public/${carouselObj.img}`} alt="" $type={carouselObj.type} />
                  {/* imgType={carouselObj.type} */}
                </s.CarouselSlide>
              );
            }
          })}
        </s.CarouselContainer>
        <s.ButtonSection>
          {data.category.projectinfo.carousel.map((carouselObj, index) => (
            <s.SlideButton
              aria-label="btn"
              key={index}
              $bgColor={currentImg == index ? 'color' : 'none'}
              onClick={() => {
                emblaApi?.scrollTo(index);
              }}
            ></s.SlideButton>
          ))}
        </s.ButtonSection>
      </s.CarouselViewport>
      <s.NextButton
        onClick={() => {
          emblaApi?.scrollNext();
        }}
      />
    </s.Section>
  );
}
