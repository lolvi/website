'use client';

import { motion } from 'motion/react';
import { BookOpen, Activity, Shield, Eye, Lock, Server } from 'lucide-react';
import { Badge } from './ui/badge';

const proofs = [
  {
    id: 'gdpr',
    title: 'GDPR/CCPA Compliant',
    description: 'Cumplimiento verificable de regulaciones internacionales',
    icon: Shield,
    color: '#3EC2F1',
    details: [
      'Derecho al olvido (Art. 17 GDPR)',
      'Portabilidad de datos (Art. 20 GDPR)',
      'Minimización de datos (Art. 5 GDPR)',
    ],
  },
  {
    id: 'encryption',
    title: 'AES-256-GCM',
    description: 'Cifrado de extremo a extremo para datos sensibles',
    icon: Lock,
    color: '#3ECF21',
    details: [
      'En tránsito: TLS 1.3',
      'En reposo: AES-256-GCM',
      'Claves rotadas cada 90 días',
    ],
  },
  {
    id: 'ledger',
    title: 'Privacy Ledger Mensual',
    description: 'Registro público de eventos de privacidad',
    icon: BookOpen,
    color: '#3EC2F1',
    metrics: [
      { label: 'Exportaciones Oct 2025', value: '127' },
      { label: 'Borrados completados', value: '43' },
      { label: 'SLA promedio', value: '4.2h' },
    ],
  },
  {
    id: 'uptime',
    title: 'Sistema en Vivo',
    description: 'Monitoreo en tiempo real',
    icon: Activity,
    color: '#3ECF21',
    live: true,
    metrics: [
      { label: 'Uptime Oct 2025', value: '99.9%' },
      { label: 'Latencia promedio', value: '120ms' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infraestructura',
    description: 'Arquitectura distribuida y resiliente',
    icon: Server,
    color: '#3EC2F1',
    details: [
      'Cloudflare Workers (edge computing)',
      'Turso (SQLite distribuido)',
      'R2 (almacenamiento cifrado)',
    ],
  },
  {
    id: 'audit',
    title: 'Auditoría Externa',
    description: 'Revisión independiente de seguridad',
    icon: Eye,
    color: '#3ECF21',
    status: 'Q1 2026 – Programada',
  },
];

export function PruebasYPromesas() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F0FBFF]" id="pruebas">
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
            Pruebas,<br />
            no promesas
          </h2>
          <p
            className="text-xl text-[#51646A] max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Verificable en tiempo real. No confíes en nuestras palabras, verifica nuestros datos.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {proofs.map((proof, idx) => {
            const Icon = proof.icon;
            const isLarge = idx === 0 || idx === 2;
            
            return (
              <motion.div
                key={proof.id}
                className={`rounded-3xl p-8 border-4 hover:shadow-2xl transition-all ${
                  isLarge ? 'md:col-span-2' : ''
                }`}
                style={{ 
                  borderColor: proof.color,
                  backgroundColor: idx % 2 === 0 ? 'white' : `${proof.color}10`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: `${proof.color}20` }}>
                    <Icon className="w-8 h-8" style={{ color: proof.color }} />
                  </div>
                  {proof.live && (
                    <Badge className="bg-[#3ECF21] text-white border-0">
                      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                      En vivo
                    </Badge>
                  )}
                  {proof.status && (
                    <Badge variant="outline" style={{ borderColor: proof.color, color: proof.color }}>
                      {proof.status}
                    </Badge>
                  )}
                </div>

                {/* Title & Description */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    color: '#0D1B1E',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {proof.title}
                </h3>
                <p
                  className="text-[#51646A] mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  {proof.description}
                </p>

                {/* Details */}
                {proof.details && (
                  <ul className="space-y-2">
                    {proof.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#51646A]"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                      >
                        <span className="mt-1" style={{ color: proof.color }}>✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Metrics */}
                {proof.metrics && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {proof.metrics.map((metric, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 border-2" style={{ borderColor: `${proof.color}30` }}>
                        <div
                          className="text-2xl mb-1"
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 900,
                            color: proof.color
                          }}
                        >
                          {metric.value}
                        </div>
                        <div
                          className="text-xs text-[#51646A]"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA to Demo */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#3EC2F1] to-[#3ECF21] rounded-3xl p-10 border-4 border-[#3EC2F1]">
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Pruébalo tú mismo
            </h3>
            <p
              className="text-white/90 mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            >
              Simula Export y Delete en menos de 60 segundos. Sin registro.
            </p>
            <a
              href="#demo"
              className="inline-block px-8 py-4 bg-white text-[#3EC2F1] rounded-xl hover:bg-white/95 transition-colors shadow-xl"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Ver demo interactiva →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
