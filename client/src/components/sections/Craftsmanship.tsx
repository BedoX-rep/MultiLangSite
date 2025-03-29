import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Award } from 'lucide-react';

export function Craftsmanship() {
  const { t } = useTranslation();

  // Import partner logos
  const essilorLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Essilor-Logo.svg/320px-Essilor-Logo.svg.png";
  const indoLogo = "https://www.indo.es/site/themes/indo/images/indo-logo.svg";
  
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
          <h2 className="text-3xl font-bold text-gray-900 font-serif">
            {t('partners.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            {t('partners.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
        
        {/* Partner Logos */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={essilorLogo} alt="Essilor Logo" className="h-full" />
          </motion.div>
          <motion.div 
            className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={indoLogo} alt="Indo Logo" className="h-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
