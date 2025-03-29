import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Upload, Glasses, Ruler, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OrderingProcess() {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  const steps = [
    {
      id: 1,
      icon: Glasses,
      title: t('ordering.step1.title'),
      description: t('ordering.step1.description'),
      delay: 0.1
    },
    {
      id: 2,
      icon: Ruler,
      title: t('ordering.step2.title'),
      description: t('ordering.step2.description'),
      delay: 0.3
    },
    {
      id: 3,
      icon: Upload,
      title: t('ordering.step3.title'),
      description: t('ordering.step3.description'),
      delay: 0.5
    },
    {
      id: 4,
      icon: Stethoscope,
      title: t('ordering.step4.title'),
      description: t('ordering.step4.description'),
      delay: 0.7
    }
  ];

  return (
    <section id="ordering-process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
            {t('ordering.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('ordering.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-white p-6 relative shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                <step.icon className="h-6 w-6" />
              </div>
              
              <div className={`absolute -top-3 ${direction === 'rtl' ? 'left-3' : 'right-3'} bg-primary text-white text-xs py-1 px-3`}>
                {t('ordering.step')} {step.id}
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="text-sm uppercase tracking-wide bg-primary hover:bg-primary/90 rounded-none px-8"
          >
            <span className="flex items-center gap-2">
              {t('ordering.cta')}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}