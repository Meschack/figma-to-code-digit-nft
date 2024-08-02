'use client'

import Image from 'next/image'
import menuBarIcon from '@@/icons/menu-bar.svg'
import closeIcon from '@@/icons/close.svg'
import { useState } from 'react'
import { NavbarLinks } from './navbar-links'
import { NavbarActions } from './navbar-actions'
import { cn } from '@/lib/utils'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const triggerMenu = () => setOpen((prev) => !prev)

  return (
    <div className='xl:hidden'>
      <button
        className='rounded-lg border bg-neutral-50 p-2'
        onClick={triggerMenu}
      >
        <Image
          src={menuBarIcon}
          alt='Déclencheur du menu de navigation sur mobile'
        />
      </button>

      <div
        className={cn(
          'fixed inset-0 z-10 h-full bg-navbar transition-all duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='mx-6.5 my-3 h-full space-y-16 border-r md:mx-13'>
          <div className='py-2'>
            <button
              onClick={triggerMenu}
              className='ml-auto block w-fit rounded-lg bg-neutral-50 p-2'
            >
              <Image src={closeIcon} alt='Close icon' />
              <span className='sr-only'>Close menu bar</span>
            </button>
          </div>

          <nav>
            <NavbarLinks
              onLinkClick={triggerMenu}
              className='flex-col items-start'
            />
          </nav>

          <NavbarActions className='flex' />
        </div>
      </div>
    </div>
  )
}
