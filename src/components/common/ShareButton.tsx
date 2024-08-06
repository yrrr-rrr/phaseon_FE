import * as s from '../../style/projectDetail/common/ButtonStyle';
import { ReactComponent as Share } from '../../assets/svg/Share.svg';

export default function ShareButton({ width, height }: { width: number; height: number }) {
  return (
    <s.Button
      $width={width}
      $height={height}
      $border={'1px solid #69ACFF'}
      $color={'69acff'}
      $type={'share'}
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
      }}
    >
      <Share />
      <span>공유하기</span>
    </s.Button>
  );
}
