import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import Typo from '../Typo';

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  const TitleSize = {
    480: 24,
    default: 28,
  };

  return (
    <Typo
      as={'h2'}
      weight={weight.semibold}
      size={TitleSize}
      color={colorVars.normal}>
      {children}
    </Typo>
  );
}
