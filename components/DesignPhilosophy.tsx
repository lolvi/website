import { FileCode, TrendingUp, Shield, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function DesignPhilosophy() {
  return (
    <section className="py-12 bg-[#0D1B1E] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-white">Por qué esta página es diferente</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            Anti-marketing. Sin hype, sin urgencia, sin dark patterns. Solo verdad operativa verificable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6">
              <FileCode className="w-8 h-8 text-[#0FA36B] mb-3" />
              <h4 className="text-white mb-2">Texto como prueba</h4>
              <p className="text-sm text-white/70">
                No &quot;respetamos tu tiempo&quot; sino <code className="text-[#0FA36B]">1/24h</code>. 
                No &quot;protegemos datos&quot; sino <code className="text-[#0FA36B]">TTL 30/90</code>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6">
              <Code className="w-8 h-8 text-[#0FA36B] mb-3" />
              <h4 className="text-white mb-2">Rieles técnicos</h4>
              <p className="text-sm text-white/70">
                Code snippets muestran gating. No &quot;buenas intenciones&quot; 
                sino checks antes de cada acción.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6">
              <Shield className="w-8 h-8 text-[#0FA36B] mb-3" />
              <h4 className="text-white mb-2">Honestidad brutal</h4>
              <p className="text-sm text-white/70">
                <code className="text-[#0FA36B]">WABA ≠ E2E</code>. 
                Decimos límites y mostramos compensaciones. Confianza &gt; perfección.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6">
              <TrendingUp className="w-8 h-8 text-[#0FA36B] mb-3" />
              <h4 className="text-white mb-2">Métricas reales</h4>
              <p className="text-sm text-white/70">
                Opt-out <code className="text-[#0FA36B]">0.3%</code>, 
                SLA <code className="text-[#0FA36B]">&lt;6h</code>, 
                PII incidents <code className="text-[#0FA36B]">0</code>. Octubre 2025.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/70 max-w-3xl mx-auto">
            Esta página es un producto en sí misma: <strong className="text-white">arquitectura de información 
            como generador de confianza</strong>. Cada sección, cada número, cada enlace a proof 
            está diseñado para mover tibio → hot reduciendo ansiedad con evidencia, no con hype.
          </p>
        </div>
      </div>
    </section>
  );
}
