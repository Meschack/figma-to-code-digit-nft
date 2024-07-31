import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ className, children, ...rest }: Props) => (
  <div
    className={cn('xl:!max-w-[1200px] md:!max-w-[676px] mx-auto', className)}
    {...rest}
  >
    {children}
  </div>
)
