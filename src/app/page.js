import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ServicesGrid from '@/components/home/ServicesGrid';
import AboutSection from '@/components/home/AboutSection';
import NetworkSection from '@/components/home/NetworkSection';
import TrackingSection from '@/components/home/TrackingSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import SustainabilitySection from '@/components/home/SustainabilitySection';
import CaseStudies from '@/components/home/CaseStudies';
import BrandsStrip from '@/components/home/BrandsStrip';
import CtaBanner from '@/components/common/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <AboutSection />
      <NetworkSection />
      <TrackingSection />
      <IndustriesSection />
      <SustainabilitySection />
      <CaseStudies />
      <BrandsStrip />
      <CtaBanner />
    </>
  );
}
