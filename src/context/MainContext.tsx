import React, { createContext, SetStateAction, useMemo, useState } from 'react';
import { Updater, useImmer } from 'use-immer';
import { MainCategoryType, ProjectGalleryData } from '@/interface';

interface ContextType {
  currentCategory: number;
  setCurrentCategory: React.Dispatch<SetStateAction<number>>;
  isSorted: boolean;
  setIsSorted: React.Dispatch<SetStateAction<boolean>>;
  project: ProjectGalleryData;
  updateProject: Updater<ProjectGalleryData>;
  category: MainCategoryType;
}

export const MainContext = createContext<ContextType>({
  currentCategory: 0,
  setCurrentCategory: () => {},
  isSorted: false,
  setIsSorted: () => {},
  project: {
    data: {
      projects: [
        {
          id: 1,
          thumbnail: '',
          title: '',
          summary: '',
          likeCount: 0,
          awardCount: 0,
          memberCount: 0,
          viewCount: 0,
          createdAt: '',
          category: [],
        },
      ],
      totalProjects: 0,
      totalMembers: 0,
      category: null,
    },
  },
  updateProject: () => {},
  category: {
    categorytext: [],
    categoryicon: [],
  },
});

export function MainProvider({ children }: { children: React.ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const category = useMemo(
    () => ({
      categorytext: [
        '전체보기',
        '인공지능',
        '소셜 미디어',
        '협업 ・ 생산성',
        '건강 ・ 의료',
        '여행',
        '소셜 이펙트',
        '엔터테이먼트',
        '퍼스널 브랜딩',
      ],
      categoryicon: [
        'allProject',
        'ai',
        'socialMedia',
        'coperation',
        'life',
        'trip',
        'socialEffect',
        'entertament',
        'personalbranding',
      ],
    }),
    [],
  );
  const [project, updateProject] = useImmer<ProjectGalleryData>({
    data: {
      projects: [
        {
          id: 1,
          thumbnail: '',
          title: '',
          summary: '',
          likeCount: 0,
          awardCount: 0,
          memberCount: 0,
          viewCount: 0,
          createdAt: '',
          category: [],
        },
      ],
      totalProjects: 0,
      totalMembers: 0,
      category: null,
    },
  });
  const value = useMemo(
    () => ({
      currentCategory,
      setCurrentCategory,
      isSorted,
      setIsSorted,
      project,
      updateProject,
      category,
    }),
    [currentCategory, isSorted, project, updateProject, category],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
