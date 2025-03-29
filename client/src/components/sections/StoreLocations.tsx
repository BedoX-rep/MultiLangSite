import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StoreLocations() {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  // Only showing Tangier location as requested
  const location = {
    name: t('locations.store1.name'),
    address: t('locations.store1.address'),
    hours: t('locations.store1.hours'),
    phone: t('locations.store1.phone'),
    email: t('locations.store1.email'),
    image: "https://images.unsplash.com/photo-1582050041567-9cfdd330d545?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
  };

  return (
    <section id="store-locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
            {t('locations.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('locations.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden bg-white border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="lg:col-span-2 h-60 lg:h-auto relative">
              <img 
                src={location.image} 
                alt="Lens Optique - Tangier" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 lg:hidden">
                <h3 className="text-lg font-medium">{location.name}</h3>
              </div>
            </div>
            
            <div className="lg:col-span-3 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-light text-gray-900 mb-6 hidden lg:block">
                  {location.name}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span className="leading-relaxed">{location.address}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-600">
                    <Clock className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span className="leading-relaxed">{location.hours}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-600">
                    <Phone className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span className="leading-relaxed">{location.phone}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline"
                  className="border-gray-300 hover:border-primary hover:bg-primary hover:text-white rounded-none transition-colors duration-300"
                >
                  <span className="flex items-center gap-2">
                    {t('locations.directions')}
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-gray-300 hover:border-primary hover:bg-primary hover:text-white rounded-none transition-colors duration-300"
                >
                  <span className="flex items-center gap-2">
                    {t('locations.book')}
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Map placeholder */}
          <motion.div 
            className="mt-8 h-64 sm:h-80 bg-gray-200 relative flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-2 opacity-30" />
              <p>{t('locations.mapPlaceholder')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}