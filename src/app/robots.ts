import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/profile/', '/store/', '/well/', '/quit', '/terms/'],
      },
    ],
    sitemap: 'https://frolog.kr/sitemap.xml',
  };
}
