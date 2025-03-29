import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Glasses, Ruler, Upload, Sliders } from 'lucide-react';

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
    <section className="relative bg-[#f8f8f8] overflow-hidden">
      {/* Hero section */}
      <div className="min-h-[90vh] flex items-center">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-1/3"></div>
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text content - left side */}
            <motion.div 
              className="lg:pr-12 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-900 leading-tight"
                variants={itemVariants}
              >
                {t('hero.title')}
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-gray-600 font-light max-w-xl leading-relaxed"
                variants={itemVariants}
              >
                {t('hero.subtitle')}
              </motion.p>
              
              <motion.div 
                className="mt-10 flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={`text-sm font-normal tracking-wide uppercase border border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-none px-8`}
                >
                  <a href="#collection" className="flex items-center gap-2">
                    {t('hero.cta')}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Image - right side */}
            <div className={`relative h-full order-1 lg:order-2 min-h-[40vh] ${direction === 'rtl' ? 'lg:order-1' : ''}`}>
              <motion.div 
                className="relative h-full aspect-[3/4] max-h-[70vh] overflow-hidden bg-[#f0f0f0]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1625591339971-4c9a87a66871?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Model wearing designer glasses" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating product image */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 lg:-right-12 lg:-bottom-8 w-40 lg:w-52 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1633621641966-23836fcafd7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Glasses product" 
                    className="w-full aspect-square object-cover bg-white p-4"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ordering Process Section */}
      <div className="py-16 bg-gradient-to-b from-[#f8f8f8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-3">
              {t('ordering.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('ordering.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {orderingSteps.map((step) => (
              <motion.div
                key={step.id}
                className="relative bg-white rounded-sm shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded-sm">
                  {t('ordering.step')} {step.id}
                </div>
                
                <div className="p-6 pt-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <step.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-none text-sm font-normal tracking-wide uppercase px-8"
            >
              <span className="flex items-center gap-2">
                {t('ordering.cta')}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
