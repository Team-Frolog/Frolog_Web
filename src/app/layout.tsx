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
  description: 'Web site created with Next.js.',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  icons: {
    icon: '/logo-symbol.svg',
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
