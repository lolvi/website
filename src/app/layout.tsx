'use client'
import "./globals.css";
import Head from 'next/head'
import React, { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutContext } from '@/components/Layout'

export default function RootLayout({
  children,
}: Readonly<{  
  children: React.ReactNode;
}>) {
  const [showHero, setShowHero] = useState(true);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContext.Provider value={{ showHero, setShowHero: (val) => setShowHero(val) }}>
        <Header displayHero={showHero} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <main>{children}</main>
        </div>
        <footer
          style={{
            marginTop: `var(--space-5)` ,
            fontSize: `var(--font-sm)`,
          }}
          className='px-4 sm:px-6 lg:px-8 bg-white'
        >
          <div className="mx-auto container px-4 sm:px-6 lg:px-0">
            {/* <div className="py-16">
                {/* <img src={logoFooter} alt="LOP" className="mx-auto h-12 w-auto" />
                
            </div> */}
            <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
              <div className="flex gap-x-6">
                <a className="group" aria-label="Lolvi.Co en Instagram" href="https://www.instagram.com/lolvi.co/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-slate-500 group-hover:fill-slate-700">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </a>
                <a className="group" aria-label="Lolvi.CO en Facebook" href="https://www.facebook.com/lolvicol" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 fill-slate-500 group-hover:fill-slate-700">
                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </a>
              </div>
              <div className="flex flex-row pt-4 items-baseline gap-x-4">
                <nav className="text-slate-500 text-sm" aria-label="quick links">
                  <div className="-my-1 flex justify-center gap-x-2">
                    <Link href="/terminosycondiciones">Términos & Condiciones</Link> *
                    <Link href="/privacidad">Política de Privacidad</Link>
                  </div>
                </nav>
                <p className="text-sm text-slate-500 sm:mt-0">
                  © {new Date().getFullYear()} &middot; 
                  Lo Olvide Pagar SAS. Todos los derechos reservados.
                  &middot; Hecho con{' '}
                  <a href="https://www.gatsbyjs.com">Gatsby</a>
                </p>
              </div>
            </div>
            <div className="py-8 px-4 mx-auto md:max-w-screen-sm sm:py-8 lg:px-6">
              <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
                <div className="flex-1">
                  <Image src="/vigilado-mintic.png" alt="Vigilado MinTic" width={200} height={100} />
                </div>
                <div className="flex-1">
                  <Image src="/vigilado-super.jpeg" alt="Vigilado Superintendencia Industria Y Comercio" width={200} height={100} />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </LayoutContext.Provider>
    </>
  );
}
