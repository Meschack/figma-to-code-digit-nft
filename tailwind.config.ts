import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: { banner: "url('/images/banner-background.webp')" },
      fontFamily: { raleway: ['var(--font-raleway)'] },
      fontSize: {
        base: ['16px', '24px'],
        'base-title': ['52px', '82px'],
        'middle-title': ['96px', '82px'],
        'big-title': ['120px', '108px'],
        28: ['28px', '40px'],
        46: ['46px', '40px'],
        '6xl': ['64px', '40px']
      },
      colors: {
        neutral: {
          50: '#E8E9EA',
          100: '#B8BABE',
          200: '#96989E',
          300: '#666A72',
          400: '#484D56',
          500: '#1A202C',
          600: '#181D28',
          700: '#12171F',
          800: '#0E1218',
          900: '#0B0D12'
        },
        navbar: '#F8F8F8'
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        32: '32px',
        42: '42px',
        184: '184px'
      },
      spacing: {
        4.5: '18px',
        6.5: '26px',
        18: '72px',
        13: '52px'
      },
      maxWidth: { vw: '100vw' },
      width: { 'hero-image': '287.58px' },
      aspectRatio: { 'hero-image': '287.58/442.29' },
      scale: { 102: '1.02' }
    }
  }
}
export default config
