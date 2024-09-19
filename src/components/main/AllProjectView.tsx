import React, { SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { Updater } from 'use-immer';
import AllProjects from '@/components/main/AllProjects';
import { MainContext } from '@/context/MainContext';
import * as s from '@/style/main/AllProjectViewStyle';

import { ReactComponent as Swap } from '../../assets/svg/Swap.svg';
import { ReactComponent as Loading } from '../../assets/svg/Loading.svg';
import { ReactComponent as AllProject } from '../../assets/svg/BigProjectIcon.svg';
import { ReactComponent as Ai } from '../../assets/svg/Ai.svg';
import { ReactComponent as SocialMedia } from '../../assets/svg/Member.svg';
import { ReactComponent as Coperation } from '../../assets/svg/Coperation.svg';
import { ReactComponent as Life } from '../../assets/svg/Life.svg';
import { ReactComponent as Trip } from '../../assets/svg/Trip.svg';
import { ReactComponent as SocialEffect } from '../../assets/svg/SocialEffect.svg';
import { ReactComponent as Entertament } from '../../assets/svg/Entertament.svg';
import { ReactComponent as PersonalBranding } from '../../assets/svg/PersonalBranding.svg';
import { ProjectGalleryData } from '../../interface';

export default function AllProjectView() {
  const { setIsSorted, project, updateProject, currentCategory, category } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [sortOption, setSortOption] = useState('recently');
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [isPageUpdate, setIsPageUpdate] = useState(false);
  const isFetching = useRef<boolean>(false);

  const icons = [AllProject, Ai, SocialMedia, Coperation, Life, Trip, SocialEffect, Entertament, PersonalBranding];
  const iconWithFill = [0, 2, 3, 4, 5, 6, 8];
  const IconComponent = icons[currentCategory];

  function handleObserver(entries: IntersectionObserverEntry[]) {
    const target = entries[0];
    if (target.isIntersecting && !isFetching.current) {
      isFetching.current = true;
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });
    if (showMoreButton || isPageUpdate) return;
    const observerTarget = document.getElementById('observer');
    if (observerTarget) {
      observer.observe(observerTarget);
    }
    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
    };
  }, [showMoreButton, isPageUpdate]);

  useEffect(() => {
    if (page % 10 === 0 && page !== 0) {
      setShowMoreButton(true);
    }
    if (page === 0 && !isFetching.current) return;

    getProjects(setIsLoading, updateProject, showMoreButton, isFetching, setIsPageUpdate);
  }, [page, updateProject, showMoreButton]);

  useEffect(() => {
    setPage(0);
    setIsSorted(false);
    isFetching.current = false;
    updateProject((draft) => {
      draft.data.allpeople = 0;
      draft.data.allproject = 0;
      draft.data.projects = [];
    });
  }, [currentCategory, setIsSorted, updateProject]);

  function getStroke(idx: number) {
    if (!iconWithFill.includes(idx)) {
      if (currentCategory === idx) {
        return '#247BFF';
      }
      return '#47484C';
    }
    return 'none';
  }

  function getFill(idx: number) {
    if (iconWithFill.includes(idx)) {
      if (currentCategory === idx) {
        return '#247BFF';
      }
      return '#47484C';
    }
    return 'none';
  }

  return (
    <s.Section>
      <s.TopSection>
        <s.TitleBox>
          <s.Title>
            <IconComponent stroke={getStroke(currentCategory)} fill={getFill(currentCategory)} width={32} height={33} />
            <p>{category.categorytext[currentCategory]}</p>
          </s.Title>
          <s.SubTitle>
            <b>{project.data.allproject}</b>개의 프로젝트 ・ <b>{project.data.allpeople}</b>명 활동 중
          </s.SubTitle>
        </s.TitleBox>
        <s.SortButtonBox>
          <Swap />
          <s.ButtonWrapper>
            <s.SortButton
              $current={sortOption}
              $buttonName="recently"
              onClick={() => {
                setSortOption('recently');
                setIsSorted(false);
              }}
            >
              최신
            </s.SortButton>
            <s.SortButton
              $current={sortOption}
              $buttonName="popularity"
              onClick={() => {
                setSortOption('popularity');
                setIsSorted(true);
              }}
            >
              인기
            </s.SortButton>
          </s.ButtonWrapper>
        </s.SortButtonBox>
      </s.TopSection>
      <AllProjects />
      {showMoreButton && (
        <s.MoreButton
          onClick={() => {
            setShowMoreButton(false);
            setIsPageUpdate(true);
            setPage((prev) => prev + 1);
          }}
        >
          <Loading width={20} height={20} fill="white" />
          더보기
        </s.MoreButton>
      )}
      {isLoading && (
        <s.LoadingBox>
          <s.LoadingImg width={36} height={37} fill="#69ACFF" />
        </s.LoadingBox>
      )}
      <div id="observer" />
    </s.Section>
  );
}

async function getProjects(
  setIsLoading: React.Dispatch<SetStateAction<boolean>>,
  updateProject: Updater<ProjectGalleryData>,
  showMoreButton: boolean,
  isFetching: { current: boolean },
  setIsPageUpdate: React.Dispatch<SetStateAction<boolean>>,
) {
  setIsLoading(true);
  try {
    // const response = await fetch(`https://name.store:8443/api/project?page=${page}`);
    const response = await fetch('dummy/projectCollection.json');
    const data = await response.json();
    updateProject((draft) => {
      if (!showMoreButton) {
        draft.data.projects = [...draft.data.projects, ...data.data.projects];
        draft.data.allproject = data.data.allproject;
        draft.data.allpeople = data.data.allpeople;
      }
    });
  } catch (err) {
    console.log(err);
  }
  setIsLoading(false);
  isFetching.current = false;
  setIsPageUpdate(false);
}
