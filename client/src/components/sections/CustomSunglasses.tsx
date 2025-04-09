import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Sun,
  Droplets,
  Shield,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function CustomSunglasses() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  
  const tintOptions = [
    { color: 'brown', hex: '#8B4513' },
    { color: 'grey', hex: '#808080' },
    { color: 'green', hex: '#2E8B57' },
    { color: 'blue', hex: '#4682B4' },
    { color: 'rose', hex: '#FF69B4' },
    { color: 'yellow', hex: '#FFD700' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text and CTA */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block border-b-2 border-primary px-2 py-1 mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              {t('customSunglasses.subtitle', 'Premium Protection')}
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
              Custom Designed Sunglasses
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Choose from a wide range of tints and coatings to create your perfect pair of sunglasses. 
              Our premium lenses provide 100% UV protection while enhancing your vision with 
              customized colors and polarization options.
            </p>
            
            <div className="space-y-6 mb-10">
              {['Premium polarized lenses', 'Six tint color options', 'Gradient or solid tint', 'Anti-scratch coating'].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
            
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-none text-sm font-normal tracking-wide px-10"
            >
              <span className="flex items-center gap-2">
                Customize Your Sunglasses
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/sunglasses1.png"
              alt="Custom designed sunglasses"
              className="w-full object-contain rounded-lg"
            />
          </motion.div>
        </div>
        
        {/* Tint color options */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg text-center font-medium text-gray-900 mb-6">Available Tint Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {tintOptions.map((tint) => (
              <motion.div
                key={tint.color}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-2 shadow-md" 
                  style={{ backgroundColor: tint.hex }}
                />
                <span className="text-sm text-gray-800 capitalize">{tint.color}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}