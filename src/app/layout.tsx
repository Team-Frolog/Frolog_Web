import localFont from 'next/font/local';
import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider';
import QueryProvider from '@/providers/QueryProvider';
import GAProvider from '@/providers/GAProvider';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import SessionHandler from '@/providers/SessionHandler';
import { metadata } from '@/data/metadata';

export { metadata };

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='ko'>
      <QueryProvider>
        <ThemeProvider />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GAProvider gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <NextAuthProvider>
          <SessionHandler session={session} />
          <body
            className={`${pretendard.variable} ${pretendard.className} text-gray-800`}
          >
            <div id='root'>{children}</div>
            <div id='portal' />
            <div id='toast-root' />
          </body>
        </NextAuthProvider>
      </QueryProvider>
    </html>
  );
}
