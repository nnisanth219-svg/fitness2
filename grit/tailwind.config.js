/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0F0F23',
          light: '#1A1A2E',
          deep: '#090915',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          dark: '#E55555',
        },
        lavender: {
          DEFAULT: '#A78BFA',
          dark: '#8B5CF6',
        },
        mist: {
          DEFAULT: '#F8FAFC',
          dim: 'rgba(248, 250, 252, 0.7)',
          faint: 'rgba(248, 250, 252, 0.15)',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        breathe: 'breathe 4s ease-in-out infinite',
        marquee: 'marqueeScroll 28s linear infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        marqueeScroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};