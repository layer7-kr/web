import Footer from '@/components/Footer';
import HomeAboutSection from '@/sections/home/About';
import HomeHeroSection from '@/sections/home/Hero';
import HomeStatsSection from '@/sections/home/Stats';
import * as s from './page.css';

export default function Home() {
  return (
    <div className={s.base}>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeStatsSection />
      <Footer />
    </div>
  );
}
