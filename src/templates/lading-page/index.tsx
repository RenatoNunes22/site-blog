import { CallToAction } from '@/templates/views/call-to-action/call-to-action';
import { CustomerStorySection } from '@/templates/views/customer-story-section/customer-story-section';
import { FeatureSection } from '@/templates/views/feature-section/feature-section';
import { HeroSection } from '@/templates/views/hero-section/hero-section';
import { SupportSection } from '@/templates/views/support-section/support-section';

export const LadingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
};
