import React, { useContext, useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { ProjectDetailContext } from '../../../context/ProjectDetailContext';
import { ZoomContext } from '../../../context/ZoomContext';
import * as s from '../../../style/projectDetail/ZoomimgStyle';
import { useImmer } from 'use-immer';
import { HandelDoubleClickType, HandleMouseDownType, HandleMouseMoveType, HandleMouseUpType } from '../../../interface';

export default function ZoomMediaBox() {
  const { data } = useContext(ProjectDetailContext);
  const { startImg, setIsZoomed, isZoomed, zoomCount, setZoomCount, transform, updateTransform } =
    useContext(ZoomContext);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgWrapperRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState(false);
  const [startPos, updateStartPos] = useImmer<{ x: number; y: number }>({ x: 0, y: 0 });
  const carouselImgs = data.category.projectinfo.carousel;

  useEffect(() => {
    const MouseMoveFunction = (e: MouseEvent) => {
      handleMouseMove(e, {
        imgRef,
        drag,
        startPos,
        updateStartPos,
        updateTransform,
        zoomCount,
        transform,
      });
    };

    const MouseUpFunction = (e: MouseEvent) => {
      handleMouseUp(e, { zoomCount, updateTransform, transform, setDrag, startPos, isZoomed, drag });
    };
    document.addEventListener('mousemove', MouseMoveFunction);
    document.addEventListener('mouseup', MouseUpFunction);

    return () => {
      document.removeEventListener('mousemove', MouseMoveFunction);
      document.removeEventListener('mouseup', MouseUpFunction);
    };
  }, [drag, startPos, isZoomed]);

  return (
    <>
      {carouselImgs[startImg].type != 'video' && (
        <s.ImgWrapper
          ref={imgWrapperRef}
          onDoubleClick={() => {
            handleDoubleClick({ setIsZoomed, isZoomed, setZoomCount, updateTransform });
          }}
        >
          <s.Img
            src={`/public/${carouselImgs[startImg].img}`}
            alt=""
            ref={imgRef}
            $type={carouselImgs[startImg].type}
            $zoomCount={zoomCount}
            $drag={drag}
            style={{
              transform: `scale(${zoomCount}) translate(${transform.x}px, ${transform.y}px)`,
            }}
            onMouseDown={(e) => {
              handleMouseDown(e, { isZoomed, setDrag, updateStartPos });
            }}
          />
        </s.ImgWrapper>
      )}
      {carouselImgs[startImg].type == 'video' && (
        <YouTube
          videoId={carouselImgs[0].img}
          opts={{
            width: '1200px',
            height: '700px',
          }}
        />
      )}
    </>
  );
}

function handleDoubleClick(params: HandelDoubleClickType) {
  const { setIsZoomed, isZoomed, setZoomCount, updateTransform } = params;

  if (isZoomed) {
    updateTransform((transformObj) => {
      transformObj.x = 0;
      transformObj.y = 0;
    });
    setZoomCount(1);
  } else {
    setZoomCount((prev) => prev + 0.5);
  }

  setIsZoomed((prev) => !prev);
}

function handleMouseDown(e: React.MouseEvent<HTMLImageElement>, params: HandleMouseDownType) {
  const { isZoomed, setDrag, updateStartPos } = params;
  if (!isZoomed) return;

  setDrag(true);
  updateStartPos((posObj) => {
    posObj.x = e.clientX;
    posObj.y = e.clientY;
  });
  e.preventDefault();
}

function handleMouseMove(e: MouseEvent, params: HandleMouseMoveType) {
  const { imgRef, drag, startPos, updateStartPos, updateTransform, zoomCount, transform } = params;

  if (!imgRef.current || !drag || !startPos) return;

  const dx = e.clientX - startPos.x;
  const dy = e.clientY - startPos.y;

  const newTransformX = transform.x + dx;
  const newTransformY = transform.y + dy;

  const imgWidth = imgRef.current.offsetWidth * zoomCount;
  const imgHeight = imgRef.current.offsetHeight * zoomCount;

  const maxX = Math.max(0, (imgWidth - window.innerWidth) / 2);
  const maxY = Math.max(0, (imgHeight - window.innerHeight) / 2);

  updateTransform({
    x: Math.max(Math.min(newTransformX, maxX), -maxX),
    y: Math.max(Math.min(newTransformY, maxY), -maxY),
  });

  updateStartPos({ x: e.clientX, y: e.clientY });
}

function handleMouseUp(e: MouseEvent, params: HandleMouseUpType) {
  const { zoomCount, updateTransform, transform, setDrag, startPos, isZoomed, drag } = params;

  const dx = e.clientX - startPos.x;
  const dy = e.clientY - startPos.y;

  const x = transform.x + dx;
  const y = transform.y + dy;

  const xLimit = 108 * zoomCount;
  const yLimit = 103 * zoomCount;
  if (isZoomed && drag) {
    if (x > 364) {
      updateTransform({
        x: xLimit,
        y: y > 150 ? yLimit : y > 0 ? y : -yLimit,
      });
    } else if (x > -360) {
      updateTransform({
        x: x,
        y: y > 150 ? yLimit : y < -150 ? -yLimit : y,
      });
    } else {
      updateTransform({
        x: -xLimit,
        y: y > 150 ? yLimit : y > 0 ? y : -yLimit,
      });
    }
  }
  setDrag(false);
}
