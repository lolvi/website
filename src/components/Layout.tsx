'use client';

import React, { createContext, useState, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';

// LayoutContext for hero section visibility control
interface LayoutContextType {
  showHero: boolean;
  setShowHero: (show: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextType>({
  showHero: true,
  setShowHero: () => {},
});

interface LayoutProps {
  children: ReactNode;
  showHeroSection?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showHeroSection = true }) => {
  const [showHero, setShowHero] = useState(showHeroSection);

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/lolvi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/lolvi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.714 13.559 3.714 12.017c0-1.297.49-2.448 1.297-3.323C5.909 7.816 7.245 7.332 8.449 7.332c1.297 0 2.448.49 3.323 1.297c.898.898 1.382 2.234 1.382 3.388c0 1.297-.49 2.448-1.297 3.323c-.898.898-2.234 1.382-3.388 1.382zm7.718-4.971c0-1.959-1.591-3.55-3.55-3.55s-3.55 1.591-3.55 3.55s1.591 3.55 3.55 3.55s3.55-1.591 3.55-3.55zm1.404-3.9c-.456 0-.825-.369-.825-.825s.369-.825.825-.825s.825.369.825.825s-.369.825-.825.825z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/lolvi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/lolvi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Política de Privacidad' },
    { href: '/terms', label: 'Términos de Servicio' },
    { href: '/cookies', label: 'Política de Cookies' },
    { href: '/contact', label: 'Contacto' },
  ];

  const complianceImages = [
    {
      src: '/compliance-cert-1.png',
      alt: 'Certificación de Seguridad',
      width: 80,
      height: 40,
    },
    {
      src: '/compliance-cert-2.png',
      alt: 'Certificación de Calidad',
      width: 80,
      height: 40,
    },
  ];

  return (
    <LayoutContext.Provider value={{ showHero, setShowHero }}>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-white">
                    Lolvi
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Conectamos personas y oportunidades a través de tecnología innovadora. 
                  Nuestra misión es hacer que el crecimiento sea accesible para todos.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{link.name}</span>
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                      Acerca de
                    </Link>
                  </li>
                  <li>
                    <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                      Cómo funciona
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                      Preguntas frecuentes
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                      Testimonios
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Copyright */}
                <div className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Lolvi. Todos los derechos reservados.
                </div>

                {/* Compliance Images */}
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  {complianceImages.map((image, index) => (
                    <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="h-10 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;