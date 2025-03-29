import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  CreditCard
} from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  const aboutLinks = [
    { href: '#', label: t('footer.about.story') },
    { href: '#', label: t('footer.about.team') },
    { href: '#', label: t('footer.about.careers') },
    { href: '#', label: t('footer.about.press') }
  ];

  const customerLinks = [
    { href: '#', label: t('footer.customer.faq') },
    { href: '#', label: t('footer.customer.shipping') },
    { href: '#', label: t('footer.customer.warranty') },
    { href: '#', label: t('footer.customer.repairs') }
  ];

  const legalLinks = [
    { href: '#', label: t('footer.legal.terms') },
    { href: '#', label: t('footer.legal.privacy') },
    { href: '#', label: t('footer.legal.accessibility') }
  ];

  const socialLinks = [
    { href: '#', icon: <Facebook className="h-5 w-5" /> },
    { href: '#', icon: <Instagram className="h-5 w-5" /> },
    { href: '#', icon: <Twitter className="h-5 w-5" /> },
    { href: '#', icon: <Linkedin className="h-5 w-5" /> }
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              {t('footer.about.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-base text-gray-300 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Care section */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              {t('footer.customer.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              {customerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-base text-gray-300 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal section */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              {t('footer.legal.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-base text-gray-300 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social links and logo */}
          <div>
            <div className={`flex space-x-6 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a href="#" className="text-xl font-serif font-semibold text-white">
                {t('brand')}
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and payment methods */}
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className={`flex space-x-6 md:order-2 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
            {[1, 2, 3].map((i) => (
              <a key={i} href="#" className="text-gray-300 hover:text-white">
                <CreditCard className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-300 md:mt-0 md:order-1">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
