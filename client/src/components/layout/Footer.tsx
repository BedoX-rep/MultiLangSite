import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Instagram, 
  Twitter,
  Facebook,
  Youtube,
  ArrowUp,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  const shopLinks = [
    { href: '#collection', label: t('footer.shop.collection') },
    { href: '#virtual-try-on', label: t('footer.shop.virtual') },
    { href: '#', label: t('footer.shop.new') },
    { href: '#', label: t('footer.shop.bestsellers') }
  ];

  const aboutLinks = [
    { href: '#', label: t('footer.about.story') },
    { href: '#', label: t('footer.about.team') },
    { href: '#', label: t('footer.about.materials') },
    { href: '#', label: t('footer.about.sustainability') }
  ];

  const helpLinks = [
    { href: '#', label: t('footer.help.faq') },
    { href: '#', label: t('footer.help.shipping') },
    { href: '#', label: t('footer.help.returns') },
    { href: '#', label: t('footer.help.contact') }
  ];

  const socialLinks = [
    { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
    { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
    { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
    { href: '#', icon: <Youtube className="h-5 w-5" />, label: 'YouTube' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter signup */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-serif font-light text-gray-900">
                {t('footer.newsletter.title')}
              </h3>
              <p className="mt-2 text-gray-600 font-light">
                {t('footer.newsletter.subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-grow px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-0 text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none text-sm font-light tracking-wide uppercase">
                {t('footer.newsletter.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand and social */}
          <div>
            <a href="/" className="text-xl font-serif text-gray-900 tracking-wide">
              {t('brand')}
            </a>
            <p className="mt-4 text-gray-600 text-sm font-light">
              {t('footer.tagline')}
            </p>
            
            <div className={`mt-6 flex space-x-5 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Shop links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-4">
              {t('footer.shop.title')}
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-4">
              {t('footer.about.title')}
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-4">
              {t('footer.help.title')}
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Payment methods and copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <CreditCard className="h-6 w-6 text-gray-400" />
            <CreditCard className="h-6 w-6 text-gray-400" />
            <CreditCard className="h-6 w-6 text-gray-400" />
          </div>
          
          <p className="mt-4 md:mt-0 text-sm text-gray-500 font-light">
            {t('footer.copyright')}
          </p>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="mt-4 md:mt-0 rounded-full border-gray-200 hover:bg-gray-50 hover:border-gray-300"
            onClick={handleScrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
