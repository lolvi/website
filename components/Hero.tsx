import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrustBadge, CommitmentText, ControlText, ExplanationText, TrustMetric } from './TrustBadge';
import bitacoraDemo from 'figma:asset/c765eb6b50847e17991d257dd88c75da18a926e4.png';

const WHATSAPP_NUMBER = '1234567890'; // Replace with actual number


export function Hero() {
  const handleWAClick = (intent: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${intent}%20utm_source=landing%20utm_medium=web%20utm_campaign=hero`;
    window.open(url, '_blank');
    
    // Track analytics
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'hero_wa_cta_click', { intent });
    }
  };

  const handleTrustToolbarClick = (id: string) => {
    // Track analytics
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'trust_toolbar_click', { item: id });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          {/* Main headline - commitment */}
          <div className="space-y-4">
            <h1 className="mb-0">
              Calma con prueba.<br />Privacidad con cuidado.
            </h1>
            <ExplanationText>
              Yo cuido tus pagos; tú controlas tus datos.
            </ExplanationText>
          </div>
          
          {/* Core commitments with trust hierarchy */}
          <div className="space-y-4">
            <CommitmentText verified>
              Nunca te escribimos entre las 20:30 y las 08:00
            </CommitmentText>
            <div className="flex flex-wrap gap-2 ml-6">
              <TrustMetric label="quiet hours" value="20:30–08:00" type="commitment" />
              <TrustMetric label="máx nudge" value="1/24h" type="commitment" />
            </div>

            <CommitmentText verified>
              Tus datos expiran automáticamente. Exporta o borra en cualquier momento.
            </CommitmentText>
            <div className="flex flex-wrap gap-2 ml-6">
              <TrustMetric label="perfil" value="30 días" unit="TTL" type="commitment" />
              <TrustMetric label="eventos" value="90 días" unit="TTL" type="commitment" />
              <TrustMetric label="Export/Delete" value="<6h" unit="SLA" type="commitment" />
            </div>

            <ControlText>
              BAJA, Pausar, AGENTE y PRIVADO siempre visibles. Tú decides.
            </ControlText>
            <div className="flex flex-wrap gap-2 ml-6">
              <TrustMetric label="opt-out rate" value="0.3%" context="oct 2025" type="control" />
              <TrustMetric label="PII incidents" value="0" context="oct 2025" type="control" />
            </div>
          </div>

          {/* Trust Toolbar - clickable proofs */}
          <div className="pt-6 border-t border-compa-neutral-light">
            <p className="text-sm text-compa-neutral-mid mb-3">Verifica por ti mismo:</p>
            <div className="flex flex-wrap gap-3">
              <TrustBadge
                type="proof"
                label="Pacto de Cuidado"
                proofLink="#pacto"
                onClick={() => handleTrustToolbarClick('pacto')}
              />
              <TrustBadge
                type="proof"
                label="Privacy Ledger"
                value="octubre 2025"
                proofLink="#ledger"
                onClick={() => handleTrustToolbarClick('ledger')}
              />
              <TrustBadge
                type="live"
                label="Sistema"
                value="Operativo"
                status="live"
                proofLink="#status"
                onClick={() => handleTrustToolbarClick('status')}
              />
              <TrustBadge
                type="control"
                label="Descargar mis datos"
                proofLink="#export"
                onClick={() => handleTrustToolbarClick('export')}
              />
            </div>
          </div>

          {/* CTAs - low pressure */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => handleWAClick('cta_empezar')}
              className="bg-compa-green hover:bg-compa-green-dark text-white shadow-sm"
              size="lg"
            >
              Abrir en WhatsApp
            </Button>
            <Button
              variant="outline"
              onClick={() => handleWAClick('ver_demo_bitacora')}
              className="border-compa-neutral-light hover:bg-compa-neutral-light/30"
              size="lg"
            >
              Ver demo en 60s
            </Button>
          </div>
          
          <p className="text-xs text-compa-neutral-mid">
            Sin compromiso. Puedes escribir &quot;BAJA&quot; en cualquier momento.
          </p>
        </div>

        {/* Right: Visual */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={bitacoraDemo}
              alt="Bitácora demo mostrando vista de cuenta de ahorro sin datos personales"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
