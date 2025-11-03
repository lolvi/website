import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Shield, Clock, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import bitacoraDemo from 'figma:asset/c765eb6b50847e17991d257dd88c75da18a926e4.png';

const WHATSAPP_NUMBER = '1234567890';

const trustMetrics = [
  { value: 0, suffix: '', label: 'PII incidents', color: 'compa-green' },
  { value: 6, prefix: '<', suffix: 'h', label: 'Export/Delete SLA', color: 'compa-blue' },
  { value: 0.3, suffix: '%', label: 'Opt-out rate', color: 'compa-green' },
  { value: 99.9, suffix: '%', label: 'Uptime Oct 2025', color: 'compa-blue' },
];

function AnimatedCounter({ value, duration = 2000, suffix = '', prefix = '' }: { value: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(progress * value);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span>
      {prefix}{value === 0 ? '0' : count.toFixed(value < 10 ? 1 : 0)}{suffix}
    </span>
  );
}

export function ModernHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleWAClick = (intent: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_medium=web%20utm_campaign=hero`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'hero_wa_cta_click', { intent });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-compa-green via-compa-green-dark to-[#0D5943] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left: Content */}
          <motion.div 
            className="space-y-8 z-10"
            style={{ y: y2 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white text-sm">🇲🇽 Cuidado financiero con confianza verificable</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-white mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Calma con prueba.<br />
              <span className="text-white/90">Privacidad con cuidado.</span>
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-xl md:text-2xl max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Yo cuido tus pagos. Tú controlas tus datos.<br />
              <span className="text-white/70">Sin letra chiquita. Sin trucos.</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                onClick={() => handleWAClick('cta_empezar')}
                size="lg"
                className="bg-white text-compa-green hover:bg-white/95 shadow-2xl text-lg px-8 py-6 h-auto group"
              >
                Abrir en WhatsApp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleWAClick('ver_demo_bitacora')}
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                Ver demo en 60s
              </Button>
            </motion.div>

            <motion.p 
              className="text-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              ✓ Sin compromiso · ✓ Escribe &quot;BAJA&quot; cuando quieras · ✓ Datos exportables siempre
            </motion.p>

            {/* Floating trust metrics */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {trustMetrics.map((metric, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="font-mono text-3xl text-white mb-1">
                    <AnimatedCounter {...metric} />
                  </div>
                  <div className="text-white/70 text-xs">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual with phone mockup */}
          <motion.div 
            className="relative z-10"
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Floating badges around phone */}
            <motion.div
              className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-compa-green rounded-lg p-2">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-compa-neutral-mid">Quiet Hours</div>
                  <div className="font-mono text-sm text-compa-green">20:30—08:00</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-2xl z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-compa-blue rounded-lg p-2">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-compa-neutral-mid">Data TTL</div>
                  <div className="font-mono text-sm text-compa-blue">30/90 días</div>
                </div>
              </div>
            </motion.div>

            {/* Phone mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-compa-blue/20 to-transparent blur-3xl" />
              <motion.div 
                className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ImageWithFallback
                  src={bitacoraDemo}
                  alt="Compa app interface mostrando control total de datos"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm">Descubre cómo funciona</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
