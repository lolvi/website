import { motion } from 'motion/react';
import { MessageSquare, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const scenarios = [
  {
    id: 1,
    time: '22:00',
    title: 'Pregunta urgente de noche',
    userAction: 'Escribes a Compa por WhatsApp',
    icon: MessageSquare,
    color: '#4A6B52',
    imageUrl: 'https://images.unsplash.com/photo-1600960568458-7966d439289e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG5vdGlmaWNhdGlvbiUyMGNhbG18ZW58MXx8fHwxNzYxOTUxMTEyfDA&ixlib=rb-4.1.0&q=80&w=400',
    pillars: [
      { name: 'Cuidado', action: 'Quiet hours activas · No respondemos hasta las 08:15' },
      { name: 'Privacidad', action: 'Mensaje cifrado · Sin logging de contenido' },
      { name: 'Agencia', action: 'Te preguntamos tu franja preferida para responder' },
    ],
    outcome: '✓ Respuesta a las 08:15 o en tu horario elegido',
  },
  {
    id: 2,
    time: '14:30',
    title: 'Quieres tus datos',
    userAction: 'Escribes "Export"',
    icon: Shield,
    color: '#0FA36B',
    imageUrl: 'https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcHJpdmFjeSUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTg4OTEyM3ww&ixlib=rb-4.1.0&q=80&w=400',
    pillars: [
      { name: 'Privacidad', action: 'OTP para verificar tu identidad' },
      { name: 'Cuidado', action: 'JSON generado en menos de 6h con explicaciones' },
      { name: 'Agencia', action: 'Formato legible · Link privado temporal' },
    ],
    outcome: '✓ Descarga completa en 4.2h promedio',
  },
  {
    id: 3,
    time: '16:00',
    title: 'Son muchos mensajes',
    userAction: 'Escribes "Pausar"',
    icon: Zap,
    color: '#3EC2F1',
    imageUrl: 'https://images.unsplash.com/photo-1761539157110-e21a70539dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBjb250cm9sJTIwYmFsYW5jZXxlbnwxfHx8fDE3NjE5NTExMTN8MA&ixlib=rb-4.1.0&q=80&w=400',
    pillars: [
      { name: 'Agencia', action: 'Pausar 7 o 30 días sin preguntas' },
      { name: 'Cuidado', action: 'O ajustas frecuencia (Baja/Media/Alta)' },
      { name: 'Privacidad', action: 'Eventos registrados sin contenido PII' },
    ],
    outcome: '✓ Control total · Puedes reactivar cuando quieras',
  },
];

export function VisualTimeline() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-compa-neutral-light/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #0FA36B 1px, transparent 1px), linear-gradient(to bottom, #0FA36B 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-compa-green-dark mb-6">
            Cómo funciona en la vida real
          </h2>
          <p className="text-compa-neutral-mid text-lg">
            Tres escenarios comunes. Tres formas en que Cuidado + Privacidad + Agencia trabajan juntos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-compa-green via-compa-green-dark to-compa-blue transform -translate-x-1/2" />

          <div className="space-y-24">
            {scenarios.map((scenario, idx) => {
              const Icon = scenario.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={scenario.id}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content side */}
                    <div className={`${isEven ? 'lg:text-right lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                      {/* Time badge */}
                      <motion.div
                        className={`inline-block px-4 py-2 rounded-full text-white mb-4 ${isEven ? '' : 'lg:ml-auto'}`}
                        style={{ backgroundColor: scenario.color }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="font-mono">{scenario.time}</span>
                      </motion.div>

                      <h3 className="text-compa-neutral-dark mb-4">
                        {scenario.title}
                      </h3>

                      {/* User action */}
                      <div className="bg-compa-neutral-light/50 rounded-2xl p-4 mb-6 inline-block">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="w-5 h-5 text-compa-neutral-mid flex-shrink-0" />
                          <span className="text-compa-neutral-dark">{scenario.userAction}</span>
                        </div>
                      </div>

                      {/* Pillar responses */}
                      <div className="space-y-3 mb-6">
                        {scenario.pillars.map((pillar, pIdx) => (
                          <motion.div
                            key={pIdx}
                            className="bg-white rounded-xl p-4 border-2 border-transparent hover:border-current transition-all shadow-sm"
                            style={{ borderColor: `${scenario.color}20` }}
                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 + pIdx * 0.1 }}
                            whileHover={{ x: isEven ? -8 : 8 }}
                          >
                            <div className="text-xs uppercase tracking-wider mb-1" style={{ color: scenario.color }}>
                              {pillar.name}
                            </div>
                            <div className="text-sm text-compa-neutral-dark">{pillar.action}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Outcome */}
                      <motion.div
                        className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-3 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm">{scenario.outcome}</span>
                      </motion.div>
                    </div>

                    {/* Image side */}
                    <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <motion.div
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                        whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10" />
                        <ImageWithFallback
                          src={scenario.imageUrl}
                          alt={scenario.title}
                          className="w-full h-80 object-cover"
                        />

                        {/* Floating icon */}
                        <motion.div
                          className="absolute top-6 right-6 rounded-2xl p-4 backdrop-blur-md border-2 border-white/30 z-20"
                          style={{ backgroundColor: `${scenario.color}90` }}
                          animate={{ y: [0, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full border-4 border-white"
                      style={{ backgroundColor: scenario.color }}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-compa-green via-compa-green-dark to-compa-blue rounded-3xl p-12 text-white">
            <h3 className="mb-4">
              Estos no son casos ideales
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Son situaciones reales que pasan todos los días. Y cada una muestra cómo los tres pilares 
              trabajan juntos para darte calma, control y confianza.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
