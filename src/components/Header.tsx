'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Dialog from "./Dialog";
import { LayoutContext } from "./Layout";

type RemoteConfig = {
  hero?: {
    headline: string,
    subheadline: string,
    caption: string
  }
} | null

export default function Header({ displayHero }: { displayHero?: boolean } = { displayHero: true }) {
  
  const [hosting, setHosting] = useState<RemoteConfig>();
  //const [displayHero, setDisplayHero] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const { showHero } = useContext(LayoutContext);

  return (
    <header className="relative py-5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <nav className="relative w-full z-50 flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex w-full place-content-between items-center md:place-content-start md:gap-x-4">
          
            <a href="#" className="inline-block w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)] text-decoration-none md:mr-4 text-decoration-none">
              <span className="flex items-center justify-center w-full h-full text-2xl" style={{ fontFamily: 'Ruddy', fontWeight: 900, fontStyle: 'normal', color: 'var(--color-secondary)', textShadow: '0 0 1px #fff' }}>
                lolvi
              </span>
            </a>

            <div className="-mr-2 flex items-center md:hidden">
              <button onClick={() => setIsNavOpen((prev) => !prev)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span className="sr-only">Menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex md:gap-x-6">
              <a href="#AcercaDe" className="font-medium text-black hover:text-gray-900">Acerca de</a>
              <a href="#ComoFunciona" className="font-medium text-black hover:text-gray-900">Cómo funciona</a>
              <a href="#PreguntasFrecuentes" className="font-medium text-black hover:text-gray-900">Preguntas frecuentes</a>
              <a href="#Testimonios" className="font-medium text-black hover:text-gray-900">Testimonios</a>
            </div>
          </div>
        </nav>
        
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl">
        {showHero && <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">

            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block font-droid bg-amber-400 xl:inline text-black ">{ hosting?.hero?.headline }</span>
                <span className="block text-black xl:inline">{ hosting?.hero?.subheadline }</span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                { hosting?.hero?.caption }
              </p>

              <div className="mt-5 grid sm:mt-8 sm:flex sm:flex-col sm:justify-center lg:justify-start gap-x-2 gap-y-2">
                  <div className="flex  w-full mb-4">
                    <form className="bg-white border-1 w-full rounded px-0" onSubmit={e => e.preventDefault()}>
                      <input type="hidden" name="experiment" value={'A'} />
                      <div className="flex w-full">
                        <input name="phone_number" onChange={(event) => null} minLength={10} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full py-4 px-4 focus:outline-none border-2 sm:text-sm w-1/2" id="phone_number" type="tel" placeholder="Tu teléfono móvil" pattern="^3[0-9]{2}[0-9]{3}[0-9]{4}" required={true} />
                        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)] text-white font-bold py-4 px-4 focus:outline-none focus:shadow-outline w-1/2" type="submit">
                          Solicitar Link
                        </button>
                      </div>
                    </form>
                    <Dialog open={false} close={(event: boolean, platform?: "ios" | "android") => null}>
                      <React.Fragment>
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Solicitar Link</h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">En breve, enviaremos un mensaje a tu teléfono celular <strong>{`+57 ${phoneNumber}`}</strong>, con la información para descargar nuestra aplicación.</p>
                        </div>
                      </React.Fragment>
                    </Dialog>
                  </div>
                  <div className="flex px-2">
                    <small className="p-sm italic">* En tu número de celular recibirás un link para descargar nuestra app.</small>
                  </div>
              </div>
            </div>

          </div>}
          

        </div>

        <div className={isNavOpen ? "absolute inset-y-0 left-0 w-full h-full z-50 bg-white" : "hidden "}>
          <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
          </div>

          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#AcercaDe">Acerca de</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#ComoFunciona">Como funciona</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#PreguntasFrecuentes">Preguntas frecuentes</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <Link href="/terminosycondiciones">Términos y condiciones</Link>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <Link href="/privacidad">Política de privacidad</Link>
            </li>
          </ul>
        </div>
        
        {showHero && <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
          <div className=" flex items-center justify-center w-full h-full">
            <Image className="object-center relative h-3/4 w-1/2 sm:h-72 md:h-96 lg:w-1/2 lg:h-3/4" src="/3d-casual-life-young-man-rejoicing-success347x456.png" alt="Hero Image" width={347} height={456} />
          </div>
        </div>}

      </div>
    </header>
  )
}