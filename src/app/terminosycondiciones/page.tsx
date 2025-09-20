export default function TerminosYCondiciones() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 mb-4">
              Al acceder y utilizar los servicios de Lo Olvide Pagar SAS, usted acepta estar sujeto a estos Términos y Condiciones de uso. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 mb-4">
              Lo Olvide Pagar SAS ofrece un servicio de gestión y pago de facturas y recibos de servicios públicos y privados. Nuestro objetivo es facilitar el proceso de pago de sus obligaciones mensuales a través de una plataforma única.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registro y Cuenta de Usuario</h2>
            <p className="text-gray-700 mb-4">
              Para utilizar nuestros servicios, debe registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de su información de cuenta y contraseña, y de todas las actividades que ocurran bajo su cuenta.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Debe proporcionar información precisa y actualizada</li>
              <li>Debe ser mayor de edad o tener autorización legal para contratar</li>
              <li>Es responsable de notificar cualquier uso no autorizado de su cuenta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso del Servicio</h2>
            <p className="text-gray-700 mb-4">
              Nuestro servicio le permite:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Registrar sus facturas y recibos de servicios</li>
              <li>Programar pagos automáticos</li>
              <li>Realizar pagos únicos o recurrentes</li>
              <li>Consultar el historial de pagos</li>
              <li>Recibir notificaciones sobre vencimientos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Tarifas y Pagos</h2>
            <p className="text-gray-700 mb-4">
              El uso de nuestros servicios está sujeto al pago de las tarifas correspondientes según el plan de suscripción elegido. Las tarifas se cobrarán de forma mensual y se debitarán automáticamente del método de pago registrado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilidades del Usuario</h2>
            <p className="text-gray-700 mb-4">
              Como usuario de nuestros servicios, usted se compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Proporcionar información de facturación precisa y actualizada</li>
              <li>Mantener fondos suficientes en su método de pago</li>
              <li>Verificar la exactitud de los pagos realizados</li>
              <li>Notificar inmediatamente cualquier error o discrepancia</li>
              <li>No utilizar el servicio para actividades ilegales o fraudulentas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 mb-4">
              Lo Olvide Pagar SAS no será responsable por daños indirectos, incidentales, especiales o consecuenciales que puedan surgir del uso de nuestros servicios. Nuestra responsabilidad se limita al monto de las tarifas pagadas por el servicio en el mes en que ocurrió el incidente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones</h2>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. El uso continuado del servicio constituye su aceptación de los términos modificados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Terminación</h2>
            <p className="text-gray-700 mb-4">
              Podemos suspender o terminar su acceso a nuestros servicios en cualquier momento, con o sin causa, con o sin previo aviso. Usted también puede cancelar su cuenta en cualquier momento contactándonos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
            <p className="text-gray-700 mb-4">
              Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos a través de los medios disponibles en nuestro sitio web.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}