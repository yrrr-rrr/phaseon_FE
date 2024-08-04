import React, { SetStateAction } from 'react';
interface PathType {
  path: string;
  fill: string;
}

export interface SvgType {
  [key: string]: {
    pathObj: PathType[];
    clipPath?: {
      id: string;
      rect: {
        x: string;
        width: string;
        height: string;
        rx: string;
        fill: string;
      };
    };
  };
}

export interface SgvPropsType {
  width: string;
  height: string;
  name: string;
}

export interface Button {
  icon: string;
  buttontext: string;
  link: string;
}

export interface CarouselItem {
  img: string;
  type: string;
}

export interface MainFeature {
  title: string;
  description: string;
}

export interface ReleaseVersion {
  version: number;
  date: string;
  extrafeature: ExtraFeatur[];
}

export interface ExtraFeatur {
  feature: string;
  description: string;
}

export interface CertifiedAward {
  badge: string;
  award: string;
}

export interface NewsItem {
  img: string;
  title: string;
  content: string;
  link: string;
}

export interface ProfileLink {
  icon: string;
  link: string;
}

export interface Member {
  img: string;
  role: string;
  email: string;
  profilelink: ProfileLink[];
}

export interface MainProjectInfo {
  carousel: CarouselItem[];
  mainfeatures: {
    shortdescription: string;
    feature: MainFeature[];
  };
  techstack: string[];
}

export interface FloatMenu {
  category: string;
  buttons: Button[];
  releasenote: string;
  performance: string[];
  members: string[];
}

export interface Intro {
  banner: string;
  projectimg: string;
  projectbrief: string;
  description: string;
}

export interface Performance {
  certifiedaward: CertifiedAward[];
  accomplishment: string[];
  news: NewsItem[];
}

export interface Introduction {
  members: Member[];
}

export interface DetailDataType {
  projectname: string;
  star: number;
  floatmenu: FloatMenu;
  intro: Intro;
  category: {
    projectinfo: MainProjectInfo;
    release: {
      releaseversion: ReleaseVersion[];
    };
    performance: Performance;
    introduction: Introduction;
  };
}
export interface CategoryContextType {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<SetStateAction<string>>;
}
