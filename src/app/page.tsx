import HomeAboutSection from '@/sections/home/About';
import * as s from './page.css';

export default function Home() {
  return <div className={s.base}>
    <HomeAboutSection />
  </div>;
}
