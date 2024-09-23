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
  const { projectInfo, updateProjectInfo } = useContext(ProjectDetailContext);
  const [isLiked, setIsLiked] = useState(projectInfo.isLiked);
  return (
    <s.Button
      $width={width}
      $height={height}
      $border="none"
      $color="white"
      $type="star"
      onClick={() => {
        setIsLiked((prev) => !prev);
        updateProjectInfo((update) => {
          if (isLiked) {
            update.likeCount--;
          } else {
            update.likeCount++;
          }
          update.isLiked = isLiked;
        });
      }}
    >
      {isLiked ? <Icon name="FillStar" fill="white" /> : <Icon name="EmptyStar" />}
      {children}
      <p>{projectInfo.likeCount}</p>
    </s.Button>
  );
}
