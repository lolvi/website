'use client';
import { motion } from 'motion/react';
//import designImage from 'figma:asset/a6d078ebdadc90b1c6589bd392f91fd53bf3b60f.png';
//import { ImageWithFallback } from './figma/ImageWithFallback';

const pillars = [
  {
    id: 'cuidado',
    title: 'Nunca presión, siempre respeto',
    subtitle: 'Aquí te cuidamos.',
    color: '#3ECF21',
    icon: '📄',
    description: 'Quiet hours 20:30–08:00. Máx. 1 mensaje cada 24h. Tú decides cuándo y cómo.',
  },
  {
    id: 'agencia',
    title: 'Tú mandas siempre.',
    subtitle: 'Autonomía en decisión.',
    color: '#3EC2F1',
    icon: '📝',
    description: 'BAJA instantánea. Pausar cuando quieras. AGENTE humano disponible. Sin dark patterns.',
  },
  {
    id: 'privacidad',
    title: 'Tus datos, tus reglas.',
    subtitle: 'Tu privacidad primero.',
    color: '#3EC2F1',
    bgColor: '#F0FBFF',
    icon: '🖨️',
    description: 'Export/Delete en menos de 6h. Data expira automáticamente. Sin letra chiquita.',
  },
];

export function ThreePillarsSection() {
  return (
    <section className="py-20 md:py-32 bg-white" id="pilares">
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
            Tres pilares.<br />
            Una promesa.
          </h2>
          <p
            className="text-xl text-[#51646A] max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            No son features. Es cómo hacemos las cosas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Large card - Cuidado */}
          <motion.div
            className="md:row-span-2 rounded-3xl p-12 flex flex-col justify-between min-h-[600px] border-4 border-[#3ECF21]"
            style={{ backgroundColor: '#3ECF21' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                }}
              >
                {pillars[0].title}
              </h3>
              <p
                className="text-white/80 text-lg mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                {pillars[0].subtitle}
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-6xl mb-4">{pillars[0].icon}</div>
              <p
                className="text-white"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                {pillars[0].description}
              </p>
            </div>
          </motion.div>

          {/* Medium card - Agencia */}
          <motion.div
            className="rounded-3xl p-10 border-4 border-[#3EC2F1] min-h-[290px] flex flex-col justify-between"
            style={{ backgroundColor: '#3EC2F1' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                }}
              >
                {pillars[1].title}
              </h3>
              <p
                className="text-white/80"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                {pillars[1].subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="text-5xl">{pillars[1].icon}</div>
            </div>
          </motion.div>

          {/* Medium card - Privacidad */}
          <motion.div
            className="rounded-3xl p-10 border-4 border-[#3EC2F1] min-h-[290px] flex flex-col justify-between"
            style={{ backgroundColor: pillars[2].bgColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: '#3EC2F1'
                }}
              >
                {pillars[2].title}
              </h3>
              <p
                className="text-[#51646A]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                {pillars[2].subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="text-5xl">{pillars[2].icon}</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom explanation */}
        <motion.div
          className="bg-[#0D1B1E] rounded-3xl p-12 border-4 border-[#0D1B1E] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p
            className="text-white text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, lineHeight: 1.5 }}
          >
            Sin <span className="text-[#3ECF21]">Cuidado</span>, la privacidad es fría. 
            Sin <span className="text-[#3EC2F1]">Agencia</span>, ambos son paternalistas. 
            Juntos, crean <span className="text-[#3ECF21]">calma real</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
