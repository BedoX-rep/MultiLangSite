import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { FeaturedCollection } from '@/components/sections/FeaturedCollection';
import { VirtualTryOn } from '@/components/sections/VirtualTryOn';
import { BrandPartners } from '@/components/sections/BrandPartners';
import { CustomSunglasses } from '@/components/sections/CustomSunglasses';
import { ContactLenses } from '@/components/sections/ContactLenses';
import { Testimonials } from '@/components/sections/Testimonials';
import { StoreLocations } from '@/components/sections/StoreLocations';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedCollection />
      <CustomSunglasses />
      <ContactLenses />
      <VirtualTryOn />
      <BrandPartners />
      <StoreLocations />
      <Testimonials />
    </div>
  );
}
