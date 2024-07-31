import { Wrapper } from '@/components/wrapper'
import Image, { StaticImageData } from 'next/image'

import wallet from '@@/wallet.svg'
import saleTag from '@@/sale-tag.svg'
import cloudDownload from '@@/cloud-download.svg'
import bitcoinEllipse from '@@/bitcoin-ellipse.svg'

interface Step {
  icon: StaticImageData
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: wallet,
    title: 'Set up your wallet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    icon: saleTag,
    title: 'Add your NFT’s',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    icon: cloudDownload,
    title: 'Promote your NFT’s',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    icon: bitcoinEllipse,
    title: 'Sell your NFT’s',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  }
]

const StepCard = ({ step }: { step: Step }) => {
  return (
    <div className='space-y-2.5 rounded-3xl bg-neutral-50 p-6'>
      <div className='w-fit rounded-lg bg-neutral-600 p-3.5'>
        <Image src={step.icon} alt='Icon' width={30} height={30} />
      </div>

      <h3 className='text-xl font-bold text-neutral-800'>{step.title}</h3>

      <p className='text-neutral-400'>{step.description}</p>
    </div>
  )
}

export const CreateAndSell = () => {
  return (
    <Wrapper className='space-y-9'>
      <h2 className='text-3xl font-bold text-neutral-800'>
        Create and Sell Now
      </h2>

      <div className='grid gap-6 px-6.5 md:grid-cols-2 md:px-11 xl:grid-cols-4 xl:px-0'>
        {steps.map((step) => (
          <StepCard step={step} key={step.title} />
        ))}
      </div>
    </Wrapper>
  )
}
