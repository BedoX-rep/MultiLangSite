import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HowToPickGlasses() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  
  const steps = [
    {
      id: 1,
      title: "Choose Your Base Frame",
      description: "Select from hundreds of styles that match your face and personality.",
      icon: "/icons/icon1.png"
    },
    {
      id: 2,
      title: "Select Your Lens Type",
      description: "Choose single vision, progressive, or blue-light filtering options.",
      icon: "/icons/icon2.png"
    },
    {
      id: 3,
      title: "Upload Your Prescription",
      description: "Easily upload a photo of your prescription or enter details manually.",
      icon: "/icons/icon3.png"
    },
    {
      id: 4,
      title: "Receive Your Glasses",
      description: "Fast delivery to your door with perfect fit guarantee.",
      icon: "/icons/icon4.png"
    }
  ];

  return (
    <section id="how-to-pick" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block border-b-2 border-primary px-2 py-1 mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            {t('ordering.easierThanEver')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-3">
            How to Pick Your Pair
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to find your perfect glasses
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.id * 0.1 }}
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="w-24 h-24 relative">
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="absolute -mt-4 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                {step.id}
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3 mt-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-none text-sm font-normal tracking-wide uppercase px-10 py-7"
          >
            <span className="flex items-center gap-2">
              {t('ordering.startOrderCta')}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}