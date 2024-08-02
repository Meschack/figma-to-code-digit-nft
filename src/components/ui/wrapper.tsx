import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ className, children, ...rest }: Props) => (
  <div
    className={cn(
      'mx-auto max-w-[calc(100vw-40px)] md:max-w-[676px] xl:max-w-[1200px]',
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
