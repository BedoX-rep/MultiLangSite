import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/context/LanguageContext';
import i18n from '@/lib/i18n';

export function Header() {
  const { t } = useTranslation();
  const { language, setLanguage, direction } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  const languages = [
    { code: 'en', label: 'En' },
    { code: 'fr', label: 'Fr' },
    { code: 'ar', label: 'Ar' }
  ];

  // Update current language state when i18n language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  // Function to handle language change
  const handleLanguageChange = (lang: string) => {
    console.log(`Button clicked for language: ${lang}, current language is: ${i18n.language}`);
    
    // Force reload the page with the new language
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang).then(() => {
        // Use the context method which will handle everything
        setLanguage(lang);
      });
    }
  };

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '#collection', label: t('nav.collection') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-serif font-normal tracking-wide text-primary">
                {t('brand')}
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation - centered */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary border-b-2 border-transparent hover:border-primary px-1 py-2 text-sm font-light tracking-wide transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          
          {/* Right side: language switcher, search and cart */}
          <div className="flex-1 flex justify-end items-center space-x-4 rtl:space-x-reverse">
            {/* Language switcher */}
            <div className="hidden md:flex border-r border-l px-4 border-gray-200">
              <div className="flex space-x-3 rtl:space-x-reverse">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`text-xs uppercase px-2 py-1 rounded font-light tracking-wider transition-colors duration-200 ${
                      currentLanguage === lang.code 
                        ? 'bg-primary text-white font-medium' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Search and cart icons */}
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              <button className="text-gray-700 hover:text-primary">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-primary">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-700">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side={direction === 'ltr' ? 'right' : 'left'} className="flex flex-col">
                  <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <span className="text-xl font-serif font-normal tracking-wide text-primary">
                      {t('brand')}
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <nav className="flex flex-col space-y-6 mb-8">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-gray-800 hover:text-primary text-base font-light tracking-wide"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  
                  {/* Mobile language switcher */}
                  <div className="mt-auto pt-4 border-t">
                    <div className="flex justify-center space-x-6 rtl:space-x-reverse">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            handleLanguageChange(lang.code);
                            setMobileMenuOpen(false);
                          }}
                          className={`text-sm uppercase px-3 py-1.5 rounded ${
                            currentLanguage === lang.code 
                              ? 'bg-primary text-white font-medium' 
                              : 'text-gray-500'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
