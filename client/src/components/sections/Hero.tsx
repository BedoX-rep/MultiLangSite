import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section className="relative bg-[#f8f8f8] overflow-hidden min-h-[90vh] flex items-center">
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
              
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-sm font-normal tracking-wide uppercase text-gray-700 hover:text-gray-900 hover:bg-transparent px-4"
              >
                <a href="#virtual-try-on">{t('hero.virtual_try_on')}</a>
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
    </section>
  );
}
