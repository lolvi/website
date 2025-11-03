'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLayoutContext } from './LayoutContext';
// import Dialog from '../Dialog'; // Assuming Dialog component exists

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const { showHero } = useLayoutContext();

  const navigationLinks = [
    { href: '/acerca-de', label: 'Acerca de' },
    { href: '/como-funciona', label: 'Cómo funciona' },
    { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
    { href: '/testimonios', label: 'Testimonios' },
  ];

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional form - just UI
    console.log('Phone number submitted:', phoneNumber);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`w-full ${className}`}>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Lolvi</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Conditionally Rendered */}
      {showHero && (
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Hero Content */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Bienvenido a{' '}
                  <span className="text-yellow-300">Lolvi</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  La solución perfecta para tus necesidades digitales.
                </p>
                
                {/* Phone Number Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                  <h3 className="text-lg font-semibold mb-4">
                    ¡Contáctanos ahora!
                  </h3>
                  <form onSubmit={handlePhoneSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Número de teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-blue-600"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative lg:h-96">
                <div className="w-full h-64 lg:h-full bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <p className="text-white/80">Imagen del héroe aquí</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;