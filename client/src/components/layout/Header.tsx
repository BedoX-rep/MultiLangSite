import { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/context/LanguageContext';

export function Header() {
  const { t } = useTranslation();
  const { language, setLanguage, direction } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' }
  ];

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '#collection', label: t('nav.collection') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-serif font-semibold text-primary">
                {t('brand')}
              </span>
            </Link>
            
            {/* Desktop navigation */}
            <nav className="hidden md:ml-10 md:flex space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-transparent text-gray-900 hover:border-primary hover:text-primary px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Language switcher and mobile menu */}
          <div className="flex items-center">
            <div className="flex space-x-3 rtl:space-x-reverse">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage(lang.code)}
                  className="px-2 py-1 text-sm rounded-md"
                >
                  {lang.label}
                </Button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="ml-4 md:hidden flex items-center">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side={direction === 'ltr' ? 'right' : 'left'} className="flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-serif font-semibold text-primary">
                      {t('brand')}
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="border-transparent text-gray-900 hover:text-primary px-3 py-2 text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
