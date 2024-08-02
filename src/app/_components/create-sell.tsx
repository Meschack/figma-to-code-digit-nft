import { StepCard } from '@/components/ui/step-card'
import { Wrapper } from '@/components/ui/wrapper'
import { steps } from '@/data/steps'

export const CreateAndSell = () => {
  return (
    <Wrapper className='space-y-9' id='about'>
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
