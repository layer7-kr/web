import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import Link from 'next/link';

interface HeaderItemProps {
  label: string;
  href: string;
}

export default function HeaderItem(props: HeaderItemProps) {
  const { label, href } = props;

  return (
    <Link href={href}>
      <Typo size={16} weight={weight.regular} color={'#f1f1f1'}>
        {label}
      </Typo>
    </Link>
  );
}
