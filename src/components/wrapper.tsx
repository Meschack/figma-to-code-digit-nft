import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ className, children, ...rest }: Props) => (
  <div className={cn('max-w-screen-xl mx-auto', className)} {...rest}>
    {children}
  </div>
)
