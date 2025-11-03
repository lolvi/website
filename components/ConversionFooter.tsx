import { Button } from './ui/button';
import { Heart, Shield, BookOpen, Activity, Download, FileText } from 'lucide-react';

const WHATSAPP_NUMBER = '1234567890';

const footerLinks = [
  { id: 'pacto', label: 'Pacto de Cuidado', icon: Heart, href: '#' },
  { id: 'privacidad', label: 'Privacidad en claro', icon: Shield, href: '#' },
  { id: 'ledger', label: 'Ledger mensual', icon: BookOpen, href: '#' },
  { id: 'estado', label: 'Estado', icon: Activity, href: '#' },
  { id: 'export', label: 'Descargar/Borrar', icon: Download, href: '#' },
  { id: 'terminos', label: 'Términos', icon: FileText, href: '#' },
];

export function ConversionFooter() {
  const handleWAClick = (intent: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_campaign=footer`;
    window.open(url, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'footer_wa_cta_click', { intent });
    }
  };

  const handleTrustLinkClick = (id: string) => {
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'footer_trust_click', { link: id });
    }
  };

  return (
    <>
      {/* Final conversion */}
      <section className="bg-[#F7FBF9] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">¿List@ para probar en 60 segundos?</h2>
          <p className="text-[#51646A] mb-8 max-w-2xl mx-auto">
            Tú decides el ritmo. Sin presión, sin sorpresas. Solo calma con prueba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => handleWAClick('cta_empezar')}
              className="bg-[#0FA36B] hover:bg-[#0D8A5A] text-white"
            >
              Abrir en WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleWAClick('ver_demo_bitacora')}
            >
              Ver demo en 60s
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleWAClick('channel_follow')}
            >
              Unirme a Compa Club
            </Button>
          </div>

          <p className="text-sm text-[#51646A]">
            O tómate tu tiempo. Las pruebas y controles están aquí cuando las necesites.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B1E] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#0FA36B]" fill="currentColor" />
              <span className="text-xl">Compa</span>
            </div>
            <p className="text-white/70 max-w-md">
              Calma con prueba. Privacidad con cuidado.
              <br />
              Cuidamos tus pagos y tu autonomía.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="mb-4 text-sm text-white/70">Trust Center:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleTrustLinkClick(link.id)}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors text-center"
                  >
                    <Icon className="w-5 h-5 text-[#0FA36B]" />
                    <span className="text-sm text-white/90">{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="text-sm text-white/50 text-center">
              <p className="mb-2">
                © 2025 Compa. Hecho con cuidado y respeto.
              </p>
              <p>
                No vendemos tus datos. No noches. No presión. Solo acompañamiento honesto.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
