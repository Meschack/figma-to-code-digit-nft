import Image from 'next/image'
import logo from '@@/icons/logo.svg'
import Link from 'next/link'

export const Logo = () => (
  <Link href='/'>
    <Image src={logo} alt='Illustration de globe' width={36} height={36} />
  </Link>
)
