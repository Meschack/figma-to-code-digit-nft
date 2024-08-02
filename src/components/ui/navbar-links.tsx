import { links } from '@/data/navbar-links'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ComponentProps } from 'react'

interface NavbarLinksProps extends ComponentProps<'ul'> {
  onLinkClick?(): void
}

export const NavbarLinks = ({ className, onLinkClick }: NavbarLinksProps) => (
  <ul
    className={cn(
      'flex items-center gap-7 text-base font-semibold text-neutral-700',
      className
    )}
  >
    {links.map((link) => (
      <li key={link.path} onClick={onLinkClick}>
        <Link href={link.path}>{link.label}</Link>
      </li>
    ))}
  </ul>
)
