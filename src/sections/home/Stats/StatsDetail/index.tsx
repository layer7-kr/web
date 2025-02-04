import Typo from '@/components/Typo';
import * as s from './style.css';
import { weight } from '@/styles/fonts/values/weight';

interface StatsDetailItemProps {
    title: string;
    content: string;
}

export default function StatsDetailItem({ title, content }: StatsDetailItemProps) {
    return (
        <div className={s.base}>
            <Typo as='h3' size={24} weight={weight.semibold}>{title}</Typo>
            <Typo size={16} weight={weight.medium} color='#636363' className={s.content}>{content}</Typo>
        </div>
    )    
}