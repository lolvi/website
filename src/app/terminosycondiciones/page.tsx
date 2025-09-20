import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="relative z-10 bg-transparent">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base inline-block p-2 text-black bg-[var(--color-primary)] font-semibold font-droid tracking-wide uppercase">
            Términos y condiciones
          </h2>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-center mt-2 font-droid font-bold text-2xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Por favor lee con atención los siguientes Términos y Condiciones del servicio que LOLVI. te ofrece a través de nuestra aplicación movil.
            </p>
            <p className="mt-4 font-droid text-xl text-gray-500">
              Nuestra intención es ser 100% transparentes por eso, aquí encontraras respuestas a la mayoría de tus preguntas.
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
                  ¿Por qué tengo que enviar una fotografía de mis recibos?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  El equipo de LOLVI no tiene manera de saber cuáles son tus recibos de servicios públicos y privados, una vez recibidas las fotografías de allí es tomada la información de cuenta para pagos y con esto evitamos equivocaciones en el proceso. Dicha información no será compartida con ningún tercero.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Cuál es la cantidad de facturas que puedo inscribir con LOLVI?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  En promedio un LOPer registra entre 3 y 5 facturas, pero siempre es posible registrar más.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Qué tipo de obligaciones puedo pagar a través de LOLVI?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Inicialmente facturas de servicios públicos y algunas facturas de servicios privados como de telefonía móvil y televisión prepagada, sin embargo estamos trabajando fuertemente para brindarte más opciones.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Por qué debo recargar de forma anticipada mi cuenta?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  LOLVI calcula el valor de tu recarga sugerida con base en el valor de tus consumos; esto es necesario para garantizar el servicio y unificar tus pagos.  ¡Es importante que sepas que siempre LOLVI te cumple!
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Qué pasa si mi pago excede el consumo de mis servicios?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Para este en caso en particular el valor a favor será tenido en cuenta y descontados de tus proximos pagos, de ninguna razón tu carga será cancelada.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Qué pasa si mi recarga sugerida excede el consumo de mis facturas registradas?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Para este en caso en particular el saldo a favor será tenido en cuenta y utilizado de tus próximos pagos; puedes estar tranquilo, tu dinero está bien resguardado con LOLVI. *No somos una institución financiera por lo tanto no podemos pagar intereses sobre saldos.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Qué pasa en casos en los que LOLVI me incumple?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  En tales casos, LOLVI asumirá las multas y sanciones a las cuales estes expuesto como costos de reconexión, intereses de mora si aplican *previa investigación y verificación con el proveedor del servicio; Si esto sucede, haz tu solicitud  y estas serán atendidas vía nuestros canales de atención.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Como resuelvo las inquietudes sobre mis facturas?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Para ello, LOLVI tiene disponible su canal principal de atención vía <a href="https;//wa.me/573160445500">WhatsApp</a> y su horario de atención es de LUN-VIE de 8:00AM - 8:00PM.
                </p>
              </li>
              <li>
                <h3 className="font-display font-bold text-lg leading-7 text-slate-900">
                  ¿Si estoy interesado en darme de baja del servicio?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Puedes comunicarte con LOLVI y solicitar tu intención de terminar la relación con nosotros y procederemos con el requerimiento por medio de nuestros canales de atención.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
