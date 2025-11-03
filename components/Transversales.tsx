import { FileText, Activity, Clock, Accessibility, Shield, BookOpen } from 'lucide-react';

const transversalTiles = [
  {
    id: 'consents',
    icon: FileText,
    title: 'Consentimientos por capa',
    description: 'Cada permiso vive en su contexto con propósito explícito',
    href: '#',
  },
  {
    id: 'events',
    icon: Activity,
    title: 'Observabilidad sin PII',
    description: 'Telemetría completa usando eventos sin contenido personal',
    href: '#',
  },
  {
    id: '24h',
    icon: Clock,
    title: 'Cumplimiento 24h/plantillas',
    description: 'Cero mensajes fuera de ventana; plantillas pre-aprobadas',
    href: '#',
  },
  {
    id: 'a11y',
    icon: Accessibility,
    title: 'Accesibilidad e inclusión',
    description: 'Texto claro, alternativas multimodal, sin regionalisms',
    href: '#',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Seguridad/Secretos',
    description: 'KMS para cifrado, secrets en CI/CD, rotación automática',
    href: '#',
  },
  {
    id: 'trust_center',
    icon: BookOpen,
    title: 'Trust Center',
    description: 'Hub central con todas las políticas y proofs en un lugar',
    href: '#',
  },
];

export function Transversales() {
  const handleTileClick = (id: string) => {
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'transversal_tile_click', { tile: id });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Transversales: Los rieles que nos mantienen consistentes</h2>
          <p className="text-[#51646A]">
            Sistemas y prácticas que aplican en cada interacción, sin excepción.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {transversalTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <a
                key={tile.id}
                href={tile.href}
                onClick={() => handleTileClick(tile.id)}
                className="group p-6 bg-[#F7FBF9] rounded-lg border border-[#E5EFEA] hover:border-[#0FA36B] hover:shadow-md transition-all"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-white rounded-lg border border-[#E5EFEA] group-hover:border-[#0FA36B] transition-colors">
                    <Icon className="w-6 h-6 text-[#0FA36B]" />
                  </div>
                </div>
                <h3 className="mb-2 group-hover:text-[#0FA36B] transition-colors">
                  {tile.title}
                </h3>
                <p className="text-sm text-[#51646A]">{tile.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#0FA36B] mt-3 group-hover:gap-2 transition-all">
                  Ver detalles →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
