import cn from 'classnames';
import Logo from './assets/logo.svg';
import LogoGrayscale from './assets/logo_grayscale.svg';

import * as s from './style.css';

interface Layer7Symbol {
  colored?: boolean;
  size: number;
  className?: string;
  onClick?: () => void;
}

export default function Layer7Symbol(props: Layer7Symbol) {
  const { colored = false, size, className, onClick } = props;

  const LogoComponent = colored ? Logo : LogoGrayscale;

  const renderedIcon = (
    <LogoComponent
      className={cn(className, s.base)}
      width={size}
      height={size}
      style={{
        minWidth: size,
        minHeight: size,
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
