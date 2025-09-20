'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutContext } from './Layout';
import Dialog from './Dialog';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { showHero } = useContext(LayoutContext);

  const navigationItems = [
    { href: '#about', label: 'Acerca de' },
    { href: '#how-it-works', label: 'Cómo funciona' },
    { href: '#faq', label: 'Preguntas frecuentes' },
    { href: '#testimonials', label: 'Testimonios' },
  ];

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Currently non-functional, just UI
    console.log('Phone number submitted:', phoneNumber);
    setIsDialogOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-white shadow-sm ${className}`}>
      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                Lolvi
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
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
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Conditionally rendered */}
      {showHero && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                  Bienvenido a{' '}
                  <span className="text-blue-600">Lolvi</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Descubre una nueva forma de conectar y crecer. Nuestra plataforma 
                  te ofrece las herramientas que necesitas para alcanzar tus objetivos.
                </p>
                
                {/* Phone Form */}
                <div className="mt-8">
                  <form onSubmit={handlePhoneSubmit} className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label htmlFor="phone" className="sr-only">
                        Número de teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Ingresa tu número de teléfono"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Comenzar
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-gray-500">
                    Al continuar, aceptas nuestros términos y condiciones.
                  </p>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-square bg-white rounded-2xl shadow-xl p-8">
                  <Image
                    src="/hero-illustration.svg"
                    alt="Ilustración del servicio Lolvi"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dialog Component */}
      {isDialogOpen && (
        <Dialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="¡Gracias!"
          message="Hemos recibido tu número de teléfono. Te contactaremos pronto."
        />
      )}
    </header>
  );
};

export default Header;