import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Shield, Zap, Clock, MessageSquare, Download, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

const pillars = [
  {
    id: 'cuidado',
    title: 'Cuidado',
    tagline: 'Nunca presión, siempre respeto',
    icon: Heart,
    color: '#4A6B52',
    lightColor: '#E6F7EF',
    imageUrl: 'https://images.unsplash.com/photo-1600960568458-7966d439289e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG5vdGlmaWNhdGlvbiUyMGNhbG18ZW58MXx8fHwxNzYxOTUxMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        icon: Clock,
        title: 'Quiet Hours',
        description: '20:30–08:00 sin excepciones',
        proof: 'Verificable en cada mensaje'
      },
      {
        icon: MessageSquare,
        title: 'Cadencia respetuosa',
        description: '1/24h máximo · 2/semana si no respondes',
        proof: 'Métrica pública mensual'
      }
    ],
    commitment: 'Tu tiempo es sagrado. Lo respetamos siempre.',
  },
  {
    id: 'privacidad',
    title: 'Privacidad',
    tagline: 'Tus datos, tus reglas',
    icon: Shield,
    color: '#0FA36B',
    lightColor: '#E6F7EF',
    imageUrl: 'https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcHJpdmFjeSUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTg4OTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        icon: Clock,
        title: 'Auto-expiración',
        description: 'Perfil 30 días · Eventos 90 días',
        proof: 'TTL automático sin acción manual'
      },
      {
        icon: Download,
        title: 'Export/Delete',
        description: 'Portabilidad completa en menos de 6h',
        proof: 'SLA público Oct 2025: 4.2h'
      }
    ],
    commitment: 'Privacidad por diseño, no por configuración.',
  },
  {
    id: 'agencia',
    title: 'Agencia',
    tagline: 'Tú mandas, siempre',
    icon: Zap,
    color: '#3EC2F1',
    lightColor: '#E8F7FC',
    imageUrl: 'https://images.unsplash.com/photo-1761539157110-e21a70539dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBjb250cm9sJTIwYmFsYW5jZXxlbnwxfHx8fDE3NjE5NTExMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        icon: Zap,
        title: 'BAJA instantánea',
        description: 'Sin preguntas. Sin fricción.',
        proof: 'Opt-out rate: 0.3%'
      },
      {
        icon: MessageSquare,
        title: 'Control visible',
        description: 'Pausar · AGENTE · PRIVADO siempre a mano',
        proof: 'UI persistente en toda interacción'
      }
    ],
    commitment: 'Tu autonomía no es negociable.',
  },
];

export function InteractivePillars() {
  const [selectedPillar, setSelectedPillar] = useState(pillars[0]);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-compa-green-light/20 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-compa-green-dark mb-6">
            Tres pilares, una promesa
          </h2>
          <p className="text-compa-neutral-mid text-lg">
            La confianza no es una feature. Es la intersección de Cuidado, Privacidad y Agencia.
          </p>
        </motion.div>

        {/* Pillar selector */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = selectedPillar.id === pillar.id;
            
            return (
              <motion.button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`relative p-6 rounded-2xl border-4 transition-all text-left ${
                  isActive 
                    ? 'border-current shadow-2xl' 
                    : 'border-transparent bg-white shadow-lg hover:shadow-xl'
                }`}
                style={{ 
                  borderColor: isActive ? pillar.color : 'transparent',
                  backgroundColor: isActive ? pillar.lightColor : 'white'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="rounded-xl p-3 w-fit mb-4"
                  style={{ backgroundColor: pillar.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-compa-neutral-dark mb-2">{pillar.title}</h3>
                <p className="text-compa-neutral-mid text-sm">{pillar.tagline}</p>
                
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: pillar.color }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Selected pillar content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Image */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
              <ImageWithFallback
                src={selectedPillar.imageUrl}
                alt={`${selectedPillar.title} - ${selectedPillar.tagline}`}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay badge */}
              <div 
                className="absolute top-6 left-6 px-6 py-3 rounded-2xl backdrop-blur-md border-2 border-white/30 z-20"
                style={{ backgroundColor: `${selectedPillar.color}20` }}
              >
                <div 
                  className="text-2xl mb-1"
                  style={{ color: selectedPillar.color }}
                >
                  {selectedPillar.title}
                </div>
                <div className="text-white text-sm">{selectedPillar.tagline}</div>
              </div>
            </motion.div>

            {/* Right: Features */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 
                  className="mb-6"
                  style={{ color: selectedPillar.color }}
                >
                  {selectedPillar.commitment}
                </h3>
              </motion.div>

              {selectedPillar.features.map((feature, idx) => {
                const FeatureIcon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 border-2 shadow-lg hover:shadow-xl transition-all group"
                    style={{ borderColor: `${selectedPillar.color}20` }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="rounded-xl p-3 flex-shrink-0"
                        style={{ backgroundColor: selectedPillar.lightColor }}
                      >
                        <FeatureIcon 
                          className="w-6 h-6"
                          style={{ color: selectedPillar.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-compa-neutral-dark mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-compa-neutral-mid mb-3">
                          {feature.description}
                        </p>
                        <div 
                          className="text-xs font-mono px-3 py-2 rounded-lg inline-block"
                          style={{ 
                            backgroundColor: selectedPillar.lightColor,
                            color: selectedPillar.color
                          }}
                        >
                          Proof: {feature.proof}
                        </div>
                      </div>
                      <ChevronRight 
                        className="w-5 h-5 text-compa-neutral-mid group-hover:text-current transition-colors flex-shrink-0"
                        style={{ color: selectedPillar.color }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  className="w-full text-white"
                  style={{ backgroundColor: selectedPillar.color }}
                  size="lg"
                >
                  Ver detalles completos del pilar →
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom intersection explanation */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-compa-green via-compa-green-dark to-compa-blue rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-6">
            Los tres juntos = Confianza verificable
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Sin <strong>Cuidado</strong>, la privacidad es fría. Sin <strong>Privacidad</strong>, el cuidado es invasivo. 
            Sin <strong>Agencia</strong>, ambos son paternalistas. Juntos, crean calma real.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🤝</div>
              <div className="text-sm">Cuidado que respeta</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🔒</div>
              <div className="text-sm">Privacidad con propósito</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-sm">Control sin fricción</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
