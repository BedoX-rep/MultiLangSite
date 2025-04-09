import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Glasses, Ruler, Upload, Sliders, ChevronDown } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5
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
  
  const orderingSteps = [
    {
      id: 1,
      icon: Glasses,
      title: t('ordering.step1.title'),
      description: t('ordering.step1.description'),
      delay: 0.3
    },
    {
      id: 2,
      icon: Ruler,
      title: t('ordering.step2.title'),
      description: t('ordering.step2.description'),
      delay: 0.4
    },
    {
      id: 3,
      icon: Upload,
      title: t('ordering.step3.title'),
      description: t('ordering.step3.description'),
      delay: 0.5
    },
    {
      id: 4,
      icon: Sliders,
      title: t('ordering.step4.title'),
      description: t('ordering.step4.description'),
      delay: 0.6
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/beautiful-young-woman-with-glasses.jpg" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Hero section */}
      <div className="min-h-[85vh] flex items-start pt-24 md:pt-32 lg:items-center relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/3 z-0"></div>
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start lg:items-center">
            {/* Text content */}
            <motion.div 
              className="lg:pr-12 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ order: direction === 'rtl' ? 2 : 1 }}
            >
              <motion.div
                className="inline-block border-b-2 border-primary px-2 py-1 mb-2"
                variants={itemVariants}
              >
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  {t('hero.tagline', 'Premium Eyewear')}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-900 leading-tight"
                variants={itemVariants}
              >
                {t('hero.title')}
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-gray-600 font-light max-w-xl leading-relaxed mb-6"
                variants={itemVariants}
              >
                {t('hero.subtitle')}
              </motion.p>
              
              <motion.div 
                className="mt-4 flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Button
                  size="lg"
                  className={`bg-primary hover:bg-primary/90 text-white font-normal tracking-wide rounded-none px-8`}
                >
                  <a href="#start-order" className="flex items-center gap-2">
                    {t('hero.startOrderCta')}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className={`text-sm font-normal tracking-wide border border-gray-800 bg-transparent text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-none px-8`}
                >
                  <a href="#collection" className="flex items-center gap-2">
                    {t('hero.exploreCta')}
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                className="mt-8 pt-6 border-t border-gray-200"
                variants={itemVariants}
              >
                <h3 className="text-sm font-medium uppercase tracking-wide text-primary mb-4">{t('ordering.simplifiedProcess')}</h3>
                <div className="space-y-3">
                  {orderingSteps.map((step) => (
                    <div key={step.id} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium mt-0.5">
                        {step.id}
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium text-sm">{step.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Empty space for balance - right side */}
            <div className={`relative h-full order-1 lg:order-2 ${direction === 'rtl' ? 'lg:order-1' : ''}`}></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#how-to-pick" className="flex flex-col items-center justify-center">
            <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
