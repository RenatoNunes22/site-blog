import { CallToAction } from '@/templates/sections/call-to-action/call-to-action';
import { CustomerStorySection } from '@/templates/sections/customer-story-section/customer-story-section';
import { FeatureSection } from '@/templates/sections/feature-section/feature-section';
import { HeroSection } from '@/templates/sections/hero-section/hero-section';
import { SupportSection } from '@/templates/sections/support-section/support-section';

export const LadingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
};
