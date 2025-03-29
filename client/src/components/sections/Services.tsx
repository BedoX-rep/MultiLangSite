import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  Eye, 
  User, 
  Truck 
} from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <PlusCircle className="h-8 w-8" />,
      title: t('services.eyeExam'),
      description: t('services.eyeExamDesc')
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: t('services.lensOptions'),
      description: t('services.lensOptionsDesc')
    },
    {
      icon: <User className="h-8 w-8" />,
      title: t('services.styling'),
      description: t('services.stylingDesc')
    },
    {
      icon: <Truck className="h-8 w-8" />,
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
    <section id="services" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
            {t('services.title')}
          </h2>
        </motion.div>
        
        <motion.div 
          className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-md"
              variants={itemVariants}
            >
              <div className="p-3 rounded-full bg-primary bg-opacity-10 text-primary">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="px-8 py-3 text-base">
            {t('services.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
