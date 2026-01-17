import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BikeShowcase } from "@/components/bike-showcase"
import { StatsSection } from "@/components/stats-section"
import { TechGrid } from "@/components/tech-grid"
import { FeaturesSection } from "@/components/features-section"
import { StillRidingSection } from "@/components/still-riding-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export function HomeContent() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <BikeShowcase />
      <StatsSection />
      <TechGrid />
      <FeaturesSection />
      <StillRidingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
