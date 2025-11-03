import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import bitacoraDemo from 'figma:asset/c765eb6b50847e17991d257dd88c75da18a926e4.png';

const WHATSAPP_NUMBER = '1234567890'; // Replace with actual number

export function HeroV2() {
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
      <section className="bg-compa-green min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 w-full">
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

            {/* Quick proof metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="font-mono text-3xl md:text-4xl text-white mb-1">0</div>
                <div className="text-white/70 text-sm">PII incidents</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl text-white mb-1">&lt;6h</div>
                <div className="text-white/70 text-sm">Export/Delete</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl text-white mb-1">30/90</div>
                <div className="text-white/70 text-sm">días TTL</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl text-white mb-1">0.3%</div>
                <div className="text-white/70 text-sm">opt-out rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Commitments (Cream/Light) */}
      <section className="bg-[#FFFCF5] py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-compa-green-dark mb-12 leading-[1] tracking-tight">
                NUNCA TE<br />
                ESCRIBIMOS<br />
                DE NOCHE
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-compa-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-compa-neutral-dark text-lg mb-2">
                      <strong>Quiet hours: 20:30–08:00</strong>
                    </p>
                    <p className="text-compa-neutral-mid leading-relaxed">
                      Ninguna notificación. Ninguna excepción. Tu descanso es sagrado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-compa-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-compa-neutral-dark text-lg mb-2">
                      <strong>Máximo 1 mensaje cada 24h</strong>
                    </p>
                    <p className="text-compa-neutral-mid leading-relaxed">
                      2 por semana si no respondes. Nunca insistimos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={bitacoraDemo}
                  alt="Bitácora demo"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Your Control (Blue) */}
      <section className="bg-compa-blue py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-12 leading-[1] tracking-tight">
              BAJA, PAUSAR,<br />
              AGENTE,<br />
              PRIVADO
            </h2>
            <p className="text-white/90 text-xl md:text-2xl mb-16 leading-relaxed max-w-2xl mx-auto">
              Cuatro palabras. Siempre visibles.<br />
              Tu control no está escondido en un menú.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-white font-mono text-2xl mb-4">BAJA</div>
                <p className="text-white/80 leading-relaxed">
                  Instantánea. Sin preguntas. Sin &ldquo;¿estás seguro?&ldquo;
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-white font-mono text-2xl mb-4">Pausar</div>
                <p className="text-white/80 leading-relaxed">
                  7 o 30 días. Cuando vuelvas, todo estará como lo dejaste.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-white font-mono text-2xl mb-4">AGENTE</div>
                <p className="text-white/80 leading-relaxed">
                  Humano real. Office hours: 09:00–18:00 · Lun–Vie
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-white font-mono text-2xl mb-4">PRIVADO</div>
                <p className="text-white/80 leading-relaxed">
                  Exporta o borra todo en un paso. SLA: &lt;6h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Proof not Hype (Dark Green) */}
      <section className="bg-compa-green-dark py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-white mb-16 leading-[1] tracking-tight text-center">
              PRUEBAS,<br />
              NO PROMESAS
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-compa-green-light text-sm mb-3 uppercase tracking-wider">
                  Ledger Mensual
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  Cada evento de privacidad, publicado. Cada mes. Sin editar.
                </p>
                <Button 
                  variant="link" 
                  className="text-white hover:text-white/80 p-0 h-auto"
                >
                  Ver octubre 2025 →
                </Button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-compa-green-light text-sm mb-3 uppercase tracking-wider">
                  Sistema en Vivo
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  Estado actual. SLAs. Incidentes. Actualizamos cada 5 min.
                </p>
                <Button 
                  variant="link" 
                  className="text-white hover:text-white/80 p-0 h-auto"
                >
                  Ver status →
                </Button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-compa-green-light text-sm mb-3 uppercase tracking-wider">
                  Pacto de Cuidado
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  Nuestros compromisos. Firmados. Con fecha. Versionados.
                </p>
                <Button 
                  variant="link" 
                  className="text-white hover:text-white/80 p-0 h-auto"
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
