import cn from 'classnames';
import { IconName, IconNameMap } from './icon-set';
import * as s from './style.css';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
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
      style={{
        minWidth: size,
        minHeight: size,
        color: color,
        fill: color,
      }}
    />
  );

  if (onClick) {
    return (
      <div className={s.clickable} onClick={onClick}>
        {renderedIcon}
      </div>
    );
  } else {
    return renderedIcon;
  }
}
