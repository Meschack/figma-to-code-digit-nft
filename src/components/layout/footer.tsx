import Link from 'next/link'
import { Logo } from '../ui/logo'
import { Wrapper } from '../wrapper'

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

        <div className='flex items-center justify-between py-8 border-t border-neutral-50'>
          <p className='font-semibold text-2xl text-neutral-600'>
            Create Explore & Collect Digital NFTs
          </p>

          <nav>
            <ul className='flex items-center gap-7 font-semibold text-sm text-black capitalize'>
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
