'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Trash2, CheckCircle2, AlertCircle, Loader2, FileText, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

type DemoStep = 'idle' | 'requesting' | 'verifying' | 'processing' | 'complete';

export function InteractiveDemoSection() {
  const [exportStep, setExportStep] = useState<DemoStep>('idle');
  const [deleteStep, setDeleteStep] = useState<DemoStep>('idle');

  const startExportDemo = () => {
    setExportStep('requesting');
    setTimeout(() => setExportStep('verifying'), 1500);
    setTimeout(() => setExportStep('processing'), 3000);
    setTimeout(() => setExportStep('complete'), 5000);
    setTimeout(() => setExportStep('idle'), 8000);
  };

  const startDeleteDemo = () => {
    setDeleteStep('requesting');
    setTimeout(() => setDeleteStep('verifying'), 1500);
    setTimeout(() => setDeleteStep('processing'), 3000);
    setTimeout(() => setDeleteStep('complete'), 4500);
    setTimeout(() => setDeleteStep('idle'), 7500);
  };

  const ExportStepContent = ({ step }: { step: DemoStep }) => {
    switch (step) {
      case 'idle':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-compa-green-light rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <Download className="w-16 h-16 text-compa-green" />
            </div>
            <h4 className="text-compa-neutral-dark mb-4">Exporta todos tus datos</h4>
            <p className="text-compa-neutral-mid mb-6">
              Recibe un JSON legible con todos tus datos, fuentes, propósitos y TTLs
            </p>
            <Button 
              onClick={startExportDemo}
              className="bg-compa-green hover:bg-compa-green-dark text-white"
              size="lg"
            >
              Simular Export →
            </Button>
          </motion.div>
        );
      
      case 'requesting':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-compa-blue-light p-4 rounded-lg">
              <Loader2 className="w-5 h-5 text-compa-blue animate-spin" />
              <span className="text-compa-neutral-dark">Enviando solicitud...</span>
            </div>
            <div className="bg-white border-2 border-compa-neutral-light rounded-lg p-4 font-mono text-sm">
              <span className="text-compa-neutral-mid">Usuario:</span> &quot;Export&quot;<br />
              <span className="text-compa-neutral-mid">Timestamp:</span> 2025-10-31 15:42:33 UTC<br />
              <span className="text-compa-neutral-mid">Intent:</span> data_export
            </div>
          </motion.div>
        );
      
      case 'verifying':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-green-100 p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-compa-neutral-dark">Solicitud recibida</span>
            </div>
            <div className="flex items-center gap-3 bg-compa-blue-light p-4 rounded-lg">
              <Loader2 className="w-5 h-5 text-compa-blue animate-spin" />
              <span className="text-compa-neutral-dark">Enviando OTP para verificación...</span>
            </div>
            <div className="bg-white border-2 border-compa-blue/20 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-5 h-5 text-compa-blue" />
                <span className="text-sm">Código OTP enviado a +52 *** ***45</span>
              </div>
              <div className="text-xs text-compa-neutral-mid">Válido por 5 minutos</div>
            </div>
          </motion.div>
        );
      
      case 'processing':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-green-100 p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-compa-neutral-dark">Identidad verificada</span>
            </div>
            <div className="flex items-center gap-3 bg-compa-green-light p-4 rounded-lg">
              <Loader2 className="w-5 h-5 text-compa-green animate-spin" />
              <span className="text-compa-neutral-dark">Generando archivo...</span>
            </div>
            <div className="bg-white border-2 border-compa-green/20 rounded-lg p-4 space-y-2 text-sm font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Recopilando perfil de usuario</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Recopilando historial de eventos</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-compa-green animate-spin" />
                <span>Generando metadata y TTLs...</span>
              </div>
            </div>
          </motion.div>
        );
      
      case 'complete':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-green-100 p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-compa-neutral-dark">Export completado en 4.2 horas</span>
            </div>
            <div className="bg-white border-2 border-compa-green rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-compa-green rounded-lg p-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-compa-neutral-dark">compa_data_export_20251031.json</div>
                  <div className="text-sm text-compa-neutral-mid">2.4 MB · Válido 72h</div>
                </div>
              </div>
              <Button className="w-full bg-compa-green hover:bg-compa-green-dark text-white">
                Descargar Export →
              </Button>
            </div>
            <div className="text-xs text-compa-neutral-mid text-center">
              SLA: &lt;6h · Tiempo real: 4.2h ✓
            </div>
          </motion.div>
        );
    }
  };

  const DeleteStepContent = ({ step }: { step: DemoStep }) => {
    switch (step) {
      case 'idle':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-red-50 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <Trash2 className="w-16 h-16 text-red-500" />
            </div>
            <h4 className="text-compa-neutral-dark mb-4">Borrar todos tus datos</h4>
            <p className="text-compa-neutral-mid mb-6">
              Eliminación completa e irreversible. Sin retención oculta.
            </p>
            <Button 
              onClick={startDeleteDemo}
              variant="destructive"
              size="lg"
            >
              Simular Delete →
            </Button>
          </motion.div>
        );
      
      case 'requesting':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
              <Loader2 className="w-5 h-5 text-red-500 animate-spin" />
              <span className="text-compa-neutral-dark">Procesando solicitud de borrado...</span>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-900">
                  <div className="mb-2">Esta acción es irreversible</div>
                  <div className="text-xs text-yellow-700">
                    Se borrarán: Perfil · Historial · Preferencias · Eventos
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      
      case 'verifying':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-compa-blue-light p-4 rounded-lg">
              <Loader2 className="w-5 h-5 text-compa-blue animate-spin" />
              <span className="text-compa-neutral-dark">Verificación de seguridad...</span>
            </div>
            <div className="bg-white border-2 border-compa-blue/20 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-compa-blue" />
                <span>Confirma tu identidad</span>
              </div>
              <div className="space-y-2 text-sm text-compa-neutral-mid">
                <div>✓ OTP enviado a tu número</div>
                <div>✓ Confirmación adicional requerida</div>
              </div>
            </div>
          </motion.div>
        );
      
      case 'processing':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-green-100 p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-compa-neutral-dark">Identidad confirmada</span>
            </div>
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
              <Loader2 className="w-5 h-5 text-red-500 animate-spin" />
              <span className="text-compa-neutral-dark">Eliminando datos...</span>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-lg p-4 space-y-2 text-sm font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Perfil de usuario eliminado</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-red-500 animate-spin" />
                <span>Eliminando historial de eventos...</span>
              </div>
            </div>
          </motion.div>
        );
      
      case 'complete':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 bg-green-100 p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-compa-neutral-dark">Borrado completado</span>
            </div>
            <div className="bg-white border-2 border-compa-green rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">✓</div>
              <h4 className="text-compa-neutral-dark mb-2">Todos tus datos han sido eliminados</h4>
              <p className="text-compa-neutral-mid text-sm mb-4">
                No quedan registros. Sin backups ocultos. Sin retención.
              </p>
              <div className="text-xs text-compa-neutral-mid">
                Completado en 3.8h · SLA: &lt;6h ✓
              </div>
            </div>
            <div className="bg-compa-blue-light rounded-lg p-4 text-sm text-compa-neutral-dark text-center">
              Puedes volver cuando quieras. Empezarás desde cero, como nuevo usuario.
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white" id="demo">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-compa-green-dark mb-6">
            Pruébalo tú mismo
          </h2>
          <p className="text-compa-neutral-mid text-lg">
            No hablamos solo de portabilidad y control. Lo mostramos. Simula el proceso completo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Tabs defaultValue="export" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-compa-neutral-light/30 p-1">
              <TabsTrigger value="export" className="data-[state=active]:bg-white">
                <Download className="w-4 h-4 mr-2" />
                Export Demo
              </TabsTrigger>
              <TabsTrigger value="delete" className="data-[state=active]:bg-white">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Demo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="export">
              <div className="bg-gradient-to-br from-compa-green-light/30 to-white rounded-3xl p-8 border-2 border-compa-green/20 min-h-[500px]">
                <AnimatePresence mode="wait">
                  <ExportStepContent step={exportStep} />
                </AnimatePresence>
              </div>
            </TabsContent>

            <TabsContent value="delete">
              <div className="bg-gradient-to-br from-red-50/50 to-white rounded-3xl p-8 border-2 border-red-200/50 min-h-[500px]">
                <AnimatePresence mode="wait">
                  <DeleteStepContent step={deleteStep} />
                </AnimatePresence>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-6 border-2 border-compa-green/20 text-center">
            <div className="font-mono text-4xl text-compa-green mb-2">4.2h</div>
            <div className="text-sm text-compa-neutral-mid">Promedio Export Oct 2025</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-compa-blue/20 text-center">
            <div className="font-mono text-4xl text-compa-blue mb-2">127</div>
            <div className="text-sm text-compa-neutral-mid">Exports completados</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-compa-green/20 text-center">
            <div className="font-mono text-4xl text-compa-green mb-2">100%</div>
            <div className="text-sm text-compa-neutral-mid">SLA compliance</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
