import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#0E0E0E',
    background_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    lang: 'ko-KR',
    name: '프롤로그',
    short_name: '프롤로그',
    description:
      '책을 추가해 우물을 탈출하는 독서 기록 서비스, 프롤로그(Frolog)',
    icons: [
      {
        src: '/logo/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/logo/favicon-196x196.png',
        sizes: '196x196',
        type: 'image/png',
      },
      {
        src: '/logo/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/logo/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo/favicon-196x196.png',
        sizes: '196x196',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
