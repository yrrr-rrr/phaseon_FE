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
          {data.category.projectinfo.carousel.map((obj, n) => {
            if (obj.type == 'video') {
              return (
                <s.CarouselSlide key={obj.img + n}>
                  <YouTube
                    videoId={obj.img}
                    opts={{
                      width: '320px',
                      height: '180px',
                    }}
                  />
                </s.CarouselSlide>
              );
            } else {
              return (
                <s.CarouselSlide key={obj.img + n}>
                  <s.Img src={obj.img} alt="" />
                  {/* imgType={obj.type} */}
                </s.CarouselSlide>
              );
            }
          })}
        </s.CarouselContainer>
        <s.ButtonSection>
          {data.category.projectinfo.carousel.map((obj, n) => (
            <s.SlideButton
              aria-label="btn"
              key={obj.img + obj.type + n}
              $bgColor={currentImg == n ? 'color' : 'none'}
              onClick={() => {
                emblaApi?.scrollTo(n);
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
