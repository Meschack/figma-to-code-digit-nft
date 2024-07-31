import localFont from 'next/font/local'

export const raleway = localFont({
  src: [
    {
      path: './raleway/raleway-regular.ttf',
      weight: '400'
    },
    {
      path: './raleway/raleway-medium.ttf',
      weight: '500'
    },
    {
      path: './raleway/raleway-semibold.ttf',
      weight: '600'
    },
    {
      path: './raleway/raleway-bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-raleway',
  preload: true
})
