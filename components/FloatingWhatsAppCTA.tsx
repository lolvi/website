'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '1234567890';

export function FloatingWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=cta_floating%20utm_source=landing%20utm_medium=web%20utm_campaign=floating_cta`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'floating_wa_cta_click');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0 }}
          className="fixed bottom-11 right-6 z-40"
        >
          <div className="relative">
            {/* Expanded message bubble */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  className="absolute bottom-20 right-0 bg-white rounded-3xl shadow-2xl p-4 border-4 border-[#3ECF21]/20 w-72"
                >
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-2 right-2 text-[#51646A] hover:text-[#0D1B1E] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="pr-6">
                    <div className="mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      ¿Tienes preguntas?
                    </div>
                    <p className="text-sm text-[#51646A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      Abre WhatsApp y empieza sin compromiso. Sin registro, sin formularios.
                    </p>
                    <button
                      onClick={handleClick}
                      className="w-full bg-[#3ECF21] hover:bg-[#2BA83B] text-white px-4 py-3 rounded-2xl border-4 border-[#3ECF21]/20 hover:border-[#2BA83B]/40 transition-all"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      Abrir WhatsApp →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl border-4 border-white/20 hover:border-white/40 flex items-center gap-3 group transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={isExpanded ? {} : {
                scale: [1, 1.1, 1],
              }}
              transition={isExpanded ? {} : {
                repeat: Infinity,
                duration: 2,
                repeatDelay: 3
              }}
            >
              <MessageCircle className="w-6 h-6" />
              <AnimatePresence>
                {!isExpanded && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="overflow-hidden whitespace-nowrap pr-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    ¿Hablamos?
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Pulse ring */}
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 rounded-full bg-[#25D366]"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
