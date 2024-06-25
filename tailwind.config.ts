import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: '430px',
        },
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      fontSize: {
        caption: ['10px', { lineHeight: '14px' }],
        caption_bold: ['10px', { lineHeight: '14px', fontWeight: 700 }],
        body_sm: ['12px', { lineHeight: '18px' }],
        body_md: ['14px', { lineHeight: '20px' }],
        body_lg: ['16px', { lineHeight: '24px' }],
        body_lg_bold: ['16px', { lineHeight: '24px', fontWeight: 700 }],
        body_xl: ['18px', { lineHeight: '28px' }],
        body_xl_bold: ['18px', { lineHeight: '28px', fontWeight: 700 }],
        title_lg: ['18px', { lineHeight: '28px' }],
        title_lg_bold: ['18px', { lineHeight: '28px', fontWeight: 700 }],
        title_xl: ['24px', { lineHeight: '34px' }],
        title_xl_bold: ['24px', { lineHeight: '34px', fontWeight: 700 }],
        h_md: [
          '34px',
          { lineHeight: '48px', letterSpacing: '0.4px', fontWeight: 400 },
        ],
        h_md_bold: [
          '34px',
          { lineHeight: '48px', letterSpacing: '0.4px', fontWeight: 700 },
        ],
        h_lg: ['48px', { lineHeight: '64px', fontWeight: 400 }],
        h_lg_bold: ['48px', { lineHeight: '64px', fontWeight: 700 }],
        h_xl: ['60px', { lineHeight: '78px', fontWeight: 400 }],
        h_xl_bold: ['60px', { lineHeight: '78px', fontWeight: 700 }],
      },
      colors: {
        main: '#00CE4C',
        main_bright: '#A1FF56',
        main_bg: 'rgba(0, 206, 76, 0.10)',
        white: '#FFFFFF',
        error: '#FF6464',
        error_bg: '#FF64644D',
        error_bg_light: 'rgba(255, 100, 100, 0.10)',
        gray: {
          200: '#F5F6F9',
          300: '#EDEFF4',
          400: '#E0E1E9',
          500: '#B3B6C5',
          600: '#727484',
          700: '#4F505C',
          800: '#313239',
          900: '#0E0E0E',
        },
      },
      fontWeight: {
        base: '400',
        bold: '700',
      },
      spacing: {
        page: '24px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
