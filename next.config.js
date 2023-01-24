const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: isProd ? '/pokerious-power-number' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
