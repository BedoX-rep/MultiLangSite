import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { FeaturedCollection } from '@/components/sections/FeaturedCollection';
import { VirtualTryOn } from '@/components/sections/VirtualTryOn';
import { Craftsmanship } from '@/components/sections/Craftsmanship';
import { Testimonials } from '@/components/sections/Testimonials';
import { StoreLocations } from '@/components/sections/StoreLocations';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedCollection />
      <VirtualTryOn />
      <Craftsmanship />
      <StoreLocations />
      <Testimonials />
    </div>
  );
}
