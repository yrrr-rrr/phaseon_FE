import { useContext, useEffect } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/ShareStyle';

export default function Share() {
  const { setShowShare } = useContext(ProjectDetailContext);
  const floatBox = document.querySelector('.sticky-road') as HTMLElement;
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  useEffect(() => {
    if (floatBox) {
      const defaultPosition = parseInt(window.getComputedStyle(floatBox).right, 10);
      floatBox.style.right = `${defaultPosition + 3.5}px`;
    }
    if (header) {
      const defaultHeaderPadding = parseInt(window.getComputedStyle(header).paddingRight, 10);
      header.style.paddingRight = `${defaultHeaderPadding + 3.5}px`;
    }
    if (main) {
      const defaultMainPadding = parseInt(window.getComputedStyle(main).paddingRight, 10);
      main.style.paddingRight = `${defaultMainPadding + 3.5}px`;
    }

    document.body.style.overflow = 'hidden';
  }, [floatBox, main, header]);
  return (
    <s.Section $scroll={window.pageYOffset}>
      <s.QRcodeBox>
        <s.CloseButton
          name="Close"
          fill="black"
          onClick={() => {
            setShowShare(false);
            if (floatBox) {
              floatBox.style.right = '';
            }
            if (header) {
              header.style.paddingRight = '';
            }
            if (main) {
              main.style.paddingRight = '';
            }
            document.body.style.overflow = 'scroll';
          }}
        />
        <s.Div>
          <s.Title>공유하기</s.Title>
          <s.Description>아래의 QR 또는 링크를 복사하여 공유해보세요!</s.Description>
          <s.QRCodeStyle value={window.location.href} />
          <s.DownloadBox>
            <s.DownloadButton name="Download" onClick={HandleDownload} />
            <s.DownloadText onClick={HandleDownload}>다운로드</s.DownloadText>
          </s.DownloadBox>
          <s.CopyBox>
            <s.CopyText>{window.location.href}</s.CopyText>
            <s.CopyButton
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              저장
            </s.CopyButton>
          </s.CopyBox>
        </s.Div>
      </s.QRcodeBox>
    </s.Section>
  );
}

function HandleDownload() {
  const canvas = document.querySelector('canvas');
  const url = canvas ? canvas.toDataURL('image/png') : '';
  const link = document.createElement('a');
  link.href = url;
  link.download = 'qr.png';
  link.click();
}
