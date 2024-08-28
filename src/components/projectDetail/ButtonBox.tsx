import { EmblaCarouselType } from 'embla-carousel';
import * as s from '../../style/common/ButtonBoxStyle';

export default function ButtonBox({
  emblaApi,
  startScroll,
}: {
  emblaApi: EmblaCarouselType | undefined;
  startScroll?: (emblaApi: EmblaCarouselType) => void;
}) {
  return (
    <s.ButtonBox>
      <s.PrevButton
        onClick={() => {
          if (!emblaApi) return;
          emblaApi.scrollPrev();
          emblaApi.plugins().autoScroll.stop();
          if (startScroll) {
            startScroll(emblaApi);
          }
        }}
      >
        prev
      </s.PrevButton>
      <s.NextButton
        onClick={() => {
          if (!emblaApi) return;
          emblaApi.scrollNext();
          emblaApi.plugins().autoScroll.stop();
          if (startScroll) {
            startScroll(emblaApi);
          }
        }}
      >
        next
      </s.NextButton>
    </s.ButtonBox>
  );
}
