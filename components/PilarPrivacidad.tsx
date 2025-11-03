import { useState } from 'react';
import { Lock, Database, Download, Eye, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';

export function PilarPrivacidad() {
  const [showExportDemo, setShowExportDemo] = useState(false);
  const [showDeleteDemo, setShowDeleteDemo] = useState(false);

  const handlePrivacyAction = (action: string) => {
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', `privacy_${action}_demo_view`);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Privacidad: Tus datos son tuyos, con prueba</h2>
          <p className="text-[#51646A]">
            Minimización, propósito claro, verificación pública y control total en cada paso.
          </p>
        </div>

        <div className="space-y-8">
          {/* Minimización */}
          <Card className="border-[#E5EFEA]">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Database className="w-6 h-6 text-[#0FA36B]" />
                <div className="flex-1">
                  <CardTitle>Minimización de datos</CardTitle>
                  <p className="text-[#51646A] mt-2">
                    Solo pedimos lo esencial: nombre, categoría de gasto. Email es opcional y únicamente para Bitácora/Pack.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-[#F7FBF9] p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#E5EFEA]">
                      <th className="text-left py-2">Campo</th>
                      <th className="text-left py-2">Propósito</th>
                      <th className="text-left py-2">TTL</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#51646A]">
                    <tr className="border-b border-[#E5EFEA]">
                      <td className="py-2">Nombre</td>
                      <td className="py-2">Personalización</td>
                      <td className="py-2">30 días</td>
                    </tr>
                    <tr className="border-b border-[#E5EFEA]">
                      <td className="py-2">Categoría</td>
                      <td className="py-2">Recomendaciones</td>
                      <td className="py-2">90 días</td>
                    </tr>
                    <tr>
                      <td className="py-2">Email (opcional)</td>
                      <td className="py-2">Bitácora/Pack</td>
                      <td className="py-2">Hasta revocación</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="#" className="text-[#0FA36B] hover:underline inline-flex items-center gap-1 mt-4">
                Ver tabla completa →
              </a>
            </CardContent>
          </Card>

          {/* Propósito y plazo */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-[#F7FBF9] rounded-lg border border-[#E5EFEA]">
              <div className="flex gap-2 mb-2">
                <Badge variant="outline" className="bg-white">Para qué</Badge>
                <Badge variant="outline" className="bg-white">Por cuánto</Badge>
              </div>
              <p className="text-sm text-[#51646A]">
                Cada dato tiene propósito explícito y plazo de retención (TTL 30/90 días).
              </p>
            </div>

            <div className="p-4 bg-[#F7FBF9] rounded-lg border border-[#E5EFEA]">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-[#0FA36B]" />
                <span>Verificabilidad</span>
              </div>
              <p className="text-sm text-[#51646A] mb-2">
                Ledger mensual público documenta cambios.
              </p>
              <a href="#" className="text-[#0FA36B] hover:underline text-sm">
                Ver Ledger →
              </a>
            </div>

            <div className="p-4 bg-[#F7FBF9] rounded-lg border border-[#E5EFEA]">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-[#0FA36B]" />
                <span>Cifrado</span>
              </div>
              <p className="text-sm text-[#51646A]">
                Cifrado por registro con rotación de claves (KMS).
              </p>
            </div>
          </div>

          {/* Autonomía: Export/Delete */}
          <Card className="border-[#0FA36B]/20 bg-[#F7FBF9]">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Download className="w-6 h-6 text-[#0FA36B]" />
                <div className="flex-1">
                  <CardTitle>Autonomía total: Export y Delete en 1 paso</CardTitle>
                  <p className="text-[#51646A] mt-2">
                    Descarga todos tus datos en formato JSON o bórralos completamente con verificación OTP.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowExportDemo(true);
                    handlePrivacyAction('export');
                  }}
                >
                  Ver ejemplo de Export JSON
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowDeleteDemo(true);
                    handlePrivacyAction('delete');
                  }}
                >
                  Ver cómo funciona Borrar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Límites honestos */}
          <Card className="border-[#E5EFEA]">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#9E6C00]" />
                <div className="flex-1">
                  <CardTitle>Límites honestos</CardTitle>
                  <p className="text-[#51646A] mt-2">
                    WhatsApp Business API no es E2E hacia nuestros sistemas. 
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Cómo compensamos:</p>
              <ul className="space-y-2 text-[#51646A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0FA36B] mt-1">•</span>
                  <span>Minimización de datos (solo lo esencial)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0FA36B] mt-1">•</span>
                  <span>TTL automático 30/90 días</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0FA36B] mt-1">•</span>
                  <span>Redacción de contenido sensible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0FA36B] mt-1">•</span>
                  <span>Cifrado por registro con KMS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0FA36B] mt-1">•</span>
                  <span>Ledger público mensual</span>
                </li>
              </ul>
              <a href="#" className="text-[#0FA36B] hover:underline inline-flex items-center gap-1 mt-4">
                Privacidad en claro: límites y mitigación →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Export Demo Modal */}
      <Dialog open={showExportDemo} onOpenChange={setShowExportDemo}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Ejemplo de Export JSON</DialogTitle>
            <DialogDescription>
              Todos tus datos en formato legible por máquina, listos para descargar.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-[#0D1B1E] text-white p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`{
  "timestamp": "2025-10-31T14:23:45Z",
  "user_id": "usr_xxxxx",
  "export_version": "1.0",
  "data": {
    "profile": {
      "name": "Ana García",
      "category": "Freelance",
      "created_at": "2025-10-01T10:00:00Z",
      "retention_ttl": "30_days"
    },
    "consents": [
      {
        "type": "whatsapp_messaging",
        "granted_at": "2025-10-01T10:15:00Z",
        "purpose": "Bitácora y recordatorios",
        "status": "active"
      },
      {
        "type": "email_bitacora",
        "granted_at": "2025-10-05T12:00:00Z",
        "purpose": "Envío de Bitácora mensual",
        "status": "active"
      }
    ],
    "preferences": {
      "quiet_hours": "20:30-08:00",
      "frequency": "media",
      "preferred_window": "mañana"
    },
    "events": [
      {
        "type": "nudge_sent",
        "timestamp": "2025-10-30T10:00:00Z",
        "metadata": {
          "type": "reminder",
          "responded": true
        }
      }
    ]
  },
  "sources": ["whatsapp", "web"],
  "purposes": ["servicio", "recordatorios"],
  "retention_policy": "30_days_profile_90_days_events"
}`}
            </pre>
          </div>
          <p className="text-sm text-[#51646A]">
            Todos los campos incluyen timestamp, propósito y fuente. Sin información oculta.
          </p>
        </DialogContent>
      </Dialog>

      {/* Delete Demo Modal */}
      <Dialog open={showDeleteDemo} onOpenChange={setShowDeleteDemo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cómo funciona Borrar</DialogTitle>
            <DialogDescription>
              Borrado en cascada con verificación por OTP para seguridad.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-[#F7FBF9] p-4 rounded-lg">
              <h4 className="mb-3">Proceso de borrado:</h4>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0FA36B] text-white rounded-full flex items-center justify-center text-sm">1</span>
                  <div>
                    <p>Solicitas borrado desde WhatsApp o web</p>
                    <p className="text-sm text-[#51646A]">Enviamos OTP a tu número</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0FA36B] text-white rounded-full flex items-center justify-center text-sm">2</span>
                  <div>
                    <p>Verificas con código OTP</p>
                    <p className="text-sm text-[#51646A]">Confirmas que realmente eres tú</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0FA36B] text-white rounded-full flex items-center justify-center text-sm">3</span>
                  <div>
                    <p>Borrado en cascada</p>
                    <p className="text-sm text-[#51646A]">Perfil → Consentimientos → Preferencias → Eventos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0FA36B] text-white rounded-full flex items-center justify-center text-sm">4</span>
                  <div>
                    <p>Confirmación final</p>
                    <p className="text-sm text-[#51646A]">Recibes mensaje confirmando el borrado completo</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="p-3 bg-[#FFF4E6] border border-[#9E6C00]/20 rounded-lg">
              <p className="text-sm text-[#9E6C00]">
                ⚠️ El borrado es irreversible. Solo se conservan registros anónimos para cumplimiento legal (sin PII).
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
