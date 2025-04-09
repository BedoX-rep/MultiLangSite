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
      description: "Whatever style you're looking for, we have the perfect frame shape for you! Our glasses start at just $50.",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Select Your Lens Type",
      description: "From single vision to progressives, we'll fill your prescription to your needs and can add enhancements like blue-light filtering.",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Upload Your Prescription",
      description: "Simply upload a photo of your prescription or enter the details manually. Our team will verify everything for accuracy.",
      image: "https://images.unsplash.com/photo-1587614298171-55d8633b2bdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Receive Your Glasses",
      description: "Your custom glasses will be delivered right to your door, carefully packaged and ready to wear. Fast shipping included!",
      image: "https://images.unsplash.com/photo-1589642048698-a64e8c7e479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
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
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.id * 0.1 }}
            >
              <div className="mb-4 aspect-square overflow-hidden rounded-md bg-gray-100">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-lg font-medium text-center text-gray-900 mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm text-center">
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