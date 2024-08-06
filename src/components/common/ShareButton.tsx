import * as s from '../../style/projectDetail/common/ButtonStyle';
import { ReactComponent as Share } from '../../assets/svg/Share.svg';

export default function ShareButton() {
  return (
    <s.Button
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
