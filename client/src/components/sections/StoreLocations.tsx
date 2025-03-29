import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StoreLocations() {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  const locations = [
    {
      id: 1,
      name: t('locations.store1.name'),
      address: t('locations.store1.address'),
      hours: t('locations.store1.hours'),
      phone: t('locations.store1.phone'),
      image: "https://images.unsplash.com/photo-1582050041567-9cfdd330d545?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      delay: 0.1
    },
    {
      id: 2,
      name: t('locations.store2.name'),
      address: t('locations.store2.address'),
      hours: t('locations.store2.hours'),
      phone: t('locations.store2.phone'),
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      delay: 0.3
    }
  ];

  return (
    <section id="store-locations" className="py-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              className="flex flex-col md:flex-row overflow-hidden bg-white border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: location.delay }}
            >
              <div className="md:w-2/5 h-60 md:h-auto">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {location.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-2 text-gray-600">
                    <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span>{location.address}</span>
                  </div>
                  
                  <div className="flex items-start gap-2 mb-2 text-gray-600">
                    <Clock className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span>{location.hours}</span>
                  </div>
                  
                  <div className="flex items-start gap-2 mb-6 text-gray-600">
                    <Phone className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span>{location.phone}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="self-start border-gray-300 hover:border-primary hover:text-primary rounded-none"
                >
                  {t('locations.directions')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}