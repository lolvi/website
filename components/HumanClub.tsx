import { MessageCircle, Users, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const WHATSAPP_NUMBER = '1234567890';

export function HumanClub() {
  const handleHumanCTA = (type: string) => {
    const intent = type === 'agenda' ? 'agenda_llamada' : 'chat_humano';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_campaign=human_fastpath`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'human_cta_click', { type });
    }
  };

  const handleClubClick = (action: string) => {
    const intents: Record<string, string> = {
      channel: 'channel_follow',
      community: 'community_join',
      rules: 'community_rules',
    };
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intents[action]}%20utm_source=landing%20utm_campaign=club`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'club_click', { action });
    }
  };

  return (
    <section className="bg-[#F7FBF9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Rutas tibias: Sin presión, con presencia</h2>
          <p className="text-[#51646A]">
            ¿Prefieres ir despacio o hablar con alguien? Tenemos opciones para cada ritmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Human fast-path */}
          <Card className="border-[#E5EFEA]">
            <CardHeader>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-[#0FA36B]" />
                <div className="flex-1">
                  <CardTitle>Habla con humano</CardTitle>
                  <p className="text-[#51646A] mt-2">
                    ¿Prefieres una persona? Agenda llamada de 10 min o abre chat directo.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-[#E5EFEA]">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-[#0FA36B]" />
                    <span>Llamada programada</span>
                  </div>
                  <p className="text-sm text-[#51646A] mb-3">
                    Elige día y hora. Te llamamos puntual, 10 minutos dedicados.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHumanCTA('agenda')}
                  >
                    Agendar llamada
                  </Button>
                </div>

                <div className="p-4 bg-white rounded-lg border border-[#E5EFEA]">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-[#0FA36B]" />
                    <span>Chat con humano</span>
                  </div>
                  <p className="text-sm text-[#51646A] mb-3">
                    Escribe cuando quieras. Respondemos en office hours (L-V 09:00–18:00).
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHumanCTA('chat')}
                  >
                    Abrir chat
                  </Button>
                </div>

                <div className="flex items-start gap-2 p-3 bg-[#F7FBF9] rounded-lg">
                  <Clock className="w-5 h-5 text-[#51646A] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#51646A]">
                    Office hours: Lunes a Viernes, 09:00–18:00 (hora España)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compa Club */}
          <Card className="border-[#0FA36B]/20 bg-white">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#0FA36B]" />
                <div className="flex-1">
                  <CardTitle>Compa Club</CardTitle>
                  <p className="text-[#51646A] mt-2">
                    Observa y aprende sin compromiso. Comunidad + señales útiles.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[#F7FBF9] rounded-lg">
                  <h4 className="mb-2">📢 Canal de señales</h4>
                  <p className="text-sm text-[#51646A] mb-3">
                    Tips de finanzas, recordatorios de fechas clave, contenido educativo. 
                    1–2 mensajes/semana, solo lectura, sin noches.
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
                  <h4 className="mb-2">👥 Comunidad</h4>
                  <p className="text-sm text-[#51646A] mb-3">
                    Pregunta, comparte, ayuda. Reglas claras: PII prohibida, respeto obligatorio. 
                    PRIVADO disponible para casos sensibles 1-1.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleClubClick('community')}
                    >
                      Unirme
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
                    Sin presión de conversión. Quédate el tiempo que necesites.
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
