import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'div'> {}

export const NavbarActions = ({ className }: Props) => (
  <div className={cn('hidden items-center gap-5 xl:flex', className)}>
    <button className='border-e-2 border-neutral-800 px-6.5 py-1'>
      Sign up
    </button>

    <button className='rounded-42 bg-neutral-800 px-6.5 py-2.5 text-base font-semibold text-white'>
      Connect Wallet
    </button>
  </div>
)
