import React, { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/common/ButtonStyle';
import { ReactComponent as Star } from '../../assets/svg/Star.svg';

export default function StarButton({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children?: React.ReactNode;
}) {
  const { data, updateData } = useContext(ProjectDetailContext);
  return (
    <s.Button
      $width={width}
      $height={height}
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
      {children}
      <p>{data.star}</p>
    </s.Button>
  );
}
