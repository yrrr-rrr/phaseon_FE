import React, { useContext, useState } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/common/ButtonStyle';
import { Icon } from '@/components/common/Icon';

export default function StarButton({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children?: React.ReactNode;
}) {
  const { data, updateData, setShowModal } = useContext(ProjectDetailContext);
  const [isLiked, setIsLiked] = useState(data.floatmenu.isLiked);
  return (
    <s.Button
      $width={width}
      $height={height}
      $border="none"
      $color="white"
      $type="star"
      onClick={() => {
        setShowModal(true);
        return;
        // 모달창 사라지면 다시 활성화 예정
        setIsLiked((prev) => !prev);
        updateData((update) => {
          if (isLiked) {
            update.star--;
          } else {
            update.star++;
          }
          update.floatmenu.isLiked = isLiked;
        });
      }}
    >
      {isLiked ? <Icon name="FillStar" fill="white" /> : <Icon name="EmptyStar" />}
      {children}
      <p>{data.star}</p>
    </s.Button>
  );
}
