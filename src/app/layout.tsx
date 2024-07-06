import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import AuthProvider from '@/providers/AuthProvider';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='kr' className={`${pretendard.variable}`}>
      <AuthProvider>
        <body className={`${pretendard.className} text-white`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
