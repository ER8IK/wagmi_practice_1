/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
};

module.exports = nextConfig;

// This file is used to configure Next.js settings, such as enabling React strict mode and modifying the Webpack configuration.
