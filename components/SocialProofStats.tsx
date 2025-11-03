'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, Heart, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      {prefix}{Math.round(count)}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 1847,
    suffix: '+',
    label: 'Usuarios activos',
    description: 'Creciendo orgánicamente'
  },
  {
    icon: TrendingUp,
    value: 76,
    suffix: '%',
    label: 'Return rate post-pausa',
    description: 'Vuelven cuando quieren'
  },
  {
    icon: Heart,
    value: 99.7,
    suffix: '%',
    label: 'Retención mensual',
    description: 'Opt-out rate: 0.3%'
  },
  {
    icon: Star,
    value: 4.8,
    suffix: '/5',
    label: 'Satisfacción promedio',
    description: 'Basado en feedback real'
  },
];

const testimonials = [
  {
    quote: "Por fin una app que no me hace sentir culpable cuando pausar. Me encanta poder controlar TODO desde WhatsApp.",
    author: "María G.",
    role: "Usuaria desde marzo 2025",
    imageUrl: "https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB3ZWxsbmVzcyUyMHBlYWNlZnVsfGVufDF8fHx8MTc2MTk1MTExMnww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    quote: "Exporté mis datos para verificar. Me llegaron en 3 horas, todo explicado. Eso sí es transparencia real.",
    author: "Carlos M.",
    role: "Usuaria desde junio 2025",
    imageUrl: "https://images.unsplash.com/photo-1607000975677-90533e4355fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVzdCUyMHRyYW5zcGFyZW5jeSUyMGNsZWFyfGVufDF8fHx8MTc2MTk1MTExM3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    quote: "Las quiet hours son reales. Nunca me han escrito de noche. Se siente que realmente les importa mi tiempo.",
    author: "Ana P.",
    role: "Usuaria desde agosto 2025",
    imageUrl: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODgwMjM1fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
];

export function SocialProofStats() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-compa-neutral-light/20 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats Grid */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
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
              Números que hablan
            </h2>
            <p 
              className="text-[#51646A] text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            >
              No son vanity metrics. Son señales de que estamos cumpliendo nuestro pacto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border-4 border-[#3EC2F1]/20 hover:border-[#3EC2F1] shadow-lg hover:shadow-2xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-[#3EC2F1]/10 rounded-2xl p-4 w-fit mb-6">
                    <Icon className="w-8 h-8 text-[#3EC2F1]" />
                  </div>
                  <div 
                    className="text-5xl mb-3"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 900,
                      color: '#3EC2F1'
                    }}
                  >
                    <AnimatedCounter {...stat} />
                  </div>
                  <div 
                    className="text-[#0D1B1E] mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {stat.label}
                  </div>
                  <div 
                    className="text-sm text-[#51646A]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                  >
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#0D1B1E'
              }}
            >
              Lo que dicen nuestros usuarios
            </h2>
            <p 
              className="text-[#51646A] text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            >
              Sin editar. Sin cherry-picking. Feedback real de personas reales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl p-8 border-4 border-[#3EC2F1]/20 hover:border-[#3EC2F1] shadow-lg hover:shadow-2xl transition-all relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-[#3EC2F1]/10 rounded-2xl p-4 w-fit mb-6">
                  <Quote className="w-8 h-8 text-[#3EC2F1]" />
                </div>
                
                <p 
                  className="text-[#0D1B1E] mb-6 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#3EC2F1]/10 flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div 
                      className="text-[#0D1B1E]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      {testimonial.author}
                    </div>
                    <div 
                      className="text-sm text-[#51646A]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-[#3ECF21]/10 px-6 py-4 rounded-2xl border-2 border-[#3ECF21]/20">
            <div className="w-3 h-3 bg-[#3ECF21] rounded-full animate-pulse" />
            <span 
              className="text-[#0D1B1E]"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            >
              Todos los datos verificables en nuestro <a href="#ledger" className="text-[#3ECF21] underline font-semibold">Privacy Ledger</a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
