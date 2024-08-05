import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/common/ButtonStyle';
import { ReactComponent as Star } from '../../assets/svg/Star.svg';

export default function StarButton() {
  const { data, updateData } = useContext(ProjectDetailContext);
  return (
    <s.Button
      $border={'none'}
      $color={'white'}
      $type={'star'}
      onClick={() => {
        updateData((update) => {
          update.star++;
        });
      }}
    >
      <Star />
      <span>좋아요</span>
      <span>{data.star}</span>
    </s.Button>
  );
}
