import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      fontSize: {
        caption: ['10px', { lineHeight: '14px' }],
        sm: ['12px', { lineHeight: '18px' }],
        md: ['14px', { lineHeight: '20px' }],
        lg: ['16px', { lineHeight: '24px' }],
        xl: ['18px', { lineHeight: '28px' }],
        title_lg: ['18px', { lineHeight: '28px' }],
        title_xl: ['24px', { lineHeight: '34px' }],
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
        white: '#FFFFFF',
        error: '#FF6464',
        error_bg: '#FFF1F1',
        gray: {
          200: '#F5F6F9',
          300: '#EDEFF4',
          400: '#E0E1E9',
          500: '#B3B6C5',
          600: '#727484',
          700: '#4F505C',
          800: '#25262A',
          900: '#0E0E0E',
        },
      },
      fontWeight: {
        base: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
export default config;
