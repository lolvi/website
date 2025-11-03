import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Activity, Download, Shield, Eye, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const proofCards = [
  {
    id: 'ledger',
    title: 'Privacy Ledger Mensual',
    description: 'Cada evento de privacidad publicado. Cada mes. Sin editar.',
    icon: BookOpen,
    color: 'compa-green',
    size: 'large',
    interactive: true,
    metrics: [
      { label: 'Exportaciones', value: 127 },
      { label: 'Borrados', value: 43 },
      { label: 'Pausas', value: 89 },
    ]
  },
  {
    id: 'status',
    title: 'Sistema en Vivo',
    description: 'Estado actual en tiempo real',
    icon: Activity,
    color: 'compa-blue',
    size: 'medium',
    live: true,
    metrics: [
      { label: 'Uptime', value: 99.9, unit: '%' },
      { label: 'Latencia', value: 120, unit: 'ms' },
    ]
  },
  {
    id: 'export',
    title: 'Export/Delete Demo',
    description: 'Prueba cómo funciona en vivo',
    icon: Download,
    color: 'compa-green',
    size: 'medium',
    interactive: true,
  },
  {
    id: 'compliance',
    title: 'Cumplimiento',
    description: 'GDPR · CCPA · LGPD compliant',
    icon: Shield,
    color: 'compa-blue',
    size: 'small',
  },
  {
    id: 'audit',
    title: 'Auditoría Externa',
    description: 'Q3 2025 · Pendiente publicar',
    icon: Eye,
    color: 'compa-green',
    size: 'small',
  },
];

export function BentoTrustProofs() {
  const [ activeCard, setActiveCard] = useState<string | null>(null);
  console.log(`Active card: ${activeCard} `);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-compa-green-light/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-compa-green-dark mb-6">
            Pruebas, no promesas
          </h2>
          <p className="text-compa-neutral-mid text-lg">
            Verificable en tiempo real. No confíes en nuestras palabras, verifica nuestros datos.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large card - Ledger */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 bg-white rounded-3xl p-8 border-2 border-compa-green/20 hover:border-compa-green shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveCard('ledger')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-compa-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-compa-green rounded-2xl p-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-compa-neutral-mid group-hover:text-compa-green transition-colors" />
              </div>

              <h3 className="text-compa-neutral-dark mb-3">
                Privacy Ledger Mensual
              </h3>
              <p className="text-compa-neutral-mid mb-6">
                Cada evento de privacidad publicado. Cada mes. Sin editar.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-compa-green-light/50 rounded-xl p-4">
                  <div className="text-xs text-compa-neutral-mid mb-1 uppercase tracking-wider">Octubre 2025</div>
                  <div className="font-mono text-2xl text-compa-green">432 eventos</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {proofCards[0].metrics?.map((metric, idx) => (
                    <div key={idx} className="bg-white border-2 border-compa-green/10 rounded-xl p-3">
                      <div className="text-xs text-compa-neutral-mid mb-1">{metric.label}</div>
                      <div className="font-mono text-xl text-compa-green">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-compa-green hover:bg-compa-green-dark text-white">
                Ver Ledger de Octubre →
              </Button>
            </div>
          </motion.div>

          {/* Medium card - System Status */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-3xl p-8 border-2 border-compa-blue/20 hover:border-compa-blue shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-4 right-4">
              <motion.div
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                Sistema Operativo
              </motion.div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-compa-blue rounded-2xl p-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-compa-neutral-dark mb-3">
              Estado del Sistema
            </h3>
            <p className="text-compa-neutral-mid mb-6">
              Actualizado cada 5 minutos · Últimos 30 días
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-compa-neutral-mid">Uptime</span>
                  <span className="font-mono text-sm text-compa-blue">99.9%</span>
                </div>
                <Progress value={99.9} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-compa-neutral-mid">API Response Time</span>
                  <span className="font-mono text-sm text-compa-blue">120ms avg</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-compa-neutral-mid">Export/Delete SLA</span>
                  <span className="font-mono text-sm text-compa-green">4.2h avg</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </div>

            <Button variant="outline" className="w-full mt-6 border-compa-blue text-compa-blue hover:bg-compa-blue-light">
              Ver Dashboard Completo →
            </Button>
          </motion.div>

          {/* Medium card - Export/Delete Demo */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-compa-green-dark to-compa-green rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start mb-6">
              <div className="bg-white/20 rounded-2xl p-4">
                <Download className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="mb-3">
              Export/Delete Demo
            </h3>
            <p className="text-white/80 mb-6">
              Prueba el proceso completo sin registrarte
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">1. Solicita con un comando</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">2. Verificación OTP automática</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">3. Descarga en &lt;6h</span>
              </div>
            </div>

            <Button className="w-full bg-white text-compa-green hover:bg-white/95">
              Probar Demo Interactiva →
            </Button>
          </motion.div>

          {/* Small cards */}
          <motion.div
            className="bg-white rounded-3xl p-6 border-2 border-compa-blue/20 hover:border-compa-blue shadow-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-compa-blue rounded-xl p-3 w-fit mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-compa-neutral-dark mb-2">Cumplimiento</h4>
            <p className="text-compa-neutral-mid text-sm">
              GDPR · CCPA · LGPD compliant
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-6 border-2 border-compa-green/20 hover:border-compa-green shadow-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-compa-green rounded-xl p-3 w-fit mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-compa-neutral-dark mb-2">Auditoría Externa</h4>
            <p className="text-compa-neutral-mid text-sm">
              Q3 2025 · Próximo a publicar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
