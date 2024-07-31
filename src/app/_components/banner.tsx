import { Wrapper } from '@/components/wrapper'

// TODO: Revoir la luminosité du background

export const Banner = () => {
  return (
    <Wrapper className='space-y-10 bg-banner bg-cover bg-center rounded-32 py-18 flex flex-col items-center'>
      <h2 className='font-medium text-6xl text-white'>
        Build your NFT profile
      </h2>

      <p className='text-xl font-semibold text-white'>
        Join almost 10k NFT profiles on Digit !
      </p>

      <button className='bg-white text-neutral-800 text-base font-semibold rounded-42 py-3.5 px-6.5'>
        Sign up now
      </button>
    </Wrapper>
  )
}
