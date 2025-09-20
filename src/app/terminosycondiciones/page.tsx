export default function TerminosYCondiciones() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones de Uso - LOLVI</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preguntas Frecuentes</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">¿Qué es LOLVI?</h3>
                <p className="text-gray-700">
                  LOLVI es un servicio que permite pagar todas tus facturas y recibos de servicios públicos 
                  en un solo lugar y con un solo pago mensual. Nos encargamos de gestionar y pagar 
                  automáticamente tus servicios para que nunca tengas que preocuparte por las fechas de vencimiento.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">¿Cómo funciona el servicio?</h3>
                <p className="text-gray-700">
                  Registras tus facturas en nuestra aplicación, eliges tu plan de suscripción mensual, 
                  y realizas un solo pago que cubre todas tus facturas. Nosotros nos encargamos del resto, 
                  pagando cada servicio en las fechas correspondientes.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">¿Qué pasa si hay un problema con el pago?</h3>
                <p className="text-gray-700">
                  Contamos con un sistema de respaldo y notificaciones. Si surge algún inconveniente, 
                  te notificamos inmediatamente y trabajamos para resolver la situación lo más pronto posible. 
                  También mantenemos un fondo de contingencia para casos excepcionales.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">¿Es seguro usar LOLVI?</h3>
                <p className="text-gray-700">
                  Sí, utilizamos tecnología de encriptación de nivel bancario para proteger tu información 
                  personal y financiera. Estamos vigilados por la Superintendencia de Industria y Comercio 
                  y cumplimos con todas las normativas de protección de datos.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">¿Puedo cancelar el servicio en cualquier momento?</h3>
                <p className="text-gray-700">
                  Sí, puedes cancelar tu suscripción en cualquier momento desde la aplicación. 
                  Los pagos programados para el mes en curso se completarán, y no se realizarán 
                  más cargos automáticos después de la cancelación.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">¿Qué servicios puedo incluir?</h3>
                <p className="text-gray-700">
                  Puedes incluir servicios públicos como energía, agua, gas, telecomunicaciones, 
                  internet, televisión por cable, y otros servicios recurrentes que tengan 
                  facturación mensual regular.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">¿Cómo me contacto si tengo dudas?</h3>
                <p className="text-gray-700">
                  Puedes contactarnos a través de WhatsApp, correo electrónico, o desde la aplicación móvil. 
                  Nuestro equipo de soporte está disponible para ayudarte con cualquier pregunta o inquietud.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condiciones de Uso</h2>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Al utilizar los servicios de LOLVI, aceptas los siguientes términos y condiciones:
              </p>
              
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Debes proporcionar información veraz y actualizada sobre tus servicios y facturas.</li>
                <li>Eres responsable de mantener fondos suficientes para el pago mensual.</li>
                <li>LOLVI se compromete a pagar tus servicios en las fechas establecidas, sujeto a la disponibilidad de fondos.</li>
                <li>Las tarifas del servicio pueden cambiar con previo aviso de 30 días.</li>
                <li>La información personal se maneja conforme a nuestra Política de Privacidad.</li>
                <li>El servicio está disponible únicamente para residentes en Colombia.</li>
                <li>Nos reservamos el derecho de suspender el servicio en caso de uso indebido.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contacto</h2>
            <p className="text-gray-700">
              Para más información o soporte, contáctanos a través de:
            </p>
            <ul className="text-gray-700 mt-2 space-y-1">
              <li>• WhatsApp: Disponible en nuestra página principal</li>
              <li>• Email: soporte@lolvi.co</li>
              <li>• App móvil: Sección de ayuda y soporte</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}