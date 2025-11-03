import { Button } from './ui/button';
import { Heart, Shield, BookOpen, Activity, Download, FileText, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '1234567890';

const footerLinks = [
  { id: 'pacto', label: 'Pacto de Cuidado', icon: Heart, href: '#' },
  { id: 'privacidad', label: 'Privacidad en claro', icon: Shield, href: '#' },
  { id: 'ledger', label: 'Ledger mensual', icon: BookOpen, href: '#' },
  { id: 'estado', label: 'Estado', icon: Activity, href: '#' },
  { id: 'export', label: 'Descargar/Borrar', icon: Download, href: '#' },
  { id: 'terminos', label: 'Términos', icon: FileText, href: '#' },
];

export function ConversionFooterV2() {
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
      <section className="bg-compa-green py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-white mb-8 leading-[1] tracking-tight">
            LISTO PARA<br />
            PROBAR
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Tú decides el ritmo. Sin presión, sin sorpresas.<br />
            Solo calma con prueba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => handleWAClick('cta_empezar')}
              className="bg-white text-compa-green hover:bg-white/95 text-lg px-8 py-6 h-auto shadow-lg"
            >
              Abrir en WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleWAClick('preguntas_footer')}
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Tengo preguntas
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            Quiet hours 20:30–08:00 · Respuesta en tu franja preferida
          </p>
        </div>
      </section>

      {/* Trust links - solid cards */}
      <footer className="bg-[#FFFCF5] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleTrustLinkClick(link.id)}
                  className="bg-white rounded-xl p-6 border-2 border-compa-neutral-light hover:border-compa-green transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-compa-green-light rounded-lg p-3 group-hover:bg-compa-green transition-all">
                      <Icon className="w-5 h-5 text-compa-green group-hover:text-white" />
                    </div>
                    <span className="text-compa-neutral-dark group-hover:text-compa-green">
                      {link.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="border-t-2 border-compa-neutral-light pt-8">
            <div className="text-center space-y-4">
              <p className="text-compa-neutral-dark">
                <strong>Compa</strong> · Cuidado financiero con respeto
              </p>
              <p className="text-compa-neutral-mid text-sm">
                Octubre 2025 · Made with care · Siempre mejorando
              </p>
              <div className="flex justify-center gap-8 text-sm text-compa-neutral-mid">
                <a href="#" className="hover:text-compa-green">Twitter</a>
                <a href="#" className="hover:text-compa-green">LinkedIn</a>
                <a href="#" className="hover:text-compa-green">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
