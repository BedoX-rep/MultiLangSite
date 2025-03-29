import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

export function Testimonials() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [autoplay, setAutoplay] = useState(true);

  // Fetch testimonials
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: () => fetch('/api/testimonials').then(res => res.json())
  });

  // Variants for carousel animation
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  // Handle navigation
  const navigate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    
    if (newDirection > 0) {
      // Navigate right/next
      setCurrentIndex(currentIndex => 
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
      );
    } else {
      // Navigate left/prev
      setCurrentIndex(currentIndex => 
        currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
      );
    }
    
    // Pause autoplay for 5 seconds when user manually navigates
    setAutoplay(false);
    const timer = setTimeout(() => setAutoplay(true), 5000);
    return () => clearTimeout(timer);
  }, [testimonials.length]);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(current => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
            {t('trusted.title')}
          </h2>
        </motion.div>
        
        {isLoading ? (
          // Loading skeleton
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-pulse">
              <div className="flex justify-center mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <div key={j} className="h-5 w-5 mx-1 bg-gray-200 rounded-full"></div>
                ))}
              </div>
              <div className="h-24 bg-gray-200 rounded mx-auto max-w-xl"></div>
              <div className="mt-6 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div className="ml-3">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden relative bg-white rounded-xl shadow-lg">
              <div className="min-h-[300px] sm:min-h-[250px] py-12 px-6 sm:px-12 flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  {testimonials.length > 0 && (
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute w-full max-w-2xl mx-auto text-center"
                    >
                      <div className="flex justify-center text-primary mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-current mx-0.5" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-700 italic mb-8 font-light">
                        "{testimonials[currentIndex].text}"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <div className="flex-shrink-0">
                          <img 
                            className="h-12 w-12 rounded-full border-2 border-primary object-cover" 
                            src={testimonials[currentIndex].imageUrl} 
                            alt={testimonials[currentIndex].author} 
                          />
                        </div>
                        <div className="ml-3 text-left">
                          <h3 className="text-md font-semibold text-gray-900">{testimonials[currentIndex].author}</h3>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Navigation buttons */}
              {testimonials.length > 1 && (
                <>
                  <button 
                    onClick={() => navigate(-1)}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => navigate(1)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Indicators */}
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: testimonials.length }).map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                      setAutoplay(false);
                      setTimeout(() => setAutoplay(true), 5000);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
