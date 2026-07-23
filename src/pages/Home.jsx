import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import Stats from '@/components/home/Stats';
import BeforeAfter from '@/components/home/BeforeAfter';
import Technology from '@/components/home/Technology';
import Reviews from '@/components/home/Reviews';
import ServiceArea from '@/components/home/ServiceArea';
import FAQPreview from '@/components/home/FAQPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
<BeforeAfter />
      <Technology />
      <Reviews />
      <ServiceArea />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}