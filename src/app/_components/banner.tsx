import { Wrapper } from '@/components/ui/wrapper'

// TODO: Revoir la luminosité du background

export const Banner = () => {
  return (
    <Wrapper className='overflow-hidden rounded-32 bg-banner bg-cover bg-center'>
      <div className='flex flex-col items-center space-y-10 bg-neutral-800/60 py-18'>
        <h2 className='text-center text-28 font-medium text-white md:text-46 xl:text-6xl'>
          Build your NFT profile
        </h2>

        <p className='text-xs font-semibold text-white md:text-lg xl:text-xl'>
          Join almost 10k NFT profiles on Digit !
        </p>

        <button className='rounded-42 bg-white px-6.5 py-3.5 text-base font-semibold text-neutral-800'>
          Sign up now
        </button>
      </div>
    </Wrapper>
  )
}
