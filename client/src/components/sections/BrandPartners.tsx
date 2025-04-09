import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

// Import partner logos from assets
import essilorLogoPath from '@assets/hto.png';
import indoLogoPath from '@assets/1logo.png';
import hoyaLogoPath from '@assets/hoya-corporation3043-183421669.jpg';
import zeissLogoPath from '@assets/logo3.png';
import logoPath from '@assets/logo-829712431.png';

export function BrandPartners() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  
  const brandLogos = [
    { name: 'Essilor', logo: essilorLogoPath },
    { name: 'Indo', logo: indoLogoPath },
    { name: 'Hoya', logo: hoyaLogoPath },
    { name: 'Zeiss', logo: zeissLogoPath },
    { name: 'Logo', logo: logoPath },
    // Duplicate logos to create a smooth infinite scroll effect
    { name: 'Essilor', logo: essilorLogoPath },
    { name: 'Indo', logo: indoLogoPath },
    { name: 'Hoya', logo: hoyaLogoPath },
    { name: 'Zeiss', logo: zeissLogoPath },
    { name: 'Logo', logo: logoPath },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block border-b-2 border-primary px-2 py-1 mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            {t('partners.trustedBy')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-5">
            {t('partners.title')}
          </h2>
        </motion.div>
        
        {/* Infinite scrolling brand logos */}
        <div className="relative overflow-hidden py-10 bg-[#f8f8f8]">
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f8f8f8] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f8f8f8] to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <div className="flex logos-slide animate-marquee">
              {brandLogos.map((brand, index) => (
                <div 
                  key={`${brand.name}-${index}`} 
                  className="flex items-center justify-center mx-8 md:mx-12 h-24 min-w-[180px]"
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless looping */}
            <div className="flex logos-slide animate-marquee">
              {brandLogos.map((brand, index) => (
                <div 
                  key={`${brand.name}-dup-${index}`} 
                  className="flex items-center justify-center mx-8 md:mx-12 h-24 min-w-[180px]"
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}