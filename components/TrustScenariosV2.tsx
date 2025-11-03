import { MessageSquare, Clock, Shield, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const scenarios = [
  {
    id: 'night-message',
    title: '22:00 — Pregunta urgente',
    icon: Clock,
    userAction: 'Escribes a Compa por WhatsApp a las 22:00',
    systemResponse: [
      {
        pillar: 'Cuidado',
        color: 'text-[#4A6B52]',
        bgColor: 'bg-[#4A6B52]',
        action: 'No te respondo inmediatamente (quiet hours activas)',
        proof: 'Regla: 20:30–08:00 sin excepciones',
      },
      {
        pillar: 'Privacidad',
        color: 'text-compa-green',
        bgColor: 'bg-compa-green',
        action: 'Tu mensaje entra en cola cifrada sin logging de contenido',
        proof: 'Evento: message_received (sin PII)',
      },
      {
        pillar: 'Agencia',
        color: 'text-compa-blue',
        bgColor: 'bg-compa-blue',
        action: 'Te confirmo recepción y te pregunto tu franja preferida',
        proof: 'Preferencia guardada localmente',
      },
    ],
    outcome: 'Respuesta a las 08:15 o en tu franja elegida. Sin ansiedad, sin presión.',
    metrics: ['quiet_hours_respected: true', 'response_delay_hours: 10.25'],
  },
  {
    id: 'data-request',
    title: 'Exportar datos',
    icon: Shield,
    userAction: 'Escribes "Export" desde WhatsApp',
    systemResponse: [
      {
        pillar: 'Privacidad',
        color: 'text-compa-green',
        bgColor: 'bg-compa-green',
        action: 'OTP enviado a tu número para verificación',
        proof: 'Autenticación requerida antes de acceso',
      },
      {
        pillar: 'Cuidado',
        color: 'text-[#4A6B52]',
        bgColor: 'bg-[#4A6B52]',
        action: 'JSON generado en <6h (SLA <24h)',
        proof: 'Métrica octubre: promedio 4.2h',
      },
      {
        pillar: 'Agencia',
        color: 'text-compa-blue',
        bgColor: 'bg-compa-blue',
        action: 'Recibes link privado con timestamp, fuentes, propósitos, TTLs',
        proof: 'Formato legible: JSON + explicación',
      },
    ],
    outcome: 'Portabilidad completa. Mismo proceso para "Delete" (irreversible, con confirmación).',
    metrics: ['export_sla_met: true', 'avg_delivery_hours: 4.2'],
  },
  {
    id: 'too-many-messages',
    title: 'Son muchos mensajes',
    icon: MessageSquare,
    userAction: 'Escribes "Pausar" o cambias tus preferencias',
    systemResponse: [
      {
        pillar: 'Agencia',
        color: 'text-compa-blue',
        bgColor: 'bg-compa-blue',
        action: 'Pausar 7 o 30 días sin preguntas de retención',
        proof: 'Control inmediato, sin fricción',
      },
      {
        pillar: 'Cuidado',
        color: 'text-[#4A6B52]',
        bgColor: 'bg-[#4A6B52]',
        action: 'O ajustas frecuencia (Baja/Media/Alta) y franja horaria',
        proof: 'Cambios aplicados a próximo mensaje',
      },
      {
        pillar: 'Privacidad',
        color: 'text-compa-green',
        bgColor: 'bg-compa-green',
        action: 'Eventos registrados sin contenido (pref_changed, snooze_7d)',
        proof: 'Telemetría agregada, sin PII',
      },
    ],
    outcome: 'Control total. Puedes reactivar cuando quieras desde Compa Club.',
    metrics: ['snooze_rate: 8%', 'return_rate_after_snooze: 76%'],
  },
  {
    id: 'want-out',
    title: 'Quieres salir',
    icon: AlertCircle,
    userAction: 'Escribes "BAJA"',
    systemResponse: [
      {
        pillar: 'Agencia',
        color: 'text-compa-blue',
        bgColor: 'bg-compa-blue',
        action: 'Baja instantánea, sin confirmación extra',
        proof: 'Intent global prioritario',
      },
      {
        pillar: 'Cuidado',
        color: 'text-[#4A6B52]',
        bgColor: 'bg-[#4A6B52]',
        action: 'Confirmación clara: "Listo. Puedes volver cuando quieras."',
        proof: 'Sin dark patterns de retención',
      },
      {
        pillar: 'Privacidad',
        color: 'text-compa-green',
        bgColor: 'bg-compa-green',
        action: 'Tus datos siguen disponibles para Export/Delete hasta TTL',
        proof: 'Autonomía sobre datos independiente de servicio',
      },
    ],
    outcome: 'Salida limpia. Puedes volver sin prejuicio. Export/Delete siguen disponibles.',
    metrics: ['opt_out_rate: 0.3%', 'return_rate: 22%'],
  },
];

export function TrustScenariosV2() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-compa-green-dark mb-6 leading-[1] tracking-tight text-center">
            ESCENARIOS<br />
            REALES
          </h2>
          <p className="text-compa-neutral-mid text-lg text-center max-w-3xl mx-auto mb-16">
            La confianza no es una característica. Es lo que pasa cuando Cuidado + Privacidad + Agencia 
            operan al mismo tiempo, en cada interacción.
          </p>

          <Tabs defaultValue={scenarios[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-3 bg-transparent p-0 h-auto mb-8">
              {scenarios.map((scenario) => {
                const Icon = scenario.icon;
                return (
                  <TabsTrigger
                    key={scenario.id}
                    value={scenario.id}
                    className="flex flex-col items-start p-6 h-auto bg-white border-2 border-compa-neutral-light rounded-xl data-[state=active]:bg-compa-green data-[state=active]:border-compa-green data-[state=active]:text-white hover:border-compa-green/50 transition-all"
                  >
                    <Icon className="w-6 h-6 mb-3" />
                    <span className="text-sm text-left">{scenario.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {scenarios.map((scenario) => (
              <TabsContent key={scenario.id} value={scenario.id} className="mt-0">
                <div className="space-y-6">
                  {/* User action - solid card */}
                  <div className="bg-[#FFFCF5] p-6 rounded-2xl border-2 border-compa-neutral-light">
                    <p className="text-sm text-compa-neutral-mid mb-2 uppercase tracking-wider">Usuario</p>
                    <p className="text-compa-neutral-dark text-lg">{scenario.userAction}</p>
                  </div>

                  {/* System response by pillar - solid cards */}
                  <div className="space-y-4">
                    <p className="text-sm text-compa-neutral-mid uppercase tracking-wider">Cómo responde Compa</p>
                    {scenario.systemResponse.map((response, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-6 border-4 border-compa-neutral-light">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`${response.bgColor} rounded-lg px-4 py-2 text-white text-sm flex-shrink-0`}>
                            {response.pillar}
                          </div>
                          <p className="text-compa-neutral-dark flex-1">{response.action}</p>
                        </div>
                        <p className="text-sm text-compa-neutral-mid font-mono bg-compa-neutral-light/30 px-4 py-2 rounded-lg">
                          Proof: {response.proof}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Outcome - solid card */}
                  <div className="bg-compa-green-light rounded-2xl p-6 border-4 border-compa-green">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-compa-green flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-compa-green-dark mb-4">{scenario.outcome}</p>
                        <div className="flex flex-wrap gap-2">
                          {scenario.metrics.map((metric, idx) => (
                            <span key={idx} className="text-xs font-mono text-compa-green bg-white px-3 py-2 rounded-lg border-2 border-compa-green/20">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Bottom summary - solid cards */}
          <div className="mt-16 space-y-6">
            <h3 className="text-compa-green-dark text-center mb-8">
              Por qué estos escenarios importan
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 border-4 border-[#4A6B52]/20">
                <p className="mb-4 text-[#4A6B52]">Sin Cuidado</p>
                <p className="text-compa-neutral-mid leading-relaxed text-sm">
                  Mensajes a las 22:00, presión constante, dark patterns en cancelación.
                  Usuario se siente acosado.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border-4 border-compa-green/20">
                <p className="mb-4 text-compa-green">Sin Privacidad</p>
                <p className="text-compa-neutral-mid leading-relaxed text-sm">
                  Datos retenidos perpetuamente, imposible exportar/borrar, logs con PII, 
                  sin visibilidad de qué guardan.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border-4 border-compa-blue/20">
                <p className="mb-4 text-compa-blue">Sin Agencia</p>
                <p className="text-compa-neutral-mid leading-relaxed text-sm">
                  No puedes pausar, cambiar preferencias requiere email a soporte, 
                  BAJA te lleva a form con 5 preguntas.
                </p>
              </div>
            </div>
            <div className="bg-compa-green rounded-2xl p-8 border-4 border-compa-green-dark text-center">
              <p className="text-white text-lg">
                <strong>Con los tres juntos:</strong> Usuario tiene calma, control y confianza verificable. 
                Eso es Compa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
