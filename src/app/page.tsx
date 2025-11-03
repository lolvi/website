//import { headers as getHeaders } from 'next/headers.js'

//import { getPayload } from 'payload'
import React from 'react'
//import { fileURLToPath } from 'url'

//import config from '@/payload.config'
import './styles.css'

import { ScrollProgress } from '@/components/ScrollProgress'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Navbar } from '@/components/Navbar'
import { FloatingWhatsAppCTA } from '@/components/FloatingWhatsAppCTA'

import { HeroPhase1 } from '@/components/HeroPhase1'
import { ThreePillarsSectionInteractive } from '@/components/ThreePillarsSectionInteractive'
import { HowItWorksPhase1 } from '@/components/HowItWorksPhase1'

import { CompaClubSection } from '@/components/CompaClubSection'
import { AppDownloadSection } from '@/components/AppDownloadSection'
import { SocialProofStats } from '@/components/SocialProofStats'
import { FAQsPhase1 } from '@/components/FAQsPhase1'
import { ModernFooter } from '@/components/ModernFooter'
import { QuietHoursBannerClient } from '@/components/QuietHoursBannerClient'



export default async function HomePage() {
  //const headers = await getHeaders()
  //const payloadConfig = await config
  //const payload = await getPayload({ config: payloadConfig })
  //const { user } = await payload.auth({ headers })
  //const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (        
    <>
    <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <FloatingWhatsAppCTA />
      <QuietHoursBannerClient />
      <HeroPhase1 />
      <ThreePillarsSectionInteractive />
      <HowItWorksPhase1 />
      {/* <PruebasYPromesas /> 
      <InteractiveDemoSection /> */}
      <CompaClubSection />
      <AppDownloadSection />
      <SocialProofStats />
      <FAQsPhase1 />
      <ModernFooter />
    </>
      
      
        
  )
}
