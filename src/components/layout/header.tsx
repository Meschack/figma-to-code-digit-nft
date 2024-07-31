import Link from 'next/link'
import { Wrapper } from '../wrapper'
import { Logo } from '../ui/logo'
import Image from 'next/image'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Top sales', path: '/top-sales' },
  { label: 'Collections', path: '/collections' },
  { label: 'Our blog', path: '/blog' },
  { label: 'About', path: '/about' }
]

import menuBarIcon from '@@/menu-bar.svg'

export const Header = () => {
  return (
    <header className='border-b border-neutral-50 py-4'>
      <Wrapper className='flex items-center justify-between py-4'>
        <Logo />

        <nav className='hidden lg:block'>
          <ul className='flex items-center gap-7 text-base font-semibold text-neutral-700'>
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden items-center gap-5 lg:flex'>
          <button className='border-e-2 border-neutral-800 px-6.5 py-1'>
            Sign up
          </button>

          <button className='rounded-42 bg-neutral-800 px-6.5 py-2.5 text-base font-semibold text-white'>
            Connect Wallet
          </button>
        </div>

        <button className='rounded-lg border bg-neutral-50 p-2 lg:hidden'>
          <Image
            src={menuBarIcon}
            alt='Déclencheur du menu de navigation sur mobile'
          />
        </button>
      </Wrapper>
    </header>
  )
}
