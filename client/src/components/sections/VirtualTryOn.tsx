import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Smartphone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function VirtualTryOn() {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  const benefits = [
    { text: t('virtual.bullet1') },
    { text: t('virtual.bullet2') },
    { text: t('virtual.bullet3') },
    { text: t('virtual.bullet4') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="virtual-try-on" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ order: direction === 'rtl' ? 2 : 1 }}
          >
            <div className="max-w-md">
              <motion.p 
                className="text-sm font-medium uppercase tracking-wider text-primary mb-3"
                variants={itemVariants}
              >
                {t('virtual.tagline', 'Revolutionary Technology')}
              </motion.p>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-light text-gray-900 leading-tight"
                variants={itemVariants}
              >
                {t('virtual.title')}
              </motion.h2>
              
              <motion.p 
                className="mt-4 text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                {t('virtual.description', 'Our virtual try-on technology lets you see exactly how each frame will look on your face before making a purchase, all from the comfort of your home.')}
              </motion.p>
              
              <motion.div className="mt-8 space-y-4" variants={containerVariants}>
                {benefits.map((benefit, index) => (
                  <motion.div key={index} className="flex items-start" variants={itemVariants}>
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{benefit.text}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div className="mt-10 flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <Button
                  className="bg-primary hover:bg-primary/90 rounded-none text-white text-sm font-light px-6 py-6 tracking-wide"
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    {t('virtual.cta')}
                  </span>
                </Button>
                
                {/* Learn More button removed as requested */}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative order-1 lg:order-2 h-[500px] md:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ order: direction === 'rtl' ? 1 : 2 }}
          >
            <div className="relative w-[280px] md:w-[320px] shadow-lg bg-white p-3 rounded-3xl overflow-hidden border border-gray-200">
              {/* Phone mockup with virtual try-on interface */}
              <img 
                src="/attached_assets/vto-mobile.webp"
                alt="Virtual try-on on smartphone" 
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Interface overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900">Durand Frame</h4>
                    <p className="text-xs text-gray-600">$149</p>
                  </div>
                  <Button className="h-8 px-3 text-xs bg-primary text-white hover:bg-primary/90 rounded-full">
                    {t('virtual.tryNow')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full"></div>
            <div className="absolute -z-10 bottom-1/4 left-1/4 w-40 h-40 bg-primary/10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
