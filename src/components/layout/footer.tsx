import Link from 'next/link'
import { Logo } from '../ui/logo'
import { Wrapper } from '../ui/wrapper'

const links = [
  { label: 'Privacy', path: '/privacy' },
  { label: 'Terms & conditions', path: '/terms-and-conditions' },
  { label: 'About', path: '/about' }
]

export const Footer = () => {
  return (
    <footer>
      <Wrapper className='space-y-3.5'>
        <Logo />

        <div className='flex flex-col items-start justify-between gap-4 border-t border-neutral-50 py-8 xl:flex-row xl:items-center'>
          <p className='text-2xl font-semibold text-neutral-600'>
            Create Explore & Collect Digital NFTs
          </p>

          <nav className='mx-auto md:ml-0 xl:mr-0'>
            <ul className='flex items-center gap-7 text-sm font-semibold capitalize text-black'>
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </footer>
  )
}
