import { Step } from '@/types/steps'
import Image from 'next/image'

export const StepCard = ({ step }: { step: Step }) => (
  <div className='space-y-2.5 rounded-3xl bg-neutral-50 p-6 transition-all duration-300 hover:scale-102'>
    <div className='w-fit rounded-lg bg-neutral-600 p-3.5'>
      <Image src={step.icon} alt='Icon' width={30} height={30} />
    </div>

    <h3 className='text-xl font-bold text-neutral-800'>{step.title}</h3>

    <p className='text-neutral-400'>{step.description}</p>
  </div>
)
