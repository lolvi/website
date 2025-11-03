import { BookOpen, Activity, BarChart3, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function EvidenciasVivas() {
  const handleWidgetClick = (widget: string) => {
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', `live_${widget}_click`);
    }
  };

  // Mock data - in production, this would come from API
  const ledgerEntries = [
    {
      date: '2025-10-31',
      title: 'TTL automático implementado',
      description: 'Datos de perfil ahora expiran a 30 días; eventos a 90 días',
    },
    {
      date: '2025-10-15',
      title: 'Export JSON v1.0 lanzado',
      description: 'Nueva funcionalidad de descarga completa con formato estructurado',
    },
  ];

  const systemStatus = {
    status: 'operational', // operational | degraded | outage
    services: [
      { name: 'WhatsApp Bot', status: 'up' },
      { name: 'API Backend', status: 'up' },
      { name: 'Ledger Público', status: 'up' },
      { name: 'Export/Delete', status: 'up' },
    ],
  };

  const kpis = {
    optOutRate: { target: 0.5, actual: 0.3 },
    exportDeleteSLA: { target: '24h', actual: '6h' },
    piiIncidents: { target: 0, actual: 0 },
  };

  return (
    <section className="bg-[#F7FBF9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Evidencias vivas: Proof it&apos;s alive</h2>
          <p className="text-[#51646A]">
            Datos en tiempo real y actualizaciones mensuales. No promesas, hechos verificables.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Ledger Extract */}
          <Card className="border-[#E5EFEA] hover:border-[#0FA36B] transition-colors cursor-pointer"
                onClick={() => handleWidgetClick('ledger')}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-[#0FA36B]" />
                <CardTitle className="text-lg">Ledger mensual</CardTitle>
              </div>
              <p className="text-sm text-[#51646A]">Últimas 2 entradas</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ledgerEntries.map((entry, idx) => (
                  <div key={idx} className="pb-4 border-b border-[#E5EFEA] last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-xs text-[#51646A]">{entry.date}</span>
                      <CheckCircle className="w-4 h-4 text-[#12805C] flex-shrink-0" />
                    </div>
                    <p className="mb-1">{entry.title}</p>
                    <p className="text-sm text-[#51646A]">{entry.description}</p>
                  </div>
                ))}
              </div>
              <a href="#" className="text-sm text-[#0FA36B] hover:underline inline-flex items-center gap-1 mt-4">
                Ver Ledger completo →
              </a>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="border-[#E5EFEA] hover:border-[#0FA36B] transition-colors cursor-pointer"
                onClick={() => handleWidgetClick('status')}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-[#0FA36B]" />
                <CardTitle className="text-lg">Estado de sistemas</CardTitle>
              </div>
              <Badge
                variant="outline"
                className="w-fit bg-[#E6F7EF] text-[#12805C] border-[#12805C]/20"
              >
                ✓ Operational
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {systemStatus.services.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm">{service.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#12805C] rounded-full"></div>
                      <span className="text-xs text-[#51646A]">UP</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="text-sm text-[#0FA36B] hover:underline inline-flex items-center gap-1 mt-4">
                Ver página de estado →
              </a>
            </CardContent>
          </Card>

          {/* KPIs de confianza */}
          <Card className="border-[#E5EFEA] hover:border-[#0FA36B] transition-colors cursor-pointer"
                onClick={() => handleWidgetClick('kpis')}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-[#0FA36B]" />
                <CardTitle className="text-lg">KPIs de confianza</CardTitle>
              </div>
              <p className="text-sm text-[#51646A]">Octubre 2025</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Opt-out por nudge</span>
                    <Badge variant="outline" className="bg-[#E6F7EF] text-[#12805C] border-[#12805C]/20">
                      ✓ {kpis.optOutRate.actual}%
                    </Badge>
                  </div>
                  <div className="text-xs text-[#51646A]">Target: &lt;{kpis.optOutRate.target}%</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">SLA Export/Delete</span>
                    <Badge variant="outline" className="bg-[#E6F7EF] text-[#12805C] border-[#12805C]/20">
                      ✓ {kpis.exportDeleteSLA.actual}
                    </Badge>
                  </div>
                  <div className="text-xs text-[#51646A]">Target: &lt;{kpis.exportDeleteSLA.target}</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Incidentes PII públicos</span>
                    <Badge variant="outline" className="bg-[#E6F7EF] text-[#12805C] border-[#12805C]/20">
                      ✓ {kpis.piiIncidents.actual}
                    </Badge>
                  </div>
                  <div className="text-xs text-[#51646A]">Target: {kpis.piiIncidents.target}</div>
                </div>
              </div>
              <a href="#" className="text-sm text-[#0FA36B] hover:underline inline-flex items-center gap-1 mt-4">
                Ver métricas históricas →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
