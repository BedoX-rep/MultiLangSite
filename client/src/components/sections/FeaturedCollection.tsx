import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCT_CATEGORIES, type Product, type ProductCategory } from '@shared/schema';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function FeaturedCollection() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(PRODUCT_CATEGORIES.ALL);

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

  const handleCategoryChange = (category: ProductCategory) => {
    setActiveCategory(category);
  };

  return (
    <section id="collection" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 leading-tight">
              {t('featured.title')}
            </h2>
            <p className="mt-3 text-gray-600 font-light max-w-xl">
              {t('featured.subtitle')}
            </p>
          </div>
          
          <div className={`flex flex-wrap gap-1 ${direction === 'rtl' ? 'md:justify-start' : 'md:justify-end'}`}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 text-xs tracking-wide uppercase transition-colors duration-200 ${
                  activeCategory === category.id 
                    ? 'text-primary border-b border-primary' 
                    : 'text-gray-500 hover:text-gray-900 border-b border-transparent'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isLoading ? (
            // Loading skeleton with more refined look
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white h-[350px] animate-pulse">
                <div className="h-[250px] bg-gray-100"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-100 w-2/3"></div>
                  <div className="h-4 mt-3 bg-gray-100 w-1/4"></div>
                </div>
              </div>
            ))
          ) : (
            products.map((product: Product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                    <img 
                      src={product.imageUrl || "https://images.unsplash.com/photo-1633621641966-23836fcafd7a?q=80&w=1974"}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="ghost" 
                        className="text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-none px-6 py-2"
                      >
                        {t('featured.quickView')}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-light text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm font-light text-gray-700">${product.price}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="outline"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none text-sm tracking-wide uppercase font-light px-8 py-6"
          >
            <span className="flex items-center gap-2">
              {t('featured.viewMore')}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
