import { Banner } from '@/components/ui/banner'
import { Collections } from '@/components/ui/collections'
import { CreateAndSell } from '@/components/ui/create-sell'
import { HeroSection } from '@/components/ui/hero-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Collections />
      <CreateAndSell />
      <Banner />
    </>
  )
}
