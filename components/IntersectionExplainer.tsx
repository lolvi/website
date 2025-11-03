import { Heart, Shield, Sliders, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function IntersectionExplainer() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4">¿Por qué confiar en Compa?</h2>
          <p className="text-[#51646A] max-w-2xl mx-auto">
            No es una sola cosa. Es la intersección de tres compromisos verificables que trabajan juntos.
          </p>
        </div>

        {/* Visual intersection */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Cuidado */}
            <Card className="border-[#0FA36B]/30 bg-[#F7FBF9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#0FA36B]/10 rounded-lg">
                    <Heart className="w-6 h-6 text-[#0FA36B]" />
                  </div>
                  <h3 className="text-lg">Cuidado</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">20:30–08:00</span>
                    <span className="text-[#51646A]">Quiet hours, sin excepciones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">1/24h</span>
                    <span className="text-[#51646A]">Máximo 1 nudge cada 24 horas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">2/sem</span>
                    <span className="text-[#51646A]">Máximo si no respondes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacidad */}
            <Card className="border-[#0FA36B]/30 bg-[#F7FBF9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#0FA36B]/10 rounded-lg">
                    <Shield className="w-6 h-6 text-[#0FA36B]" />
                  </div>
                  <h3 className="text-lg">Privacidad</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">TTL 30</span>
                    <span className="text-[#51646A]">Perfil expira en 30 días</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">TTL 90</span>
                    <span className="text-[#51646A]">Eventos expiran en 90 días</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">Export/Delete</span>
                    <span className="text-[#51646A]">En 1 paso, &lt;6h SLA</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agencia */}
            <Card className="border-[#0FA36B]/30 bg-[#F7FBF9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#0FA36B]/10 rounded-lg">
                    <Sliders className="w-6 h-6 text-[#0FA36B]" />
                  </div>
                  <h3 className="text-lg">Agencia</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">BAJA</span>
                    <span className="text-[#51646A]">Instantánea, sin preguntas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">Pausar</span>
                    <span className="text-[#51646A]">7 o 30 días, cuando quieras</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1 font-mono">AGENTE</span>
                    <span className="text-[#51646A]">Humano en office hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* The intersection */}
          <Card className="border-2 border-[#0FA36B] bg-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Heart className="w-5 h-5 text-[#0FA36B]" />
                <span className="text-[#51646A]">+</span>
                <Shield className="w-5 h-5 text-[#0FA36B]" />
                <span className="text-[#51646A]">+</span>
                <Sliders className="w-5 h-5 text-[#0FA36B]" />
                <ArrowRight className="w-5 h-5 text-[#51646A]" />
                <span className="text-[#0FA36B]">Confianza verificable</span>
              </div>
              <p className="text-center text-[#51646A] max-w-3xl mx-auto">
                La intersección es donde nace la confianza. Cuidado sin privacidad es paternalismo. 
                Privacidad sin cuidado es frialdad técnica. Agencia sin cuidado es abandono. 
                <strong className="text-[#0D1B1E]"> Los tres juntos, con pruebas operativas, es Compa.</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Operational proof examples */}
        <div className="bg-[#F7FBF9] rounded-lg p-6">
          <h3 className="mb-4 text-center">Ejemplos operativos (no promesas)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg border border-[#E5EFEA]">
              <p className="mb-2">
                <strong className="text-[#0FA36B]">Escenario:</strong> Son las 22:00 y tienes una pregunta.
              </p>
              <p className="text-[#51646A]">
                <strong>Cómo responde Compa:</strong> Puedes escribir cuando quieras, pero nosotros no te escribiremos 
                hasta las 08:00 (o tu franja preferida). Tu mensaje queda en cola, con prioridad.
              </p>
              <p className="text-xs text-[#51646A] mt-2 font-mono">
                Rieles: Quiet hours (Care) + Sin datos innecesarios (Privacy) + Tú inicias (Agency)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#E5EFEA]">
              <p className="mb-2">
                <strong className="text-[#0FA36B]">Escenario:</strong> Quieres ver qué datos tenemos de ti.
              </p>
              <p className="text-[#51646A]">
                <strong>Cómo responde Compa:</strong> Escribe &quot;Export&quot; → OTP → JSON completo en &lt;6h con timestamp, 
                fuentes y propósitos. O &quot;Delete&quot; para borrado en cascada irreversible.
              </p>
              <p className="text-xs text-[#51646A] mt-2 font-mono">
                Rieles: SLA &lt;24h (Care) + Portabilidad total (Privacy) + 1 comando (Agency)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#E5EFEA]">
              <p className="mb-2">
                <strong className="text-[#0FA36B]">Escenario:</strong> Recibiste 3 mensajes esta semana.
              </p>
              <p className="text-[#51646A]">
                <strong>Cómo responde Compa:</strong> Imposible si no has respondido. Máximo 2/semana sin respuesta; 
                máximo 1 cada 24h. Preferencias siempre editables.
              </p>
              <p className="text-xs text-[#51646A] mt-2 font-mono">
                Rieles: Cadencia respetada (Care) + Telemetría sin PII (Privacy) + Pausar visible (Agency)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#E5EFEA]">
              <p className="mb-2">
                <strong className="text-[#0FA36B]">Escenario:</strong> Te arrepientes y quieres salir.
              </p>
              <p className="text-[#51646A]">
                <strong>Cómo responde Compa:</strong> &quot;BAJA&quot; → confirmación instantánea, sin preguntas. 
                Puedes volver cuando quieras. Tus datos siguen disponibles para Export/Delete.
              </p>
              <p className="text-xs text-[#51646A] mt-2 font-mono">
                Rieles: Sin retención forzada (Care) + TTL mantiene límite (Privacy) + Control total (Agency)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
