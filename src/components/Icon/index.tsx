import cn from 'classnames';
import { CSSProperties } from 'react';
import { IconName, IconNameMap } from './icon-set';
import * as s from './style.css';

export { IconName } from './icon-set';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function Icon(props: IconProps) {
  const { name, size = 20, color = '#000', className, onClick } = props;

  const IconComponent = IconNameMap[name];

  const renderedIcon = (
    <IconComponent
      className={cn(className, s.base)}
      width={size}
      height={size}
      color={color}
      onClick={onClick}
      viewBox={`0 0 24 24`}
      style={{
        minWidth: size,
        minHeight: size,
        color: color,
        fill: color,
      }}
    />
  );

  // if (onClick) {
  //   return (
  //     <div className={cn(className, s.clickable)} onClick={onClick}>
  //       {renderedIcon}
  //     </div>
  //   );
  // } else {
  return renderedIcon;
  // }
}
