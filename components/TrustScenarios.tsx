import { MessageSquare, Clock, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const scenarios = [
  {
    id: 'night-message',
    title: '22:00 — Tienes una pregunta urgente',
    icon: Clock,
    userAction: 'Escribes a Compa por WhatsApp a las 22:00',
    systemResponse: [
      {
        pillar: 'Care',
        action: 'No te respondo inmediatamente (quiet hours activas)',
        proof: 'Regla: 20:30–08:00 sin excepciones',
      },
      {
        pillar: 'Privacy',
        action: 'Tu mensaje entra en cola cifrada sin logging de contenido',
        proof: 'Evento: message_received (sin PII)',
      },
      {
        pillar: 'Agency',
        action: 'Te confirmo recepción y te pregunto tu franja preferida (Mañana/Mediodía/Tarde)',
        proof: 'Preferencia guardada localmente, respeto en próxima respuesta',
      },
    ],
    outcome: 'Respuesta a las 08:15 o en tu franja elegida. Sin ansiedad, sin presión.',
    metrics: ['quiet_hours_respected: true', 'response_delay_hours: 10.25', 'user_control: full'],
  },
  {
    id: 'data-request',
    title: 'Quieres ver qué datos tenemos',
    icon: Shield,
    userAction: 'Escribes "Export" desde WhatsApp',
    systemResponse: [
      {
        pillar: 'Privacy',
        action: 'OTP enviado a tu número para verificación',
        proof: 'Autenticación requerida antes de acceso',
      },
      {
        pillar: 'Care',
        action: 'JSON generado en <6h (SLA <24h)',
        proof: 'Métrica octubre: promedio 4.2h',
      },
      {
        pillar: 'Agency',
        action: 'Recibes link privado con timestamp, fuentes, propósitos, TTLs',
        proof: 'Formato legible: JSON estructurado + explicación',
      },
    ],
    outcome: 'Portabilidad completa. Mismo proceso para "Delete" (irreversible, con confirmación).',
    metrics: ['export_sla_met: true', 'avg_delivery_hours: 4.2', 'user_requests_oct: 12'],
  },
  {
    id: 'too-many-messages',
    title: 'Sientes que son muchos mensajes',
    icon: MessageSquare,
    userAction: 'Escribes "Pausar" o cambias tus preferencias',
    systemResponse: [
      {
        pillar: 'Agency',
        action: 'Pausar 7 o 30 días sin preguntas de retención',
        proof: 'Control inmediato, sin fricción',
      },
      {
        pillar: 'Care',
        action: 'O ajustas frecuencia (Baja/Media/Alta) y franja horaria',
        proof: 'Cambios aplicados a próximo mensaje',
      },
      {
        pillar: 'Privacy',
        action: 'Eventos registrados sin contenido (pref_changed, snooze_7d)',
        proof: 'Telemetría agregada, sin PII',
      },
    ],
    outcome: 'Control total. Puedes reactivar cuando quieras desde Compa Club.',
    metrics: ['snooze_rate: 8%', 'return_rate_after_snooze: 76%', 'avg_snooze_days: 14'],
  },
  {
    id: 'want-out',
    title: 'Te arrepientes y quieres salir',
    icon: AlertCircle,
    userAction: 'Escribes "BAJA"',
    systemResponse: [
      {
        pillar: 'Agency',
        action: 'Baja instantánea, sin confirmación extra',
        proof: 'Intent global prioritario',
      },
      {
        pillar: 'Care',
        action: 'Confirmación clara: "Listo. Puedes volver cuando quieras."',
        proof: 'Sin dark patterns de retención',
      },
      {
        pillar: 'Privacy',
        action: 'Tus datos siguen disponibles para Export/Delete hasta TTL',
        proof: 'Autonomía sobre datos independiente de servicio',
      },
    ],
    outcome: 'Salida limpia. Puedes volver sin prejuicio. Export/Delete siguen disponibles.',
    metrics: ['opt_out_rate: 0.3%', 'return_rate: 22%', 'avg_days_to_return: 45'],
  },
];

export function TrustScenarios() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Escenarios reales: Los tres pilares trabajando juntos</h2>
          <p className="text-[#51646A] max-w-3xl">
            La confianza no es una característica. Es lo que pasa cuando Cuidado + Privacidad + Agencia 
            operan al mismo tiempo, en cada interacción.
          </p>
        </div>

        <Tabs defaultValue={scenarios[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent p-0">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <TabsTrigger
                  key={scenario.id}
                  value={scenario.id}
                  className="flex flex-col items-start p-4 h-auto data-[state=active]:bg-[#F7FBF9] data-[state=active]:border-[#0FA36B] border rounded-lg"
                >
                  <Icon className="w-5 h-5 text-[#0FA36B] mb-2" />
                  <span className="text-sm text-left">{scenario.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {scenarios.map((scenario) => (
            <TabsContent key={scenario.id} value={scenario.id} className="mt-6">
              <Card className="border-[#E5EFEA]">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* User action */}
                    <div className="bg-[#F7FBF9] p-4 rounded-lg">
                      <p className="text-sm text-[#51646A] mb-1">Usuario:</p>
                      <p>{scenario.userAction}</p>
                    </div>

                    {/* System response by pillar */}
                    <div className="space-y-4">
                      <p className="text-sm text-[#51646A]">Cómo responde Compa (paso a paso):</p>
                      {scenario.systemResponse.map((response, idx) => (
                        <div key={idx} className="border-l-4 border-[#0FA36B] pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-0.5 bg-[#0FA36B]/10 text-[#0FA36B] rounded border border-[#0FA36B]/20">
                              {response.pillar}
                            </span>
                            <span className="text-sm">{response.action}</span>
                          </div>
                          <p className="text-xs text-[#51646A] font-mono">
                            Proof: {response.proof}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className="bg-[#E6F7EF] p-4 rounded-lg border border-[#12805C]/20">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#12805C] flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="mb-2">{scenario.outcome}</p>
                          <div className="flex flex-wrap gap-2">
                            {scenario.metrics.map((metric, idx) => (
                              <span key={idx} className="text-xs font-mono text-[#12805C] bg-white px-2 py-1 rounded border border-[#12805C]/20">
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom summary */}
        <div className="mt-12 p-6 bg-[#F7FBF9] rounded-lg border border-[#E5EFEA]">
          <h3 className="mb-4 text-center">Por qué estos escenarios importan</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="mb-2"><strong className="text-[#0FA36B]">Sin Cuidado:</strong></p>
              <p className="text-[#51646A]">
                Mensajes a las 22:00, presión constante, dark patterns en cancelación.
                Usuario se siente acosado.
              </p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-[#0FA36B]">Sin Privacidad:</strong></p>
              <p className="text-[#51646A]">
                Datos retenidos perpetuamente, imposible exportar/borrar, logs con PII, 
                sin visibilidad de qué guardan.
              </p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-[#0FA36B]">Sin Agencia:</strong></p>
              <p className="text-[#51646A]">
                No puedes pausar, cambiar preferencias requiere email a soporte, 
                BAJA te lleva a form con 5 preguntas.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-[#0D1B1E]">
            <strong>Con los tres juntos:</strong> Usuario tiene calma, control y confianza verificable. 
            Eso es Compa.
          </p>
        </div>
      </div>
    </section>
  );
}
