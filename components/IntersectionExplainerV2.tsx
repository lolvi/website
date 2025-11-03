import { Heart, Shield, Sliders, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { CommitmentText, ControlText, ExplanationText } from './TrustBadge';

export function IntersectionExplainerV2() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="mb-0">¿Por qué confiar en Compa?</h2>
          <ExplanationText>
            No es una sola cosa. Es la intersección de tres compromisos verificables que trabajan juntos.
          </ExplanationText>
        </div>

        {/* The three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Cuidado - We Commit (Green) */}
          <Card className="border-compa-green/30 bg-compa-green-light/30">
            <CardContent className="pt-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-compa-green/10 rounded-lg">
                  <Heart className="w-7 h-7 text-compa-green" />
                </div>
                <div>
                  <h3 className="mb-0">Cuidado</h3>
                  <p className="text-xs text-compa-neutral-mid">Nosotros nos comprometemos</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <CommitmentText verified>
                    Respetamos tu tiempo y ritmo
                  </CommitmentText>
                  <div className="mt-2 space-y-2 ml-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-green">20:30–08:00</span>
                      <span className="text-xs text-compa-neutral-mid">quiet hours, sin excepciones</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-green">1/24h</span>
                      <span className="text-xs text-compa-neutral-mid">máximo 1 nudge cada 24 horas</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-green">2/sem</span>
                      <span className="text-xs text-compa-neutral-mid">máximo si no respondes</span>
                    </div>
                  </div>
                </div>

                <div>
                  <CommitmentText verified>
                    Reparamos cuando fallamos
                  </CommitmentText>
                  <p className="text-xs text-compa-neutral-mid ml-6 mt-2">
                    Post-mortems públicos, compensación proporcional, SLA de respuesta
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacidad - We Commit (Green) */}
          <Card className="border-compa-green/30 bg-compa-green-light/30">
            <CardContent className="pt-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-compa-green/10 rounded-lg">
                  <Shield className="w-7 h-7 text-compa-green" />
                </div>
                <div>
                  <h3 className="mb-0">Privacidad</h3>
                  <p className="text-xs text-compa-neutral-mid">Nosotros nos comprometemos</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <CommitmentText verified>
                    Minimización por diseño
                  </CommitmentText>
                  <div className="mt-2 space-y-2 ml-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-green">TTL 30</span>
                      <span className="text-xs text-compa-neutral-mid">días para perfil</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-green">TTL 90</span>
                      <span className="text-xs text-compa-neutral-mid">días para eventos</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-green">0 PII</span>
                      <span className="text-xs text-compa-neutral-mid">en logs y comunidad pública</span>
                    </div>
                  </div>
                </div>

                <div>
                  <CommitmentText verified>
                    Honestidad de límites
                  </CommitmentText>
                  <p className="text-xs text-compa-neutral-mid ml-6 mt-2">
                    WABA ≠ E2E. Te decimos qué no podemos hacer y cómo compensamos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agencia - You Control (Blue) */}
          <Card className="border-compa-blue/30 bg-compa-blue-light/30">
            <CardContent className="pt-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-compa-blue/10 rounded-lg">
                  <Sliders className="w-7 h-7 text-compa-blue" />
                </div>
                <div>
                  <h3 className="mb-0">Agencia</h3>
                  <p className="text-xs text-compa-neutral-mid">Tú decides y controlas</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <ControlText>
                    Controles siempre visibles
                  </ControlText>
                  <div className="mt-2 space-y-2 ml-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-blue">BAJA</span>
                      <span className="text-xs text-compa-neutral-mid">instantánea, sin preguntas</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-blue">Pausar</span>
                      <span className="text-xs text-compa-neutral-mid">7 o 30 días, cuando quieras</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-blue">AGENTE</span>
                      <span className="text-xs text-compa-neutral-mid">humano en office hours</span>
                    </div>
                  </div>
                </div>

                <div>
                  <ControlText>
                    Exporta o borra en 1 paso
                  </ControlText>
                  <div className="mt-2 ml-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm text-compa-blue">&lt;6h</span>
                      <span className="text-xs text-compa-neutral-mid">SLA para Export/Delete (avg: 4.2h)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The intersection */}
        <Card className="border-2 border-compa-green bg-white shadow-sm">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-compa-green" />
                <span className="text-compa-neutral-mid">Cuidado</span>
              </div>
              <span className="text-compa-neutral-mid hidden md:inline">+</span>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-compa-green" />
                <span className="text-compa-neutral-mid">Privacidad</span>
              </div>
              <span className="text-compa-neutral-mid hidden md:inline">+</span>
              <div className="flex items-center gap-3">
                <Sliders className="w-6 h-6 text-compa-blue" />
                <span className="text-compa-neutral-mid">Agencia</span>
              </div>
              <ArrowRight className="w-6 h-6 text-compa-neutral-mid hidden md:inline" />
              <div className="flex items-center gap-3 font-semibold text-compa-green">
                <CheckCircle2 className="w-6 h-6" />
                <span>Confianza verificable</span>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <ExplanationText>
                La intersección es donde nace la confianza. Cuidado sin privacidad es paternalismo. 
                Privacidad sin cuidado es frialdad técnica. Agencia sin cuidado es abandono.
              </ExplanationText>
              <CommitmentText verified>
                Los tres juntos, con pruebas operativas, es Compa.
              </CommitmentText>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-compa-neutral-mid">
            Cada métrica es verificable. Cada compromiso es auditable. Cada control funciona.
          </p>
        </div>
      </div>
    </section>
  );
}
