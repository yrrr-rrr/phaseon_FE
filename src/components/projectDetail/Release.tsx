import { useContext, useEffect } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/ReleaseStyle';
import { ReleaseType } from '@/interface';
import { Updater } from 'use-immer';

export default function Release() {
  const { releaseInfo, updateReleaseInfo } = useContext(ProjectDetailContext);

  useEffect(() => {
    getRelease(updateReleaseInfo);
  }, [updateReleaseInfo]);

  return (
    <s.Section>
      <s.ReleaseInformation>{releaseInfo.releases}</s.ReleaseInformation>
    </s.Section>
  );
}

async function getRelease(updateReleaseInfo: Updater<ReleaseType>) {
  try {
    const response = await fetch('dummy/attiRelease.json');
    const data = await response.json();

    updateReleaseInfo((draft) => {
      Object.assign(draft, data.data);
    });
  } catch (e) {
    console.log(e);
  }
}
