import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {  ArrowRight, Clock, MessageSquare, Shield, Zap } from 'lucide-react';
import bitacoraDemo from 'figma:asset/c765eb6b50847e17991d257dd88c75da18a926e4.png';

const WHATSAPP_NUMBER = '1234567890';

export function HeroV3() {
  const handleWAClick = (intent: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_medium=web%20utm_campaign=hero`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'hero_wa_cta_click', { intent });
    }
  };

  return (
    <>
      {/* Hero - Bold Statement */}
      <section className="bg-compa-green py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-white mb-8 leading-[0.95] tracking-tighter">
              CALMA<br />
              CON<br />
              PRUEBA
            </h1>
            
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
              Cuidamos tus pagos. Tú controlas tus datos.<br />
              Sin letra chiquita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                onClick={() => handleWAClick('cta_empezar')}
                size="lg"
                className="bg-white text-compa-green hover:bg-white/95 shadow-lg text-lg px-8 py-6 h-auto"
              >
                Abrir en WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleWAClick('ver_demo_bitacora')}
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                Ver demo en 60s
              </Button>
            </div>

            {/* Proof metrics - solid cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-6 border-4 border-compa-green-dark">
                <div className="font-mono text-4xl text-compa-green mb-2">0</div>
                <div className="text-compa-neutral-mid text-sm">PII incidents</div>
              </div>
              <div className="bg-white rounded-xl p-6 border-4 border-compa-green-dark">
                <div className="font-mono text-4xl text-compa-green mb-2">&lt;6h</div>
                <div className="text-compa-neutral-mid text-sm">Export/Delete</div>
              </div>
              <div className="bg-white rounded-xl p-6 border-4 border-compa-green-dark">
                <div className="font-mono text-4xl text-compa-green mb-2">30/90</div>
                <div className="text-compa-neutral-mid text-sm">días TTL</div>
              </div>
              <div className="bg-white rounded-xl p-6 border-4 border-compa-green-dark">
                <div className="font-mono text-4xl text-compa-green mb-2">0.3%</div>
                <div className="text-compa-neutral-mid text-sm">opt-out rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Commitments (Cream) */}
      <section className="bg-[#FFFCF5] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-compa-green-dark mb-12 leading-[1] tracking-tight text-center">
              NUNCA TE<br />
              ESCRIBIMOS<br />
              DE NOCHE
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 border-2 border-compa-green/20">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 text-compa-green flex-shrink-0" />
                  <div>
                    <h3 className="text-compa-neutral-dark mb-2">Quiet hours</h3>
                    <p className="text-compa-neutral-mid leading-relaxed">
                      20:30–08:00 · Ninguna notificación. Ninguna excepción.
                    </p>
                  </div>
                </div>
                <div className="font-mono text-3xl text-compa-green">20:30—08:00</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-compa-green/20">
                <div className="flex items-start gap-4 mb-4">
                  <MessageSquare className="w-8 h-8 text-compa-green flex-shrink-0" />
                  <div>
                    <h3 className="text-compa-neutral-dark mb-2">Máximo mensual</h3>
                    <p className="text-compa-neutral-mid leading-relaxed">
                      1 cada 24h · 2/semana si no respondes · Nunca insistimos
                    </p>
                  </div>
                </div>
                <div className="font-mono text-3xl text-compa-green">1/24h</div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-compa-green">
              <ImageWithFallback
                src={bitacoraDemo}
                alt="Bitácora demo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Your Control (Blue) */}
      <section className="bg-compa-blue py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-white mb-12 leading-[1] tracking-tight text-center">
              TU CONTROL<br />
              SIEMPRE VISIBLE
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-compa-blue rounded-lg p-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-mono text-3xl text-compa-blue-dark">BAJA</div>
                </div>
                <p className="text-compa-neutral-dark leading-relaxed">
                  Instantánea. Sin preguntas. Sin &quot;¿estás seguro?&quot;
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-compa-blue rounded-lg p-3">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-mono text-3xl text-compa-blue-dark">Pausar</div>
                </div>
                <p className="text-compa-neutral-dark leading-relaxed">
                  7 o 30 días. Cuando vuelvas, todo estará como lo dejaste.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-compa-blue rounded-lg p-3">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-mono text-3xl text-compa-blue-dark">AGENTE</div>
                </div>
                <p className="text-compa-neutral-dark leading-relaxed">
                  Humano real. Office hours: 09:00–18:00 · Lun–Vie
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue-dark">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-compa-blue rounded-lg p-3">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-mono text-3xl text-compa-blue-dark">PRIVADO</div>
                </div>
                <p className="text-compa-neutral-dark leading-relaxed">
                  Exporta o borra todo en un paso. SLA: &lt;6h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Proof not Hype */}
      <section className="bg-compa-green-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-white mb-12 leading-[1] tracking-tight text-center">
              PRUEBAS,<br />
              NO PROMESAS
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green">
                <div className="text-compa-green text-sm mb-3 uppercase tracking-wider">
                  Ledger Mensual
                </div>
                <p className="text-compa-neutral-dark leading-relaxed mb-6">
                  Cada evento de privacidad, publicado. Cada mes. Sin editar.
                </p>
                <Button 
                  variant="link" 
                  className="text-compa-green hover:text-compa-green-dark p-0 h-auto"
                >
                  Ver octubre 2025 →
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green">
                <div className="text-compa-green text-sm mb-3 uppercase tracking-wider">
                  Sistema en Vivo
                </div>
                <p className="text-compa-neutral-dark leading-relaxed mb-6">
                  Estado actual. SLAs. Incidentes. Actualizamos cada 5 min.
                </p>
                <Button 
                  variant="link" 
                  className="text-compa-green hover:text-compa-green-dark p-0 h-auto"
                >
                  Ver status →
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green">
                <div className="text-compa-green text-sm mb-3 uppercase tracking-wider">
                  Pacto de Cuidado
                </div>
                <p className="text-compa-neutral-dark leading-relaxed mb-6">
                  Nuestros compromisos. Firmados. Con fecha. Versionados.
                </p>
                <Button 
                  variant="link" 
                  className="text-compa-green hover:text-compa-green-dark p-0 h-auto"
                >
                  Leer pacto →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
