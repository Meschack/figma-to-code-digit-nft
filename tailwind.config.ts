import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner-background.png')"
      },
      fontFamily: {
        raleway: ['var(--font-raleway)']
      },
      fontSize: {
        base: ['16px', '24px'],
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
        }
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        32: '32px',
        42: '42px'
      },
      spacing: {
        6.5: '26px',
        18: '72px'
      }
    }
  },
  plugins: []
}
export default config
