const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
  target: 'serverless',
  pageExtensions: ['page.tsx'],
  webpack: config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];
    return config;
  },
  env: {
    NOW_ENV: process.env.NOW_ENV,
  },
};

module.exports = nextConfig;
