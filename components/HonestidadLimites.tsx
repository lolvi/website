import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function HonestidadLimites() {
  const handleDetailClick = () => {
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'limits_detail_click');
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="border-[#9E6C00]/30 bg-[#FFF4E6]">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-white rounded-lg border border-[#9E6C00]/20">
                  <AlertTriangle className="w-6 h-6 text-[#9E6C00]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-3">Honestidad de límites</h3>
                <p className="text-[#0D1B1E] mb-4">
                  <strong>WhatsApp Business API no es cifrado extremo a extremo (E2E) hacia nuestros sistemas.</strong> 
                  {' '}Los mensajes pasan por servidores de Meta antes de llegar a nosotros.
                </p>
                
                <div className="mb-4">
                  <p className="mb-2">Cómo compensamos este límite:</p>
                  <ul className="space-y-2 text-[#0D1B1E]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0FA36B] mt-1">✓</span>
                      <span><strong>Minimización:</strong> Solo pedimos nombre y categoría. Sin datos sensibles por WhatsApp.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0FA36B] mt-1">✓</span>
                      <span><strong>TTL automático:</strong> Datos expiran a 30/90 días. No almacenamiento perpetuo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0FA36B] mt-1">✓</span>
                      <span><strong>Redacción:</strong> Contenido sensible se redacta en logs y analytics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0FA36B] mt-1">✓</span>
                      <span><strong>Cifrado por registro:</strong> En nuestra DB, cada registro cifrado con KMS.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0FA36B] mt-1">✓</span>
                      <span><strong>Verificación pública:</strong> Ledger mensual documenta nuestras prácticas.</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="#"
                  onClick={handleDetailClick}
                  className="text-[#0FA36B] hover:underline inline-flex items-center gap-1"
                >
                  Privacidad en claro: límites y cómo los mitigamos →
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
