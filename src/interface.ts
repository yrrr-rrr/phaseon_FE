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
