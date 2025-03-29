import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

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
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl">
          <motion.main 
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl"
                variants={itemVariants}
              >
                <span className="block font-serif">{t('hero.title')}</span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-3 text-base font-medium rounded-md shadow"
                >
                  <a href="#collection">{t('hero.cta')}</a>
                </Button>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>
      <div 
        className={`lg:absolute lg:inset-y-0 ${direction === 'ltr' ? 'lg:right-0' : 'lg:left-0'} lg:w-1/2`}
      >
        <motion.img 
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Person wearing designer glasses"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </div>
  );
}
