'use client';

import { motion } from 'motion/react';
import { MessageCircle, Settings, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const WHATSAPP_NUMBER = '1234567890';

const steps = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'Me das lo básico',
    description: 'Nombre, categoría (servicios/arriendo/pensión), preferencias de horario.',
    time: '30 segundos',
    color: '#3EC2F1',
  },
  {
    number: '2',
    icon: Sparkles,
    title: 'Te muestro tu Bitácora',
    description: 'Demo transparente y verificable. Sin pedir factura aún.',
    time: '60 segundos',
    color: '#3ECF21',
  },
  {
    number: '3',
    icon: Settings,
    title: 'Si te sirve, lo dejo automático',
    description: 'Tú decides cuándo dar el siguiente paso. Cero presión.',
    time: 'Cuando quieras',
    color: '#3EC2F1',
  },
];

export function HowItWorksPhase1() {
  const handleCTA = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=cta_empezar%20utm_source=landing%20utm_medium=web%20utm_campaign=how_it_works`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 md:py-22 bg-gradient-to-b from-white to-[#F0FBFF]" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-6"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#0D1B1E'
            }}
          >
            Tu plancito<br />
            en 3 pasos
          </h2>
          <p
            className="text-xl text-[#51646A] max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Cero enredos. Todo por WhatsApp. Sin registro ni formularios.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="relative bg-white rounded-3xl p-10 border-4 hover:shadow-2xl transition-all"
                style={{ borderColor: step.color }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Step number */}
                <div
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: step.color }}
                >
                  <span
                    className="text-white text-3xl"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 900,
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <Icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#0D1B1E'
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-[#51646A] mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  {step.description}
                </p>

                {/* Time badge */}
                <div
                  className="inline-block px-4 py-2 rounded-xl text-white text-sm"
                  style={{
                    backgroundColor: step.color,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700
                  }}
                >
                  ⏱️ {step.time}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#3EC2F1] to-[#3ECF21] rounded-3xl p-12 border-4 border-[#3EC2F1]">
            <h3
              className="text-white mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              ¿Listo para probarlo?
            </h3>
            <p
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            >
              Abre WhatsApp y arrancamos. Sin compromiso. BAJA cuando quieras.
            </p>
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-white text-[#3EC2F1] hover:bg-white/95 shadow-2xl text-xl px-10 py-7 h-auto"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Empezar en WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
