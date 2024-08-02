import { Wrapper } from '../ui/wrapper'
import { Logo } from '../ui/logo'
import { MobileMenu } from '../ui/mobile-menu'
import { NavbarLinks } from '../ui/navbar-links'
import { NavbarActions } from '../ui/navbar-actions'

export const Header = () => {
  return (
    <header className='border-b border-neutral-50 py-4'>
      <Wrapper className='flex items-center justify-between border-l py-4'>
        <Logo />

        <nav className='hidden xl:block'>
          <NavbarLinks />
        </nav>

        <NavbarActions />

        <MobileMenu />
      </Wrapper>
    </header>
  )
}
