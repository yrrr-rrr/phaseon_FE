import * as s from '../../style/projectDetail/common/ButtonStyle';
import { ReactComponent as Share } from '../../assets/svg/Share.svg';

export default function ShareButton({ width, height }: { width: number; height: number }) {
  return (
    <s.Button
      $width={width}
      $height={height}
      $border={'none'}
      $color={'#69acff'}
      $type={'share'}
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
      }}
    >
      <Share />
      <p>공유하기</p>
    </s.Button>
  );
}
