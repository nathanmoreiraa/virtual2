import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Differentials from '@/components/sections/Differentials';
import Products from '@/components/sections/Products';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import OnlineBuyCTA from '@/components/sections/OnlineBuyCTA';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import InstagramCTA from '@/components/sections/InstagramCTA';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Differentials />
      <Products />
      <HowItWorks />
      <WhyChooseUs />
      <OnlineBuyCTA />
      <Testimonials />
      <FAQ />
      <InstagramCTA />
      <CTA />
    </main>
  );
}
