import { Banner } from './_components/banner'
import { Collections } from './_components/collections'
import { CreateAndSell } from './_components/create-sell'
import { HeroSection } from './_components/hero-section'

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
