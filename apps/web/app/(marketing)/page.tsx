import { Navbar } from '@/components/marketing/navbar'
import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { ComponentShowcase } from '@/components/marketing/component-showcase'
import { ThemeShowcase } from '@/components/marketing/theme-showcase'
import { DeveloperExperience } from '@/components/marketing/developer-experience'
import { WhyLattice } from '@/components/marketing/why-lattice'
import { CtaBand } from '@/components/marketing/cta-band'
import { Footer } from '@/components/marketing/footer'

export default function MarketingPage(): React.ReactNode {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ComponentShowcase />
        <ThemeShowcase />
        <DeveloperExperience />
        <WhyLattice />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
