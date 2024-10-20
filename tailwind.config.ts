import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /bg-category-./,
    },
    {
      pattern: /text-category-./,
    },
    {
      pattern: /border-category-./,
    },
    {
      pattern: /button-./,
    },
    {
      pattern: /shape-./,
    },
  ],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: '430px',
        },
      },
      backgroundImage: {
        'shape-1': "url('/images/well/bg/well-bg-1.svg')",
        'shape-2': "url('/images/well/bg/well-bg-2.svg')",
        'shape-3': "url('/images/well/bg/well-bg-3.svg')",
        'shape-4': "url('/images/well/bg/well-bg-4.svg')",
        'shape-5': "url('/images/well/bg/well-bg-5.svg')",
        'shape-6': "url('/images/well/bg/well-bg-6.svg')",
        'shape-7': "url('/images/well/bg/well-bg-7.svg')",
        'shape-8': "url('/images/well/bg/well-bg-8.svg')",
        'shape-9': "url('/images/well/bg/well-bg-9.svg')",
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      boxShadow: {
        inner: 'inset 0 0 0 1px #00CE4C',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      fontSize: {
        caption: ['10px', { lineHeight: '14px' }],
        'caption-bold': ['10px', { lineHeight: '14px', fontWeight: 700 }],
        'body-sm': ['12px', { lineHeight: '18px' }],
        'body-sm-bold': ['12px', { lineHeight: '18px', fontWeight: 700 }],
        'body-md': ['14px', { lineHeight: '20px' }],
        'body-md-bold': ['14px', { lineHeight: '20px', fontWeight: 700 }],
        'body-lg': ['16px', { lineHeight: '24px' }],
        'body-lg-bold': ['16px', { lineHeight: '24px', fontWeight: 700 }],
        'body-xl': ['18px', { lineHeight: '28px' }],
        'body-xl-bold': ['18px', { lineHeight: '28px', fontWeight: 700 }],
        'title-lg': ['20px', { lineHeight: '30px' }],
        'title-lg-bold': ['20px', { lineHeight: '30px', fontWeight: 700 }],
        'title-xl': ['24px', { lineHeight: '34px' }],
        'title-xl-bold': ['24px', { lineHeight: '34px', fontWeight: 700 }],
        'heading-md': [
          '34px',
          { lineHeight: '48px', letterSpacing: '0.4px', fontWeight: 400 },
        ],
        'heading-md-bold': [
          '34px',
          { lineHeight: '48px', letterSpacing: '0.4px', fontWeight: 700 },
        ],
        'heading-lg': ['48px', { lineHeight: '64px', fontWeight: 400 }],
        'heading-lg-bold': ['48px', { lineHeight: '64px', fontWeight: 700 }],
        'heading-xl': ['60px', { lineHeight: '78px', fontWeight: 400 }],
        'heading-xl-bold': ['60px', { lineHeight: '78px', fontWeight: 700 }],
      },
      colors: {
        main: '#00CE4C',
        main_bright: '#A1FF56',
        main_hightlight: '#A0FF56',
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
        category: {
          bg: {
            religion: '#FE2F2F',
            art: '#FE49A9',
            cartoon: '#FF8BCA',
            humanities: '#B85FFF',
            novel: '#CAA2FF',
            foreign_languages: '#92666C',
            self_development: '#FB7A35',
            sociology: '#FFA144',
            science: '#4D6FF4',
            it: '#84ADFF',
            economic_business: '#6BCEF5',
            life: '#75F3C9',
            travel: '#00CE4C',
            essay: '#A0FF56',
            etc: '#FFDA4A',
          },
          text: {
            religion: '#FABBC8',
            art: '#FFB5DC',
            cartoon: '#AE4039',
            humanities: '#F3B3EE',
            novel: '#6C5A84',
            foreign_language: '#FFC5CC',
            self_developement: '#FFC8AB',
            sociology: '#FFDDBB',
            science: '#BBC4E9',
            it: '#3C4F77',
            economic_business: '#0073A0',
            life: '#00754E',
            travel: '#00722A',
            essay: '#419400',
            etc: '#A78500',
          },
          band: {
            religion: '#FF7171',
            art: '#FF7CC2',
            cartoon: '#FFADDA',
            humanities: '#D095FF',
            novel: '#D9BBFF',
            foreign_language: '#B78E93',
            self_developement: '#FFA474',
            sociology: '#FFC183',
            science: '#9BACF1',
            it: '#AAC7FF',
            economic_business: '#9DE3FF',
            life: '#B0FFE5',
            travel: '#6EED9C',
            essay: '#CAFFA0',
            etc: '#FFE88C',
          },
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
