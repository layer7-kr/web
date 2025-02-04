import HomeAboutSection from '@/sections/home/About';
import * as s from './page.css';
import HomeStatsSection from '@/sections/home/Stats';

export default function Home() {
  return <div className={s.base}>
    <HomeAboutSection />
    <HomeStatsSection />
  </div>;
}
