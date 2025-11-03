import { Clock, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const WHATSAPP_NUMBER = '1234567890';

const cuidadoCards = [
  {
    id: 'cadencia',
    icon: Clock,
    title: 'Cadencia y horarios',
    content: 'Nunca de noche (20:30–08:00). 1 nudge/24h; máx. 2/sem sin respuesta.',
    linkText: 'Carta de cadencia',
    linkHref: '#',
  },
  {
    id: 'consents',
    icon: CheckCircle,
    title: 'Consentimiento por capas',
    content: 'WA, email (solo Bitácora/Pack), recordatorios, Club, DM — cada uno con propósito y revocable.',
    linkText: 'Ver textos exactos de consentimiento',
    linkHref: '#',
  },
  {
    id: 'humano',
    icon: MessageCircle,
    title: 'Rutas a humano (AGENTE/PRIVADO)',
    content: 'Humano en office hours; PRIVADO para casos sensibles desde Comunidad.',
    hasButtons: true,
  },
  {
    id: 'reparacion',
    icon: AlertCircle,
    title: 'Reparación y transparencia',
    content: 'Si fallamos, lo reconocemos, explicamos y reparamos; post-mortems cuando aplique.',
    linkText: 'Ver protocolo',
    linkHref: '#',
  },
];

export function PilarCuidado() {
  const handleLinkClick = (id: string) => {
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'care_card_link', { card: id });
    }
  };

  const handleHumanCTA = (type: string) => {
    const intent = type === 'agenda' ? 'agenda_llamada' : 'chat_humano';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_campaign=care_humano`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'human_cta_click', { type });
    }
  };

  return (
    <section className="bg-[#F7FBF9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Cuidado: Nunca presión, siempre respeto</h2>
          <p className="text-[#51646A]">
            Tú defines el ritmo. Nosotros respetamos tus horarios, preferencias y necesidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cuidadoCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.id} className="border-[#E5EFEA]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#0FA36B]/10 rounded-lg">
                      <Icon className="w-5 h-5 text-[#0FA36B]" />
                    </div>
                    <CardTitle className="flex-1">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#51646A] mb-4">{card.content}</p>
                  {card.hasButtons ? (
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleHumanCTA('agenda')}
                      >
                        Agendar llamada
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleHumanCTA('chat')}
                      >
                        Chat humano
                      </Button>
                    </div>
                  ) : (
                    <a
                      href={card.linkHref}
                      onClick={() => handleLinkClick(card.id)}
                      className="text-[#0FA36B] hover:underline inline-flex items-center gap-1"
                    >
                      {card.linkText}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
