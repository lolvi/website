'use client';

import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  {
    question: '¿Cómo funciona Compa?',
    answer: 'Simple: 1) Me das lo básico (nombre, categoría, preferencias). 2) Te muestro tu Bitácora demo. 3) Si te sirve, lo dejo automático. Todo por WhatsApp, sin registro ni formularios.',
  },
  {
    question: '¿Es seguro? ¿Qué pasa con mis datos?',
    answer: 'Tus datos son TUYOS. Expiran automáticamente (30-90 días TTL). Puedes exportar o borrar todo en menos de 6h. Cero incidentes PII en octubre 2025. Privacy Ledger público cada mes.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer: 'Fase 1 es gratis. Te mostramos cómo funciona sin pedirte factura ni pago. Cuando estés list@, hablamos de precios. Sin letra chiquita.',
  },
  {
    question: '¿Me van a molestar con mensajes?',
    answer: 'NUNCA. Quiet hours 20:30-08:00. Máximo 1 mensaje cada 24h. Tú eliges tu franja horaria. Escribe BAJA cuando quieras. Opt-out rate: 0.3%.',
  },
  {
    question: '¿Puedo pausar o salir cuando quiera?',
    answer: 'SÍ. Escribe BAJA para salir instantáneo. O Pausar 7/30 días. Sin preguntas. Sin "¿estás seguro?". Sin dark patterns. 76% vuelven después de pausar.',
  },
  {
    question: '¿Ayudan con arriendo o pensión?',
    answer: 'Sí. Manejamos servicios, arriendo, pensión alimenticia y más. En Fase 1 te mostramos cómo sin pedirte factura. Tú decides si seguir.',
  },
  {
    question: '¿Puedo hablar con una persona real?',
    answer: 'Claro. Escribe AGENTE para chat humano (office hours 09:00-18:00 Lun-Vie) o agenda llamada de 10 min. Sin bots cuando pides humano.',
  },
  {
    question: '¿Qué es el Pack "Compa Wrapped"?',
    answer: 'Tu paquete de calma personalizado: Pacto de Cuidado, Bitácora demo, tu plancito, y link para compartir con amig@s. Todo en PDF o cards para Stories.',
  },
];

export function FAQsPhase1() {
  return (
    <section className="py-20 md:py-22 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            Preguntas<br />
            frecuentes
          </h2>
          <p
            className="text-xl text-[#51646A]"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Sin rodeos. Aquí están las respuestas.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-[#F0FBFF] rounded-2xl border-4 border-[#3EC2F1]/20 hover:border-[#3EC2F1] transition-all px-8 py-2"
              >
                <AccordionTrigger
                  className="text-left hover:no-underline"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    color: '#0D1B1E'
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-[#51646A] pt-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500,
                    lineHeight: 1.7
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-[#3EC2F1] to-[#3ECF21] rounded-3xl p-10 border-4 border-[#3EC2F1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p
            className="text-white text-xl mb-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            ¿Más preguntas?
          </p>
          <p
            className="text-white/90"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Escribe AYUDA en WhatsApp o pide hablar con AGENTE humano.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
