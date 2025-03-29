import { useTranslation } from 'react-i18next';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@shared/schema';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  
  // Convert rating to an array to render stars
  const rating = parseFloat(product.rating.toString());
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="group product-card bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out">
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          className="h-full w-full object-cover object-center featured-image" 
          src={product.imageUrl} 
          alt={product.name} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-700">${product.price}</p>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex text-primary">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < fullStars ? 'fill-current' : (i === fullStars && hasHalfStar ? 'fill-current opacity-50' : '')}`} 
              />
            ))}
          </div>
          <Button 
            size="icon"
            className="p-2 rounded-full"
            variant="default"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
