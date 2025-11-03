import { Sliders, Pause, MessageSquare, XCircle, Lock, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const WHATSAPP_NUMBER = '1234567890';

const controlChips = [
  { id: 'preferencias', icon: Sliders, label: 'Editar preferencias' },
  { id: 'pausar7', icon: Pause, label: 'Pausar 7 días' },
  { id: 'pausar30', icon: Pause, label: 'Pausar 30 días' },
  { id: 'humano', icon: MessageSquare, label: 'Hablar con humano' },
  { id: 'baja', icon: XCircle, label: 'BAJA' },
  { id: 'privado', icon: Lock, label: 'PRIVADO' },
];

export function PilarAgencia() {
  const handleClubClick = (action: string) => {
    const intents: Record<string, string> = {
      channel: 'channel_follow',
      community: 'community_join',
      rules: 'community_rules',
    };
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intents[action]}%20utm_source=landing%20utm_campaign=agency_club`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'agency_club_click', { action });
    }
  };

  return (
    <section className="bg-[#F7FBF9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Agencia: Tú defines el ritmo, siempre</h2>
          <p className="text-[#51646A]">
            Control total sobre cuándo, cómo y con quién interactúas. Sin presiones, sin sorpresas.
          </p>
        </div>

        <div className="space-y-8">
          {/* Control chips */}
          <Card className="border-[#E5EFEA]">
            <CardHeader>
              <CardTitle>Controles siempre visibles</CardTitle>
              <p className="text-[#51646A]">
                Todos estos comandos están disponibles desde WhatsApp en cualquier momento:
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {controlChips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <Badge
                      key={chip.id}
                      variant="outline"
                      className="px-4 py-2 gap-2 text-base bg-white"
                    >
                      <Icon className="w-4 h-4" />
                      {chip.label}
                    </Badge>
                  );
                })}
              </div>
              <p className="text-sm text-[#51646A] mt-4">
                Pruébalos en WhatsApp — responden al instante, sin pasar por humano.
              </p>
            </CardContent>
          </Card>

          {/* Preferencias primero */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-[#E5EFEA]">
              <CardHeader>
                <CardTitle>Preferencias primero</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#51646A] mb-4">
                  Antes de cualquier nudge, te preguntamos:
                </p>
                <ul className="space-y-2 text-[#51646A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1">•</span>
                    <span>Tu franja preferida (Mañana/Mediodía/Tarde)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1">•</span>
                    <span>Frecuencia deseada (Baja/Media/Alta)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1">•</span>
                    <span>Quiet hours respetadas 20:30–08:00</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#E5EFEA]">
              <CardHeader>
                <CardTitle>Reglas de protección (gating)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#51646A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1">✓</span>
                    <span>Sin nudges hasta que confirmes preferencias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1">✓</span>
                    <span>Ventana 24h de WhatsApp siempre respetada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1">✓</span>
                    <span>Max 1 mensaje cada 24h, 2/semana si no respondes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0FA36B] mt-1">✓</span>
                    <span>BAJA instantánea, sin preguntas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Compa Club */}
          <Card className="border-[#0FA36B]/20 bg-white">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#0FA36B]" />
                <div className="flex-1">
                  <CardTitle>Compa Club: Ruta tibio sin presión</CardTitle>
                  <p className="text-[#51646A] mt-2">
                    ¿Aún no estás list@? Observa y pregunta sin compromiso. Señales útiles 1–2/semana (sin noches) 
                    y comunidad segura con reglas claras.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[#F7FBF9] rounded-lg">
                  <h4 className="mb-2">Canal de señales</h4>
                  <p className="text-sm text-[#51646A] mb-3">
                    Tips de finanzas personales, recordatorios de fechas clave, contenido educativo. 
                    Solo lectura, 1–2 mensajes por semana.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleClubClick('channel')}
                  >
                    Seguir Canal
                  </Button>
                </div>

                <div className="p-4 bg-[#F7FBF9] rounded-lg">
                  <h4 className="mb-2">Comunidad</h4>
                  <p className="text-sm text-[#51646A] mb-3">
                    Pregunta, comparte dudas, ayuda a otros. PII prohibida; PRIVADO disponible para casos 1-1 sensibles.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleClubClick('community')}
                    >
                      Unirme a Comunidad
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleClubClick('rules')}
                    >
                      Ver reglas
                    </Button>
                  </div>
                </div>

                <div className="p-3 bg-[#E6F7EF] border border-[#0FA36B]/20 rounded-lg">
                  <p className="text-sm">
                    💚 Sin presión, sin venta. Solo acompañamiento y claridad cuando la necesites.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
