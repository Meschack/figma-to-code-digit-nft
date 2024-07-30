import localFont from 'next/font/local'

export const raleway = localFont({
  src: [
    {
      path: './raleway/raleway-regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './raleway/raleway-medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './raleway/raleway-semiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './raleway/raleway-bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-raleway'
})
