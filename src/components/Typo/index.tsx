import { weight, WeightKeys } from '@/styles/fonts/values/weight';

interface TypoProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  family?: string;
  weight?: (typeof weight)[WeightKeys];
  size: number;
  color?: string;
  className?: string;
  children: React.ReactNode;
  lineHeight?: number;
}

export default function Typo(props: TypoProps) {
  const {
    as = 'p',
    family,
    weight,
    lineHeight,
    size,
    color = '#000',
    className,
    children,
  } = props;

  const Element = as;

  return (
    <Element
      className={className}
      style={{
        fontFamily: family,
        fontWeight: weight,
        fontSize: size,
        lineHeight: lineHeight || undefined,
        color,
        letterSpacing: '-1px'
      }}>
      {children}
    </Element>
  );
}
