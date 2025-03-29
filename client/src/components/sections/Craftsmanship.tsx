import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

export function Craftsmanship() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // In a real application, this would send the email to a backend service
    toast({
      title: t('partners.subscribeSuccess', 'Subscription successful!'),
      description: t('partners.subscribeMessage', 'Thank you for subscribing to our newsletter.'),
    });
    
    setEmail('');
  };

  const images = [
    "https://images.unsplash.com/photo-1545657351-9e0a0b5ea7a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1617373310678-e6689aee9d9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1607035886226-9338adb1a8b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1587614380862-0294308ae58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  ];

  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              {t('partners.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              {t('partners.description')}
            </p>
            <motion.div 
              className="mt-8 bg-gray-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-900">
                {t('partners.formTitle')}
              </h3>
              <form className="mt-4 flex" onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  placeholder={t('partners.formPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
                <Button 
                  type="submit" 
                  className="ml-4 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md"
                >
                  {t('partners.formButton')}
                </Button>
              </form>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.div 
                  key={index}
                  className="relative h-32 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img 
                    src={image} 
                    alt={`Eyewear craftsmanship ${index+1}`} 
                    className="object-cover h-full w-full" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
