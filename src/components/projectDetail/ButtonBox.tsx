import { EmblaCarouselType } from 'embla-carousel';
import * as s from '../../style/projectDetail/ButtonBoxStyle';

export default function ButtonBox({ emblaApi, padding }: { emblaApi: EmblaCarouselType | undefined; padding: number }) {
  return (
    <s.ButtonBox $padding={padding}>
      <s.PrevButton
        onClick={() => {
          if (!emblaApi) return;
          emblaApi.scrollPrev();
          emblaApi.plugins().autoScroll.stop();
          startScroll(emblaApi);
        }}
      >
        prev
      </s.PrevButton>
      <s.NextButton
        onClick={() => {
          if (!emblaApi) return;
          emblaApi.scrollNext();
          emblaApi.plugins().autoScroll.stop();
          startScroll(emblaApi);
        }}
      >
        next
      </s.NextButton>
    </s.ButtonBox>
  );
}

function startScroll(emblaApi: EmblaCarouselType) {
  setTimeout(() => {
    emblaApi.plugins().autoScroll.play();
  }, 3000);
}
