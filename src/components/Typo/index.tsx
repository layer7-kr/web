import { weight, WeightKeys } from '@/styles/fonts/values/weight';

// 레이아웃 사이즈 정의ㅇㅇ
type ResponsiveSize = {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

interface TypoProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  family?: string;
  weight?: (typeof weight)[WeightKeys];
  size: number | ResponsiveSize;
  color?: string;
  className?: string;
  letterSpacing?: string;
  children: React.ReactNode;
}

export default function Typo(props: TypoProps) {
  const {
    as = 'p',
    family,
    weight,
    size,
    color = '#000',
    className,
    letterSpacing = '-0.5px',
    children,
  } = props;

  const Element = as;

  const generateResponsiveStyles = () => {
    if (typeof size === 'number') {
      return { fontSize: size };
    }

    const mediaQueries = `
      font-size: ${size.base}px;
      
      @media (min-width: 640px) {
        font-size: ${size.sm ?? size.base}px;
      }
      @media (min-width: 768px) {
        font-size: ${size.md ?? size.sm ?? size.base}px;
      }
      @media (min-width: 1024px) {
        font-size: ${size.lg ?? size.md ?? size.sm ?? size.base}px;
      }
      @media (min-width: 1280px) {
        font-size: ${size.xl ?? size.lg ?? size.md ?? size.sm ?? size.base}px;
      }
    `;

    return { fontSize: size.base, cssText: mediaQueries };
  };

  const styles = generateResponsiveStyles();

  return (
    <Element
      className={className}
      style={{
        fontFamily: family,
        fontWeight: weight,
        color,
        letterSpacing,
        ...styles,
      }}>
      {children}
    </Element>
  );
}