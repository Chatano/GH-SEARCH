import type { Config } from 'tailwindcss'
import COLORS from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'animated-gradient': `linear-gradient(145deg, ${COLORS.sky[950]}, ${COLORS.slate[950]})`,
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        slideUpAndFadeIn: 'slideUpAndFadeIn 0.7s ease-out',
      },
      keyframes: {
        slideUpAndFadeIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
