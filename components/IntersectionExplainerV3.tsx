import { Heart, Shield, Sliders, Plus, ArrowRight } from 'lucide-react';

export function IntersectionExplainerV3() {
  return (
    <>
      {/* Pillar 1: Cuidado */}
      <section className="bg-[#4A6B52] min-h-screen flex items-center py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-white/80" />
              <span className="text-white/60 text-xl md:text-2xl uppercase tracking-widest">01</span>
            </div>
            
            <h2 className="text-white mb-12 leading-[0.95] tracking-tighter">
              CUIDADO
            </h2>

            <p className="text-white/90 text-xl md:text-2xl mb-16 leading-relaxed max-w-2xl">
              Nosotros nos comprometemos a respetar tu tiempo, ritmo y límites.
            </p>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  20:30<br />
                  <span className="text-3xl md:text-4xl text-white/60">—08:00</span>
                </div>
                <p className="text-white/80 text-lg">
                  Quiet hours. Sin excepciones. Tu descanso es sagrado.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  1<span className="text-3xl md:text-4xl text-white/60">/24h</span>
                </div>
                <p className="text-white/80 text-lg">
                  Máximo 1 nudge cada 24 horas. 2 por semana si no respondes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  100%
                </div>
                <p className="text-white/80 text-lg">
                  Post-mortems públicos cuando fallamos. Con compensación.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  &lt;24h
                </div>
                <p className="text-white/80 text-lg">
                  SLA de respuesta humana. Office hours: 09:00–18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Privacidad */}
      <section className="bg-[#FFFCF5] min-h-screen flex items-center py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-compa-green" />
              <span className="text-compa-neutral-mid text-xl md:text-2xl uppercase tracking-widest">02</span>
            </div>
            
            <h2 className="text-compa-green-dark mb-12 leading-[0.95] tracking-tighter">
              PRIVACIDAD
            </h2>

            <p className="text-compa-neutral-dark text-xl md:text-2xl mb-16 leading-relaxed max-w-2xl">
              Minimización por diseño. Honestidad de límites. Tu información expira.
            </p>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-compa-green/5 border border-compa-green/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  30<span className="text-3xl md:text-4xl text-compa-green/60">/90</span>
                </div>
                <p className="text-compa-neutral-dark text-lg">
                  días TTL. Perfil (30) · Eventos (90). Automático.
                </p>
              </div>

              <div className="bg-compa-green/5 border border-compa-green/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  0
                </div>
                <p className="text-compa-neutral-dark text-lg">
                  PII incidents desde oct 2024. Reportamos todo.
                </p>
              </div>

              <div className="bg-compa-green/5 border border-compa-green/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  ≠E2E
                </div>
                <p className="text-compa-neutral-dark text-lg">
                  WABA no es end-to-end. Te lo decimos claro.
                </p>
              </div>

              <div className="bg-compa-green/5 border border-compa-green/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  0%
                </div>
                <p className="text-compa-neutral-dark text-lg">
                  PII en logs. 0% en comunidad pública. Siempre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Agencia */}
      <section className="bg-compa-blue min-h-screen flex items-center py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Sliders className="w-12 h-12 md:w-16 md:h-16 text-white/80" />
              <span className="text-white/60 text-xl md:text-2xl uppercase tracking-widest">03</span>
            </div>
            
            <h2 className="text-white mb-12 leading-[0.95] tracking-tighter">
              AGENCIA
            </h2>

            <p className="text-white/90 text-xl md:text-2xl mb-16 leading-relaxed max-w-2xl">
              Tú decides. Tú controlas. Los botones nunca se esconden.
            </p>

            {/* Controls Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  BAJA
                </div>
                <p className="text-white/80 text-lg">
                  Instantánea. Sin preguntas. Sin confirmación.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  Pausar
                </div>
                <p className="text-white/80 text-lg">
                  7 o 30 días. Cuando vuelvas, todo igual.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  &lt;6h
                </div>
                <p className="text-white/80 text-lg">
                  SLA Export/Delete. Promedio actual: 4.2h
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="font-mono text-5xl md:text-6xl text-white mb-4 tracking-tight">
                  0.3%
                </div>
                <p className="text-white/80 text-lg">
                  Opt-out rate (oct 2025). Los controles funcionan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Intersection */}
      <section className="bg-compa-green min-h-screen flex items-center py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-white mb-20 leading-[0.95] tracking-tighter">
              LA INTERSECCIÓN<br />
              ES LA CONFIANZA
            </h2>

            {/* Visual Equation */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <Heart className="w-16 h-16 text-white mx-auto mb-4" />
                <div className="text-white text-xl">Cuidado</div>
              </div>
              
              <Plus className="w-8 h-8 text-white/60" />
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <Shield className="w-16 h-16 text-white mx-auto mb-4" />
                <div className="text-white text-xl">Privacidad</div>
              </div>
              
              <Plus className="w-8 h-8 text-white/60" />
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <Sliders className="w-16 h-16 text-white mx-auto mb-4" />
                <div className="text-white text-xl">Agencia</div>
              </div>
              
              <ArrowRight className="w-8 h-8 text-white/60" />
              
              <div className="bg-white/95 rounded-2xl p-8 shadow-xl">
                <div className="font-mono text-4xl text-compa-green">✓</div>
                <div className="text-compa-green text-xl mt-4">Confianza<br/>Verificable</div>
              </div>
            </div>

            <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Cuidado sin privacidad es paternalismo.<br />
              Privacidad sin cuidado es frialdad técnica.<br />
              Agencia sin cuidado es abandono.
            </p>

            <p className="text-white text-2xl md:text-3xl mt-12 leading-relaxed max-w-2xl mx-auto">
              Los tres juntos, con pruebas operativas,<br />
              es <strong className="text-white">Compa</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
