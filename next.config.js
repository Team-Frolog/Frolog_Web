const prod = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: prod ? false : true,
});
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    middleware: true,
    scrollRestoration: true,
  },
  webpack: (config, context) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (context?.isServer) {
      config.resolve.alias['msw/browser'] = false;
    } else {
      config.resolve.alias['msw/node'] = false;
    }

    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);

module.exports = withSentryConfig(module.exports, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
});
