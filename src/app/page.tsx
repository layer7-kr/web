import Footer from '@/components/Footer';
import HomeAboutSection from '@/sections/home/About';
import HomeContactSection from '@/sections/home/Contact';
import HomeHeroSection from '@/sections/home/Hero';
import HomeStatsSection from '@/sections/home/Stats';
import * as s from './page.css';
import HomeActivitySection from '@/sections/home/Activity';

export default function Home() {
  return (
    <div className={s.base}>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeStatsSection />
      <HomeContactSection />
      <HomeActivitySection />
      <Footer />
    </div>
  );
}
