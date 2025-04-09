import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Eye,
  CalendarDays,
  Calendar,
  Search,
  Paintbrush,
  Stethoscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function ContactLenses() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  
  const lensTypes = [
    {
      id: 'daily',
      title: t('contactLenses.dailyTitle'),
      description: t('contactLenses.dailyDescription'),
      icon: CalendarDays,
      delay: 0.1
    },
    {
      id: 'biweekly',
      title: t('contactLenses.biweeklyTitle'),
      description: t('contactLenses.biweeklyDescription'),
      icon: Calendar,
      delay: 0.2
    },
    {
      id: 'monthly',
      title: t('contactLenses.monthlyTitle'),
      description: t('contactLenses.monthlyDescription'),
      icon: Calendar,
      delay: 0.3
    },
    {
      id: 'specialty',
      title: t('contactLenses.specialtyTitle'),
      description: t('contactLenses.specialtyDescription'),
      icon: Search,
      delay: 0.4
    },
    {
      id: 'colored',
      title: t('contactLenses.coloredTitle'),
      description: t('contactLenses.coloredDescription'),
      icon: Paintbrush,
      delay: 0.5
    },
    {
      id: 'exam',
      title: t('contactLenses.examTitle'),
      description: t('contactLenses.examDescription'),
      icon: Stethoscope,
      delay: 0.6
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block border-b-2 border-primary px-2 py-1 mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            {t('contactLenses.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-5">
            {t('contactLenses.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('contactLenses.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lensTypes.map((type) => (
            <motion.div
              key={type.id}
              className="group bg-[#f8f8f8] hover:bg-white p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: type.delay }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <type.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {type.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-none text-sm font-normal tracking-wide px-8"
          >
            <span className="flex items-center gap-2">
              {t('contactLenses.cta')}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </motion.div>
        
        {/* Featured lens images */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-sm aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1567301884669-c2889e5e7eb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Person inserting contact lens"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-sm aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1599314565870-3d15c2e656b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Close-up of eye with contact lens"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-sm aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1584036553516-bf83406a6a5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Contact lens case"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-sm aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1511192319318-ea2798c7e574?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Eye with colored contact lens"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}