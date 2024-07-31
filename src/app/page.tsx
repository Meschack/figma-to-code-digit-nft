import { Banner } from './_components/banner'
import { Collections } from './_components/collections'
import { CreateAndSell } from './_components/create-sell'

export default function Home() {
  return (
    <>
      <Collections />
      <CreateAndSell />
      <Banner />
    </>
  )
}
