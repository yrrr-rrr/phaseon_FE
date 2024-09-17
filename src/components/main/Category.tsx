import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { ReactComponent as AllProject } from '../../assets/svg/SmallProjectIcon.svg';
import { ReactComponent as Ai } from '../../assets/svg/Ai.svg';
import { ReactComponent as SocialMedia } from '../../assets/svg/Member.svg';
import { ReactComponent as Coperation } from '../../assets/svg/Coperation.svg';
import { ReactComponent as Life } from '../../assets/svg/Life.svg';
import { ReactComponent as Trip } from '../../assets/svg/Trip.svg';
import { ReactComponent as SocialEffect } from '../../assets/svg/SocialEffect.svg';
import { ReactComponent as Entertament } from '../../assets/svg/Entertament.svg';
import { ReactComponent as PersonalBranding } from '../../assets/svg/PersonalBranding.svg';
import * as s from '../../style/main/CategoryStyle';
import { getFill } from '../../utils/getFill';
import { getStroke } from '../../utils/getStroke';

export default function Category() {
  const { currentCategory, setCurrentCategory, category } = useContext(MainContext);
  const icons = [AllProject, Ai, SocialMedia, Coperation, Life, Trip, SocialEffect, Entertament, PersonalBranding];
  const iconWithFill = [0, 2, 3, 4, 5, 6, 8];

  return (
    <s.Section>
      <s.Title>카테고리</s.Title>
      <s.CategoryBox>
        {category.categorytext.map((text, index) => {
          const IconComponent = icons[index];
          return (
            <s.Category
              key={index}
              $currentNum={index}
              $focus={currentCategory}
              onClick={() => {
                setCurrentCategory(index);
              }}
            >
              <IconComponent
                stroke={getStroke(index, iconWithFill, currentCategory)}
                fill={getFill(index, iconWithFill, currentCategory)}
                width={20}
                height={21}
              />
              <p>{text}</p>
            </s.Category>
          );
        })}
      </s.CategoryBox>
    </s.Section>
  );
}
