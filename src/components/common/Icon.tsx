import { forwardRef } from 'react';
import * as icons from '@/components/icon';

export interface IconProps {
  name: keyof typeof icons;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  onClick?: () => void;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ name, width, height, fill, stroke, onClick }, ref) => {
  const SvgIcon = icons[name];
  return width && height ? (
    <SvgIcon ref={ref} width={width} height={height} fill={fill} stroke={stroke} onClick={onClick} />
  ) : (
    <SvgIcon ref={ref} fill={fill} stroke={stroke} onClick={onClick} />
  );
});
