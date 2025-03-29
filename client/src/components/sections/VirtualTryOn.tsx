import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle } from 'lucide-react';
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
    <section className="py-12 bg-secondary bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: direction === 'ltr' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ order: direction === 'rtl' ? 1 : 0 }}
          >
            <div className="relative lg:aspect-w-4 lg:aspect-h-3">
              <img 
                className="object-cover rounded-lg shadow-lg" 
                src="https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Virtual try-on technology" 
              />
            </div>
            <div 
              className={`absolute -bottom-4 ${direction === 'ltr' ? '-right-4' : '-left-4'} bg-white p-4 rounded-lg shadow-md`}
            >
              <p className="text-sm font-medium text-gray-900">
                {t('virtual.tryOnLabel', 'Try frames on your face in real-time')}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 font-serif"
              variants={itemVariants}
            >
              {t('virtual.title')}
            </motion.h2>
            
            <motion.ul className="mt-6 space-y-4" variants={containerVariants}>
              {benefits.map((benefit, index) => (
                <motion.li key={index} className="flex" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="ml-3 text-base text-gray-700">{benefit.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div className="mt-8" variants={itemVariants}>
              <Button className="px-8 py-3 text-base">
                {t('virtual.cta')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
