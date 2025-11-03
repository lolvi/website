'use client';

import { motion } from 'motion/react';
import { Heart, Shield, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const WHATSAPP_NUMBER = '1234567890';

const footerLinks = [
  {
    title: 'Confianza',
    links: [
      { label: 'Pacto de Cuidado', href: '#pacto' },
      { label: 'Privacy Ledger', href: '#ledger' },
      { label: 'Sistema Status', href: '#status' },
      { label: 'Auditoría Externa', href: '#audit' },
    ]
  },
  {
    title: 'Producto',
    links: [
      { label: 'Cómo funciona', href: '#how' },
      { label: 'Export/Delete Demo', href: '#demo' },
      { label: 'Quiet Hours', href: '#quiet' },
      { label: 'Precios', href: '#pricing' },
    ]
  },
  {
    title: 'Comunidad',
    links: [
      { label: 'Compa Club', href: '#club' },
      { label: 'FAQs', href: '#faqs' },
      { label: 'Soporte', href: '#support' },
      { label: 'Agente Humano', href: '#human' },
    ]
  },
];

export function ModernFooter() {
  const handleWAClick = (intent: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_medium=web%20utm_campaign=footer`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'footer_wa_cta_click', { intent });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0D1B1E] to-[#000000] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-white mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
              }}
            >
              Listo para empezar<br />
              sin comprometerte
            </h2>
            <p 
              className="text-white/80 text-xl mb-12"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            >
              Sin registro. Sin email. Sin formularios. Solo abre WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => handleWAClick('cta_empezar_footer')}
                size="lg"
                className="bg-[#3EC2F1] hover:bg-[#2BA8D1] text-white shadow-2xl text-lg px-8 py-6 h-auto group cursor-pointer"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Abrir en WhatsApp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                
                onClick={() => handleWAClick('ver_demo_footer')}
                size="lg"
                className="border-4 border-blue text-blue hover:bg-white/10 text-lg px-8 py-6 h-auto cursor-pointer"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#3EC2F1' }}
              >
                Ver demo en 60s
              </Button>
            </div>

            {/* Trust pillars quick reference */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
             className="bg-[#3ECF21]/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-[#3ECF21]/30 hover:border-[#3ECF21]/60 transition-all cursor-pointer group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="p-4 rounded-2xl bg-[#3ECF21]/20 group-hover:bg-[#3ECF21]/30 transition-colors">
                    <Heart className="w-8 h-8 text-[#3ECF21]" />
                  </div>
                </div>
                <div 
                  className="text-lg text-white mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
                >
                  Cuidado
                </div>
                <div 
                  className="text-sm text-white/70"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Tu descanso es sagrado
                </div>
              </motion.div>
              
              <motion.div
             className="bg-[#3EC2F1]/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-[#3EC2F1]/30 hover:border-[#3EC2F1]/60 transition-all cursor-pointer group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="p-4 rounded-2xl bg-[#3EC2F1]/20 group-hover:bg-[#3EC2F1]/30 transition-colors">
                    <Zap className="w-8 h-8 text-[#3EC2F1]" />
                  </div>
                </div>
                <div 
                  className="text-lg text-white mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
                >
                  Agencia
                </div>
                <div 
                  className="text-sm text-white/70"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Tú tienes el control remoto
                </div>
              </motion.div>
              
              <motion.div
             className="bg-[#3EC2F1]/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-[#3EC2F1]/30 hover:border-[#3EC2F1]/60 transition-all cursor-pointer group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="p-4 rounded-2xl bg-[#6366F1]/20 group-hover:bg-[#6366F1]/30 transition-colors">
                    <Shield className="w-8 h-8 text-[#6366F1]" />
                  </div>
                </div>
                <div 
                  className="text-lg text-gray-800 mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
                >
                  Privacidad
                </div>
                <div 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Tus datos se auto-destruyen
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand column */}
            <div>
              <div className="mb-6">
                <div 
                  className="text-2xl mb-2"
                  style={{ fontFamily: 'Montserrat Alternates, sans-serif', fontWeight: 600 }}
                >
                  lolvi.
                </div>
                <div 
                  className="text-white/60 text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Cuidado financiero con confianza verificable
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h4 
                  className="text-white mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                      >
                        {link.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                © 2025 LO OLVIDE PAGAR SAS. Todos los derechos reservados.
              </div>
              <div className="flex gap-6">
                <a 
                  href="#privacy" 
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Política de Privacidad
                </a>
                <a 
                  href="#terms" 
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Términos de Servicio
                </a>
                <a 
                  href="#cookies" 
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Cookies
                </a>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-8 text-center">
              <div 
                className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs text-white/70"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Sistema operativo · Uptime 99.9% · Última actualización: hace 5 min
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
