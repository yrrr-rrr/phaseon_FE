import { useContext } from 'react';
import { ReactComponent as Notification } from '../../assets/svg/Notification.svg';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/common/ButtonStyle';
export default function NotificationButton({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children?: React.ReactNode;
}) {
  const { data, updateData } = useContext(ProjectDetailContext);

  console.log(data.notification);

  return (
    <s.Button $width={width} $height={height} $border={'1px solid #69ACFF'} $color={'#69acff'} $type={'notification'}>
      <Notification />
      {children}
      <p>{data.notification}</p>
    </s.Button>
  );
}
