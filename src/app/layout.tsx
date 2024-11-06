import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import AuthProvider from '@/providers/AuthProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import QueryProvider from '@/providers/QueryProvider';
import GAProvider from '@/providers/GAProvider';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 프롤로그',
    default: 'Frolog | 프롤로그',
  },
  applicationName: 'Frolog',
  creator: 'Team Frolog',
  description: '책을 추가해 우물을 탈출하는 독서 기록 플랫폼, 프롤로그(Frolog)',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: {
      template: '%s | 프롤로그',
      default: 'Frolog | 프롤로그',
    },
    description:
      '책을 추가해 우물을 탈출하는 독서 기록 서비스, 프롤로그(Frolog)',
    url: 'https://frolog.kr',
    siteName: 'Frolog',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'Frolog',
    creator: 'Team Frolog',
    title: {
      template: '%s | 프롤로그',
      default: 'Frolog | 프롤로그',
    },
    description:
      '책을 추가해 우물을 탈출하는 독서 기록 서비스, 프롤로그(Frolog)',
  },
  verification: {
    google: 'f35-rdvgbbgvYjNJjFBfFU91fnG8bsUyDcfgpz0M8R8',
  },
  other: {
    'naver-site-verification': 'dba81646f24c6216c666bf9b6aa3e37e0f77a2b8',
  },
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no viewport-fit=cover',
  appleWebApp: {
    capable: true,
    title: '프롤로그',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/logo/favicon.ico',
    apple: '/logo/apple-touch-icon-120x120x.png',
    other: [
      {
        url: '/splash/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
        media:
          'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_11__iPhone_XR_portrait.png',
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
        media:
          'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_16_Pro_portrait.png',
        media:
          'screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
        media:
          'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png',
        media:
          'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
        media:
          'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
        media:
          'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_16_Pro_Max_portrait.png',
        media:
          'screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
        media:
          'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
      {
        url: '/splash/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
        media:
          'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        rel: 'apple-touch-startup-image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <QueryProvider>
        <ThemeProvider />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GAProvider gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <AuthProvider>
          <body
            className={`${pretendard.variable} ${pretendard.className} text-gray-800`}
          >
            <div id='root'>{children}</div>
            <div id='portal' />
            <div id='toast-root' />
          </body>
        </AuthProvider>
      </QueryProvider>
    </html>
  );
}
