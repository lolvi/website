'use client';

import { motion } from 'motion/react';
import { Radio, Users, Lock, Calendar, MessageCircle, Bell } from 'lucide-react';
import { Button } from './ui/button';

//const WHATSAPP_NUMBER = '1234567890';
const CHANNEL_LINK = 'https://whatsapp.com/channel/0029Vb1KcHfGC0kWIDPi5V';
const COMMUNITY_LINK = 'https://chat.whatsapp.com/xxxxx'; // Replace with real link

const clubFeatures = [
  {
    id: 'channel',
    title: 'Compa Canal',
    icon: Radio,
    color: '#3EC2F1',
    description: 'Señales de calma 1-2 veces por semana',
    benefits: [
      'Checklists mensuales de organización',
      'Mini-tutoriales de pagos',
      'Cambios y mejoras del sistema',
      'Office hours programados',
    ],
    cta: 'Seguir Canal',
    link: CHANNEL_LINK,
  },
  {
    id: 'community',
    title: 'Compa Comunidad',
    icon: Users,
    color: '#3ECF21',
    description: 'Preguntas, tips y historias sin presión',
    benefits: [
      'Soporte y dudas (sin PII público)',
      'Tips de pagos y organización',
      'Historias de calma compartidas',
      'Chat 1-1 privado con PRIVADO',
    ],
    cta: 'Unirme a Comunidad',
    link: COMMUNITY_LINK,
  },
];

const clubRituals = [
  { day: 'Lunes', title: 'Plan de la Semana', icon: Calendar, description: 'Checklist de calma semanal' },
  { day: 'Miércoles', title: 'Office Hours', icon: MessageCircle, description: '30-60 min con humano' },
  { day: 'Viernes', title: 'Historias de Calma', icon: Bell, description: 'Micro-logros sin PII' },
];

export function CompaClubSection() {
  const handleJoinClick = (type: 'channel' | 'community') => {
    const link = type === 'channel' ? CHANNEL_LINK : COMMUNITY_LINK;
    window.open(link, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'club_join_click', { club_type: type });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white" id="club">
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
            Compa Club
          </h2>
          <p
            className="text-xl text-[#51646A] max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Señales útiles + comunidad sin presión. <span className="text-[#3EC2F1]">Sales cuando quieras.</span>
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {clubFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="rounded-3xl p-10 border-4"
                style={{ 
                  borderColor: feature.color,
                  backgroundColor: idx === 0 ? `${feature.color}10` : 'white'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="p-4 rounded-2xl w-fit mb-6" style={{ backgroundColor: `${feature.color}20` }}>
                  <Icon className="w-10 h-10" style={{ color: feature.color }} />
                </div>

                {/* Title & Description */}
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                    lineHeight: 0.95,
                    letterSpacing: '-0.03em',
                    color: '#0D1B1E'
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#51646A] mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '1.125rem' }}
                >
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {feature.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#51646A]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                    >
                      <span className="text-xl" style={{ color: feature.color }}>✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={() => handleJoinClick(feature.id as 'channel' | 'community')}
                  className="w-full text-white shadow-lg"
                  style={{
                    backgroundColor: feature.color,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700
                  }}
                  size="lg"
                >
                  {feature.cta} →
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Rituals */}
        <motion.div
          className="bg-[#F0FBFF] rounded-3xl p-10 border-4 border-[#3EC2F1]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3
            className="mb-8 text-center"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#0D1B1E',
              letterSpacing: '-0.02em'
            }}
          >
            Rituales semanales
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {clubRituals.map((ritual, idx) => {
              const Icon = ritual.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border-2 border-[#3EC2F1]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[#3EC2F1]" />
                    <span
                      className="text-[#3EC2F1]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      {ritual.day}
                    </span>
                  </div>
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      color: '#0D1B1E'
                    }}
                  >
                    {ritual.title}
                  </h4>
                  <p
                    className="text-sm text-[#51646A]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                  >
                    {ritual.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Privacy Note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border-2 border-[#3EC2F1]/20">
            <Lock className="w-5 h-5 text-[#3EC2F1]" />
            <p
              className="text-[#51646A]"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              <span className="text-[#3EC2F1]">Sin PII público.</span> Para casos personales, escribe <span className="text-[#3EC2F1]">PRIVADO</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
