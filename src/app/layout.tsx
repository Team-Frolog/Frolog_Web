import localFont from 'next/font/local';
import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider';
import QueryProvider from '@/providers/QueryProvider';
import GAProvider from '@/providers/GAProvider';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import SessionHandler from '@/providers/SessionHandler';
import { metadata } from '@/data/metadata';
import Script from 'next/script';

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
      <head>
        <Script
          id='gtm-script'
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />
      </head>
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
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            <div id='root'>{children}</div>
            <div id='portal' />
            <div id='toast-root' />
          </body>
        </NextAuthProvider>
      </QueryProvider>
    </html>
  );
}
