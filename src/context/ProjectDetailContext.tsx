import { createContext, SetStateAction, useMemo, useState } from 'react';
import { Updater, useImmer } from 'use-immer';
import { DetailDataType } from '../interface';

interface ContextType {
  data: DetailDataType;
  updateData: Updater<DetailDataType>;
  showShare: boolean;
  setShowShare: React.Dispatch<SetStateAction<boolean>>;
}

const initialDetailData: DetailDataType = {
  projectname: '',
  star: 0,
  notification: 0,
  category: [''],
  floatmenu: {
    view: 0,
    phase: '',
    buttons: [],
    releasenote: '',
  },
  intro: {
    banner: '',
    projectimg: '',
    projectbrief: '',
    description: '',
  },
  menu: {
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
  showShare: false,
  setShowShare: () => {},
});

export function ProjectDetailProvider({ children }: { children: React.ReactNode }) {
  const [data, updateData] = useImmer<DetailDataType>(initialDetailData);
  const [showShare, setShowShare] = useState(false);
  const value = useMemo(() => ({ data, updateData, showShare, setShowShare }), [data, showShare]);
  return <ProjectDetailContext.Provider value={value}>{children}</ProjectDetailContext.Provider>;
}
