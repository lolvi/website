import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="relative z-10 bg-transparent">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base inline-block p-2 text-black bg-[var(--color-primary)] font-semibold font-droid tracking-wide uppercase">
            Política de Privacidad
          </h2>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-center mt-2 font-droid font-bold text-2xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Tu privacidad es importante para nosotros. Aquí te explicamos cómo LOLVI protege y maneja tu información personal.
            </p>
            <p className="mt-4 font-droid text-xl text-gray-500">
              Esta política describe cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestros servicios.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul
          role="list"
          className="font-droid mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Qué información recopilamos?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Recopilamos información personal que nos proporcionas voluntariamente, como nombre, correo electrónico, número de teléfono, y fotografías de tus recibos de servicios. También recopilamos información de uso de la aplicación para mejorar nuestros servicios.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Cómo utilizamos tu información?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Utilizamos tu información para procesar pagos, gestionar tu cuenta, proporcionarte soporte al cliente, y mejorar nuestros servicios. También podemos utilizarla para comunicarnos contigo sobre actualizaciones importantes del servicio.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Compartimos tu información con terceros?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  No vendemos ni alquilamos tu información personal. Solo compartimos información con terceros cuando es necesario para procesar pagos (entidades financieras y empresas de servicios) o cuando la ley lo requiere.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Cómo protegemos tu información?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Implementamos medidas de seguridad técnicas y organizacionales para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos encriptación y otros métodos de seguridad reconocidos por la industria.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Cuánto tiempo conservamos tu información?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Conservamos tu información personal durante el tiempo necesario para cumplir con los propósitos para los cuales fue recopilada, incluyendo cualquier período de retención requerido por ley. Las fotografías de recibos se eliminan después de procesar la información relevante.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Cuáles son tus derechos?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. También puedes solicitar la portabilidad de tus datos. Para ejercer estos derechos, contáctanos a través de nuestros canales de atención.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Usamos cookies o tecnologías similares?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestra aplicación, analizar el uso y personalizar el contenido. Puedes gestionar las preferencias de cookies a través de la configuración de tu dispositivo o navegador.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Cómo contactarnos sobre privacidad?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información personal, puedes contactarnos vía <a href="https://wa.me/573160445500">WhatsApp</a> en nuestro horario de atención: LUN-VIE de 8:00AM - 8:00PM.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Actualizamos esta política?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras prácticas o en la legislación aplicable. Te notificaremos sobre cambios significativos a través de la aplicación o por correo electrónico.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}