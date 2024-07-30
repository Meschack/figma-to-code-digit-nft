import Image from 'next/image'
import logo from '@@/logo.svg'

export const Logo = () => (
  <Image src={logo} alt='Illustration de globe' width={36} height={36} />
)
