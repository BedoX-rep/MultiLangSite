import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { CheckCircle2, Shield, Award } from 'lucide-react';

export function Craftsmanship() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Define partner logos
  const brandPartners = [
    { name: "Essilor", logo: "/attached_assets/1logo.png" },
    { name: "Hoya", logo: "/attached_assets/hoya-corporation3043-183421669.jpg" },
    { name: "Zeiss", logo: "/attached_assets/logo3.png" },
    { name: "Indo", logo: "/attached_assets/logo-829712431.png" }
  ];

  // Animation for the logo carousel
  useEffect(() => {
    const startCarouselAnimation = async () => {
      // Create infinite animation loop
      while (true) {
        await controls.start({
          x: [0, -1500],
          transition: { 
            duration: 25, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    };

    startCarouselAnimation();
  }, [controls]);
  
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('partners.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Quality Assurance */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-medium text-gray-900">
                {t('partners.quality')}
              </h3>
            </div>
            <p className="text-gray-700">
              {t('partners.qualityDescription')}
            </p>
          </motion.div>
          
          {/* Premium Materials */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-medium text-gray-900">
                {t('partners.materials')}
              </h3>
            </div>
            <p className="text-gray-700">
              {t('partners.materialsDescription')}
            </p>
          </motion.div>
          
          {/* Trusted Partners */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-medium text-gray-900">
                {t('partners.brands')}
              </h3>
            </div>
            <p className="text-gray-700">
              {t('partners.brandsDescription')}
            </p>
          </motion.div>
        </div>
        
        {/* Brand Partners Logo Slider */}
        <div className="mt-20 mb-10 border-t border-b border-gray-100 py-12 overflow-hidden">
          <h3 className="text-center text-lg font-medium text-gray-900 mb-8">
            {t('partners.trustedBy')}
          </h3>
          
          <div className="relative overflow-hidden w-full" ref={carouselRef}>
            {/* First set of logos */}
            <motion.div 
              className="flex items-center gap-20 absolute"
              animate={controls}
            >
              {/* Duplicate the logos to create a seamless loop */}
              {[...brandPartners, ...brandPartners, ...brandPartners].map((partner, index) => (
                <motion.div 
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 h-16 px-8 flex items-center justify-center"
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="max-h-full max-w-[180px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
