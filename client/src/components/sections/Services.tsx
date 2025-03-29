import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Custom SVG icons for the services
const EyeExamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c1.889-2.991 5.282-6 9-6s7.111 3.009 9 6z"></path>
    <line x1="12" y1="3" x2="12" y2="5"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="12" y1="19" x2="12" y2="21"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
  </svg>
);

const LensOptionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M7 12a5 5 0 0 1 5 -5"></path>
    <path d="M12 7a5 5 0 0 1 5 5"></path>
    <path d="M12 12a5 5 0 0 1 5 5"></path>
    <path d="M12 17a5 5 0 0 1 -5 -5"></path>
    <path d="M12 12v1"></path>
  </svg>
);

const StyleConsultationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h12a2 2 0 0 1 2 2v1a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-1a2 2 0 0 1 2 -2z"></path>
    <path d="M4 9v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-1"></path>
    <path d="M10 19v-7"></path>
    <path d="M14 19v-7"></path>
    <path d="M6 19h12a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2z"></path>
  </svg>
);

const DeliveryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <line x1="6" y1="10" x2="18" y2="10"></line>
    <line x1="12" y1="15" x2="15" y2="15"></line>
    <path d="M8 2v2"></path>
    <path d="M16 2v2"></path>
    <path d="M22 9h-2"></path>
    <path d="M4 9h-2"></path>
    <path d="M19 17l3 3"></path>
  </svg>
);

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <EyeExamIcon />,
      title: t('services.eyeExam'),
      description: t('services.eyeExamDesc')
    },
    {
      icon: <LensOptionsIcon />,
      title: t('services.lensOptions'),
      description: t('services.lensOptionsDesc')
    },
    {
      icon: <StyleConsultationIcon />,
      title: t('services.styling'),
      description: t('services.stylingDesc')
    },
    {
      icon: <DeliveryIcon />,
      title: t('services.delivery'),
      description: t('services.deliveryDesc')
    }
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
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl font-serif mb-3">
            {t('services.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-100 transition duration-300 ease-in-out hover:shadow-md"
              variants={itemVariants}
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="outline"
            className="px-8 py-3 text-sm uppercase tracking-wide border border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-none"
          >
            {t('services.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
