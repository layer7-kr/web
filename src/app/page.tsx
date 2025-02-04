import HomeAboutSection from '@/sections/home/About';
import HomeHeroSection from '@/sections/home/Hero';
import * as s from './page.css';
import HomeStatsSection from '@/sections/home/Stats';
import HomeContactSection from '@/sections/home/Contact';

export default function Home() {
  return <div className={s.base}>
    <HomeHeroSection />
    <HomeAboutSection />
    <HomeStatsSection />
    <HomeContactSection />
  </div>;
}
