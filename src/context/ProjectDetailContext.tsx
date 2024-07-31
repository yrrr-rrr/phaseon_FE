import { createContext, useMemo } from 'react';
import { Updater, useImmer } from 'use-immer';
import { DetailDataType } from '../interface';

interface ContextType {
  data: DetailDataType;
  updateData: Updater<DetailDataType>;
}

const initialDetailData: DetailDataType = {
  projectname: '',
  star: 0,
  floatmenu: {
    category: '',
    buttons: [],
    releasenote: '',
    performance: [],
    members: [],
  },
  intro: {
    banner: '',
    projectimg: '',
    projectbrief: '',
    description: '',
  },
  category: {
    projectinfo: {
      carousel: [],
      mainfeatures: {
        shortdescription: '',
        feature: [],
      },
      techstack: [],
    },
    release: {
      releaseversion: [],
    },
    performance: {
      certifiedaward: [],
      accomplishment: [],
      news: [],
    },
    introduction: {
      members: [],
    },
  },
};

export const ProjectDetailContext = createContext<ContextType>({
  data: initialDetailData,
  updateData: () => {},
});

export function ProjectDetailProvider({ children }: { children: React.ReactNode }) {
  const [data, updateData] = useImmer<DetailDataType>(initialDetailData);
  const value = useMemo(() => ({ data, updateData }), [data, updateData]);
  return <ProjectDetailContext.Provider value={value}>{children}</ProjectDetailContext.Provider>;
}
