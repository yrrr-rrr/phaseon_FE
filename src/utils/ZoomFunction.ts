import { HandelDoubleClickType, HandleMouseDownType, HandleMouseMoveType, HandleMouseUpType } from '../interface';

export function handleDoubleClick(params: HandelDoubleClickType) {
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

export function handleMouseDown(e: React.MouseEvent<HTMLImageElement>, params: HandleMouseDownType) {
  const { isZoomed, setDrag, updateStartPos, updateDragNextImg, setDragAndDrop, setDragOffSet } = params;
  if (!isZoomed) {
    setDragAndDrop(true);
    updateDragNextImg({ x: e.clientX, y: e.clientY });
  }

  setDrag(true);
  setDragOffSet(0);
  updateStartPos({
    x: e.clientX,
    y: e.clientY,
  });
  e.preventDefault();
}

export function handleMouseMove(e: MouseEvent, params: HandleMouseMoveType) {
  const { imgRef, drag, startPos, updateStartPos, updateTransform, zoomCount, transform, setDragOffSet } = params;

  if (!imgRef.current || !drag || !startPos) return;

  const dx = e.clientX - startPos.x;
  const dy = e.clientY - startPos.y;

  if (zoomCount > 1) {
    const newTransformX = transform.x + dx;
    const newTransformY = transform.y + dy;

    const imgWidth = imgRef.current.offsetWidth * zoomCount;
    const imgHeight = imgRef.current.offsetHeight * zoomCount;

    const maxX = Math.max(0, imgWidth - window.innerWidth);
    const maxY = Math.max(0, imgHeight - window.innerHeight);

    updateTransform({
      x: Math.max(Math.min(newTransformX, maxX), -maxX),
      y: Math.max(Math.min(newTransformY, maxY), -maxY),
    });
  } else {
    setDragOffSet((prev) => prev + dx);
  }

  updateStartPos({ x: e.clientX, y: e.clientY });
}

export function handleMouseUp(e: MouseEvent, params: HandleMouseUpType) {
  const {
    zoomCount,
    updateTransform,
    transform,
    setDrag,
    startPos,
    isZoomed,
    drag,
    dragNextImg,
    setStartImg,
    carouselImgs,
    dragAndDrop,
    setDragAndDrop,
    setDragOffSet,
    setDragDirection,
  } = params;

  const dx = e.clientX - startPos.x;
  const dy = e.clientY - startPos.y;

  const x = transform.x + dx;
  const y = transform.y + dy;

  const xLimit = 70 * zoomCount;
  const yLimit = zoomCount > 1.5 ? 70 * zoomCount : 40 * zoomCount;

  if (isZoomed && drag) {
    if (x > 200) {
      updateTransform({
        x: xLimit,
        y: y > 150 ? yLimit : y > 0 ? y : -yLimit,
      });
    } else if (x > -200) {
      updateTransform({
        x: x,
        y: y > 100 ? yLimit : y > 0 ? y : -yLimit,
      });
    } else {
      updateTransform({
        x: -xLimit,
        y: y > 100 ? yLimit : y > 0 ? y : -yLimit,
      });
    }
  }

  if (dragAndDrop) {
    if (dragNextImg.x + 100 < e.clientX) {
      setDragDirection('left');
      setStartImg((prev) => (prev == 0 ? carouselImgs.length - 1 : prev - 1));
    } else if (dragNextImg.x > e.clientX + 100) {
      setDragDirection('right');
      setStartImg((prev) => (prev == carouselImgs.length - 1 ? 0 : prev + 1));
    }
  }

  setDragAndDrop(false);
  setDrag(false);

  setTimeout(() => {
    setDragOffSet(0);
    setDragDirection('none');
  }, 100);
}
