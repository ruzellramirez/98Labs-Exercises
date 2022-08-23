/** @type {import('next').NextConfig} */
const nextConfig = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

module.exports = nextConfig;
