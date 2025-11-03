'use client';
import { motion } from 'motion/react';
import { Smartphone, Apple, Download } from 'lucide-react';
import { Button } from './ui/button';


const APP_STORE_LINK = 'https://apps.apple.com/app/compa'; // Replace with real link
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.compa'; // Replace with real link

export function AppDownloadSection() {
  const handleDownloadClick = (platform: 'ios' | 'android') => {
    const link = platform === 'ios' ? APP_STORE_LINK : PLAY_STORE_LINK;
    window.open(link, '_blank');
    
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'app_download_click', { platform });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#F0FBFF] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-br from-[#3EC2F1] to-[#3ECF21] rounded-3xl overflow-hidden border-4 border-[#3EC2F1]">
          <div className="grid md:grid-cols-2 gap-12 items-center p-12 md:p-16">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-white/20 rounded-xl mb-6">
                <p
                  className="text-white text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  📱 Descarga la app
                </p>
              </div>

              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                }}
              >
                Tu Compa<br />
                en el bolsillo
              </h2>

              <p
                className="text-white/90 text-lg mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                Gestiona tus pagos desde donde estés. Misma calma, más control.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[
                  'Notificaciones solo en tu horario',
                  'Export/Delete desde la app',
                  'Bitácora siempre visible',
                  'Offline mode para consultas',
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3 text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <span className="text-2xl">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => handleDownloadClick('ios')}
                  size="lg"
                  className="bg-white text-[#3EC2F1] hover:bg-white/95 shadow-xl"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button
                  onClick={() => handleDownloadClick('android')}
                  size="lg"
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white/10"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Play Store
                </Button>
              </div>

              {/* Note */}
              <p
                className="text-white/70 text-sm mt-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                También funciona en web. La app es opcional.
              </p>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-xs">
                {/* Phone Frame */}
                <div className="relative bg-white rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-gradient-to-b from-[#F0FBFF] to-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* App Preview Content */}
                    <div className="p-6 pt-12">
                      <div className="bg-white rounded-2xl p-4 shadow-lg mb-4 border-2 border-[#3EC2F1]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#3EC2F1] rounded-xl flex items-center justify-center">
                            <span className="text-xl">💚</span>
                          </div>
                          <div>
                            <div className="h-3 w-20 bg-[#3EC2F1]/20 rounded" />
                            <div className="h-2 w-16 bg-[#3EC2F1]/10 rounded mt-1" />
                          </div>
                        </div>
                        <div className="h-2 w-full bg-[#3EC2F1]/20 rounded mb-2" />
                        <div className="h-2 w-3/4 bg-[#3EC2F1]/10 rounded" />
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-[#3ECF21]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#3ECF21] rounded-xl flex items-center justify-center">
                            <span className="text-xl">✓</span>
                          </div>
                          <div>
                            <div className="h-3 w-24 bg-[#3ECF21]/20 rounded" />
                            <div className="h-2 w-20 bg-[#3ECF21]/10 rounded mt-1" />
                          </div>
                        </div>
                        <div className="h-2 w-full bg-[#3ECF21]/20 rounded mb-2" />
                        <div className="h-2 w-2/3 bg-[#3ECF21]/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                >
                  <Smartphone className="w-8 h-8 text-[#3EC2F1]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
