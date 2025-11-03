'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const WHATSAPP_NUMBER = '1234567890';

const menuItems = [
  { label: 'Tres pilares', href: '#pilares' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Pruebas', href: '#pruebas' },
  { label: 'Compa Club', href: '#club' },
  { label: 'FAQs', href: '#faqs' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCTA = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=cta_empezar%20utm_source=landing%20utm_medium=web%20utm_campaign=navbar`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'navbar_cta_click');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-[#3EC2F1] z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="w-12 h-12 bg-[#3EC2F1] rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">💚</span>
            </div> */}
            <span className="text-3xl tracking-tight text-[#3EC2F1]" style={{ fontFamily: 'Montserrat Alternates, sans-serif', fontWeight: 600 }}>
              lolvi.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#0D1B1E] hover:text-[#3EC2F1] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={handleCTA}
              className="bg-[#3EC2F1] hover:bg-[#2BA8D1] text-white shadow-lg"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Empezar ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0D1B1E]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-[#3EC2F1]/20 bg-white"
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#0D1B1E] hover:text-[#3EC2F1] transition-colors py-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  handleCTA();
                  setIsOpen(false);
                }}
                className="w-full bg-[#3EC2F1] hover:bg-[#2BA8D1] text-white"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Empezar ahora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
