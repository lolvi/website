import { Heart, Shield, Sliders, ArrowRight } from 'lucide-react';

export function IntersectionExplainerV4() {
  return (
    <>
      {/* Pillar 1: Cuidado */}
      <section className="bg-[#4A6B52] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white rounded-xl p-4">
                <Heart className="w-10 h-10 text-[#4A6B52]" />
              </div>
              <span className="text-white/60 text-xl uppercase tracking-widest">01 · Cuidado</span>
            </div>
            
            <h2 className="text-white mb-12 leading-[1] tracking-tight max-w-3xl">
              RESPETAMOS TU TIEMPO Y RITMO
            </h2>

            {/* Metrics Grid - solid cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-4 border-white/20">
                <div className="font-mono text-5xl md:text-6xl text-[#4A6B52] mb-4 tracking-tight">
                  20:30<br />
                  <span className="text-3xl text-[#4A6B52]/60">—08:00</span>
                </div>
                <h3 className="text-[#4A6B52] mb-2">Quiet hours</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Sin excepciones. Tu descanso es sagrado.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-white/20">
                <div className="font-mono text-5xl md:text-6xl text-[#4A6B52] mb-4 tracking-tight">
                  1<span className="text-3xl text-[#4A6B52]/60">/24h</span>
                </div>
                <h3 className="text-[#4A6B52] mb-2">Frecuencia máxima</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  2 por semana si no respondes. Nunca insistimos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-white/20">
                <div className="font-mono text-5xl md:text-6xl text-[#4A6B52] mb-4 tracking-tight">
                  100%
                </div>
                <h3 className="text-[#4A6B52] mb-2">Post-mortems públicos</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Cuando fallamos. Con compensación.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-white/20">
                <div className="font-mono text-5xl md:text-6xl text-[#4A6B52] mb-4 tracking-tight">
                  &lt;24h
                </div>
                <h3 className="text-[#4A6B52] mb-2">Respuesta humana</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Office hours: 09:00–18:00 · Lun–Vie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Privacidad */}
      <section className="bg-[#FFFCF5] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-compa-green rounded-xl p-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <span className="text-compa-neutral-mid text-xl uppercase tracking-widest">02 · Privacidad</span>
            </div>
            
            <h2 className="text-compa-green-dark mb-12 leading-[1] tracking-tight max-w-3xl">
              MINIMIZACIÓN POR DISEÑO
            </h2>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green/30">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  30<span className="text-3xl text-compa-green/60">/90</span>
                </div>
                <h3 className="text-compa-green-dark mb-2">TTL automático</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Perfil (30 días) · Eventos (90 días)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green/30">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  0
                </div>
                <h3 className="text-compa-green-dark mb-2">PII incidents</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Desde oct 2024. Reportamos todo.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green/30">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  ≠E2E
                </div>
                <h3 className="text-compa-green-dark mb-2">Honestidad técnica</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  WABA no es end-to-end. Te lo decimos claro.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green/30">
                <div className="font-mono text-5xl md:text-6xl text-compa-green mb-4 tracking-tight">
                  0%
                </div>
                <h3 className="text-compa-green-dark mb-2">PII en logs</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  0% en comunidad pública. Siempre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Agencia */}
      <section className="bg-compa-blue py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white rounded-xl p-4">
                <Sliders className="w-10 h-10 text-compa-blue" />
              </div>
              <span className="text-white/60 text-xl uppercase tracking-widest">03 · Agencia</span>
            </div>
            
            <h2 className="text-white mb-12 leading-[1] tracking-tight max-w-3xl">
              TÚ DECIDES. TÚ CONTROLAS.
            </h2>

            {/* Controls Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="font-mono text-5xl md:text-6xl text-compa-blue mb-4 tracking-tight">
                  BAJA
                </div>
                <h3 className="text-compa-blue-dark mb-2">Sin fricción</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Instantánea. Sin preguntas. Sin confirmación.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="font-mono text-5xl md:text-6xl text-compa-blue mb-4 tracking-tight">
                  Pausar
                </div>
                <h3 className="text-compa-blue-dark mb-2">Tu tiempo</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  7 o 30 días. Cuando vuelvas, todo igual.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="font-mono text-5xl md:text-6xl text-compa-blue mb-4 tracking-tight">
                  &lt;6h
                </div>
                <h3 className="text-compa-blue-dark mb-2">Export/Delete SLA</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Promedio actual: 4.2h
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="font-mono text-5xl md:text-6xl text-compa-blue mb-4 tracking-tight">
                  0.3%
                </div>
                <h3 className="text-compa-blue-dark mb-2">Opt-out rate</h3>
                <p className="text-compa-neutral-mid leading-relaxed">
                  Oct 2025. Los controles funcionan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Intersection */}
      <section className="bg-compa-green py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-white mb-16 leading-[1] tracking-tight text-center">
              LA INTERSECCIÓN<br />
              ES LA CONFIANZA
            </h2>

            {/* Visual Equation - solid cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 border-4 border-white/20 text-center">
                <Heart className="w-16 h-16 text-compa-green mx-auto mb-4" />
                <div className="text-2xl text-compa-green-dark">Cuidado</div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border-4 border-white/20 text-center">
                <Shield className="w-16 h-16 text-compa-green mx-auto mb-4" />
                <div className="text-2xl text-compa-green-dark">Privacidad</div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border-4 border-white/20 text-center">
                <Sliders className="w-16 h-16 text-compa-green mx-auto mb-4" />
                <div className="text-2xl text-compa-green-dark">Agencia</div>
              </div>
            </div>

            <div className="flex items-center justify-center mb-12">
              <ArrowRight className="w-12 h-12 text-white/60" />
            </div>

            <div className="bg-white rounded-3xl p-12 border-4 border-compa-green-dark text-center shadow-2xl">
              <div className="font-mono text-6xl text-compa-green mb-6">✓</div>
              <h3 className="text-compa-green-dark mb-6">Confianza Verificable</h3>
              <p className="text-compa-neutral-mid text-lg leading-relaxed max-w-2xl mx-auto">
                Cuidado sin privacidad es paternalismo.<br />
                Privacidad sin cuidado es frialdad técnica.<br />
                Agencia sin cuidado es abandono.
              </p>
              <p className="text-compa-green-dark text-xl mt-8">
                Los tres juntos, con pruebas operativas, es <strong>Compa</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
