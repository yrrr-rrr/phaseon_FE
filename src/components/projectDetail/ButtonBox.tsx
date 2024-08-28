import { EmblaCarouselType } from 'embla-carousel';
import * as s from '../../style/projectDetail/ButtonBoxStyle';

export default function ButtonBox({
  emblaApi,
  startScroll,
  padding,
}: {
  emblaApi: EmblaCarouselType | undefined;
  startScroll?: (emblaApi: EmblaCarouselType) => void;
  padding: number;
}) {
  return (
    <s.ButtonBox $padding={padding}>
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
