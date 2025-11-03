import { Shield, Lock, Clock, Sliders } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function RailsVisualization() {
  return (
    <section className="py-16 md:py-24 bg-[#F7FBF9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Los rieles: Cómo limitamos a nuestros agentes</h2>
          <p className="text-[#51646A] max-w-3xl">
            Los agentes (bot, orquestador, automatizaciones) operan CON autonomía limitada. 
            No pueden saltarse cuidado, privacidad o tus preferencias. Son <strong>rieles técnicos</strong>, no buenas intenciones.
          </p>
        </div>

        <div className="space-y-6">
          {/* Rail 1: Consent-first */}
          <Card className="border-[#0FA36B]/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0FA36B]/10 rounded">
                  <Shield className="w-5 h-5 text-[#0FA36B]" />
                </div>
                <CardTitle className="text-lg">Riel 1: Consent-first gating</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-[#51646A] mb-3">
                    <strong className="text-[#0D1B1E]">Regla técnica:</strong> Ningún agente puede enviar mensaje 
                    sin consent explícito + preferencias configuradas.
                  </p>
                  <div className="bg-[#0D1B1E] text-white p-3 rounded text-xs font-mono overflow-x-auto">
                    <div className="text-[#0FA36B]">{'//'} Orchestrator DO check</div>
                    <div>if (!lead.consent_wa || !lead.prefs_set) {'{'}</div>
                    <div className="pl-4">return block_nudge();</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm"><strong>✓ Permitido:</strong> Responder a mensaje del usuario (24h window)</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm"><strong>✓ Permitido:</strong> Plantilla aprobada si consent_reminder=true</p>
                  </div>
                  <div className="p-3 bg-[#FEF3F2] rounded border border-[#B00020]/20">
                    <p className="text-sm"><strong>✗ Bloqueado:</strong> Cualquier nudge proactivo sin consent+prefs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rail 2: Quiet hours + cadence */}
          <Card className="border-[#0FA36B]/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0FA36B]/10 rounded">
                  <Clock className="w-5 h-5 text-[#0FA36B]" />
                </div>
                <CardTitle className="text-lg">Riel 2: Quiet hours + cadence enforcement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-[#51646A] mb-3">
                    <strong className="text-[#0D1B1E]">Regla técnica:</strong> Orquestador verifica hora local 
                    y última interacción antes de encolar mensaje.
                  </p>
                  <div className="bg-[#0D1B1E] text-white p-3 rounded text-xs font-mono overflow-x-auto">
                    <div className="text-[#0FA36B]">{'//'} Temporal gating</div>
                    <div>const now = localTime(lead.timezone);</div>
                    <div>if (now &gt;= 20.5 || now &lt; 8.0) {'{'}</div>
                    <div className="pl-4">return schedule_for_window();</div>
                    <div>{'}'}</div>
                    <div className="mt-2">if (hours_since_last &lt; 24) {'{'}</div>
                    <div className="pl-4">return block_nudge();</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm mb-1"><strong>Quiet hours:</strong> 20:30–08:00</p>
                    <p className="text-xs text-[#51646A]">Cumplimiento medido: 100% (target 100%)</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm mb-1"><strong>Máximo nudges:</strong> 1 cada 24h; 2/semana sin respuesta</p>
                    <p className="text-xs text-[#51646A]">Violaciones octubre: 0</p>
                  </div>
                  <div className="p-3 bg-[#E6F7EF] rounded border border-[#0FA36B]/20">
                    <p className="text-sm"><strong>Fallback:</strong> Si fuera de ventana → encola para franja preferida</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rail 3: Privacy by default */}
          <Card className="border-[#0FA36B]/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0FA36B]/10 rounded">
                  <Lock className="w-5 h-5 text-[#0FA36B]" />
                </div>
                <CardTitle className="text-lg">Riel 3: Privacy by default (minimización + redacción)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-[#51646A] mb-3">
                    <strong className="text-[#0D1B1E]">Regla técnica:</strong> Intent Agent y logs no persisten 
                    contenido de usuario; solo IDs de intent y payloads mínimos.
                  </p>
                  <div className="bg-[#0D1B1E] text-white p-3 rounded text-xs font-mono overflow-x-auto">
                    <div className="text-[#0FA36B]">{'//'} Intent classification</div>
                    <div>const intent = classify(message);</div>
                    <div className="text-[#0FA36B]">{'//'} ✓ Log esto:</div>
                    <div>log.info({'{'} intent_id, wa_id_hash {'}'});</div>
                    <div className="text-[#B00020]">{'//'} ✗ NUNCA esto:</div>
                    <div className="line-through">log.info({'{'} message.text {'}'}); {'//'} PII</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm mb-1"><strong>Datos mínimos Fase 1:</strong> Nombre, categoría, email opcional</p>
                    <p className="text-xs text-[#51646A]">Sin factura, sin documento, sin dirección</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm mb-1"><strong>Telemetría:</strong> Solo eventos (message_sent, consent_ok, state_changed)</p>
                    <p className="text-xs text-[#51646A]">Sin contenido, hash salteado de phone para analítica</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm mb-1"><strong>TTL automático:</strong> 30 días perfil, 90 días eventos</p>
                    <p className="text-xs text-[#51646A]">Job semanal de purga; cascade delete en borrado manual</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rail 4: User override always */}
          <Card className="border-[#0FA36B]/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0FA36B]/10 rounded">
                  <Sliders className="w-5 h-5 text-[#0FA36B]" />
                </div>
                <CardTitle className="text-lg">Riel 4: User override (agencia siempre superior)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-[#51646A] mb-3">
                    <strong className="text-[#0D1B1E]">Regla técnica:</strong> BAJA/Pausar/AGENTE son intents globales 
                    con prioridad máxima. Interrumpen flujos.
                  </p>
                  <div className="bg-[#0D1B1E] text-white p-3 rounded text-xs font-mono overflow-x-auto">
                    <div className="text-[#0FA36B]">{'//'} Global intent check (first)</div>
                    <div>if (intent === &apos;BAJA&apos;) {'{'}</div>
                    <div className="pl-4">await opt_out(wa_id);</div>
                    <div className="pl-4">return confirm_message();</div>
                    <div>{'}'}</div>
                    <div>if (intent === &apos;PAUSAR&apos;) {'{'}</div>
                    <div className="pl-4">return show_snooze_options();</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm"><strong>BAJA:</strong> Instantánea, sin confirmación extra, sin preguntas de retención</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm"><strong>Pausar:</strong> 7 o 30 días, reactivación automática o manual</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E5EFEA]">
                    <p className="text-sm"><strong>AGENTE:</strong> Handoff a humano con context, SLA en office hours</p>
                  </div>
                  <div className="p-3 bg-[#E6F7EF] rounded border border-[#0FA36B]/20">
                    <p className="text-sm"><strong>Preferencias:</strong> Editables siempre; overrides flow actual</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <Card className="mt-8 border-2 border-[#0FA36B] bg-white">
          <CardContent className="pt-6">
            <h3 className="mb-3 text-center">Por qué son &quot;rieles&quot; y no &quot;buenas intenciones&quot;</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <p className="text-[#51646A]">
                  <strong className="text-[#0D1B1E]">Rieles técnicos:</strong> Checks en código antes de cada acción. 
                  Imposible saltarse sin cambiar el código (y pasar code review + Care Council).
                </p>
                <p className="text-[#51646A]">
                  <strong className="text-[#0D1B1E]">Métricas públicas:</strong> Quiet hours violations, opt-out rate, 
                  SLA export/delete, PII incidents → Ledger mensual.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[#51646A]">
                  <strong className="text-[#0D1B1E]">Observabilidad:</strong> Eventos sin PII en Turso; monitoring de 
                  accesos anómalos; alertas por violación de reglas.
                </p>
                <p className="text-[#51646A]">
                  <strong className="text-[#0D1B1E]">Auditoría trimestral:</strong> Revisión externa de cumplimiento; 
                  findings públicos en Ledger; reparación con fecha.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
