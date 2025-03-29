import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const { t } = useTranslation();

  // Fetch testimonials
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: () => fetch('/api/testimonials').then(res => res.json())
  });

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
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
            {t('trusted.title')}
          </h2>
        </motion.div>
        
        <motion.div 
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, j) => (
                    <div key={j} className="h-5 w-5 mr-1 bg-gray-200 rounded-full"></div>
                  ))}
                </div>
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-sm"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-10 w-10 rounded-full" 
                      src={testimonial.imageUrl} 
                      alt={testimonial.author} 
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">{testimonial.author}</h3>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
