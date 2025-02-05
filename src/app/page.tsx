import Accordion from '@/components/Accordion';
import Footer from '@/components/Footer';
import HomeAboutSection from '@/sections/home/About';
import HomeActivitySection from '@/sections/home/Activity';
import HomeAwardsSection from '@/sections/home/Awards';
import HomeContactSection from '@/sections/home/Contact';
import HomeFAQSection from '@/sections/home/FAQ';
import HomeHeroSection from '@/sections/home/Hero';
import HomeSkillsSection from '@/sections/home/Skills';
import HomeStatsSection from '@/sections/home/Stats';
import * as s from './page.css';

export default function Home() {
  return (
    <div className={s.base}>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeSkillsSection />
      <HomeStatsSection />
      <HomeActivitySection />
      <div className={s.accordion}>
        <HomeAwardsSection />
        <HomeFAQSection />
      </div>
      <HomeContactSection />
      <div
        style={{
          width: 800,
        }}>
        <Accordion title='Accordion'>Hello</Accordion>
      </div>
      <Footer />
    </div>
  );
}
