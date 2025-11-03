import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  {
    id: 'datos',
    question: '¿Qué datos piden y por cuánto tiempo?',
    answer: (
      <>
        <p className="mb-3">
          Pedimos lo mínimo: <strong>nombre y categoría de gasto</strong>. El email es opcional 
          y solo lo usamos para enviarte tu Bitácora mensual o Pack de Calma.
        </p>
        <p className="mb-3">Plazos de retención (TTL):</p>
        <ul className="space-y-2 mb-3 text-[#51646A]">
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">•</span>
            <span>Datos de perfil: 30 días desde última actividad</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">•</span>
            <span>Eventos (interacciones): 90 días</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">•</span>
            <span>Email: hasta que revoques el consentimiento</span>
          </li>
        </ul>
        <a href="#" className="text-[#0FA36B] hover:underline">
          Ver tabla completa y ledger público →
        </a>
      </>
    ),
  },
  {
    id: 'export',
    question: '¿Cómo descargo o borro mis datos?',
    answer: (
      <>
        <p className="mb-3">
          En 1 paso, desde WhatsApp o esta página:
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">✓</span>
            <span><strong>Descargar:</strong> Te enviamos un archivo JSON con todos tus datos 
            (perfil, consentimientos, preferencias, eventos) en menos de 6 horas.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">✓</span>
            <span><strong>Borrar:</strong> Verificamos con OTP y borramos todo en cascada. 
            Irreversible. Recibes confirmación cuando esté completo.</span>
          </li>
        </ul>
        <p className="text-sm text-[#51646A] mb-3">
          SLA: &lt;24h para ambas operaciones (promedio actual: 6h).
        </p>
        <a href="#" className="text-[#0FA36B] hover:underline">
          Ver demos de Export y Delete →
        </a>
      </>
    ),
  },
  {
    id: 'humano',
    question: '¿Puedo hablar con una persona?',
    answer: (
      <>
        <p className="mb-3">
          Sí, siempre. Dos rutas:
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">1.</span>
            <span><strong>Llamada programada:</strong> Agenda 10 minutos en el horario que prefieras. 
            Te llamamos puntual.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">2.</span>
            <span><strong>Chat humano:</strong> Escribe cuando quieras. Respondemos en office hours 
            (L-V 09:00–18:00, hora España).</span>
          </li>
        </ul>
        <p className="mb-3">
          Para casos sensibles (finanzas personales, situación difícil), usa <strong>PRIVADO</strong> desde 
          la Comunidad para chat 1-1 confidencial.
        </p>
        <a href="#" className="text-[#0FA36B] hover:underline">
          Agendar llamada o abrir chat →
        </a>
      </>
    ),
  },
  {
    id: 'arrepentir',
    question: '¿Qué pasa si me arrepiento o necesito un descanso?',
    answer: (
      <>
        <p className="mb-3">
          Tienes control total en cada momento:
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">•</span>
            <span><strong>Pausar 7 días o 30 días:</strong> Dejamos de escribirte por ese periodo. 
            Reactivación automática o manual.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">•</span>
            <span><strong>BAJA:</strong> Te damos de baja al instante, sin preguntas. 
            Puedes volver cuando quieras.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">•</span>
            <span><strong>Editar preferencias:</strong> Cambia franja horaria, frecuencia, 
            canales cuando quieras.</span>
          </li>
        </ul>
        <p className="text-sm text-[#51646A]">
          Todos estos controles están en WhatsApp, disponibles 24/7. Sin esperas, sin humano necesario 
          (aunque siempre puedes hablar con uno si lo prefieres).
        </p>
      </>
    ),
  },
  {
    id: 'comunidad',
    question: '¿Cómo moderan la Comunidad? ¿Es seguro?',
    answer: (
      <>
        <p className="mb-3">
          La Comunidad tiene reglas claras y métricas públicas:
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">✓</span>
            <span><strong>PII prohibida:</strong> No compartas datos personales (ni los tuyos ni los de otros). 
            Mensajes con PII se borran y se envía aviso privado.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">✓</span>
            <span><strong>Respeto obligatorio:</strong> Cero tolerancia a insultos, discriminación, spam. 
            Infracciones → expulsión.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0FA36B] mt-1">✓</span>
            <span><strong>PRIVADO disponible:</strong> Para casos sensibles (situación financiera personal, 
            preguntas delicadas), usa PRIVADO para hablar 1-1 con moderador humano.</span>
          </li>
        </ul>
        <p className="mb-3">
          <strong>Métrica pública:</strong> Incidencias de PII o abuso en octubre 2025 = 0.
        </p>
        <a href="#" className="text-[#0FA36B] hover:underline">
          Ver reglas completas de la Comunidad →
        </a>
      </>
    ),
  },
];

export function FAQs() {
  const handleFAQClick = (id: string) => {
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'faq_click', { question: id });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4">Preguntas frecuentes</h2>
          <p className="text-[#51646A]">
            Respuestas directas con links a las pruebas. Sin marketing, solo claridad.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-[#E5EFEA] rounded-lg px-6 bg-white"
            >
              <AccordionTrigger
                onClick={() => handleFAQClick(faq.id)}
                className="hover:no-underline py-5"
              >
                <span className="text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#0D1B1E] pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
