import { CustomerStorySection } from '@/templates/lading-page/sections/customer-story-section/customer-story-section';
import { FeatureSection } from '@/templates/lading-page/sections/feature-section/feature-section';
import { HeroSection } from '@/templates/lading-page/sections/hero-section/hero-section';
import { SupportSection } from '@/templates/lading-page/sections/support-section/support-section';

export const LadingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  );
};
