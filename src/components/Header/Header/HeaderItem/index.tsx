import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import Link from 'next/link';

interface HeaderItemProps {
  label: string;
  href: string;
  size?: number;
  onClick?: () => void;
}

export default function HeaderItem(props: HeaderItemProps) {
  const { label, href, size = 16, onClick } = props;

  return (
    <Link href={href} onClick={onClick}>
      <Typo size={size} weight={weight.regular} color={'#f1f1f1'}>
        {label}
      </Typo>
    </Link>
  );
}
