import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCT_CATEGORIES } from '@shared/schema';
import { motion } from 'framer-motion';

export function FeaturedCollection() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES.ALL);

  // Fetch products based on the active category
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['/api/products', activeCategory],
    queryFn: () => fetch(`/api/products?category=${activeCategory}`).then(res => res.json())
  });

  const categories = [
    { id: PRODUCT_CATEGORIES.ALL, label: t('featured.all') },
    { id: PRODUCT_CATEGORIES.MEN, label: t('featured.men') },
    { id: PRODUCT_CATEGORIES.WOMEN, label: t('featured.women') },
    { id: PRODUCT_CATEGORIES.KIDS, label: t('featured.kids') },
    { id: PRODUCT_CATEGORIES.LUXURY, label: t('featured.luxe') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="collection" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
            {t('featured.title')}
          </h2>
          
          <div className={`mt-6 flex justify-center space-x-2 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className="px-4 py-2 text-sm font-medium rounded-md transition duration-300 ease-in-out"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isLoading ? (
            // Loading skeleton
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm h-80 animate-pulse">
                <div className="h-64 bg-gray-200 rounded-t-lg"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 mt-2 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))
          ) : (
            products.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))
          )}
        </motion.div>
        
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="outline" className="px-6 py-3 border-primary text-primary hover:bg-primary hover:text-white">
            {t('featured.viewMore')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
