const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.frolog.kr;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    connect-src 'self' https://frolog.kr https://*.frolog.kr;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    middleware: true,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: cspHeader.replace(/\n/g, ''),
  //         },
  //       ],
  //     },
  //   ];
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['images.frolog.kr'],
  },
};

module.exports = nextConfig;

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(module.exports, {
  org: 'frolog',
  project: 'frolog-web',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
});
