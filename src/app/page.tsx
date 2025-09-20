import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="AcercaDe" className="relative z-10 py-12 bg-transparent">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <h2 className="font-droid font-bold text-base inline-block px-2 py-1 text-black font-semibold tracking-wide bg-[var(--color-primary)] uppercase">Acerca de</h2>
            <p className="mt-2 text-3xl leading-8 font-droid font-bold tracking-tight text-gray-900 sm:text-4xl">¡Mantenerse al día en tus pagos nunca había sido tan fácil!</p>
            <p className="font-droid mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              ¿Eres de los que pagas las facturas un día después y jamás un día antes? <br /> <br />
              ¿Vas a pagar y no encuentras el recibo a la mano? <br /> <br />
              ¿Tienes tus pagos inscritos en alguna aplicación y a veces no funciona como lo esperabas? <br /> <br />
              <span className="font-bold">Pagamos tus recibos y facturas para que disfrutes de lo que te importe.</span>
            </p>
          </div>
          <div className="relative pt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 ">
              <div className="relative pl-16">
                <dt>
                  <div className="absolute -left-0 flex items-center justify-center h-12 w-12 rounded-lg text-white">
                    <Image src="/casual-life-3d-round-check-mark-yellow.png" className="" alt="" width={48} height={48} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">¡Haz un solo pago!</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Paga una vez al mes todos tus recibos en un mismo lugar, ya sea por PSE, Tarjeta de Crédito* o débito automático*.</dd>
              </div>
              <div className="relative pl-16">
                <dt>
                  <div className="absolute  -left-0 flex items-center justify-center h-12 w-12 rounded-lg text-white">
                    <Image src={"/casual-life-3d-alarm-sign.png"} className="" alt="" width={48} height={48} />                    
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">¡Evita las multas!</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">No mas reconexiones ni pagos de intereses. Nosotros pagamos todas tus facturas.</dd>
              </div>
              <div className="relative pl-16">
                <dt>
                  <div className="absolute -left-0 flex items-center justify-center h-12 w-12 rounded-lg text-white">
                    <Image src={"/3d-casual-life-golden-bell.png"} width={48} height={48} alt="" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">¡Recibe notificaciones de todo!</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Recibe toda la información de tu cuenta, cuando llega el recibo y cuando se paga.</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-lg text-center">
            <div className="inline-flex rounded-full shadow">
              <Link
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border text-base font-semibold rounded-full display-block hover:bg-green-600 shadow-lg"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  color: "var(--color-black)",
                }}
                aria-label="Chatea por WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M380.9 97.1C339-2.6 222.2-31.8 135.5 29.2c-86.7 61-115.9 177.8-57 264.5l-25.7 93.6c-4.5 16.4 11.2 31.1 27.6 26.6l93.6-25.7c86.7 58.9 203.5 29.7 264.5-57 61-86.7 32.8-203.5-57-264.5zM222.2 392.3c-34.7 0-68.2-10.2-97.1-29.7l-6.9-4.4-55.6 15.3 15.3-55.6-4.4-6.9c-19.5-28.9-29.7-62.4-29.7-97.1 0-99.6 81-180.6 180.6-180.6 99.6 0 180.6 81 180.6 180.6 0 99.6-81 180.6-180.6 180.6zm99.6-138.2c-5.5-2.8-32.6-16.1-37.7-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 17.9-17.5 21.6-3.2 3.7-6.4 4.2-11.9 1.4-5.5-2.8-23.2-8.5-44.2-27-16.3-14.5-27.3-32.4-30.5-37.9-3.2-5.5-.3-8.5 2.4-11.3 2.5-2.5 5.5-6.4 8.2-9.6 2.8-3.2 3.7-5.5 5.5-9.2 1.8-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2-3.7 0-9.6 1.4-14.6 7-5.1 5.5-19.8 19.3-19.8 47.1s20.3 54.6 23.1 58.4c2.8 3.7 39.2 60.1 95.1 81.5 13.3 5.7 23.7 9.1 31.8 11.6 13.3 4.2 25.5 3.6 35.1 2.2 10.7-1.6 32.6-13.3 37.2-26.1 4.6-12.8 4.6-23.7 3.2-26.1-1.3-2.4-5-3.8-10.5-6.6z" />
                </svg>
                ¿Tienes dudas, quieres probar o simplemente charlar? <span className="font-bold ml-1 ">¡Escríbenos por WhatsApp!</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="ComoFunciona" className="relative py-12 bg-white over overflow-hidden">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative hidden md:block">
            <h2 className="font-droid font-bold text-base inline-block px-2 py-1 text-black font-semibold tracking-wide bg-[var(--color-primary)] uppercase text-white">Cómo funciona</h2>
            <div className="flex items-center justify-center h-full">
              <Image src="/3d-casual-life-young-woman-pointing-on-new-document-button.png" className="w-3/4 h-3/4" alt="How it works..." width={300} height={300} />
            </div>
          </div>
          <div className="relative px-4 sm:pr-8">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative pt-8"></div>
              <div className="relative">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                  <div className="relative rounded-3xl hover:bg-white p-6 hover:shadow-xl hover:shadow-slate-900/10 hover:bg-white">
                    <div className="">
                      <div className="absolute -left-10 flex items-center justify-center h-12 w-12 rounded bg-[var(--color-primary)] text-white">
                        <span className="text-xl text-white font-droid font-bold">01</span>
                      </div>
                      <p className="pl-16 ml-16 text-lg leading-6 font-medium text-gray-900">Descarga la app.</p>
                    </div>
                    <p className="mt-2 ml-16 text-base text-gray-500">Descarga la aplicación móvil para iOS o Android.</p>
                  </div>
                  <div className="relative rounded-3xl hover:bg-white p-6 hover:shadow-xl hover:shadow-slate-900/10 hover:bg-white">
                    <div>
                      <div className="absolute -left-10 flex items-center justify-center h-12 w-12 rounded bg-[var(--color-primary)] text-white">
                        <span className="text-xl font-droid text-white font-bold">02</span>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Registra tus facturas.</p>
                    </div>
                    <p className="mt-2 ml-16 text-base text-gray-500">Sigue los pasos en la app y registra cada una de las facturas.</p>
                  </div>
                  <div className="relative rounded-3xl hover:bg-white p-6 hover:shadow-xl hover:shadow-slate-900/10 hover:bg-white">
                    <div>
                      <div className="absolute -left-10  flex items-center justify-center h-12 w-12 rounded bg-[var(--color-primary)] text-white">
                        <span className="text-xl text-white font-droid font-bold">03</span>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Elige tu plan</p>
                    </div>
                    <p className="mt-2 ml-16 text-base text-gray-500">Manejamos un plan de suscripción mensual que debes aceptar en la app.</p>
                  </div>
                  <div className="relative rounded-3xl hover:bg-white p-6 hover:shadow-xl hover:shadow-slate-900/10 hover:bg-white">
                    <div>
                      <div className="absolute -left-10  flex items-center justify-center h-12 w-12 rounded bg-[var(--color-primary)] text-white">
                        <span className="text-xl text-white font-droid font-bold">04</span>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Haz un solo pago.</p>
                    </div>
                    <p className="mt-2 ml-16 text-base text-gray-500">Realiza un solo pago mensual para todas tus facturas o recibos. Por PSE, Tarjeta de crédito* o por débito automático*.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Testimonios" className="relative py-12 bg-white">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 mb-8">
          <div className="relative"></div>
          <div className="relative text-center">
            <h2 className="font-droid font-bold text-base  inline-block px-2 py-1 text-black font-semibold tracking-wide bg-[var(--color-primary)] uppercase text-white">Testimonios</h2>
            <p className="mt-2 font-droid font-bold text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">Lo que dicen nuestros clientes.</p>
          </div>
          <div className="relative"></div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 items-stretch">
          <div className="basis-1/3 flex flex-col h-full">
            <div className='p-4 rounded-lg bg-[var(--color-secondary)] text-center mb-4'>
              <figure className="flex flex-col justify-center items-center p-8 text-center border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                <blockquote className=" mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Siempre olvido pagar mis facturas.</h3>
                  <p className="my-4">Con lolvi.co, tengo la tranquilidad de que mis servicios nunca me los van a cortar, porque no sé como pero siempre estan al dia jeje.</p>
                  <p className="my-4">Debido a mis mil ocupaciones en el trabajo y en el hogar.</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image src={"/testimonial_three.jpg"} className="w-24 h-24 rounded-full" alt="profile picture" width={96} height={96} />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>Diego Vasquez</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Ingeniera de Sistemas</div>
                  </div>
                </figcaption>    
              </figure>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col h-full">
            <div className='p-4 rounded-lg bg-[var(--color-secondary)] text-center mb-4'>
              <figure className="flex flex-col justify-center items-center p-8 text-center border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Con una sola transacción pago todas mis facturas. </h3>
                  <p className="my-4">Una sola transacción apenas me pagan y ya no vuelvo a pensar en mis recibos! Libero ese espacio en mi cabeza para preocuparme por cosas más importantes.</p>
                  <p className="my-4">Hasta duermo un poco mejor jaja. Gracias lolvi!</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image src={"/testimonial_two.jpg"} width={96} height={96} className="w-24 h-24 rounded-full" alt="profile picture" />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>Monika Meneses</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Diseñadora e Ingeniera</div>
                  </div>
                </figcaption>    
              </figure>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col h-full">
            <div className='p-4 rounded-lg bg-[var(--color-secondary)] text-center mb-4'>
              <figure className="flex flex-col justify-center items-center p-8 text-center  border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Las facturas que si se pagan solas. </h3>
                  <p className="my-4">Estoy muy agradecida por el servicio que se inventaron, ahora mi vida es más fácil. Ya no tengo que preocuparme por las fechas de pago de mis facturas.</p>
                  <p className="my-4">Gracias por simplificar mi vida financiera!</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image src={"/testimonial_one.jpg"} width={96} height={96} alt='' className="w-24 h-24 rounded-full" />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>Angelica Gonzales</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Recursos Humanos & Administración</div>
                  </div>
                </figcaption>    
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
