'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '1234567890';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export function HeroPhase1() {
  const handleCTA = (intent: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_medium=web%20utm_campaign=hero`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'hero_cta_click', { intent });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3EC2F1 2px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-32 right-12 w-20 h-20 bg-[#3ECF21] rounded-3xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-12 w-32 h-32 bg-[#3EC2F1] rounded-full opacity-10"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            className="mb-8"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#0D1B1E'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yo cuido<br />
            tus pagos.
          </motion.h1>

          <motion.h2
            className="mb-8"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#3EC2F1'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tú controlas<br />
            tu data.
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-[#51646A] mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Oxygen, sans-serif', fontWeight: 500 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tu Compa de Pagos. Pago por ti lo que nadie quiere pagar: facturas, arriendo, pensión.
            <br />
            <span className="text-[#3EC2F1]">Nada se paga sin tu OK. BAJA cuando quieras.</span>
          </motion.p>

          {/* CTAs - Phase 1 Design System */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primary WhatsApp CTA - Following Phase 1 card design principles */}
            <Button
              aria-label="Abrir WhatsApp para empezar ahora"
              onClick={() => handleCTA('Hola! Quiero empezar con Compa 👋')}
              size="lg"
              className="group relative overflow-hidden rounded-[32px] bg-[#25D366] hover:bg-[#20B954] text-white border-4 border-[#0D1B1E]/10 hover:border-[#0D1B1E]/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 motion-reduce:transition-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]/60 min-w-[320px] md:min-w-[380px] px-8 md:px-10 py-6 md:py-7 h-auto"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                letterSpacing: '-0.01em',
                borderRadius: '32px'
              }}
            >
              <div className="flex items-center justify-center">
                <WhatsAppIcon className="w-8 h-8 md:w-10 md:h-10 mr-4 flex-shrink-0" />
                <span className="flex-1">Empezar ahora</span>
                <ArrowRight className="w-7 h-7 md:w-8 md:h-8 ml-4 transition-transform duration-300 motion-safe:group-hover:translate-x-2 flex-shrink-0" />
              </div>
              {/* WhatsApp green gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#20B954]/20 to-[#25D366]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {/* Secondary Demo CTA - Solid card style */}
            <Button
              aria-label="Ver demo rápida en 60 segundos"
              onClick={() => handleCTA('Quiero ver el demo de 60 segundos 📱')}
              variant="outline"
              size="lg"
              className="group rounded-[32px] bg-white text-[#3EC2F1] border-4 border-[#3EC2F1] hover:bg-[#3EC2F1] hover:text-white hover:border-[#2BB4E8] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#3EC2F1]/60 min-w-[280px] px-8 py-6 md:py-7 h-auto"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                letterSpacing: '-0.01em',
                borderRadius: '32px'
              }}
            >
              <div className="flex items-center justify-center">
                <PlayCircle className="w-6 h-6 md:w-7 md:h-7 mr-3 flex-shrink-0" />
                <span>Demo en 60s</span>
              </div>
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-[#51646A]"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, paddingTop: '1rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            ✓ Sin compromiso · ✓ Sin registro · ✓ Sin letra chiquita
          </motion.p>

          {/* Trust metrics - bento style */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { value: '60s', label: 'Demo rápida' },
              { value: '0', label: 'Factura ahora' },
              { value: '100%', label: 'Tu control' },
              { value: '24/7', label: 'Disponible' },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl p-6 border-4 border-[#3EC2F1]/20 hover:border-[#3EC2F1] transition-all"
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <div 
                  className="text-4xl mb-2"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    color: '#3EC2F1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  className="text-sm text-[#51646A]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
