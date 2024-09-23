import { createContext, SetStateAction, useMemo, useState } from 'react';
import { Updater, useImmer } from 'use-immer';
import { Accomplishment, Member, ProjectInfo, ReleaseType } from '@/interface';

interface ContextType {
  projectInfo: ProjectInfo;
  updateProjectInfo: Updater<ProjectInfo>;
  releaseInfo: ReleaseType;
  updateReleaseInfo: Updater<ReleaseType>;
  accomplishmentInfo: Accomplishment;
  updateAccomplishmentInfo: Updater<Accomplishment>;
  memberInfo: Member;
  updateMemberInfo: Updater<Member>;
  showShare: boolean;
  setShowShare: React.Dispatch<SetStateAction<boolean>>;
}

const initialProjectInfo: ProjectInfo = {
  id: 0,
  title: '',
  summary: '',
  shortDescription: '',
  description: '',
  thumbnail: '',
  banner: '',
  categories: [''],
  status: '',
  projectMedia: [
    {
      url: '',
      mediaType: '',
      order: 0,
    },
  ],
  links: [
    {
      link: '',
      type: '',
    },
  ],
  viewCount: 0,
  likeCount: 0,
  notificationCount: 0,
  isLiked: false,
  isNotified: false,
  createdAt: 0,
  updatedAt: 0,
};

const initialReleaseInfo: ReleaseType = {
  releases: '',
};

const initialAccomplishmentInfo: Accomplishment = {
  accomplishments: [
    {
      title: '',
      description: '',
      publisher: '',
      thumbnail: '',
      link: '',
      type: '',
    },
  ],
};

const initialMember: Member = {
  users: [
    {
      userPicture: '',
      username: '',
      userRole: '',
      links: [
        {
          linkType: '',
          url: '',
        },
      ],
    },
  ],
};

export const ProjectDetailContext = createContext<ContextType>({
  projectInfo: initialProjectInfo,
  updateProjectInfo: () => {},
  releaseInfo: initialReleaseInfo,
  updateReleaseInfo: () => {},
  accomplishmentInfo: initialAccomplishmentInfo,
  updateAccomplishmentInfo: () => {},
  memberInfo: initialMember,
  updateMemberInfo: () => {},
  showShare: false,
  setShowShare: () => {},
});

export function ProjectDetailProvider({ children }: { children: React.ReactNode }) {
  const [projectInfo, updateProjectInfo] = useImmer(initialProjectInfo);
  const [releaseInfo, updateReleaseInfo] = useImmer(initialReleaseInfo);
  const [accomplishmentInfo, updateAccomplishmentInfo] = useImmer(initialAccomplishmentInfo);
  const [memberInfo, updateMemberInfo] = useImmer(initialMember);
  const [showShare, setShowShare] = useState(false);
  const value = useMemo(
    () => ({
      projectInfo,
      updateProjectInfo,
      releaseInfo,
      updateReleaseInfo,
      accomplishmentInfo,
      updateAccomplishmentInfo,
      memberInfo,
      updateMemberInfo,
      showShare,
      setShowShare,
    }),
    [
      projectInfo,
      updateProjectInfo,
      releaseInfo,
      updateReleaseInfo,
      accomplishmentInfo,
      updateAccomplishmentInfo,
      memberInfo,
      updateMemberInfo,
      showShare,
    ],
  );
  return <ProjectDetailContext.Provider value={value}>{children}</ProjectDetailContext.Provider>;
}
