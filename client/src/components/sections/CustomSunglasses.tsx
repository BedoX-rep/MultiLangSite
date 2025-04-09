import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Sun,
  Droplets,
  PaintBucket,
  Palette,
  Glasses
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
    <section className="bg-gradient-to-b from-[#f8f8f8] to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block border-b-2 border-primary px-2 py-1 mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            {t('customSunglasses.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-5">
            {t('customSunglasses.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('customSunglasses.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with tint examples */}
          <motion.div
            className="relative aspect-square lg:aspect-auto lg:h-[600px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Model wearing customized sunglasses"
              className="h-full w-full object-cover rounded-md"
            />
            
            {/* Tint color options floating display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-md shadow-lg max-w-xs">
                <h3 className="text-primary font-medium mb-4 text-center">
                  {t('customSunglasses.colorTitle')}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {tintOptions.map((tint) => (
                    <div key={tint.color} className="flex flex-col items-center">
                      <div 
                        className="w-12 h-12 rounded-full mb-2" 
                        style={{ backgroundColor: tint.hex }}
                      />
                      <span className="text-xs text-gray-700 capitalize">{tint.color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Tint options descriptions */}
          <div>
            <motion.h3 
              className="text-2xl font-serif font-light text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {t('customSunglasses.optionsTitle')}
            </motion.h3>
            
            <div className="space-y-8">
              <motion.div
                className="flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Droplets className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    {t('customSunglasses.gradientTitle')}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {t('customSunglasses.gradientDescription')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <PaintBucket className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    {t('customSunglasses.fullTitleTitle')}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {t('customSunglasses.fullTintDescription')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sun className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    {t('customSunglasses.polarizedTitle')}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {t('customSunglasses.polarizedDescription')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-none text-sm font-normal tracking-wide px-8"
                >
                  <span className="flex items-center gap-2">
                    {t('customSunglasses.cta')}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="mt-16 border-t border-gray-200 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
            {t('customSunglasses.colorTitle')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tintOptions.map((tint) => (
              <motion.div
                key={tint.color}
                className="bg-white p-4 rounded-sm border border-gray-100 flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: tint.hex }}
                />
                <div>
                  <span className="text-gray-900 font-medium block">{tint.color}</span>
                  <span className="text-sm text-gray-600">{t(`customSunglasses.colors.${tint.color}`)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}