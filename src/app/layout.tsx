import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import AuthProvider from '@/providers/AuthProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import QueryProvider from '@/providers/QueryProvider';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Frolog | 프롤로그',
  description: '책을 추가해 우물을 탈출하는 독서 기록 서비스, 프롤로그(Frolog)',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no viewport-fit=cover',
  icons: {
    icon: '/logo/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
      </head>
      <QueryProvider>
        <ThemeProvider />
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
